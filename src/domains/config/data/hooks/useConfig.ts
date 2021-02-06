import { useDispatch, useSelector } from 'react-redux';
import { setMode } from 'domains/config/data/store/actions';
import { getGameMode } from 'domains/config/data/store/selectors';

export const useConfig = () => {
  const dispatch = useDispatch();

  const currentMode = useSelector(getGameMode);

  const switchMode = () => {
    console.log('switch');
    const mode = currentMode === 'DEFAULT' ? 'EXTENDED' : 'DEFAULT';
    dispatch(setMode({ mode }));
  };

  return {
    currentMode,
    switchMode,
  };
};
