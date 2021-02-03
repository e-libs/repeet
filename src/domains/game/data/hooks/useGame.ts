import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initGame,
  makeMove,
  resetGame,
  resetMove,
  setSequence,
} from 'domains/game/data/store/actions';
import {
  getAttemptsLeft,
  getCurrentSequence,
  getGameLevel,
  getIsGameOver,
  getPlayerSequence,
} from 'domains/game/data/store/selectors';
import type { SetSequenceAction } from 'domains/game/data/store/types';
import { getRandomSequence, validateMove } from 'domains/game/data/modules/Sequence';
import { getSignByNumber } from 'domains/game/data/modules/Sign';
import { useIsMounted } from 'helpers/useIsMounted';

export const useGame = () => {
  const isMounted = useIsMounted();
  const level = useSelector(getGameLevel);
  const currentSequence = useSelector(getCurrentSequence);
  const playerSequence = useSelector(getPlayerSequence);
  const attemptsLeft = useSelector(getAttemptsLeft);
  const isGameOver = useSelector(getIsGameOver);

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
    if (!isMounted) return;
    if (attemptsLeft === 0) {
      console.log('GAME OVER');
      // TODO: finish game attempts
    }
  }, [attemptsLeft]);

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
    start,
  };
};
