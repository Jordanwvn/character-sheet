'use strict';

const roll = require('./dice.js');
const locationsJSON = require('../storage/locations.json');
const locations = JSON.parse(locationsJSON);

module.exports = class {
  constructor (location) {
    this.index = roll.die(20) - 1
    this.creature = location.results[this.index][0]
    this.dice = location.results[1]
  }
  encounter (area) {
    let index = roll.die(20) - 1;
    let creature = locations[area].results[index][0];
    let dice = locations[area].results[index][1];
    return roll.die(100) < locations[area].chance ?
      `${roll.die(dice)} ${creature}` : 'nothing found';
  }
  response (predisposition) {
    let index = roll.die(100);
    switch (predisposition) {
      case 'friendly': return disposition(index, 15, 75, 85, 95);
      case 'hostile': return disposition(index, 5, 15, 25, 85);
      default: return disposition(index, 10, 30, 70, 90);
    }
  }
  disposition (index, a, b, c, d) {
    switch (true) {
      case index <= a:
        return 'encountered creatures are extremely friendly to party, and very ameable to suggestions';
      case a < index && index <= b:
        return 'encountered creatures are willing to let the party go its own way; they will go theirs';
      case b < index && index <= c:
        return 'encountered creatures are unsure and will stall for time, or for something significant or telling to occur';
      case c < index && index <= d:
        return 'encountered creatures take an active dislike of the party, just short of blind hatred';
      default:
        return 'encountered creatures cannot conceal their contempt and/or hatred for the party';
    }
  }
}
