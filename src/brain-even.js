import greet from './cli.js';
import {
  congrats, readAnswer, wrong, getRandomInt, playGame,
} from './index.js';

const playOneRound = (playerName) => {
  const random = getRandomInt(100);
  const isEven = random % 2 === 0;
  console.log(`Question: ${random}`);
  const answer = readAnswer();
  if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
    console.log('Correct!');
    return 1;
  }
  console.log(wrong(answer, isEven ? 'yes' : 'no'));
  console.log(`Let's try again, ${playerName}!`);
  return 0;
};

const playEven = (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  playGame(playOneRound, playerName);
  congrats(playerName);
};

export default () => {
  const playerName = greet();
  playEven(playerName);
};
