import type { HighScore } from 'domains/history/data/types';

export type HistoryState = {
  records: HighScore[];
};

export type AddScoreAction = {
  newScore: HighScore;
};

export type HistoryActions = AddScoreAction;
