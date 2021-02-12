/* eslint-disable no-console */
import { logConfig } from 'app/config/constants';
import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import { logSequenceOutput } from 'helpers/logSequenceOutput';

export const logOutput = (
  label: string,
  currentSequence: Sequence,
  speed: number,
  score: number,
  level: number,
  rightSequences: number,
  attemptsLeft: number,
) => {
  if (!logConfig.enabled) return;

  logSequenceOutput(label, currentSequence);
  console.log(
    `SPEED: ${speed}, SCORE: ${score}, LEVEL: ${level},  NAILED ${rightSequences}, ATTEMPTS ${attemptsLeft}`,
  );
  console.log('');
};
