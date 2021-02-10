import { createAction } from 'redux-actions';
import type { SetDifficultyAction, SetModeAction } from 'domains/config/data/store/types';
import { SET_DIFFICULTY, SET_MODE } from 'domains/config/data/store/actionTypes';

export const setDifficulty = createAction<SetDifficultyAction>(SET_DIFFICULTY);
export const setMode = createAction<SetModeAction>(SET_MODE);
