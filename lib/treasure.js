'use strict';

const random = require ('./random.js');
const check = require('./check.js');
const gem = require('./treasure/gem.js');
const crystal = require('./treasure/crystal');

const treasure = module.exports = {};

treasure.table = [ // copper, silver, gold, gems, then special items
  [[75, 1, d100], [75, 1, d10], [50, 1, d6], [50, 1], [5, 1]],
  [[85, 1, d100], [85, 1, d100], [65, 1, d10], [65, 1], [10, 1]],
  [[95, 2, d100], [95, 2, d100], [75, 1, d10], [75, 1], [15, 1]],
  [[95, 4, d100], [95, 3, d100], [90, 1, d20], [90, 1], [20, 1]],
  [[95, 8, d100], [95, 4, d100], [95, 2, d20], [95, 1], [25, 1]],
  [[95, 10, d100], [95, 5, d100], [95, 3, d20], [95, 1], [30, 1]],
  [[95, 10, d100], [95, 6, d100], [95, 5, d20], [95, 2], [35, 1]],
  [[95, 20, d100], [95, 10, d100], [95, 2, d100], [95, 2], [40, 1]],
  [[95, 20, d100], [95, 10, d100], [95, 3, d100], [95, 2], [45, 1]],
  [[95, 30, d100], [95, 20, d100], [95, 4, d100], [95, 3], [50, 1]]
];

// TODO refactor into switch / case
treasure.check = goal => {
  let results = check.percentage (goal);
  let pass = results[0];
  let passPercent = results[1];
  return pass ? (
    passPercent <= 5 ? 10
    : passPercent <= 10 ? 5
    : passPercent <= 12.5 ? 4
    : passPercent <= 25 ? 3
    : passPercent <= 50 ? 2
    : 1
  ) : 0
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

  for (gems; gems > 0; gems--) gemOutput += `, ${gem()}` // for every gem, generate a gem
  for (specialItems; specialItems > 0; specialItems--) specialItemsOutput = `, ${random.specialItem()}`// if there is a special item, make it
  
  return `${clacks} clacks, ${lunars} lunars, ${wheels} wheels${gemOutput}${specialItemsOutput}`; // return everything
}
