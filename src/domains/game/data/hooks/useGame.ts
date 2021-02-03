import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initGame,
  makeMove,
  nextRound,
  resetGame,
  resetMove,
  setSequence,
} from 'domains/game/data/store/actions';
import {
  getAttemptsLeft,
  getCurrentSequence,
  getGameLevel,
  getIsGameOver,
  getRightSequences,
  getPlayerSequence,
} from 'domains/game/data/store/selectors';
import type { NextRoundAction, SetSequenceAction } from 'domains/game/data/store/types';
import { getRandomSequence, validateMove } from 'domains/game/data/modules/Sequence';
import { getSignByNumber } from 'domains/game/data/modules/Sign';
import { useIsMounted } from 'helpers/useIsMounted';

export const useGame = () => {
  // TODO: consider remove, if not helping with render issue
  const isMounted = useIsMounted();
  const attemptsLeft = useSelector(getAttemptsLeft);
  const currentSequence = useSelector(getCurrentSequence);
  const isGameOver = useSelector(getIsGameOver);
  const level = useSelector(getGameLevel);
  const playerSequence = useSelector(getPlayerSequence);
  const rightSequences = useSelector(getRightSequences);

  const dispatch = useDispatch();

  const start = () => dispatch(initGame());

  const reset = () => dispatch(resetGame());

  const addPlayerMove = (id: number) => {
    const move = validateMove(currentSequence, playerSequence, id);

    if (move === 'GOOD') {
      const sign = getSignByNumber(id);
      dispatch(makeMove({ sign }));
    } else if (move === 'BAD') {
      dispatch(resetMove());
    }
  };

  const addSequence = (payload: SetSequenceAction) => dispatch(setSequence(payload));

  const setNextRound = (payload: NextRoundAction) => dispatch(nextRound(payload));

  useEffect(() => {
    if (!isMounted) return;
    if (attemptsLeft === 0) {
      console.log('GAME OVER');
      // TODO: finish game attempts
    }
  }, [attemptsLeft]);

  useEffect(() => {
    if (playerSequence.length === currentSequence.length) {
      setNextRound({ sequence: getRandomSequence() });
    }
  }, [playerSequence]);

  useEffect(() => {
    if (isMounted) {
      start();
      addSequence({ sequence: getRandomSequence() });
    }

    return () => {
      reset();
    };
  }, []);

  return {
    addPlayerMove,
    attemptsLeft,
    currentSequence,
    isGameOver,
    level,
    playerSequence,
    rightSequences,
    start,
  };
};