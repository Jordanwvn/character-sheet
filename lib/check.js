'use strict';

const roll = require('./dice.js');
const check = module.exports = {};

check.skill = (goal) => roll.die(100) <= goal ? true : false;

check.treasure = (goal) => goal / roll.die(100);

// check.percentage = (goal) => {
//   let result = roll.die (d100);
//   let percentage = ~~((result / goal) * 100) + (result/goal) % 2;
//   return result <= goal ? [true, percentage] : [false, percentage];
// }

check.resistance = (attPow, defPow) => {
  check.skill( 50 + (5 * (attPow - defPow)) ) ? 'attack successful' : 'attack unsuccessful';
}
