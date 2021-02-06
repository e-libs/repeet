import { createAction } from 'redux-actions';
import type { SetModeAction } from 'domains/config/data/store/types';
import { SET_MODE } from 'domains/config/data/store/actionTypes';

export const setMode = createAction<SetModeAction>(SET_MODE);
