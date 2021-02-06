import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { ConfigState, GameMode } from 'domains/config/data/store/types';
import type { Sign } from 'domains/game/data/modules/Sign/types';

export const getConfig = (state: GlobalState) => state.config;

export const getGameMode = createSelector<GlobalState, ConfigState, GameMode>(
  getConfig,
  ({ mode }) => mode,
);

export const getPool = createSelector<GlobalState, ConfigState, Sign[]>(
  getConfig,
  ({ pool }) => pool,
);

export const getPoolSize = createSelector<GlobalState, ConfigState, number>(
  getConfig,
  ({ poolSize }) => poolSize,
);
