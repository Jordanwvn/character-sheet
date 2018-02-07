'use strict';

const roll = require('./dice.js');
const armory = require('./arms/armory.js');

const attack = module.exports = {};

const body = {
   1: 'right leg',
   2: 'right leg',
   3: 'right leg',
   4: 'right leg',
   5: 'left leg',
   6: 'left leg',
   7: 'left leg',
   8: 'left leg',
   9: 'abdomen',
  10: 'abdomen',
  11: 'abdomen',
  12: 'chest',
  13: 'right arm',
  14: 'right arm',
  15: 'right arm',
  16: 'left arm',
  17: 'left arm',
  18: 'left arm',
  19: 'head',
  20: 'head'
}

attack.location = () => body[roll.die(20)];

attack.check = (goal, bonus, weaponType) => {
  let roll = roll.die(100, (bonus * -1));
  switch (true) {
    case roll <= goal: return 'success';
    case roll <= (goal / 5) && (weaponType === 'thrusting'): return 'impalement';
    case roll <= (goal / 20): return 'critical success';
    case roll >= (100 - ((100 - goal) / 5)): return 'fumble';
    default: return 'failure';
  }
}

attack.damage = (weaponName) => armory[weaponName].damage;
