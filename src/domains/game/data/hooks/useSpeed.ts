import { useSelector } from 'react-redux';
import { getSpeed } from 'domains/game/data/store/selectors';

export const useSpeed = () => {
  const speed = useSelector(getSpeed);

  return {
    speed,
  };
};
