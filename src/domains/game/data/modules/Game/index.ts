import type { Level } from 'domains/game/data/modules/Game/types';

type LevelType = Record<number, Level>;

export const Levels: LevelType = {
  100: { name: 'Newbie', number: 1 },
  500: { name: 'Novice', number: 2 },
  1000: { name: 'Rookie', number: 3 },
  2000: { name: 'Beginner', number: 4 },
  5000: { name: 'Talented', number: 5 },
  10000: { name: 'Skilled', number: 6 },
  20000: { name: 'Intermediate', number: 7 },
  50000: { name: 'Skillful', number: 8 },
  100000: { name: 'Seasoned', number: 9 },
  150000: { name: 'Proficient', number: 10 },
  200000: { name: 'Experienced', number: 11 },
  300000: { name: 'Advanced', number: 12 },
  500000: { name: 'Senior', number: 13 },
  1000000: { name: 'Expert', number: 14 },
  5000000: { name: 'Master', number: 15 },
};
