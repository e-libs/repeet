import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { GameState } from 'domains/game/data/store/types';

export const getGame = (state: GlobalState) => state.game;

export const getGameLevel = createSelector<GlobalState, GameState, number>(
  getGame,
  ({ level }) => level,
);
