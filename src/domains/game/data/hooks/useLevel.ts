import { useSelector } from 'react-redux';
import { getGameLevel } from 'domains/game/data/store/selectors';

export const useLevel = () => {
  const level = useSelector(getGameLevel);

  return {
    level,
  };
};
