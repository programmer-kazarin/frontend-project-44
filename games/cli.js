import readlineSync from 'readline-sync';

const readName = () => readlineSync.question('May I have your name?');

export default () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readName();
  console.log(`Hello, ${playerName}`);
  return playerName;
};
