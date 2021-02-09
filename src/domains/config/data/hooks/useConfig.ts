import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, setMode } from 'domains/config/data/store/actions';
import {
  getDifficulty,
  getGameMode,
  getPool,
  getPoolSize,
} from 'domains/config/data/store/selectors';
import type { Difficulty } from 'domains/config/data/store/types';

export const useConfig = () => {
  const dispatch = useDispatch();

  const currentDifficulty = useSelector(getDifficulty);
  const currentMode = useSelector(getGameMode);
  const currentPool = useSelector(getPool);
  const currentPoolSize = useSelector(getPoolSize);

  const switchMode = () => {
    const mode = currentMode === 'DEFAULT' ? 'ADVANCED' : 'DEFAULT';
    dispatch(setMode({ mode }));
  };

  const switchDifficulty = (difficulty: Difficulty) => {
    dispatch(setDifficulty({ difficulty }));
  };

  return {
    currentDifficulty,
    currentMode,
    currentPool,
    currentPoolSize,
    switchDifficulty,
    switchMode,
  };
};
