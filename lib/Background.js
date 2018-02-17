'use strict';

const roll = require('./dice.js');

module.exports = function () {
  let index = roll.die (100);
  switch (true) {
    case 20 < index && index <=  60: {
      this.status = 'townsman';
      this.wealth = roll.dice (2, 100);
      this.income = 0;
    }
    case 60 < index && index <=  85: {
      this.status = 'barbarian';
      this.wealth = roll.die(100);
      this.income = 0;
    }
    case 85 < index && index <=  95: {
      this.status = 'poor noble';
      this.wealth = roll.die(100) * 5;
      this.income = roll.die(100) * 5;
    }
    case 95 < index && index <=  99: {
      this.status = 'rich noble';
      this.wealth = roll.die(100) * 10;
      this.income = roll.die(100) * 10;
    }
    case 99 < index && index <= 100: {
      this.status = 'very rich noble';
      this.wealth = roll.die(100) * 20;
      this.income = roll.die(100) * 20;
    }
    default: {
      this.status = 'peasant';
      this.wealth = roll.die(100);
      this.income = 0;
    }
  }
}
