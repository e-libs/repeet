import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'domains/game/data/store/selectors';
import { startGame as startGameAction } from 'domains/game/data/store/actions';

export const useStatus = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const startGame = () => dispatch(startGameAction());

  return {
    isLoading,
    startGame,
  };
};
