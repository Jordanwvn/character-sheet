'use strict';

const roll = require('../dice.js');
const armoryJSON = require('../storage/armory.json');
const Attack = require('./Attack.js');

const armory = JSON.parse(armoryJSON);

module.exports = class {
  constructor (name) {
    this.hp = armory[name].hp;
    this.sr = armory[name].sr;
    this.enc = armory[name].enc;
    this.name = name;
    this.impaling = armory[name].impaling;
    this.damage = {
      rolls: armory[name].roll.num,
      die: armory[name].roll.die,
      bonus: armory[name].roll.pls
    }
    this.mastery = armory[name].mastery;
  }
  use (goal, bonus) {
    return new Attack (goal, this, bonus);
  }
}
