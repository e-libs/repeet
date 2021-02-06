export type GameMode = 'DEFAULT' | 'EXTENDED';

export type ConfigState = {
  mode: GameMode;
};

export type SetModeAction = {
  mode: GameMode;
};

export type ConfigActions = SetModeAction;
