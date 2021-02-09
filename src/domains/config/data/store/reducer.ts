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
};

export const configReducer = (state = initialState, action: Action<ConfigActions>) => {
  switch (action.type) {
    case SET_DIFFICULTY: {
      const { difficulty } = action.payload;

      let attempts = 3;

      if (difficulty === 'EASY') attempts = 5;
      else if (difficulty === 'HARD') attempts = 2;

      return {
        ...state,
        attempts,
        difficulty,
      };
    }
    case SET_MODE: {
      const { mode } = action.payload;

      const pool = mode === 'DEFAULT' ? standardPool : advancedPool;
      const poolSize = mode === 'DEFAULT' ? standardPoolSize : advancedPoolSize;

      return {
        ...initialState,
        mode,
        pool,
        poolSize,
      };
    }
    default:
      return state;
  }
};
