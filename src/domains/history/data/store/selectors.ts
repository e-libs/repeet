import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { HistoryState } from 'domains/history/data/store/types';
import type { HighScore } from 'domains/history/data/types';

export const getHistory = (state: GlobalState) => state.history;

export const getRecords = createSelector<GlobalState, HistoryState, HighScore[]>(
  getHistory,
  ({ records }) => records.sort((a, b) => b.score - a.score),
);
