'use strict';

const roll = require('./dice.js');
const fumble = require('./fumble.js');

const attack = module.exports = {};

attack.location = () => body[roll.die(20)];

attack.check = (goal, bonus, impaling) => {
  let attackRoll = roll.die(100, (bonus * -1));
  switch (true) {
    case attackRoll <= goal: return 'success';
    case attackRoll <= (goal / 5) && impaling: return 'impalement';
    case attackRoll <= (goal / 20): return 'critical success';
    case attackRoll >= (100 - ((100 - goal) / 5)): return fumble();
    default: return 'failure';
  }
}

attack.damage = (weaponName) => armory[weaponName].damage;
