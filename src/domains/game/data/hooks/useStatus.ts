import { useSelector } from 'react-redux';
import { getIsLoading } from 'domains/game/data/store/selectors';

export const useStatus = () => {
  const isLoading = useSelector(getIsLoading);

  return {
    isLoading,
  };
};
