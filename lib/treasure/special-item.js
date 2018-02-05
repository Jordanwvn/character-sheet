'use strict';

const crystal = require('./crysal.js');
const roll = require('../dice.js');
const scroll = require('./scroll.js')

module.exports = () => {
  let index = roll.die (100);
  return index <= 35 ? scroll()
    : index <= 60 ? potion()
      : index <= 85 ? `spell of ${spell.random().name}`
        : crystal(); //TODO: add functionality to choose between this and an item with a spell matrix
}
