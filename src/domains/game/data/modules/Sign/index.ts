import type { Sign } from 'domains/game/data/modules/Sign/types';

export const Red: Sign = {
  color: '#FF48A6',
  name: 'Red',
  number: 1,
};

export const Green: Sign = {
  color: '#649700',
  name: 'Green',
  number: 2,
};

export const Yellow: Sign = {
  color: '#FFE067',
  name: 'Yellow',
  number: 3,
};

export const Blue: Sign = {
  color: '#2BCFFF',
  name: 'Blue',
  number: 4,
};

export const standardPool = [Red, Green, Yellow, Blue];

export type AvailableSigns = typeof Red | typeof Green | typeof Yellow | typeof Blue;

export const getSignByNumber = (id: number): Sign =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  standardPool.find((item) => item.number === id)!;
