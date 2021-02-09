import type { Level } from 'domains/game/data/modules/Game/types';

type LevelType = Record<number, Level>;

export const Levels: LevelType = {
  100: { name: 'Newbie', number: 1, speed: 100 },
  500: { name: 'Novice', number: 2, speed: 100 },
  1000: { name: 'Rookie', number: 3, speed: 100 },
  2000: { name: 'Beginner', number: 4, speed: 100 },
  5000: { name: 'Talented', number: 5, speed: 100 },
  10000: { name: 'Skilled', number: 6, speed: 100 },
  20000: { name: 'Intermediate', number: 7, speed: 100 },
  50000: { name: 'Skillful', number: 8, speed: 100 },
  100000: { name: 'Seasoned', number: 9, speed: 100 },
  150000: { name: 'Proficient', number: 10, speed: 100 },
  200000: { name: 'Experienced', number: 11, speed: 100 },
  300000: { name: 'Advanced', number: 12, speed: 100 },
  500000: { name: 'Senior', number: 13, speed: 100 },
  1000000: { name: 'Expert', number: 14, speed: 100 },
  5000000: { name: 'Master', number: 15, speed: 100 },
};
