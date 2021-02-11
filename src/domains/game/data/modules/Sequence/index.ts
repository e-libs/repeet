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

export const validateMove = (
  currentSequence: Sequence,
  playerSequence: Sequence,
  pressedKey: number,
): MoveResult => {
  const index = playerSequence.length;
  return currentSequence[index].number === pressedKey ? 'GOOD' : 'BAD';
};
