import type { Action } from 'redux-actions';
import { ADD_SCORE, PURGE_SCORES } from 'domains/history/data/store/actionTypes';
import type { HistoryState, HistoryActions } from 'domains/history/data/store/types';

const initialState: HistoryState = {
  // records: [],
  // TODO: temp
  records: [
    { date: new Date(), level: 10, playerInitials: 'EMM', score: 50000000, totalSequences: 6 },
    { date: new Date('2019'), level: 5, playerInitials: 'BIG', score: 6000000, totalSequences: 5 },
    { date: new Date('2020'), level: 3, playerInitials: 'PQP', score: 300000, totalSequences: 2 },
    { date: new Date('2020'), level: 2, playerInitials: 'OMG', score: 10000, totalSequences: 2 },
    { date: new Date('2020'), level: 0, playerInitials: 'WTF', score: 9000, totalSequences: 2 },
    { date: new Date('2020'), level: 0, playerInitials: 'ASD', score: 800, totalSequences: 2 },
    { date: new Date('2020'), level: 0, playerInitials: 'XPT', score: 500, totalSequences: 2 },
    { date: new Date('2020'), level: 0, playerInitials: 'OOO', score: 300, totalSequences: 2 },
    { date: new Date('2020'), level: 0, playerInitials: 'AAA', score: 200, totalSequences: 2 },
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
