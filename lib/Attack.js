'use strict';

const roll = require('./dice.js');

const body = { // TODO: change this to be a trait on the target
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

module.exports = function (goal, weapon, bonus) {
  let rolls = weapon.damage.rolls;
  let die = weapon.damage.die;
  let bonus = weapon.damage.bonus;

  let attack = roll.die(100, (bonus * -1));
  let location = body[roll.die(20)];

  switch (true) {
    case attack <= goal:
      return {
        damage: roll.dice(rolls, die, bonus),
        location: location
      }
    case attack <= (goal / 5) && weapon.impaling:
      return {
        damage: roll.dice(rolls, die, bonus) + (rolls * die) + bonus,
        location: location
      }
    case attack <= (goal / 20):
      return 'critical success';
    case attack <= (goal / 20) && weapon.impaling:
      return {
        damage: roll.dice(rolls, die, bonus) + (rolls * die) + bonus,
        location: location
      }
    case attack >= (100 - ((100 - goal) / 5)):
      return 'fumble'; // TODO: create fumble constructor
    default:
      return {
        damage: 0,
        location: null
      };
  }
}
