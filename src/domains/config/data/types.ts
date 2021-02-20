import type { Difficulty, GameMode } from 'domains/config/data/store/types';

export type ConfigType = 'BLIND' | 'DIFFICULTY' | 'MODE' | 'SHUFFLE' | 'SOUND';

export type ConfigValue = boolean | Difficulty | GameMode;

export type ConfigValues = {
  value: ConfigValue;
  action: (param?: ConfigValue) => void;
};

export type ConfigOption = {
  color: string;
  description?: string;
  fontSize?: number;
  label: string;
  value: ConfigValue;
  param?: ConfigValue;
};
