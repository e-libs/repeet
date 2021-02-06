import { getRandomSequence } from 'domains/game/data/modules/Sequence';
import {
  standardPool,
  standardPoolSize,
  extendedPool,
  extendedPoolSize,
} from 'domains/game/data/modules/Sign';

describe('getRandomSequence', () => {
  it('returns a valid sequence', () => {
    const sequence = getRandomSequence(standardPoolSize);
    expect(sequence.length).toBe(standardPoolSize);

    for (let i = 0; i < standardPoolSize; i += 1) {
      expect(standardPool).toContain(sequence[i]);
    }

    const anotherSequence = getRandomSequence(extendedPoolSize);
    expect(anotherSequence.length).toBe(extendedPoolSize);

    for (let i = 0; i < extendedPoolSize; i += 1) {
      expect(extendedPool).toContain(anotherSequence[i]);
    }
  });
});
