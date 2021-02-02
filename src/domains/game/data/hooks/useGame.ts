import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGame, resetGame, setSequence } from 'domains/game/data/store/actions';
import {
  getGameLevel,
  getCurrentSequence,
  getPlayerSequence,
} from 'domains/game/data/store/selectors';
import type { SetSequenceAction } from 'domains/game/data/store/types';
import { getRandomSequence, validateMove } from 'domains/game/data/modules/Sequence';

export const useGame = () => {
  const level = useSelector(getGameLevel);
  const currentSequence = useSelector(getCurrentSequence);
  const playerSequence = useSelector(getPlayerSequence);

  const dispatch = useDispatch();

  const start = () => dispatch(initGame());

  const reset = () => dispatch(resetGame());

  const addPlayerMove = (id: number) => {
    console.log('PLAYING', id);

    const move = validateMove(currentSequence, playerSequence, id);

    if (move === 'GOOD') {
      console.log('GOOD!');
    } else if (move === 'BAD') {
      console.log('BAD!');
    }
  };

  const addSequence = (payload: SetSequenceAction) => dispatch(setSequence(payload));

  useEffect(() => {
    start();
    // TODO: check consecutive calls
    addSequence({ sequence: getRandomSequence() });

    return () => {
      reset();
    };
  }, []);

  return {
    addPlayerMove,
    currentSequence,
    level,
    start,
  };
};
