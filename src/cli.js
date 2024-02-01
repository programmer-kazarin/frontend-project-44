import readlineSync from 'readline-sync';

const readName = () =>  readlineSync.question('May I have your name? ');

const readAnswer = () =>  readlineSync.question('Your answer: ');

export {readName, readAnswer};