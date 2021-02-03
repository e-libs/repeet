import type { Sign } from 'domains/game/data/modules/Sign/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import { PubSub } from 'app/events/PubSub';
import type { IPubSub } from 'app/events/PubSub/types';

export class EventManager {
  protected events: IPubSub<string>;

  constructor() {
    this.events = new PubSub<string>();
  }

  on(keyName: string, eventId: string, callback: (value: string) => void): void {
    this.events.on(keyName, eventId, callback);
  }

  off(eventId: string): void {
    this.events.off(eventId);
  }

  twinkle(keyName: string) {
    console.log('TWINKLE', keyName);
    this.events.emit(keyName, '');
  }

  delayLoop(delay: number) {
    return (key: Sign, i: number) => {
      setTimeout(() => {
        this.twinkle(key.name);
      }, i * delay);
    };
  }

  twinkleSequence(sequence: Sequence, interval: number): void {
    // TODO: emit events for sequence
    console.log('EMIT FOR', sequence);

    sequence.forEach(this.delayLoop(interval));
  }
}

export const Conductor = new EventManager();
