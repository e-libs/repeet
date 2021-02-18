import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { ConfigState, GameMode, Difficulty } from 'domains/config/data/store/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export const getConfig = (state: GlobalState) => state.config;

export const getGameMode = createSelector<GlobalState, ConfigState, GameMode>(
  getConfig,
  ({ mode }) => mode,
);

export const getPool = createSelector<GlobalState, ConfigState, Sequence>(
  getConfig,
  ({ pool }) => pool,
);

export const getPoolSize = createSelector<GlobalState, ConfigState, number>(
  getConfig,
  ({ poolSize }) => poolSize,
);

export const getAttempts = createSelector<GlobalState, ConfigState, number>(
  getConfig,
  ({ attempts }) => attempts,
);

export const getDifficulty = createSelector<GlobalState, ConfigState, Difficulty>(
  getConfig,
  ({ difficulty }) => difficulty,
);

export const getSpeed = createSelector<GlobalState, ConfigState, number>(
  getConfig,
  ({ speed }) => speed,
);

export const getIsShuffle = createSelector<GlobalState, ConfigState, boolean>(
  getConfig,
  ({ isShuffle }) => isShuffle,
);

export const getIsSoundOn = createSelector<GlobalState, ConfigState, boolean>(
  getConfig,
  ({ isSoundOn }) => isSoundOn,
);

export const getIsBlindfolded = createSelector<GlobalState, ConfigState, boolean>(
  getConfig,
  ({ isBlindfolded }) => isBlindfolded,
);
