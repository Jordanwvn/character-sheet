'use strict';

const random = require('./random.js');

module.exports = function (rolls) {
  this.str = random.roll( rolls[0][0], rolls[0][1], rolls[0][2] );
  this.con = random.roll( rolls[1][0], rolls[1][1], rolls[1][2] );
  this.siz = random.roll( rolls[2][0], rolls[2][1], rolls[2][2] );
  this.int = random.roll( rolls[3][0], rolls[3][1], rolls[3][2] );
  this.pow = random.roll( rolls[4][0], rolls[4][1], rolls[4][2] );
  this.dex = random.roll( rolls[5][0], rolls[5][1], rolls[5][2] );
  this.cha = random.roll( rolls[6][0], rolls[6][1], rolls[6][2] );
}
