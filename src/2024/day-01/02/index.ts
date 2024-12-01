import fs from 'fs';

const input = fs
  .readFileSync('./src/2024/day-01/input.txt', { encoding: 'utf-8' })
  .trim()
  .split('\n');

const firstColumn = input.map((line) => parseInt(line.split(' ').at(0) ?? '0'));

const secondColumn = input.map((line) =>
  parseInt(line.split(' ').at(-1) ?? '0')
);

const result = firstColumn.reduce((total, current) => {
  const count = secondColumn.filter((number) => number === current).length;

  return total + current * count;
}, 0);

console.log(result);
