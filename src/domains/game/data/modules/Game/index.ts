import type { Level } from 'domains/game/data/modules/Game/types';

type LevelType = Record<number, Level>;

export const Levels: LevelType = {
  100: { name: 'Newbie', number: 1 },
  300: { name: 'Novice', number: 2 },
  // Newbie: { number: 1, scoreMet: 100 },
  // Novice: { number: 2, scoreMet: 500 },
  // Rookie: { number: 3, scoreMet: 1000 },
  // Beginner: { number: 4, scoreMet: 2000 },
  // Talented: { number: 5, scoreMet: 5000 },
  // Skilled: { number: 6, scoreMet: 10000 },
  // Intermediate: { number: 7, scoreMet: 20000 },
  // Skillful: { number: 8, scoreMet: 50000 },
  // Seasoned: { number: 9, scoreMet: 100000 },
  // Proficient: { number: 10, scoreMet: 150000 },
  // Experienced: { number: 11, scoreMet: 200000 },
  // Advanced: { number: 12, scoreMet: 300000 },
  // Senior: { number: 13, scoreMet: 500000 },
  // Expert: { number: 14, scoreMet: 1000000 },
};

// type LevelType = Record<string, Level>;

// export const Levels: LevelType = {
//   Newbie: { number: 1, scoreMet: 100 },
//   Novice: { number: 2, scoreMet: 500 },
//   Rookie: { number: 3, scoreMet: 1000 },
//   Beginner: { number: 4, scoreMet: 2000 },
//   Talented: { number: 5, scoreMet: 5000 },
//   Skilled: { number: 6, scoreMet: 10000 },
//   Intermediate: { number: 7, scoreMet: 20000 },
//   Skillful: { number: 8, scoreMet: 50000 },
//   Seasoned: { number: 9, scoreMet: 100000 },
//   Proficient: { number: 10, scoreMet: 150000 },
//   Experienced: { number: 11, scoreMet: 200000 },
//   Advanced: { number: 12, scoreMet: 300000 },
//   Senior: { number: 13, scoreMet: 500000 },
//   Expert: { number: 14, scoreMet: 1000000 },
// };
