import { playGame, } from '../index.js';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

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

export default () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const sequence = generateSequence();
    const hideIndex = getRandomInt(sequence.length);
    const hideNumber = sequence[hideIndex];
    sequence[hideIndex] = '..';
    const round = {
      question: `${sequence.join(' ')}`,
      answer: `${hideNumber}`,
    }
    questionsAndAnswers.push(round);
  }
  playGame('What number is missing in the progression?', questionsAndAnswers);
};
