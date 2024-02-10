import greet from './cli.js';
import {
  congrats, readAnswer, wrong, getRandomInt, playGame,
} from './index.js';

const generateSequence = () => {
  const constSequenceSize = getRandomInt(10, 5);
  const firstNumber = getRandomInt(100);
  const step = getRandomInt(15, 1);
  const result = [];
  result.push(firstNumber);
  for (let i = 1; i < constSequenceSize; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const playOneRound = (playerName) => {
  const sequence = generateSequence();
  const hideIndex = getRandomInt(sequence.length);
  const hideNumber = sequence[hideIndex];
  sequence[hideIndex] = '..';
  console.log(`Question: ${sequence.join(' ')}`);
  const answer = readAnswer();
  if (parseInt(answer, 10) === hideNumber) {
    console.log('Correct!');
    return 1;
  }
  console.log(wrong(answer, hideNumber));
  console.log(`Let's try again, ${playerName}!`);
  return 0;
};

const playProgression = (playerName) => {
  console.log('What number is missing in the progression?');
  playGame(playOneRound, playerName);
  congrats(playerName);
};

export default () => {
  const playerName = greet();
  playProgression(playerName);
};
