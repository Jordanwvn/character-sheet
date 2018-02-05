'use strict';

const crystal = require ('./crystal.js');
const roll = require('../dice.js');

module.export = function () => {
  let index = roll.die (100);
  let gem = attributeTable (index);
  return index === 1 ? `${random.specialItem()} worth ${attributeTable (index)[1]} lunars`
  : index === 2 ? crystal()
  : `${gem[0]} worth ${gem[1]} lunars`;
}

let attributeTable = index => {
  switch (true) {
    case  0 < index && index <=  3: return ['ancient treasure', (roll.die (d20) * 1e4)]
    case  3 < index && index <=  5: return ['heirloom jewelry', (roll.dice (3, d6) * 1e3)]
    case  5 < index && index <= 10: return ['superb gemstone', (roll.die (d10) * 1e3)]
    case 10 < index && index <= 15: return ['excellent jewelry', (roll.die (d6) * 1e3)]
    case 15 < index && index <= 20: return ['excellent gemstone', (roll.dice (3, d6) * 100)]
    case 20 < index && index <= 30: return ['very good jewelry', roll.dice (12, d100)]
    case 30 < index && index <= 40: return ['very good gemstone', roll.dice (6, d100)]
    case 40 < index && index <= 50: return ['good jewelry', roll.dice (10, d20)]
    case 50 < index && index <= 60: return ['good gemstone', roll.dice (2, d100)]
    case 60 < index && index <= 70: return ['costume jewelry', roll.dice (5, d20)]
    case 70 < index && index <= 80: return ['flawed gemstone', roll.die (d100)]
    case 80 < index && index <= 90: return ['trade junk jewelry', roll.die (d20)]
    case 90 < index && index <= 95: return ['semi-precious stones', roll.die (d10)]
    default: return ['pretty stones', 0];
  }
}
