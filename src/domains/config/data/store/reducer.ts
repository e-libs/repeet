import type { Action } from 'redux-actions';
import type { ConfigState, ConfigActions } from 'domains/config/data/store/types';
import {
  SET_BLIND_MODE,
  SET_DIFFICULTY,
  SET_MODE,
  SET_SHUFFLE,
  SET_SOUND,
} from 'domains/config/data/store/actionTypes';
import {
  advancedPool,
  advancedPoolSize,
  standardPool,
  standardPoolSize,
} from 'domains/game/data/modules/Sign';
import { DifficultyLevels } from 'domains/game/data/modules/Game/constants';

const initialState: ConfigState = {
  attempts: DifficultyLevels.MEDIUM.attempts,
  difficulty: 'MEDIUM',
  isBlindModeOn: false,
  isShuffle: false,
  isSoundOn: true,
  mode: 'DEFAULT',
  pool: standardPool,
  poolSize: standardPoolSize,
  speed: 0,
};

export const configReducer = (state = initialState, action: Action<ConfigActions>) => {
  switch (action.type) {
    case SET_DIFFICULTY: {
      const { difficulty } = action.payload;
      const { attempts } = DifficultyLevels[difficulty];
      const { speed } = DifficultyLevels[difficulty];

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
    case SET_SHUFFLE: {
      const { shuffle } = action.payload;

      return {
        ...state,
        isShuffle: shuffle,
      };
    }
    case SET_SOUND: {
      const { isSoundOn } = action.payload;

      return {
        ...state,
        isSoundOn,
      };
    }
    case SET_BLIND_MODE: {
      const { isBlindModeOn } = action.payload;

      return {
        ...state,
        isBlindModeOn,
      };
    }
    default:
      return state;
  }
};
