export const numberToEmptyArray = (number: number) => {
  const array: number[] = [];

  for (let i = 0; i < number; i += 1) {
    array.push(i);
  }

  return array;
};
