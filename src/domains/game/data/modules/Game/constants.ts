import type { DifficultyLevel } from 'domains/config/data/store/types';

export const increaseScoreFactor = 100;

export const DifficultyLevels: DifficultyLevel = {
  EASY: {
    color: '#26bd53',
    attempts: 5,
    speed: 1000,
    increaseSpeedFactor: 60,
  },
  MEDIUM: {
    color: '#d6b222',
    attempts: 3,
    speed: 600,
    increaseSpeedFactor: 35,
  },
  HARD: {
    color: '#bd322d',
    attempts: 2,
    speed: 400,
    increaseSpeedFactor: 25,
  },
};
