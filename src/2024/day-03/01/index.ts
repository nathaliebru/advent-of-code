import fs from 'fs';

const input = fs.readFileSync('./src/2024/day-03/input.txt', {
  encoding: 'utf-8',
});

const multiplyMatches = input.match(/mul\(\d+,\d+\)/g);

const numberArrays = multiplyMatches?.map((match) =>
  match.split('mul(')[1].split(')')[0].split(',').map(Number)
);

const result = numberArrays?.reduce(
  (acc, num) => acc + num.reduce((acc, curr) => acc * curr),
  0
);

console.log(result);
