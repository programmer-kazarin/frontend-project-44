import readlineSync from 'readline-sync';
import greet from './cli.js';

const readAnswer = () =>  readlineSync.question('Your answer: ');

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

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
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
        }
    }    
    console.log(`Congratulations, ${playerName}!`);
};

export default () => {
    const playerName = greet();
    playEven(playerName);
};