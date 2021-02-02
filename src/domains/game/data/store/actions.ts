import { createAction } from 'redux-actions';
import { INIT_GAME } from 'domains/game/data/store/actionTypes';
import type { InitGameAction } from 'domains/game/data/store/types';

export const initGame = createAction<InitGameAction>(INIT_GAME);
