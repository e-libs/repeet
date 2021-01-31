import type { Action } from 'redux-actions';
import { SHELL_LOAD } from 'domains/shell/data/store/actionTypes';
import type { ShellState, ShellAction } from 'domains/shell/data/store/types';

const initialState: ShellState = {
  test: '',
};

export const shellReducer = (state = initialState, action: Action<ShellAction>) => {
  switch (action.type) {
    case SHELL_LOAD: {
      const { test1 } = action.payload;
      console.log('here', test1);

      return {
        ...state,
        test: test1,
      };
    }
    default:
      return state;
  }
};
