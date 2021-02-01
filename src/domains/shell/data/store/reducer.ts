import type { Action } from 'redux-actions';
import { SHELL_LOAD } from 'domains/shell/data/store/actionTypes';
import type { ShellState, ShellAction } from 'domains/shell/data/store/types';

const initialState: ShellState = {
  test: 'AAA',
};

export const shellReducer = (state = initialState, action: Action<ShellAction>) => {
  switch (action.type) {
    case SHELL_LOAD: {
      const { test1 } = action.payload;

      return {
        ...state,
        test: test1,
      };
    }
    default:
      return state;
  }
};
