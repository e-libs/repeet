import type { Action } from 'redux-actions';
import {
  INIT_GAME,
  MAKE_MOVE,
  RESET_GAME,
  SET_SEQUENCE,
} from 'domains/game/data/store/actionTypes';
import type { GameState, GameActions } from 'domains/game/data/store/types';
import { initialAttempts } from 'domains/game/data/modules/Game/constants';

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
      console.log('received', sign);
      console.log('player before', state.playerSequence);
      const newSequence = [...state.playerSequence, sign];
      console.log('player after', newSequence);
      return {
        ...state,
        playerSequence: newSequence,
      };
    }
    default:
      return state;
  }
};
