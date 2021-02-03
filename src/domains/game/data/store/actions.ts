import { createAction } from 'redux-actions';
import type { MoveAction, SetAttempts, SetSequenceAction } from 'domains/game/data/store/types';
import {
  INIT_GAME,
  MAKE_MOVE,
  RESET_GAME,
  RESET_MOVE,
  SET_ATTEMPTS,
  SET_SEQUENCE,
} from 'domains/game/data/store/actionTypes';

export const initGame = createAction(INIT_GAME);
export const resetGame = createAction(RESET_GAME);
export const setSequence = createAction<SetSequenceAction>(SET_SEQUENCE);
export const makeMove = createAction<MoveAction>(MAKE_MOVE);
export const resetMove = createAction(RESET_MOVE);
export const setAttempts = createAction<SetAttempts>(SET_ATTEMPTS);
