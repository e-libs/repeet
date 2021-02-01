import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export type Game = {
  score: number;
  attempts: number;
  currentSequence: Sequence;
  playerSequence: Sequence;
  rightSequences: number;
  isOver: boolean;
  // timeLeft: number;
};
