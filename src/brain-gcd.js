import { cons, car, cdr } from '@hexlet/pairs';
import greet from './cli.js';
import {
  congrats, readAnswer, wrong, getRandomInt, TRIES,
} from './index.js';

const findGcd = (pair) => {
  const less = car(pair) < cdr(pair) ? car(pair) : cdr(pair);
  const more = car(pair) > cdr(pair) ? car(pair) : cdr(pair);
  let gcd = less;
  while (gcd > 0) {
    if (less % gcd === 0 && more % gcd === 0) {
      break;
    }
    gcd -= 1;
  }
  return gcd;
};

const playGcd = (playerName) => {
  console.log('Find the greatest common divisor of given numbers.');
  let rightAnswers = 0;
  while (rightAnswers < TRIES) {
    const numbers = cons(getRandomInt(100), getRandomInt(100));
    const gcd = findGcd(numbers);
    console.log(`Question: ${car(numbers)} ${cdr(numbers)}`);
    const answer = readAnswer();
    if (parseInt(answer, 10) === gcd) {
      rightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(wrong(answer, gcd));
      console.log(`Let's try again, ${playerName}!`);
    }
  }
  congrats(playerName);
};

export default () => {
  const playerName = greet();
  playGcd(playerName);
};
