import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { ConfigState, GameMode } from 'domains/config/data/store/types';

export const getConfig = (state: GlobalState) => state.config;

export const getGameMode = createSelector<GlobalState, ConfigState, GameMode>(
  getConfig,
  ({ mode }) => mode,
);
