'use strict';

const beastiary = JSON.parse( require('../storage/beastiary.json') );

module.exports = class {
  constructor(name) {
    this.name = beastiary[name].name;
    this.bonusAttributes = beastiary[name].attributes;
    this.bonusSkills = beastiary[name].skills;
    this.bonusSpells = beastiary[name].spells;
    this.bonusArmor = beastiary[name].armor;
  }
}
