import type { Action } from 'redux-actions';
import type { ConfigState, ConfigActions } from 'domains/config/data/store/types';
import { SET_DIFFICULTY, SET_MODE } from 'domains/config/data/store/actionTypes';
import {
  advancedPool,
  advancedPoolSize,
  standardPool,
  standardPoolSize,
} from 'domains/game/data/modules/Sign';
import { initialAttempts } from 'domains/game/data/modules/Game/constants';

const initialState: ConfigState = {
  attempts: initialAttempts,
  difficulty: 'MEDIUM',
  mode: 'DEFAULT',
  pool: standardPool,
  poolSize: standardPoolSize,
  speed: 0,
};

export const configReducer = (state = initialState, action: Action<ConfigActions>) => {
  switch (action.type) {
    case SET_DIFFICULTY: {
      const { difficulty } = action.payload;

      let attempts = 3;
      let speed = 500;

      if (difficulty === 'EASY') {
        attempts = 5;
        speed = 1000;
      } else if (difficulty === 'HARD') {
        attempts = 2;
        speed = 300;
      }

      return {
        ...state,
        attempts,
        speed,
        difficulty,
      };
    }
    case SET_MODE: {
      const { mode } = action.payload;

      const pool = mode === 'DEFAULT' ? standardPool : advancedPool;
      const poolSize = mode === 'DEFAULT' ? standardPoolSize : advancedPoolSize;

      return {
        ...state,
        mode,
        pool,
        poolSize,
      };
    }
    default:
      return state;
  }
};
