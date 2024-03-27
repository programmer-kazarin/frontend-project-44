import { cons, car, cdr } from '@hexlet/pairs';
import playGame from '../index.js';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

export default () => {
  const questionsAndAnswers = [];
  const addPair = cons(getRandomInt(100), getRandomInt(100));
  const addQuestionAndAnswer = {
    question: `${car(addPair)} + ${cdr(addPair)}`,
    answer: `${car(addPair) + cdr(addPair)}`,
  };
  questionsAndAnswers.push(addQuestionAndAnswer);
  const subPair = cons(getRandomInt(100), getRandomInt(100));
  const subQuestionAndAnswer = {
    question: `${car(subPair)} - ${cdr(subPair)}`,
    answer: `${car(subPair) - cdr(subPair)}`,
  };
  questionsAndAnswers.push(subQuestionAndAnswer);
  const multPair = cons(getRandomInt(10), getRandomInt(10));
  const multQuestionAndAnswer = {
    question: `${car(multPair)} * ${cdr(multPair)}`,
    answer: `${car(multPair) * cdr(multPair)}`,
  };
  questionsAndAnswers.push(multQuestionAndAnswer);

  playGame('What is the result of the expression?', questionsAndAnswers);
};
