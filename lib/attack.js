'use strict';

const roll = require('./dice.js');

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

const armory = {
  spear: {
    damage:
  }
}


// TODO add a hash table with every weapon. Then, for damage, use name as an argument to find the correct damage

attack.location = () => body[roll.die(20)];

attack.check = (goal, bonus, weaponType) => {
  let roll = roll.die(100, (bonus * -1));
  switch (true) {
    case roll <= goal: return 'success';
    case roll <= (goal / 5) && (weaponType === 'thrusting'): 'impalement';
    case roll <= (goal / 20): return 'critical success';
    case roll >= (100 - ((100 - goal) / 5)): 'fumble';
    default: 'failure';
  }
}

attack.damage = (weaponName) => armory[weaponName].damage;



// TODO use these as reference

let Weapon = function (name, strRequirement, dexRequirement, damage, hp, mastery, cost, enc, length, sr, q1Training, q2Training, q3Training) {
  this.name = name;
  this.strRequirement = strRequirement;
  this.dexRequirement = dexRequirement;
  this.damage = damage;
  this.hp = hp;
  this.mastery = mastery;
  this.cost = cost;
  this.enc = enc;
  this.length = length;
  this.sr = sr;
  this.q1Training = q1Training;
  this.q2Training = q2Training;
  this.q3Training = q3Training;
}

let Shield = function (size, strRequirement, absorbs, mastery, cost, enc, q1Training, q2Training, q3Training) {
  this.size = size;
  this.strRequirement = strRequirement;
  this.absorbs = absorbs;
  this.mastery = mastery;
  this.cost = cost;
  this.enc = enc;
  this.q1Training = q1Training;
  this.q2Training = q2Training;
  this.q3Training = q3Training;
}
