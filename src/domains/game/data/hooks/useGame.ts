import { useDispatch, useSelector } from 'react-redux';
import { initGame } from 'domains/game/data/store/actions';
import { getGameStatus } from 'domains/game/data/store/selectors';
import type { InitGameAction } from 'domains/game/data/store/types';

export const useGame = () => {
  const dispatch = useDispatch();

  const start = (payload: InitGameAction) => dispatch(initGame(payload));

  const status = useSelector(getGameStatus);

  return {
    start,
    status,
  };
};
