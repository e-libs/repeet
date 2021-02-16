import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getIsTraining } from 'domains/game/data/store/selectors';
import {
  startGame as startGameAction,
  setTraining as setTrainingAction,
} from 'domains/game/data/store/actions';
import { useConfig } from 'domains/config/data/hooks/useConfig';

export const useStatus = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isTraining = useSelector(getIsTraining);
  const { currentAttempts } = useConfig();

  const startGame = () => dispatch(startGameAction({ attempts: currentAttempts }));

  const setTraining = (traning: boolean) => dispatch(setTrainingAction({ isTraining: traning }));

  return {
    isLoading,
    isTraining,
    startGame,
    setTraining,
  };
};
