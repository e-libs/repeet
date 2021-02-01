import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { PlayerState } from 'domains/player/data/store/types';

export const getPlayer = (state: GlobalState) => state.player;

export const getPlayerName = createSelector<GlobalState, PlayerState, string>(
  getPlayer,
  (player) => player.name,
);
