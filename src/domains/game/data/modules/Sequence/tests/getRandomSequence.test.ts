import { getRandomSequence } from 'domains/game/data/modules/Sequence';
import {
  getStandardPool,
  standardPoolSize,
  getAdvancedPool,
  advancedPoolSize,
} from 'domains/game/data/modules/Sign';

describe('getRandomSequence', () => {
  it('returns a valid sequence', () => {
    const sequence = getRandomSequence(standardPoolSize);
    expect(sequence.length).toBe(standardPoolSize);

    for (let i = 0; i < standardPoolSize; i += 1) {
      expect(getStandardPool()).toContain(sequence[i]);
    }

    const anotherSequence = getRandomSequence(advancedPoolSize);
    expect(anotherSequence.length).toBe(advancedPoolSize);

    for (let i = 0; i < advancedPoolSize; i += 1) {
      expect(getAdvancedPool()).toContain(anotherSequence[i]);
    }
  });
});
