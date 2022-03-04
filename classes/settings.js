let gameOptions = {
  gemSize: 100,
  fallSpeed: 100,
  destroySpeed: 200,
  offsetX: 50,
  offsetY: 250,
  gameMode: 'time', //moves, challenge
  defaultTime: 60,



}


let gameSettings;
var defaultValues = {
  mostDotsMoves: 0,
  mostDotsTime: 0,
  levelStatus: [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,-1,-1,-1,-1,-1,-1,-1,-1],
  totalSquares: 0,
  group: 0,
  currentLevel: 0
}


let blockColors = [
0x7393B3,
0x5F9EA0,
0x00A36C,
0x008080,
0xE97451,
0xC04000,
0x967969,
0x818589,
0x7393B3,
0x097969,
0x5F8575,
0x4F7942,
0x2AAA8A,
0xC1E1C1,
0xCC5500,
0xD27D2D,
0xDE3163,
0xC21E56,
0xAA336A,
0xBDB5D5,
0xC41E3A,
0xE30B5C
]
let bgColors = [
0x000000,
0x36454F,
0x023020,
0x28282B,
0x353935,
0x483248,
0x51414F,
0x253E28,
0x17162F,
0x340237,
]
// game states

const WAITING_FOR_PLAYER_INPUT = 0;
const PLAYER_IS_AIMING = 1;
const BALLS_ARE_RUNNING = 2;
const ARCADE_PHYSICS_IS_UPDATING = 3;
const PREPARING_FOR_NEXT_MOVE = 4;
const ADJUSTING_POWER = 5;
const BALL_IN_HAND = 6;
gameState = WAITING_FOR_PLAYER_INPUT;
//gameState = BALL_IN_HAND;