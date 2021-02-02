import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { GameState } from 'domains/game/data/store/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export const getGame = (state: GlobalState) => state.game;

export const getGameLevel = createSelector<GlobalState, GameState, number>(
  getGame,
  ({ level }) => level,
);

export const getCurrentSequence = createSelector<GlobalState, GameState, Sequence | undefined>(
  getGame,
  ({ currentSequence }) => currentSequence,
);
