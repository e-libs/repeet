import type { Action } from 'redux-actions';
import type { GameState, GameActions } from 'domains/game/data/store/types';
import { initialAttempts } from 'domains/game/data/modules/Game/constants';
import {
  INIT_GAME,
  MAKE_MOVE,
  RESET_GAME,
  RESET_MOVE,
  SET_ATTEMPTS,
  SET_SEQUENCE,
} from 'domains/game/data/store/actionTypes';

const initialState: GameState = {
  score: 0,
  attempts: initialAttempts,
  currentSequence: [],
  playerSequence: [],
  rightSequences: 0,
  level: 1,
  isOver: false,
};

export const gameReducer = (state = initialState, action: Action<GameActions>) => {
  switch (action.type) {
    case INIT_GAME:
    case RESET_GAME: {
      return {
        ...initialState,
      };
    }
    case SET_SEQUENCE: {
      const { sequence } = action.payload;

      return {
        ...state,
        currentSequence: sequence,
      };
    }
    case MAKE_MOVE: {
      const { sign } = action.payload;
      const newSequence = [...state.playerSequence, sign];

      return {
        ...state,
        playerSequence: newSequence,
      };
    }
    case RESET_MOVE: {
      return {
        ...state,
        attempts: state.attempts - 1,
        playerSequence: [],
      };
    }
    // TODO: check if it's still necessary
    case SET_ATTEMPTS: {
      const { attempts } = action.payload;

      return {
        ...state,
        attempts,
      };
    }
    default:
      return state;
  }
};
