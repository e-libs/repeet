import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initGame,
  makeMove,
  resetGame,
  resetMove,
  setAttempts,
  setSequence,
} from 'domains/game/data/store/actions';
import {
  getAttemptsLeft,
  getGameLevel,
  getCurrentSequence,
  getPlayerSequence,
} from 'domains/game/data/store/selectors';
import type { SetSequenceAction } from 'domains/game/data/store/types';
import { getRandomSequence, validateMove } from 'domains/game/data/modules/Sequence';
import { getSignByNumber } from 'domains/game/data/modules/Sign';

export const useGame = () => {
  const level = useSelector(getGameLevel);
  const currentSequence = useSelector(getCurrentSequence);
  const playerSequence = useSelector(getPlayerSequence);
  const attemptsLeft = useSelector(getAttemptsLeft);

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

  useEffect(() => {
    if (attemptsLeft === 0) {
      console.log('GAME OVER');
      // TODO: finish game attempts
    }
  }, [attemptsLeft]);

  useEffect(() => {
    start();
    addSequence({ sequence: getRandomSequence() });

    return () => {
      reset();
    };
  }, []);

  return {
    addPlayerMove,
    attemptsLeft,
    currentSequence,
    level,
    playerSequence,
    start,
  };
};
