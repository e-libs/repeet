import type { Sign } from 'domains/game/data/modules/Sign/types';

export type GameMode = 'DEFAULT' | 'ADVANCED';
export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';
export type DifficultyConfig = {
  attempts: number;
  color: '#26bd53' | '#d6b222' | '#bd322d';
  increaseSpeedFactor: number;
  speed: number;
};
export type DifficultyLevel = Record<Difficulty, DifficultyConfig>;

export type ConfigState = {
  attempts: number;
  difficulty: Difficulty;
  isShuffle: boolean;
  mode: GameMode;
  pool: Sign[];
  poolSize: number;
  speed: number;
};

export type SetDifficultyAction = {
  difficulty: Difficulty;
};

export type SetModeAction = {
  mode: GameMode;
};

export type SetShuffleAction = {
  shuffle: boolean;
};

export type ConfigActions = SetModeAction & SetDifficultyAction & SetShuffleAction;
