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

export const Purple: Sign = {
  color: '#3C1361',
  name: 'Purple',
  number: 5,
};

export const Wine: Sign = {
  color: '#800000',
  name: 'Wine',
  number: 6,
};

export const Grey: Sign = {
  color: '#222222',
  name: 'Grey',
  number: 7,
};

export const standardPool = [Red, Green, Yellow, Blue];

export const standardPoolSize = standardPool.length;

export const advancedPool = [Red, Green, Yellow, Blue, Purple, Wine];

export const advancedPoolSize = advancedPool.length;

export type AvailableSigns =
  | typeof Red
  | typeof Green
  | typeof Yellow
  | typeof Blue
  | typeof Purple
  | typeof Wine;

export const getSignByNumber = (id: number): Sign =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  standardPool.find((item) => item.number === id)!;
