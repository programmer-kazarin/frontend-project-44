import greet from './cli.js';
import {
  congrats, readAnswer, wrong, getRandomInt,
} from './index.js';

const playEven = (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const random = getRandomInt(100);
    const isEven = random % 2 === 0;
    console.log(`Question: ${random}`);
    const answer = readAnswer();
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      rightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(wrong(answer, isEven ? 'yes' : 'no'));
    }
  }
  congrats(playerName);
};

export default () => {
  const playerName = greet();
  playEven(playerName);
};
