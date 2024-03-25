import { cons, car, cdr } from '@hexlet/pairs';
import playGame from '../index.js';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const sortPair = (firstNumber, secondNumber) => (firstNumber < secondNumber
  ? cons(firstNumber, secondNumber)
  : cons(secondNumber, firstNumber));

const findGcdSorted = (lessNumb, greatNumber) => {
  let gcd = lessNumb;
  while (gcd > 0) {
    if (lessNumb % gcd === 0 && greatNumber % gcd === 0) {
      break;
    }
    gcd -= 1;
  }
  return gcd;
};

const findGcdUnsorted = (firstNumber, secondNumber) => {
  const sorted = sortPair(firstNumber, secondNumber);
  return findGcdSorted(car(sorted), cdr(sorted));
};

export default () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(100);
    const secondNumber = getRandomInt(100);
    const round = {
      question: `${firstNumber} ${secondNumber}`,
      answer: `${findGcdUnsorted(firstNumber, secondNumber)}`,
    };
    questionsAndAnswers.push(round);
  }
  playGame('Find the greatest common divisor of given numbers.', questionsAndAnswers);
};
