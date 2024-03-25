import { cons, car, cdr } from '@hexlet/pairs';
import playGame from '../index.js';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const generate = (operator) => {
  const pair = cons(getRandomInt(10), getRandomInt(10));
  switch (operator) {
    case '+':
      return {
        question: `${car(pair)} + ${cdr(pair)}`,
        answer: `${car(pair) + cdr(pair)}`,
      };
    case '-':
      return {
        question: `${car(pair)} - ${cdr(pair)}`,
        answer: `${car(pair) - cdr(pair)}`,
      };
    case '*':
      return {
        question: `${car(pair)} * ${cdr(pair)}`,
        answer: `${car(pair) * cdr(pair)}`,
      };
    default:
      console.error(`Invalid operator "${operator}"`);
      return false;
  }
};

export default () => {
  const questionsAndAnswers = [];
  questionsAndAnswers.push(generate('+'));
  questionsAndAnswers.push(generate('-'));
  questionsAndAnswers.push(generate('*'));

  playGame('What is the result of the expression?', questionsAndAnswers);
};
