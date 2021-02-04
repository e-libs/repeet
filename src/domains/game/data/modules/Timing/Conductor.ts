import type { Sign } from 'domains/game/data/modules/Sign/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import { PubSub } from 'app/events/PubSub';
import type { IPubSub } from 'app/events/PubSub/types';
import { TIMER_EVENT } from 'domains/game/data/modules/Timing/constants';

export class EventManager {
  protected events: IPubSub<string>;

  constructor() {
    this.events = new PubSub<string>();
  }

  on(keyName: string, eventId: string, callback: (value: string) => void) {
    this.events.on(keyName, eventId, callback);
  }

  off(eventId: string) {
    this.events.off(eventId);
  }

  twinkle(keyName: string) {
    this.events.emit(keyName);
  }

  startTimer() {
    this.events.emit(TIMER_EVENT);
  }

  delayLoop(delay: number, lastIndex: number) {
    return (key: Sign, i: number) => {
      const currentDelay = i * delay; // TODO: add difficulty incremental factor

      setTimeout(() => {
        this.twinkle(key.name);

        if (i === lastIndex) {
          setTimeout(() => {
            this.startTimer();
          }, currentDelay);
        }
      }, currentDelay);
    };
  }

  twinkleSequence(sequence: Sequence, interval: number) {
    sequence.forEach(this.delayLoop(interval, sequence.length - 1));
  }
}

export const Conductor = new EventManager();
