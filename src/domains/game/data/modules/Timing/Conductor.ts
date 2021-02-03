import type { Sequence } from 'domains/game/data/modules/Sequence/types';

export class Conductor {
  twinkleSequence(sequence: Sequence): void {
    // TODO: emit events for sequence
    console.log('EMIT FOR', sequence);
  }
}

export const Baton = new Conductor();
