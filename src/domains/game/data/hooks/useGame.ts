import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGame, makeMove, resetGame, setSequence } from 'domains/game/data/store/actions';
import {
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

  const dispatch = useDispatch();

  const start = () => dispatch(initGame());

  const reset = () => dispatch(resetGame());

  const addPlayerMove = (id: number) => {
    console.log('PLAYING', id);

    const move = validateMove(currentSequence, playerSequence, id);

    console.log(move);
    if (move === 'GOOD') {
      const sign = getSignByNumber(id);
      dispatch(makeMove({ sign }));
    } else if (move === 'BAD') {
      // do something
    }
  };

  const addSequence = (payload: SetSequenceAction) => dispatch(setSequence(payload));

  useEffect(() => {
    start();
    addSequence({ sequence: getRandomSequence() });

    return () => {
      reset();
    };
  }, []);

  return {
    addPlayerMove,
    currentSequence,
    level,
    playerSequence,
    start,
  };
};
