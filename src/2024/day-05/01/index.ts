import fs from 'fs';

const input = fs
  .readFileSync('./src/2024/day-05/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n\n')
  .map((data) => data.split('\n'));

const pageOrderingRules = input[0].map((bla) => bla.split('|').map(Number));
const pagesToProduce = input[1].map((bla) => bla.split(',').map(Number));

const pairs = pagesToProduce.map((page) =>
  page.reduce((acc, curr, index, array) => {
    if (index === 0) return acc;
    const prev = array[index - 1];

    return [...acc, [prev, curr]];
  }, [] as number[][])
);

const middleNumbersOfArrays = pairs.map((array) => {
  const flatArray = Array.from(new Set(array.flatMap((arr) => arr)));
  const middleIndex = Math.floor(flatArray.length / 2);

  const result = array.every((sub) =>
    pageOrderingRules.some(
      (item) => JSON.stringify(item) === JSON.stringify(sub)
    )
  );

  return result ? flatArray[middleIndex] : null;
});

const result = middleNumbersOfArrays
  .filter((line) => line !== null)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);
