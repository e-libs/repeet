import type { Game } from 'domains/game/data/modules/Game/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import type { Sign } from 'domains/game/data/modules/Sign/types';
import type { Difficulty } from 'domains/config/data/store/types';

export type GameState = Game;

export type SetSequenceAction = {
  sequence: Sequence;
};

export type InitGameAction = {
  attempts: number;
  difficulty: Difficulty;
  speed: number;
};

export type MoveAction = {
  sign: Sign;
};

export type NextRoundAction = {
  sequence: Sequence;
};

// Group all Game actions
export type GameActions = InitGameAction & MoveAction & NextRoundAction & SetSequenceAction;
