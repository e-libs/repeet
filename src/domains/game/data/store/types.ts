import type { Game } from 'domains/game/data/modules/Game/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import type { Sign } from 'domains/game/data/modules/Sign/types';

export type GameState = Game;

// export type InitGameAction = {
//   level: number;
// };

export type SetSequenceAction = {
  sequence: Sequence;
};

export type MoveAction = {
  sign: Sign;
};

// Group all Game actions
export type GameActions = MoveAction & SetSequenceAction;
// export type GameActions = InitGameAction & SetSequenceAction;
