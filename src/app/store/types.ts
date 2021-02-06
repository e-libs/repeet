import type { ShellState } from 'domains/shell/data/store/types';
import type { PlayerState } from 'domains/player/data/store/types';
import type { GameState } from 'domains/game/data/store/types';
import type { ConfigState } from 'domains/config/data/store/types';

export type GlobalState = {
  game: GameState;
  shell: ShellState;
  player: PlayerState;
  config: ConfigState;
};
