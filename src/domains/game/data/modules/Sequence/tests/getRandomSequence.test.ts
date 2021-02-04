import { getRandomSequence } from 'domains/game/data/modules/Sequence';
import { standardPool } from 'domains/game/data/modules/Sign';
import { initialSequences } from 'domains/game/data/modules/Game/constants';

describe('getRandomSequence', () => {
  it('returns a valid sequence', () => {
    const sequence = getRandomSequence();
    expect(sequence.length).toBe(initialSequences);

    for (let i = 0; i < initialSequences; i += 1) {
      expect(standardPool).toContain(sequence[i]);
    }
  });
});
