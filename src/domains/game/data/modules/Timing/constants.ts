import type { Difficulty } from 'domains/config/data/store/types';

export const ROUND_OVER_EVENT = 'ROUND_OVER_EVENT';
export const TIMER_EVENT = 'TIMER_EVENT';
export const TIME_BAR_EVENT = 'TIME_BAR_EVENT';
export const KEYPAD_EVENT = 'KEYPAD_EVENT';
export const initialInterval = 100;

export const speedFactor: Record<Difficulty, number> = {
  EASY: 60,
  MEDIUM: 35,
  HARD: 25,
};
