import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export type Game = {
  attempts: number;
  currentSequence: Sequence;
  isOver: boolean;
  level: number;
  playerSequence: Sequence;
  rightSequences: number;
  wrongSequences: number;
  score: number;
  speed: number;
};

export type Level = {
  name: string;
  number: number;
  speed: number;
};
