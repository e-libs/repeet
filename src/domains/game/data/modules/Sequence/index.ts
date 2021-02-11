import type { MoveResult, Sequence } from 'domains/game/data/modules/Sequence/types';
import { advancedPool, standardPool } from 'domains/game/data/modules/Sign';

export const getRandomSequence = (poolSize: number): Sequence => {
  const sequence: Sequence = [];
  const pool = poolSize === advancedPool.length ? advancedPool : standardPool;

  for (let i = 0; i < poolSize; i += 1) {
    sequence.push(pool[Math.floor(Math.random() * pool.length)]);
  }

  return sequence;
};

export const getShuffleSequence = (poolSize: number) => {
  const pool = poolSize === advancedPool.length ? advancedPool : standardPool;

  for (let i = poolSize - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pool[i];
    pool[i] = pool[j];
    pool[j] = temp;
  }

  return pool;
};

export const validateMove = (
  currentSequence: Sequence,
  playerSequence: Sequence,
  pressedKey: number,
): MoveResult => {
  const index = playerSequence.length;
  return currentSequence[index].number === pressedKey ? 'GOOD' : 'BAD';
};
