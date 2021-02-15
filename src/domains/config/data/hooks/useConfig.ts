import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, setMode, setShuffle, setSound } from 'domains/config/data/store/actions';
import {
  getAttempts,
  getDifficulty,
  getGameMode,
  getIsShuffle,
  getIsSoundOn,
  getPool,
  getPoolSize,
  getSpeed,
} from 'domains/config/data/store/selectors';
import type { Difficulty } from 'domains/config/data/store/types';

export const useConfig = () => {
  const dispatch = useDispatch();

  const currentAttempts = useSelector(getAttempts);
  const currentDifficulty = useSelector(getDifficulty);
  const currentMode = useSelector(getGameMode);
  const currentPool = useSelector(getPool);
  const currentPoolSize = useSelector(getPoolSize);
  const currentSpeed = useSelector(getSpeed);
  const isShuffle = useSelector(getIsShuffle);
  const isSoundOn = useSelector(getIsSoundOn);

  const switchMode = () => {
    const mode = currentMode === 'DEFAULT' ? 'ADVANCED' : 'DEFAULT';
    dispatch(setMode({ mode }));
  };

  const switchShuffle = () => {
    dispatch(setShuffle({ shuffle: !isShuffle }));
  };

  const switchSound = () => {
    dispatch(setSound({ isSoundOn: !isSoundOn }));
  };

  const switchDifficulty = (difficulty: Difficulty) => {
    dispatch(setDifficulty({ difficulty }));
  };

  return {
    currentAttempts,
    currentDifficulty,
    currentMode,
    currentPool,
    currentPoolSize,
    currentSpeed,
    isShuffle,
    isSoundOn,
    switchDifficulty,
    switchMode,
    switchShuffle,
    switchSound,
  };
};
