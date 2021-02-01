import { getRandomSequence } from 'domains/game/data/modules/Sequence';
import { standardPool } from 'domains/game/data/modules/Sign';

describe('getRandomSequence', () => {
  it('returns a valid sequence', () => {
    const sequence = getRandomSequence();
    expect(sequence.length).toBe(4);
    expect(standardPool).toContain(sequence[0]);
    expect(standardPool).toContain(sequence[1]);
    expect(standardPool).toContain(sequence[2]);
    expect(standardPool).toContain(sequence[3]);
  });
});
