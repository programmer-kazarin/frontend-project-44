import playGame from '../index.js';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

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

export default () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    const round = {
      question: number,
      answer: isPrime(number),
    };
    questionsAndAnswers.push(round);
  }

  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', questionsAndAnswers);
};
