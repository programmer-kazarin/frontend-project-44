import { cons, car, cdr } from '@hexlet/pairs';
import greet from './cli.js';
import {
  readAnswer, wrong, getRandomInt, playGame,
} from './index.js';

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

const playOneRound = () => {
  const firstNumber = getRandomInt(100);
  const secondNumber = getRandomInt(100);
  const gcd = findGcdUnsorted(firstNumber, secondNumber);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readAnswer();
  if (parseInt(answer, 10) === gcd) {
    console.log('Correct!');
    return 1;
  }
  console.log(wrong(answer, gcd));
  return 0;
};

const playGcd = (playerName) => {
  console.log('Find the greatest common divisor of given numbers.');
  playGame(playOneRound, playerName);
};

export default () => {
  const playerName = greet();
  playGcd(playerName);
};
