/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores , roundScore , activePlayer , dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
// 輸出 1 ~ 6的變數
// dice = 6;
// math.randon() these are decimals
// math.floor() are trans integer 
// 函式會回傳無條件捨去後的最大整數。
// Answer
// Math.floor(Math.random() * 6 ) + 1
dice = Math.floor(Math.random() * 6 ) + 1;
console.log(dice);