import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import type { Difficulty } from 'domains/config/data/store/types';

export type Game = {
  attempts: number;
  currentSequence: Sequence;
  currentSequenceDisplay: Sequence;
  difficulty: Difficulty;
  isLoading: boolean;
  isOver: boolean;
  isTraining: boolean;
  level: number;
  playerSequence: Sequence;
  quit: boolean;
  rightSequences: number;
  score: number;
  speed: number;
  wrongSequences: number;
};

export type Level = {
  name: string;
  number: number;
};
