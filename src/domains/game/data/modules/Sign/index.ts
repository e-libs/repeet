import type { Sign } from 'domains/game/data/modules/Sign/types';

export const Red: Sign = {
  color: '#FF48A6',
  name: 'Red',
  number: 1,
  sound: 'note-F',
};

export const Green: Sign = {
  color: '#649700',
  name: 'Green',
  number: 2,
  sound: 'note-D',
};

export const Yellow: Sign = {
  color: '#FFE067',
  name: 'Yellow',
  number: 3,
  sound: 'note-B',
};

export const Blue: Sign = {
  color: '#2BCFFF',
  name: 'Blue',
  number: 4,
  sound: 'note-G',
};

export const Purple: Sign = {
  color: '#3C1361',
  name: 'Purple',
  number: 5,
  sound: 'note-E',
};

export const Wine: Sign = {
  color: '#800000',
  name: 'Wine',
  number: 6,
  sound: 'note-C',
};

export const Grey: Sign = {
  color: '#222222',
  name: 'Grey',
  number: 7,
  sound: 'note-F',
};

export const getStandardPool = () => [Red, Green, Yellow, Blue].sort((a, b) => a.number - b.number);

export const standardPoolSize = getStandardPool().length;

export const getAdvancedPool = () =>
  [Red, Green, Yellow, Blue, Purple, Wine].sort((a, b) => a.number - b.number);

export const advancedPoolSize = getAdvancedPool().length;

export type AvailableSigns =
  | typeof Red
  | typeof Green
  | typeof Yellow
  | typeof Blue
  | typeof Purple
  | typeof Wine;

export const getSignByNumber = (id: number): Sign =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  getAdvancedPool().find((item) => item.number === id)!;
