'use strict';

const roll = require('../dice.js');
const spellbook = require('../spellbook.js'); // TODO should be JSON

const spell = module.exports = {};

spell.random = () => {
  battleMagicSpellbook[ roll.die(50) ] // TODO needs formatting
}
