import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'domains/game/data/store/selectors';
import { startGame as startGameAction } from 'domains/game/data/store/actions';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const useStatus = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const { currentAttempts } = useConfig();

  const startGame = () => dispatch(startGameAction({ attempts: currentAttempts }));

  return {
    isLoading,
    startGame,
  };
};
