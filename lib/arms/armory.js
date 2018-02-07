'use strict';

module.exports = {
  spear: {
    damage:
  }
}

// TODO add a hash table with every weapon. Then, for damage, use name as an argument to find the correct damage


// NOTE use these as reference

let Weapon = function (name, strRequirement, dexRequirement, damage, hp, mastery, cost, enc, length, sr, q1Training, q2Training, q3Training) {
  this.name = name;
  this.strRequirement = strRequirement;
  this.dexRequirement = dexRequirement;
  this.damage = damage;
  this.type = type;
  this.roll = {
    num: something,
    die: sides,
    bonus: something
  }
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
