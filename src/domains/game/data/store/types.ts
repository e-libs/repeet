import type { Game } from 'domains/game/data/modules/Game/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import type { Sign } from 'domains/game/data/modules/Sign/types';
import type { Difficulty } from 'domains/config/data/store/types';

export type GameState = Game;

export type SetSequenceAction = {
  sequence: Sequence;
  sequenceDisplay: Sequence;
};

export type StartGameAction = {
  attempts: number;
};

export type InitGameAction = {
  difficulty: Difficulty;
  speed: number;
};

export type MoveAction = {
  sign: Sign;
};

export type NextRoundAction = {
  sequence: Sequence;
  sequenceDisplay: Sequence;
};

export type GameActions = InitGameAction &
  MoveAction &
  NextRoundAction &
  StartGameAction &
  SetSequenceAction;
