import type { Sign } from 'domains/game/data/modules/Sign/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import { PubSub } from 'app/events/PubSub';
import type { IPubSub } from 'app/events/PubSub/types';
import {
  ROUND_OVER_EVENT,
  TIME_BAR_EVENT,
  TIMER_EVENT,
  timeBars,
} from 'domains/game/data/modules/Timing/constants';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';

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

  setTimeBar(time: number) {
    // TODO: TEMP
    this.events.emit(TIME_BAR_EVENT, (timeBars - time).toString());
  }

  setRoundOver() {
    // TODO: TEMP
    console.log('ROUND OVER');
    this.events.emit(TIME_BAR_EVENT, '0');
    this.events.emit(ROUND_OVER_EVENT);
    this.events.emit(TIMER_EVENT, 'false');
  }

  startTimer(delay: number) {
    this.events.emit(TIMER_EVENT, 'true');
    const aux = numberToEmptyArray(timeBars);
    aux.forEach(this.delayTimer(delay, aux.length - 1));
  }

  delayTimer(delay: number, lastIndex: number) {
    return (time: number) => {
      const currentDelay = time * delay; // TODO: add difficulty incremental factor

      setTimeout(() => {
        this.setTimeBar(time);

        if (time === lastIndex) {
          setTimeout(() => {
            this.setRoundOver();
          }, currentDelay / 2); // TODO: improve
        }
      }, currentDelay);
    };
  }

  delayLoop(delay: number, lastIndex: number) {
    console.log('delayLoop', delay, lastIndex);

    return (key: Sign, i: number) => {
      const currentDelay = i * delay; // TODO: add difficulty incremental factor

      setTimeout(() => {
        this.twinkle(key.name);

        if (i === lastIndex) {
          setTimeout(() => {
            this.startTimer(delay);
          }, currentDelay * 0.7);
        }
      }, currentDelay);
    };
  }

  twinkleSequence(sequence: Sequence, interval: number) {
    console.log('twinks', sequence.length);
    sequence.forEach(this.delayLoop(interval, sequence.length - 1));
  }
}

export const Conductor = new EventManager();
