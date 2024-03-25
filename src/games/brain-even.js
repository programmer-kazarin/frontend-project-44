import { playGame, } from '../index.js';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

export default () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const random = getRandomInt(100, 1);
    const round = {
      question: random,
      answer: random % 2 === 0 ? 'yes' : 'no',
    }  
    questionsAndAnswers.push(round);
  }
  
  playGame('Answer "yes" if the number is even, otherwise answer "no".', questionsAndAnswers);  
};
