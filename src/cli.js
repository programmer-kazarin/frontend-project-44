import readlineSync from 'readline-sync';

const greet = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};

export {greet};