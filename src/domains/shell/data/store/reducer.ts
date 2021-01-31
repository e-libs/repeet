// import { combineReducers } from 'redux';
import type { Action } from 'redux-actions';
import { SHELL_LOAD } from 'domains/shell/data/store/actionTypes';

export type ShellState = {
  test: string;
};

type ShellAction = {
  test1: string;
};

const initialState: ShellState = {
  test: '',
};

export const shellReducer = (state = initialState, action: Action<ShellAction>) => {
  switch (action.type) {
    case SHELL_LOAD: {
      const x = action.payload;
      console.log('here', x.test1);
      return state;
    }
    default:
      return state;
  }
};

// export default combineReducers({
//   shell: shellReducer,
// });
