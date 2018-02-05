'use strict';

const roll = require('../dice.js');

module.exports = () => {
  let index = roll.die(100);
  let randomAttributesArray = ['strength', 'constitution', 'dexterity', 'charisma'];
  let randomSkillArray = ['knowledge', 'perception', 'manipulation', 'manipulation', 'stealth', 'stealth'];

  switch (true) {
    case index === 1:
      return 'special scroll at referee\'s discretion';
    case  1 < index && index <= 15:
      return `scroll of increasing ${randomAttributesArray[roll.die(4)]} over ${roll.die(20)} weeks`;
    case 15 < index && index <= 30:
      return 'letter of credit, deed, or valuable historical knowledge';
    case 30 < index && index <= 50:
      return `secret technique scroll giving a ${roll.die(4) * 5}% increase in any weapon`; // TODO? implemet weapons table
    case 50 < index && index <= 65:
      return `scroll holding the secrets of using ${randomSkillArray[roll.die(6)]} and increasing all related skills by ${roll.die(4) * 5}%`;
    case 65 < index && index <= 75:
      return 'map of an area which seems quite interesting'
    default:
      return 'seemingly useless scroll that\'s not even readable';
  }
}
