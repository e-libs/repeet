import type { Sign } from 'domains/game/data/modules/Sign/types';

export const Red: Sign = {
  color: '#FF0000',
  number: 1,
};

export const Green: Sign = {
  color: '#00FF00',
  number: 2,
};

export const Yellow: Sign = {
  color: '#FFFF00',
  number: 3,
};

export const Blue: Sign = {
  color: '#0000FF',
  number: 4,
};

export const standardPool = [Red, Green, Yellow, Blue];
