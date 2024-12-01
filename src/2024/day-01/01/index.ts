import fs from 'fs';

const input = fs
  .readFileSync('./src/2024/day-01/input.txt', { encoding: 'utf-8' })
  .trim()
  .split('\n');

const firstColumn = input
  .map((line) => parseInt(line.split(' ').at(0) ?? '0'))
  .sort((a, b) => a - b);
const secondColumn = input
  .map((line) => parseInt(line.split(' ').at(-1) ?? '0'))
  .sort((a, b) => a - b);

const result = secondColumn
  .map((number, index) => Math.abs(number - firstColumn[index]))
  .reduce((acc, current) => acc + current);

console.log(result);
