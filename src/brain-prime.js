import greet from './cli.js';
import {
  readAnswer, wrong, getRandomInt, playInfinitely,
} from './index.js';

const isPrime = (numb) => {
  if (numb <= 1) {
    return 'no';
  }
  for (let i = 2; i < numb; i += 1) {
    if (numb % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playOneRound = () => {
  const number = getRandomInt(100);
  const rightAnswer = isPrime(number);
  console.log(`Question: ${number}`);
  const answer = readAnswer();
  if (answer === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(wrong(answer, rightAnswer));
  }
};

const playPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  playInfinitely(playOneRound);
};

export default () => {
  greet();
  playPrime();
};
