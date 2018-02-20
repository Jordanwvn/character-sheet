'use strict';

const roll = require('./dice.js');

module.exports = function (rolls) {
  this.str = roll.dice( rolls.str[0], rolls.str[1], rolls.str[2] );
  this.con = roll.dice( rolls.con[0], rolls.con[1], rolls.con[2] );
  this.siz = roll.dice( rolls.siz[0], rolls.siz[1], rolls.siz[2] );
  this.int = roll.dice( rolls.int[0], rolls.int[1], rolls.int[2] );
  this.pow = roll.dice( rolls.pow[0], rolls.pow[1], rolls.pow[2] );
  this.dex = roll.dice( rolls.dex[0], rolls.dex[1], rolls.dex[2] );
  this.cha = roll.dice( rolls.cha[0], rolls.cha[1], rolls.cha[2] );
}
