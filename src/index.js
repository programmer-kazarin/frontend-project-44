import readlineSync from 'readline-sync';
import greet from './cli.js';

export default (question, questionsAndAnswers) => {
  const playerName = greet();
  console.log(question);
  for (const round of questionsAndAnswers) {
    console.log(`Question: ${round.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === round.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${round.answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
