import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initGame,
  makeMove,
  nextRound,
  quitGame,
  resetGame,
  resetMove,
  setSequence,
} from 'domains/game/data/store/actions';
import {
  getAttemptsLeft,
  getCurrentSequence,
  getGameLevel,
  getHasQuit,
  getIsGameOver,
  getPlayerSequence,
  getRightSequences,
  getScore,
  getSpeed,
} from 'domains/game/data/store/selectors';
import type { NextRoundAction, SetSequenceAction } from 'domains/game/data/store/types';
import { getRandomSequence, validateMove } from 'domains/game/data/modules/Sequence';
import { getSignByNumber } from 'domains/game/data/modules/Sign';
import { useIsMounted } from 'helpers/useIsMounted';
import { getId } from 'helpers/getId';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { ROUND_OVER_EVENT } from 'domains/game/data/modules/Timing/constants';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const useGame = () => {
  // TODO: consider remove, if not helping with render issue
  const isMounted = useIsMounted();

  const { currentAttempts, currentPoolSize } = useConfig();

  const attemptsLeft = useSelector(getAttemptsLeft);
  const currentSequence = useSelector(getCurrentSequence);
  const hasQuit = useSelector(getHasQuit);
  const isGameOver = useSelector(getIsGameOver);
  const level = useSelector(getGameLevel);
  const playerSequence = useSelector(getPlayerSequence);
  const rightSequences = useSelector(getRightSequences);
  const score = useSelector(getScore);
  const speed = useSelector(getSpeed);

  const dispatch = useDispatch();

  const init = () => {
    Conductor.init(currentPoolSize);
    dispatch(initGame({ attempts: currentAttempts }));
  };

  const reset = () => {
    Conductor.stop();
    dispatch(resetGame());
  };

  const quit = () => {
    dispatch(quitGame());
  };

  const addPlayerMove = (id: number) => {
    const move = validateMove(currentSequence, playerSequence, id);

    if (move === 'GOOD') {
      const sign = getSignByNumber(id);
      dispatch(makeMove({ sign }));
    } else if (move === 'BAD') {
      dispatch(resetMove());
      Conductor.setFail();
      Conductor.twinkleSequence(currentSequence, speed);
    }
  };

  const addSequence = (payload: SetSequenceAction) => dispatch(setSequence(payload));

  const setNextRound = (payload: NextRoundAction) => dispatch(nextRound(payload));

  const start = () => {
    init();
    addSequence({ sequence: getRandomSequence(currentPoolSize) });
  };

  useEffect(() => {
    if (!isGameOver) Conductor.twinkleSequence(currentSequence, speed);
  }, [currentSequence, isGameOver]);

  useEffect(() => {
    if (playerSequence.length > 0 && playerSequence.length === currentSequence.length) {
      setNextRound({ sequence: getRandomSequence(currentPoolSize) });
      Conductor.resetTimer();
    }
  }, [playerSequence]);

  useEffect(() => {
    const id = getId();

    if (isMounted) {
      start();

      Conductor.on(ROUND_OVER_EVENT, id, () => {
        dispatch(resetMove());
        addSequence({ sequence: getRandomSequence(currentPoolSize) });
      });
    }

    return () => {
      reset();
      Conductor.off(id);
    };
  }, []);

  return {
    addPlayerMove,
    attemptsLeft,
    currentSequence,
    hasQuit,
    isGameOver,
    level,
    playerSequence,
    quit,
    rightSequences,
    score,
    speed,
    start,
  };
};
