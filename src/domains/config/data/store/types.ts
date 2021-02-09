import type { Sign } from 'domains/game/data/modules/Sign/types';

export type GameMode = 'DEFAULT' | 'ADVANCED';
export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export type ConfigState = {
  attempts: number;
  difficulty: Difficulty;
  mode: GameMode;
  pool: Sign[];
  poolSize: number;
};

export type SetDifficultyAction = {
  difficulty: Difficulty;
};

export type SetModeAction = {
  mode: GameMode;
};

export type ConfigActions = SetModeAction & SetDifficultyAction;
