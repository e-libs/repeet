import type { Action } from 'redux-actions';
import type { GameState, GameActions } from 'domains/game/data/store/types';
import { increaseScoreFactor } from 'domains/game/data/modules/Game/constants';
import { Levels } from 'domains/game/data/modules/Game';
import {
  INIT_GAME,
  MAKE_MOVE,
  NEXT_ROUND,
  QUIT_GAME,
  RESET_GAME,
  RESET_MOVE,
  SET_SEQUENCE,
} from 'domains/game/data/store/actionTypes';
import { speedFactor } from 'domains/game/data/modules/Timing/constants';

const initialState: GameState = {
  attempts: 0,
  currentSequence: [],
  difficulty: 'EASY',
  isLoading: true,
  isOver: false,
  level: 0,
  playerSequence: [],
  quit: false,
  rightSequences: 0,
  score: 0,
  speed: 0,
  wrongSequences: 0,
};

export const gameReducer = (state = initialState, action: Action<GameActions>) => {
  switch (action.type) {
    case INIT_GAME: {
      const { attempts, difficulty, speed } = action.payload;
      return {
        ...initialState,
        attempts,
        difficulty,
        speed,
      };
    }
    case RESET_GAME: {
      return {
        ...initialState,
      };
    }
    case QUIT_GAME: {
      return {
        ...state,
        quit: true,
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
    case NEXT_ROUND: {
      const { sequence } = action.payload;
      const newScore = state.score + increaseScoreFactor;
      const level = Levels[newScore] ? Levels[newScore].number : state.level;
      const speed = Levels[newScore] ? state.speed - speedFactor[state.difficulty] : state.speed;

      return {
        ...state,
        currentSequence: sequence,
        level,
        playerSequence: [],
        rightSequences: state.rightSequences + 1,
        score: newScore,
        speed,
      };
    }
    case RESET_MOVE: {
      const attempts = state.attempts - 1;

      return {
        ...state,
        attempts,
        isOver: attempts <= 0,
        playerSequence: [],
        wrongSequences: state.wrongSequences - +1,
      };
    }
    default:
      return state;
  }
};
