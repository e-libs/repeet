import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export type Game = {
  attempts: number;
  currentSequence: Sequence;
  isOver: boolean;
  level: number; // TODO: check if it makes sense
  playerSequence: Sequence;
  rightSequences: number;
  score: number;
  // timeLeft: number;
};
