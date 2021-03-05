import { createAction } from 'redux-actions';
import { ADD_SCORE, PURGE_SCORES } from 'domains/history/data/store/actionTypes';
import type { AddScoreAction } from 'domains/history/data/store/types';

export const addScore = createAction<AddScoreAction>(ADD_SCORE);
export const purgeScores = createAction(PURGE_SCORES);
