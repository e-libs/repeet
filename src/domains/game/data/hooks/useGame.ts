import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGame } from 'domains/game/data/store/actions';
import { getGameLevel } from 'domains/game/data/store/selectors';
import type { InitGameAction } from 'domains/game/data/store/types';

export const useGame = () => {
  const dispatch = useDispatch();

  const start = (payload: InitGameAction) => dispatch(initGame(payload));

  const level = useSelector(getGameLevel);

  useEffect(() => {
    start({ level: 1 });
  }, []);

  return {
    start,
    level,
  };
};
