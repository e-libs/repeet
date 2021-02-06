import type { Action } from 'redux-actions';
import type { ConfigState, ConfigActions } from 'domains/config/data/store/types';
import { SET_MODE } from 'domains/config/data/store/actionTypes';
import {
  extendedPool,
  extendedPoolSize,
  standardPool,
  standardPoolSize,
} from 'domains/game/data/modules/Sign';

const initialState: ConfigState = {
  mode: 'DEFAULT',
  pool: standardPool,
  poolSize: standardPoolSize,
};

export const configReducer = (state = initialState, action: Action<ConfigActions>) => {
  switch (action.type) {
    case SET_MODE: {
      const { mode } = action.payload;

      const pool = mode === 'DEFAULT' ? standardPool : extendedPool;
      const poolSize = mode === 'DEFAULT' ? standardPoolSize : extendedPoolSize;

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