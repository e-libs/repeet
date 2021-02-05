import { useSelector } from 'react-redux';
import { getPlayerSequence } from 'domains/game/data/store/selectors';

export const usePlayerSequence = () => {
  const playerSequence = useSelector(getPlayerSequence);

  return {
    playerSequence,
  };
};
