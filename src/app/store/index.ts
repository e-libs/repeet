import { createStore, combineReducers } from 'redux';
import { shellReducer } from 'domains/shell/data/store/reducer';

const combinedReducers = combineReducers({
  shell: shellReducer,
});

export const store = createStore(combinedReducers);
