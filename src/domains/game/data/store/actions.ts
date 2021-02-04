import { createAction } from 'redux-actions';
import type {
  MoveAction,
  NextRoundAction,
  SetAttempts,
  SetSequenceAction,
} from 'domains/game/data/store/types';
import {
  INIT_GAME,
  MAKE_MOVE,
  NEXT_ROUND,
  RESET_GAME,
  RESET_MOVE,
  SET_ATTEMPTS,
  SET_SEQUENCE,
} from 'domains/game/data/store/actionTypes';

export const initGame = createAction(INIT_GAME);
export const makeMove = createAction<MoveAction>(MAKE_MOVE);
export const nextRound = createAction<NextRoundAction>(NEXT_ROUND);
export const resetGame = createAction(RESET_GAME);
export const resetMove = createAction(RESET_MOVE);
export const setAttempts = createAction<SetAttemptsAction>(SET_ATTEMPTS);
export const setSequence = createAction<SetSequenceAction>(SET_SEQUENCE);
