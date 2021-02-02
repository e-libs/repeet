import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGame, resetGame, setSequence } from 'domains/game/data/store/actions';
import { getGameLevel, getCurrentSequence } from 'domains/game/data/store/selectors';
import type { SetSequenceAction } from 'domains/game/data/store/types';
import { getRandomSequence } from 'domains/game/data/modules/Sequence';

export const useGame = () => {
  const dispatch = useDispatch();

  const start = () => dispatch(initGame());

  const reset = () => dispatch(resetGame());

  const addSequence = (payload: SetSequenceAction) => dispatch(setSequence(payload));

  const level = useSelector(getGameLevel);
  const currentSequence = useSelector(getCurrentSequence);

  useEffect(() => {
    start();
    // TODO: check consecutive calls
    addSequence({ sequence: getRandomSequence() });

    return () => {
      reset();
    };
  }, []);

  return {
    currentSequence,
    level,
    start,
  };
};
