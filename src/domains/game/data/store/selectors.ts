import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { GameState } from 'domains/game/data/store/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export const getGame = (state: GlobalState) => state.game;

export const getGameLevel = createSelector<GlobalState, GameState, number>(
  getGame,
  ({ level }) => level,
);

export const getCurrentSequence = createSelector<GlobalState, GameState, Sequence>(
  getGame,
  ({ currentSequence }) => currentSequence,
);

export const getPlayerSequence = createSelector<GlobalState, GameState, Sequence>(
  getGame,
  ({ playerSequence }) => playerSequence,
);

export const getAttemptsLeft = createSelector<GlobalState, GameState, number>(
  getGame,
  ({ attempts }) => attempts,
);

export const getIsGameOver = createSelector<GlobalState, GameState, boolean>(
  getGame,
  ({ isOver }) => isOver,
);

export const getRightSequences = createSelector<GlobalState, GameState, number>(
  getGame,
  ({ rightSequences }) => rightSequences,
);

export const getScore = createSelector<GlobalState, GameState, number>(
  getGame,
  ({ score }) => score,
);

export const getSpeed = createSelector<GlobalState, GameState, number>(
  getGame,
  ({ speed }) => speed,
);

export const getHasQuit = createSelector<GlobalState, GameState, boolean>(
  getGame,
  ({ quit }) => quit,
);
