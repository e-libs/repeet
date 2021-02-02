import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export type Game = {
  score: number;
  attempts: number;
  currentSequence: Sequence;
  playerSequence: Sequence;
  rightSequences: number;
  level: number; // TODO: check if it makes sense
  isOver: boolean;
  // timeLeft: number;
};
