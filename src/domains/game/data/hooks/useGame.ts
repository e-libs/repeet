import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutput } from 'app/config/logOutput';
import {
  increaseScore,
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
import type { NextRoundAction } from 'domains/game/data/store/types';
import {
  getRandomSequence,
  getShuffleSequence,
  validateMove,
} from 'domains/game/data/modules/Sequence';
import { getSignByNumber } from 'domains/game/data/modules/Sign';
import { Conductor } from 'domains/game/data/modules/Timing/Conductor';
import { ROUND_OVER_EVENT, roundDelay } from 'domains/game/data/modules/Timing/constants';
import { useConfig } from 'domains/config/data/hooks/useConfig';
import { useIsMounted } from 'helpers/useIsMounted';
import { getId } from 'helpers/getId';

export const useGame = () => {
  const isMounted = useIsMounted();

  const { currentDifficulty, currentSpeed, currentPool, currentPoolSize, isShuffle } = useConfig();

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
    dispatch(
      initGame({
        difficulty: currentDifficulty,
        speed: currentSpeed,
      }),
    );
  };

  const reset = () => {
    Conductor.stop();
    dispatch(resetGame());
  };

  const quit = () => {
    dispatch(quitGame());
  };

  const delayTwinkleSequence = () => {
    setTimeout(() => Conductor.twinkleSequence(currentSequence, speed), speed);
  };

  const addPlayerMove = (id: number) => {
    const move = validateMove(currentSequence, playerSequence, id);

    if (move === 'GOOD') {
      const sign = getSignByNumber(id);
      dispatch(makeMove({ sign }));
    } else if (move === 'BAD') {
      dispatch(resetMove());
      Conductor.setFail();
      if (attemptsLeft > 1) {
        delayTwinkleSequence();
      }
    }
  };

  const getSequencePayload = () => ({
    sequence: getRandomSequence(currentPoolSize),
    sequenceDisplay: isShuffle ? getShuffleSequence(currentPoolSize) : currentPool,
  });

  const addSequence = () => {
    dispatch(setSequence(getSequencePayload()));
  };

  const setNextRound = (payload: NextRoundAction) => dispatch(nextRound(payload));

  const start = () => {
    if (!isMounted) return;
    init();
    addSequence();
  };

  const finishRound = () => {
    Conductor.resetTimer();
    dispatch(increaseScore());
    setTimeout(() => setNextRound(getSequencePayload()), roundDelay);
  };

  useEffect(() => {
    if (!isGameOver) delayTwinkleSequence();

    logOutput('CURRENT', currentSequence, speed, score, level, rightSequences, attemptsLeft);
  }, [currentSequence, isGameOver]);

  useEffect(() => {
    if (playerSequence.length > 0 && playerSequence.length === currentSequence.length) {
      finishRound();
    }
  }, [playerSequence]);

  useEffect(() => {
    const id = getId();

    setTimeout(() => start(), roundDelay);

    Conductor.on(ROUND_OVER_EVENT, id, () => {
      if (!isMounted) return;

      dispatch(resetMove());
      addSequence();
    });

    return () => {
      reset();
      Conductor.off(id);
    };
  }, []);

  return {
    addPlayerMove,
    hasQuit,
    isGameOver,
    quit,
    reset,
  };
};
