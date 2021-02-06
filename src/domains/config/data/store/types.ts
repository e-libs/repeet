import type { Sign } from 'domains/game/data/modules/Sign/types';

export type GameMode = 'DEFAULT' | 'EXTENDED';

export type ConfigState = {
  mode: GameMode;
  pool: Sign[];
  poolSize: number;
};

export type SetModeAction = {
  mode: GameMode;
};

export type ConfigActions = SetModeAction;
