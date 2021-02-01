import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import { standardPool } from 'domains/game/data/modules/Sign';

export const getRandomSequence = (): Sequence => [
  standardPool[Math.floor(Math.random() * standardPool.length)],
  standardPool[Math.floor(Math.random() * standardPool.length)],
  standardPool[Math.floor(Math.random() * standardPool.length)],
  standardPool[Math.floor(Math.random() * standardPool.length)],
];
