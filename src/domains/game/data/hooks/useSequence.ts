import { useSelector } from 'react-redux';
import { getSequenceDisplay } from 'domains/game/data/store/selectors';

export const useSequence = () => {
  const sequenceDisplay = useSelector(getSequenceDisplay);

  return {
    sequenceDisplay,
  };
};
