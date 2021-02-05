import { useSelector } from 'react-redux';
import { getAttemptsLeft } from 'domains/game/data/store/selectors';

export const useAttempts = () => {
  const attemptsLeft = useSelector(getAttemptsLeft);

  return {
    attemptsLeft,
  };
};
