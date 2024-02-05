import readlineSync from 'readline-sync';

const congrats = (playerName) => console.log(`Congratulations, ${playerName}!`);

const readAnswer = () => readlineSync.question('Your answer: ');

const wrong = (actual, expected) => `'${actual}' is wrong answer ;(. Correct answer was '${expected}'.`;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const TRIES = 3;

export {
  congrats, readAnswer, wrong, getRandomInt, TRIES,
};
