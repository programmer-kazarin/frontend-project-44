import playGame from '../index.js';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const calculate = (first, second, operation) => {
  if (operation === '+') {
    return first + second;
  }
  if (operation === '-') {
    return first - second;
  }
  if (operation === '*') {
    return first * second;
  }
  return NaN;
};

const generateQuestion = (first, second, operation) => {
  const fullOperation = `${first} ${operation} ${second}`;
  return {
    question: fullOperation,
    answer: `${calculate(first, second, operation)}`,
  };
};

export default () => {
  const questionsAndAnswers = [];
  questionsAndAnswers.push(generateQuestion(getRandomInt(100), getRandomInt(100), '+'));
  questionsAndAnswers.push(generateQuestion(getRandomInt(100), getRandomInt(100), '-'));
  questionsAndAnswers.push(generateQuestion(getRandomInt(10), getRandomInt(10), '*'));

  playGame('What is the result of the expression?', questionsAndAnswers);
};
