import { createSelector } from 'reselect';
import type { GlobalState } from 'app/store/types';
import type { ShellState } from 'domains/shell/data/store/types';

export const getShell = (state: GlobalState) => state.shell;

export const getTest1 = createSelector<GlobalState, ShellState, string>(
  getShell,
  (shell) => shell.test,
);
