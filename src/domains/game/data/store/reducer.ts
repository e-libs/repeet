import type { Action } from 'redux-actions';
import type { GameState, GameActions } from 'domains/game/data/store/types';
import { DifficultyLevels, increaseScoreFactor } from 'domains/game/data/modules/Game/constants';
import { Levels } from 'domains/game/data/modules/Game';
import {
  INCREASE_SCORE,
  INIT_GAME,
  MAKE_MOVE,
  NEXT_ROUND,
  QUIT_GAME,
  RESET_GAME,
  RESET_MOVE,
  SET_SEQUENCE,
  START_GAME,
} from 'domains/game/data/store/actionTypes';

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
      const { difficulty, speed } = action.payload;
      return {
        ...state,
        difficulty,
        speed,
      };
    }
    case START_GAME: {
      const { attempts } = action.payload;
      return {
        ...state,
        attempts,
        isLoading: false,
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
    case INCREASE_SCORE: {
      const score = state.score + increaseScoreFactor;

      return {
        ...state,
        playerSequence: [],
        score,
      };
    }
    case NEXT_ROUND: {
      const { sequence } = action.payload;
      const level = Levels[state.score] ? Levels[state.score].number : state.level;
      const speed = Levels[state.score]
        ? state.speed - DifficultyLevels[state.difficulty].increaseSpeedFactor
        : state.speed;

      return {
        ...state,
        currentSequence: sequence,
        level,
        playerSequence: [],
        rightSequences: state.rightSequences + 1,
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
