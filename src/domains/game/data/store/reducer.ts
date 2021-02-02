import type { Action } from 'redux-actions';
import { INIT_GAME } from 'domains/game/data/store/actionTypes';
import type { GameState, GameActions } from 'domains/game/data/store/types';
import { initialAttempts } from 'domains/game/data/modules/Game/constants';

const initialState: GameState = {
  status: {
    score: 0,
    attempts: initialAttempts,
    currentSequence: undefined,
    playerSequence: undefined,
    rightSequences: 0,
    level: 0,
    isOver: false,
  },
};

// TODO: improve 'any'
export const gameReducer = (state = initialState, action: Action<GameActions>) => {
  switch (action.type) {
    case INIT_GAME: {
      const { level } = action.payload;

      return {
        ...state,
        status: { ...state.status, level },
      };
    }
    default:
      return state;
  }
};
