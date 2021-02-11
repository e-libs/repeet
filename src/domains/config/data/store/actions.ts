import { createAction } from 'redux-actions';
import type {
  SetDifficultyAction,
  SetModeAction,
  SetShuffleAction,
} from 'domains/config/data/store/types';
import { SET_DIFFICULTY, SET_MODE, SET_SHUFFLE } from 'domains/config/data/store/actionTypes';

export const setDifficulty = createAction<SetDifficultyAction>(SET_DIFFICULTY);
export const setMode = createAction<SetModeAction>(SET_MODE);
export const setShuffle = createAction<SetShuffleAction>(SET_SHUFFLE);
