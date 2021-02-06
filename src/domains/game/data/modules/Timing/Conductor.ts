import type { Sign } from 'domains/game/data/modules/Sign/types';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import { PubSub } from 'app/events/PubSub';
import type { IPubSub } from 'app/events/PubSub/types';
import {
  KEYPAD_EVENT,
  ROUND_OVER_EVENT,
  TIME_BAR_EVENT,
  TIMER_EVENT,
} from 'domains/game/data/modules/Timing/constants';
import { numberToEmptyArray } from 'helpers/numberToEmptyArray';

export class EventManager {
  protected events: IPubSub<any>;

  private isActive = false;

  private timers: NodeJS.Timeout[] = [];

  private poolSize = 0;

  constructor() {
    this.events = new PubSub<boolean>();
  }

  init(poolSize: number) {
    this.isActive = true;
    this.poolSize = poolSize;
  }

  stop() {
    this.isActive = false;
    this.setRoundOver();
  }

  on<T>(keyName: string, eventId: string, callback: (value: T) => void) {
    this.events.on(keyName, eventId, callback);
  }

  off(eventId: string) {
    this.events.off(eventId);
  }

  twinkle(keyName: string) {
    this.events.emit(keyName);
  }

  setTimeBar(time: number) {
    this.events.emit(TIME_BAR_EVENT, this.poolSize - time);
  }

  setFail() {
    this.clearTimeouts();
    this.events.emit(TIME_BAR_EVENT, 0);
    this.events.emit(TIMER_EVENT, false);
    this.events.emit(KEYPAD_EVENT, false);
  }

  setRoundOver() {
    this.clearTimeouts();
    this.events.emit(TIME_BAR_EVENT, 0);
    this.events.emit(ROUND_OVER_EVENT);
    this.events.emit(TIMER_EVENT, false);
    this.events.emit(KEYPAD_EVENT, false);
  }

  startTimer(delay: number) {
    this.events.emit(TIMER_EVENT, true);
    this.events.emit(KEYPAD_EVENT, true);
    const iterations = numberToEmptyArray(this.poolSize);
    const iterationsPlusLast = [...iterations, iterations[iterations.length - 1] + 1];
    iterationsPlusLast.forEach(this.delayTimer(delay, iterations.length));
  }

  clearTimeouts() {
    this.timers.forEach((timer) => clearTimeout(timer));
    this.timers = [];
  }

  resetTimer() {
    this.clearTimeouts();
    this.events.emit(TIMER_EVENT, false);
    this.events.emit(KEYPAD_EVENT, false);
  }

  delayTimer(delay: number, lastIndex: number) {
    return (time: number) => {
      const currentDelay = time * delay;

      this.timers.push(
        setTimeout(() => {
          if (!this.isActive) return;

          this.setTimeBar(time);

          if (time === lastIndex) {
            this.setRoundOver();
          }
        }, currentDelay),
      );
    };
  }

  delayLoop(delay: number, lastIndex: number) {
    return (key: Sign, i: number) => {
      const currentDelay = i * delay;

      this.timers.push(
        setTimeout(() => {
          if (!this.isActive) return;

          this.twinkle(key.name);

          if (i === lastIndex) {
            setTimeout(() => {
              this.startTimer(delay * 1.5);
            }, currentDelay * 0.5);
          }
        }, currentDelay),
      );
    };
  }

  twinkleSequence(sequence: Sequence, interval: number) {
    sequence.forEach(this.delayLoop(interval, sequence.length - 1));
  }
}

export const Conductor = new EventManager();
