import { useSelector } from 'react-redux';
import { getPlayerName } from 'domains/player/data/store/selectors';

export const usePlayer = () => {
  const playerName = useSelector(getPlayerName);

  return {
    playerName,
  };
};
