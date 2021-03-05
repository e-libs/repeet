import type { ShellState } from 'domains/shell/data/store/types';
import type { PlayerState } from 'domains/player/data/store/types';
import type { GameState } from 'domains/game/data/store/types';
import type { ConfigState } from 'domains/config/data/store/types';
import type { HistoryState } from 'domains/history/data/store/types';

export type GlobalState = {
  config: ConfigState;
  game: GameState;
  history: HistoryState;
  player: PlayerState;
  shell: ShellState;
};
