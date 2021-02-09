import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import type { Difficulty } from 'domains/config/data/store/types';

export type Game = {
  attempts: number;
  currentSequence: Sequence;
  difficulty: Difficulty;
  isOver: boolean;
  level: number;
  playerSequence: Sequence;
  rightSequences: number;
  wrongSequences: number;
  score: number;
  speed: number;
  quit: boolean;
};

export type Level = {
  name: string;
  number: number;
};
