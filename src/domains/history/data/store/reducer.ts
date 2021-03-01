import type { Action } from 'redux-actions';
import { ADD_SCORE, PURGE_SCORES } from 'domains/history/data/store/actionTypes';
import type { HistoryState, HistoryActions } from 'domains/history/data/store/types';

const initialState: HistoryState = {
  // records: [],
  // TODO: temp
  records: [
    { date: new Date(), level: 1, playerInitials: 'BIG', score: 600, totalSequences: 6 },
    { date: new Date('2019'), level: 1, playerInitials: 'EMM', score: 500, totalSequences: 5 },
    { date: new Date('2020'), level: 0, playerInitials: 'PQP', score: 200, totalSequences: 2 },
  ],
};

export const historyReducer = (state = initialState, action: Action<HistoryActions>) => {
  switch (action.type) {
    case ADD_SCORE: {
      const { newScore } = action.payload;

      return {
        ...state,
        records: [...state.records, newScore],
      };
    }
    case PURGE_SCORES: {
      return {
        ...state,
        records: [],
      };
    }
    default:
      return state;
  }
};
