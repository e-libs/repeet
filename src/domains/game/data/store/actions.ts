import { createAction } from 'redux-actions';
import {
  INIT_GAME,
  MAKE_MOVE,
  RESET_GAME,
  SET_SEQUENCE,
} from 'domains/game/data/store/actionTypes';
import type { MoveAction, SetSequenceAction } from 'domains/game/data/store/types';

export const initGame = createAction(INIT_GAME);
export const resetGame = createAction(RESET_GAME);
export const setSequence = createAction<SetSequenceAction>(SET_SEQUENCE);
export const makeMove = createAction<MoveAction>(MAKE_MOVE);
