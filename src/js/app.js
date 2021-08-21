
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

console.log('app started!!');

const game = new Game();
game.start();
