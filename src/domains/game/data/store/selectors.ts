import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { GameState } from 'domains/game/data/store/types';
import type { Game } from 'domains/game/data/modules/Game/types';

export const getGame = (state: GlobalState) => state.game;

export const getGameStatus = createSelector<GlobalState, GameState, Game>(
  getGame,
  ({ status }) => status,
);
