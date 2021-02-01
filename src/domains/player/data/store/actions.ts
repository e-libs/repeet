import { createAction } from 'redux-actions';
import { SET_PLAYER } from 'domains/player/data/store/actionTypes';

export const setPlayer = createAction(SET_PLAYER);
