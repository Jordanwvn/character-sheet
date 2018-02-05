'use strict';

const roll = require('../dice.js');
const spell = require('./spell.js');

module.exports = () => {
  let index = roll.die (100);
  let poisons = ['poison gas', 'poison gas', 'herbal poison', 'mineral poison'];
  let venoms = ['manticore venom', 'wyvern venom', 'spider venom', 'spider venom'];

  switch (true) {
    case  1 < index && index <= 10: return `potion of healing ${roll.die(6)} damage to the body\'s worst wound`;
    case 10 < index && index <= 25: return `potion of ${spell().name} with two hour duration`;
    case 25 < index && index <= 55: return `bottle of ${roll.dice(2, 6, 3)} potency ${poisons[roll.die (4, -1)]}`;
    case 55 < index && index <= 65: return `${venoms[roll.die (4, -1) ]} blade venom of ${roll.dice(2, 6, 3)} potency`;
    case 65 < index && index <= 80: return `antidote of ${ poisons.concat(venoms).slice(1, 7)[roll.die (6, -1)] }`;
    case 80 < index && index <= 90: return 'special potion at referee\'s discretion';
    default: return `spoiled potion: treated like poison of ${roll.dice(2, 6, 3)} yet indestinguishable from a normal potion`;
  }
}
