import type { ShellState } from 'domains/shell/data/store/types';
import type { PlayerState } from 'domains/player/data/store/types';

export type GlobalState = {
  shell: ShellState;
  player: PlayerState;
};
