import readlineSync from 'readline-sync';

const congrats = (playerName) => console.log(`Congratulations, ${playerName}!`);

const readAnswer = () => readlineSync.question('Your answer: ');

const wrong = (actual, expected) => `'${actual}' is wrong answer ;(. Correct answer was '${expected}'.`;

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const TRIES = 3;

const playGame = (gameFunc, playerName) => {
  let rightAnswers = 0;
  while (rightAnswers < TRIES) {
    rightAnswers += gameFunc(playerName);
  }
};

const playInfinitely = (gameFunc) => {
  for (;;) {
    gameFunc();
  }
};

export {
  congrats, readAnswer, wrong, getRandomInt, playGame, playInfinitely,
};
