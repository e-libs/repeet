import { createAction } from 'redux-actions';
import { SHELL_LOAD } from 'domains/shell/data/store/actionTypes';

export const loadShell = createAction(SHELL_LOAD);
