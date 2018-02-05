'use strict';

const check = require('./check.js');
const gem = require('./treasure/gem.js');
const crystal = require('./treasure/crystal');
const specialItem = require('./treasure/special-item.js');

const treasure = module.exports = {};

treasure.table = [ // copper, silver, gold, gems, then special items
  [[75,  1, 100], [75,  1,  10], [50, 1,   6], [50, 1], [ 5, 1]],
  [[85,  1, 100], [85,  1, 100], [65, 1,  10], [65, 1], [10, 1]],
  [[95,  2, 100], [95,  2, 100], [75, 1,  10], [75, 1], [15, 1]],
  [[95,  4, 100], [95,  3, 100], [90, 1,  20], [90, 1], [20, 1]],
  [[95,  8, 100], [95,  4, 100], [95, 2,  20], [95, 1], [25, 1]],
  [[95, 10, 100], [95,  5, 100], [95, 3,  20], [95, 1], [30, 1]],
  [[95, 10, 100], [95,  6, 100], [95, 5,  20], [95, 2], [35, 1]],
  [[95, 20, 100], [95, 10, 100], [95, 2, 100], [95, 2], [40, 1]],
  [[95, 20, 100], [95, 10, 100], [95, 3, 100], [95, 2], [45, 1]],
  [[95, 30, 100], [95, 20, 100], [95, 4, 100], [95, 3], [50, 1]]
];

treasure.check = goal => {
  let results = goal / die.roll(100);
  switch (true) {
    case  1 <= results && results <  2: return 1; // pass
    case  2 <= results && results <  4: return 2; // 1/2
    case  4 <= results && results <  8: return 3; // 1/4
    case  8 <= results && results < 10: return 4; // 1/8
    case 10 <= results && results < 20: return 5; // 1/10
    case 20 <= results: return 10; // 1/20
    default: return 0 // fail
  }
}

treasure.roll = (treasureInput) => {
  treasure.check (treasureInput[0]) * roll.dice (treasureInput[1], treasureInput[2]);
}

treasure.return = treasureValue => {
  if (!treasureValue) return false;

  let clacks = 0, lunars = 0, wheels = 0, gems = 0, specialItems = 0;
  let gemOutput = '', specialItemsOutput = '';
  let treasureIndex = ~~(treasureValue / 10);
  clacks += treasure.roll(treasure.table[treasureIndex][0]);
  lunars += treasure.roll(treasure.table[treasureIndex][1]);
  wheels += treasure.roll(treasure.table[treasureIndex][2]);
  gems += treasure.check (treasure.table[treasureIndex][3][0]) * treasure.table[treasureIndex][3][1];
  specialItems += treasure.check (treasure.table[treasureIndex][4][0]) * treasure.table[treasureIndex][4][1];

  for (gems; gems > 0; gems--) gemOutput += `, ${gem()}`; // for every gem, generate a gem
  for (specialItems; specialItems > 0; specialItems--) specialItemsOutput = `, ${specialItem()}`; // if there is a special item, make it

  return `${clacks} clacks, ${lunars} lunars, ${wheels} wheels${gemOutput}${specialItemsOutput}`; // return everything
}
