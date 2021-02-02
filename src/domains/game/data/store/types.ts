import type { Game } from 'domains/game/data/modules/Game/types';

export type GameState = Game;

export type InitGameAction = {
  level: number;
};

// TODO: remove
export type TempGameAction = {
  otherField: string;
};

// Pipe all Game actions
export type GameActions = InitGameAction & TempGameAction;
