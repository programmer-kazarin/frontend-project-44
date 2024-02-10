import { cons, car, cdr } from '@hexlet/pairs';
import greet from './cli.js';
import {
  congrats, readAnswer, wrong, getRandomInt,
} from './index.js';

const calc = (pairOperands, operator) => {
  console.log(`Question: ${car(pairOperands)} ${operator} ${cdr(pairOperands)}`);
  let rightAnswer;
  const answer = readAnswer();
  switch (operator) {
    case '+':
      rightAnswer = car(pairOperands) + cdr(pairOperands);
      break;
    case '-':
      rightAnswer = car(pairOperands) - cdr(pairOperands);
      break;
    case '*':
      rightAnswer = car(pairOperands) * cdr(pairOperands);
      break;
    default:
      console.error(`Invalid operator "${operator}"`);
      return false;
  }
  if (parseInt(answer, 10) === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(wrong(answer, rightAnswer));
  return false;
};

const playCalc = (playerName) => {
  console.log('What is the result of the expression?');
  const sumPair = cons(getRandomInt(100), getRandomInt(100));
  if (calc(sumPair, '+') === false) {
    return;
  }
  const subPair = cons(getRandomInt(100), getRandomInt(50));
  if (calc(subPair, '-') === false) {
    return;
  }
  const multPair = cons(getRandomInt(10), getRandomInt(10));
  if (calc(multPair, '*') === false) {
    return;
  }
  congrats(playerName);
};

export default () => {
  const playerName = greet();
  playCalc(playerName);
};
