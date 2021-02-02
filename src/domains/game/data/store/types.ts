import type { Game } from 'domains/game/data/modules/Game/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export type GameState = Game;

// export type InitGameAction = {
//   level: number;
// };

export type SetSequenceAction = {
  sequence: Sequence;
};

// Group all Game actions
export type GameActions = SetSequenceAction;
// export type GameActions = InitGameAction & SetSequenceAction;
