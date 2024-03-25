import readlineSync from 'readline-sync';
import greet from './cli.js';

export default (question, questionsAndAnswers) => {
  const playerName = greet();
  console.log(question);
  for (let i = 0; i < questionsAndAnswers.length; i += 1) {
    console.log(`Question: ${questionsAndAnswers[i].question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionsAndAnswers[i].answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionsAndAnswers[i].answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
