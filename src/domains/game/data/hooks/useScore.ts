import { useSelector } from 'react-redux';
import { getScore } from 'domains/game/data/store/selectors';

export const useScore = () => {
  const score = useSelector(getScore);

  return {
    score,
  };
};
