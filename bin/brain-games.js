#!/usr/bin/env node
import {readName} from '../src/cli.js';
import {playEven} from './brain-even.js';

console.log('Welcome to the Brain Games!');
const playerName = readName();
console.log(`Hello, ${playerName}!`);
playEven(playerName);