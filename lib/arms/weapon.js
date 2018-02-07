'use strict';

const roll = require('../dice.js');
const armory = require('./armory.js');
const attack = require('../attack.js');

module.exports = class {
  constructor (name) {
    this.hp = armory[name].hp;
    this.sr = armory[name].sr;
    this.enc = armory[name].enc;
    this.name = name;
    this.type = armory[name].type;
    this.damage = {
      rolls: armory[name].roll.num,
      die: armory[name].roll.die,
      bonus: armory[name].roll.bonus
    }
    this.mastery = armory[name].mastery;
  }
  use (goal, bonus) {
    attack.check( goal, bonus, this.type )
    let damage = roll.dice(this.damage.rolls, this.damage.die, this.damage.bonus);
    let location = attack.body[roll.die(20)];
  }
}
