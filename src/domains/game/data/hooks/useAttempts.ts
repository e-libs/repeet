import { useSelector } from 'react-redux';
import { getAttemptsLeft } from 'domains/game/data/store/selectors';

export const useAttempts = () => {
  // TODO: consider remove, if not helping with render issue
  const attemptsLeft = useSelector(getAttemptsLeft);

  return {
    attemptsLeft,
  };
};
