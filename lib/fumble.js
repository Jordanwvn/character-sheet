'use strict';

const roll = require('./dice.js');

const body = // hit location table

const fumble = module.exports = function () {
  let index = roll.die(100);
  switch (true) {
    case index <= 5:
      return `lose next parry`;
    case  5 < index && index <= 10:
      return `lose next attack`;
    case 10 < index && index <= 15:
      return `lose next attack and parry`;
    case 15 < index && index <= 20:
      return `lose next attack, parry, and any defense bonus aid`;
    case 20 < index && index <= 25:
      return `lose next ${roll.die(3)} attacks`;
    case 25 < index && index <= 30:
      return `lose next ${roll.die(3)} attacks and parries`;
    case 30 < index && index <= 35:
      return `shield strap breaks; lose shield immediately`;
    case 35 < index && index <= 40:
      return `shield strap breaks; lose shield immediately and next attack`;
    case 40 < index && index <= 45:
      return `armor strap breaks; ${body[roll.die(20)]} armor is lost`;
    case 45 < index && index <= 50:
      return `armor strap breaks; ${body[roll.die(20)]} armor is lost and lose next attack and parry`;
    case 50 < index && index <= 55:
      return `fall and lose parry this round (takes ${roll.die(3)} rounds to get up)`;
    case 55 < index && index <= 60:
      return `twist ankle; lose 1/2 speed for ${roll.dice(5, 10)} rounds`;
    case 60 < index && index <= 63:
      return `twist ankle and fall; takes ${roll.die(3)} rounds to get up and lose 1/2 speed for ${roll.dice(5, 10)} rounds`;
    case 63 < index && index <= 67:
      return `vision impaired; lose 25% effectiveness on attacks and parries (takes ${roll.die(3)} rounds unengaged to fix)`;
    case 67 < index && index <= 70:
      return `vision impaired; lose 50% effectiveness on attacks and parries (takes ${roll.die(6)} rounds unengaged to fix)`;
    case 70 < index && index <= 72:
      return `vision blocked; lose all attacks and parries (takes ${roll.die(6)} rounds unengaged to fix)`;
    case 72 < index && index <= 74:
      return `distracted; foes attack at +25% effectiveness for next round`;
    case 74 < index && index <= 78:
      return `weapon dropped (takes ${roll.die(3)} rounds to recover)`;
    case 78 < index && index <= 82:
      let direction;
      switch (roll.die(8)) {
        case 1: direction = 'north';
        case 2: direction = 'northeast';
        case 3: direction = 'east';
        case 4: direction = 'southeast';
        case 5: direction = 'south';
        case 6: direction = 'southwest';
        case 7: direction = 'west';
        case 8: direction = 'northwest';
      }
      return `weapon knocked away ${roll.die(6)} meters ${direction}`;
    case 82 < index && index <= 86:
      return `weapon shattered (100% chance if unenchanted, 10% less for each point of battle magic spell on weapon, and 20% less for each point of rune magic spell on weapon)`;
    case 86 < index && index <= 89:
      return `hit nearest friend (hit self if no friend near); do rolled damage`;
    case 89 < index && index <= 91:
      return `hit nearest friend (hit self if no friend near); do full possible damage`;
    case index === 92:
      return `hit nearest friend (hit self if no friend near); do critical hit`;
    case 92 < index && index <= 95:
      return `hit self; do rolled damage`;
    case 95 < index && index <= 97:
      return `hit self; do full possible damage`;
    case index === 98:
      return `hit self; do critical hit`;
    case index === 99:
      return `blow it; ${fumble()}, ${fumble()}`;
    case index === 100:
      return `blow it badly; ${fumble()}, ${fumble()}, and ${fumble()}`;
  }
}
