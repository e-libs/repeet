import type { Sign } from 'domains/game/data/modules/Sign/types';

export const Red: Sign = {
  color: '#FF48A6',
  number: 1,
};

export const Green: Sign = {
  color: '#649700',
  number: 2,
};

export const Yellow: Sign = {
  color: '#FFE067',
  number: 3,
};

export const Blue: Sign = {
  color: '#2BCFFF',
  number: 4,
};

export const standardPool = [Red, Green, Yellow, Blue];

export type AvailableSigns = typeof Red | typeof Green | typeof Yellow | typeof Blue;
