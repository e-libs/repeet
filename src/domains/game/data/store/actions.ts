import { createAction } from 'redux-actions';
import { INIT_GAME, SET_SEQUENCE } from 'domains/game/data/store/actionTypes';
import type { InitGameAction, SetSequenceAction } from 'domains/game/data/store/types';

export const initGame = createAction<InitGameAction>(INIT_GAME);
export const setSequence = createAction<SetSequenceAction>(SET_SEQUENCE);
