import type { Action } from 'redux-actions';
import type { ConfigState, ConfigActions } from 'domains/config/data/store/types';
import { SET_MODE } from 'domains/config/data/store/actionTypes';

const initialState: ConfigState = {
  mode: 'DEFAULT',
};

export const configReducer = (state = initialState, action: Action<ConfigActions>) => {
  switch (action.type) {
    case SET_MODE: {
      const { mode } = action.payload;

      return {
        ...initialState,
        mode,
      };
    }
    default:
      return state;
  }
};
