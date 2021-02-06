import type { MoveResult, Sequence } from 'domains/game/data/modules/Sequence/types';
import { standardPool } from 'domains/game/data/modules/Sign';

export const getRandomSequence = (poolSize: number): Sequence => {
  const sequence: Sequence = [];

  for (let i = 0; i < poolSize; i += 1) {
    sequence.push(standardPool[Math.floor(Math.random() * standardPool.length)]);
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
