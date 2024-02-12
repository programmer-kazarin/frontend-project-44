import greet from '../cli.js';
import {
  readAnswer, wrong, getRandomInt, playGame,
} from '../index.js';

const playOneRound = () => {
  const random = getRandomInt(100, 1);
  const isEven = random % 2 === 0;
  console.log(`Question: ${random}`);
  const answer = readAnswer();
  if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
    console.log('Correct!');
    return 1;
  }
  console.log(wrong(answer, isEven ? 'yes' : 'no'));
  return 0;
};

const playEven = (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  playGame(playOneRound, playerName);
};

export default () => {
  const playerName = greet();
  playEven(playerName);
};
