import { useDispatch, useSelector } from 'react-redux';
import { setMode } from 'domains/config/data/store/actions';
import { getGameMode, getPool, getPoolSize } from 'domains/config/data/store/selectors';

export const useConfig = () => {
  const dispatch = useDispatch();

  const currentMode = useSelector(getGameMode);
  const currentPool = useSelector(getPool);
  const currentPoolSize = useSelector(getPoolSize);

  const switchMode = () => {
    const mode = currentMode === 'DEFAULT' ? 'EXTENDED' : 'DEFAULT';
    dispatch(setMode({ mode }));
  };

  return {
    currentMode,
    currentPool,
    currentPoolSize,
    switchMode,
  };
};
