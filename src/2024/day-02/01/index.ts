import fs from 'fs';

const input = fs
  .readFileSync('./src/2024/day-02/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const numbersArray = input.map((line) => line.split(' ').map(Number));

const differences = numbersArray.map((line) =>
  line.slice(1).map((num, index) => num - line[index])
);

const filteredPositiveNegative = differences.filter(
  (diffs) => !(diffs.some((num) => num > 0) && diffs.some((num) => num < 0))
);

const result = filteredPositiveNegative
  .map((numbers) =>
    numbers.some((number) => {
      return number > 3 || number < -3 || number === 0;
    })
  )
  .filter((boolean) => boolean === false).length;

console.log(result);
