import type { Sequence } from 'domains/game/data/modules/Sequence/types';
import { Green, Red, Yellow, Blue, Purple, Wine } from 'domains/game/data/modules/Sign';

type outputColor = {
  preffix: string;
  name: string;
};

const mappedOutputColors: Record<string, outputColor> = {
  Red: { preffix: '\x1b[41m', name: Red.name },
  Green: { preffix: '\x1b[42m', name: Green.name },
  Yellow: { preffix: '\x1b[43m', name: Yellow.name },
  Blue: { preffix: '\x1b[44m', name: Blue.name },
  Purple: { preffix: '\x1b[45m', name: Purple.name },
  Wine: { preffix: '\x1b[41m', name: Wine.name },
};

export const logSequenceOutput = (label: string, sequence: Sequence) => {
  const colored = sequence.map(({ name }) => mappedOutputColors[name]);
  const text = colored.reduce(
    (acc, color) => `${acc}${color.preffix} ${color.name.toUpperCase()} \x1b[0m  `,
    '',
  );
  // eslint-disable-next-line no-console
  console.log(label, `${text}\x1b[0m`);
};
