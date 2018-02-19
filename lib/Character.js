/* RuneQuest Character Sheet **************************************************
* This web app is designed to act as a character sheet for the RPG RuneQuest. *
* The user creates a character by going through the options provided by the   *
* base rules of the game. Other attributes are then calculated from those. In *
* the end, the character will be able to engage in combat and level up.       *
****************************************************************/ 'use strict';

const beastiary = JSON.parse( require('../storage/beastiary.json'));
const Attributes = require ('./Attributes.js');
const Skills = require('./Skills.js');
const roll = require ('./dice.js');
const cults = JSON.parse( require ('../storage/cults.json') )
const check = require ('./check.js');

module.exports = class {
  constructor () {
    this.name;
    this.species;
    this.background;
    this.sex;
    this.age;
    this.nationality;
    this.cult;
    this.cultStatus = 'outsider';
    this.attributes;
    this.hp;
    this.pp;
    this.body;
    this.bodyType;
    this.skills = new Skills ();
    this.learnBonus = 0;
  }
  setName (name) {this.name = name};
  setSex (sex) {this.sex = sex};
  setAge (age) {this.age = age};
  setBackground (background) {this.background = background};
  setNationality (nationality) {this.nationality = nationality};
  setCult (cultName) {this.cult = cults[cultName]};
  setStatus (title) {this.cultStatus = title};

  setAttributes (str, con, siz, int, pow, dex, cha) {
    this.attributes = {
      str: str, con: con, siz: siz, int: int, pow: pow, dex: dex, cha, cha
    }
    this.pp = this.attributes.pow;
  }
  randomAttributes () {
    this.attributes = new Attributes (this.speciesAttributes);
    setHealthBonus (this.attributes.siz, this.attributes.pow)
  }
  setHealthBonus (size, power) {
    let sizeBonus = (size >> 2) + (size & 1) - 3;
    return power <= 4 ? -1 + sizeBonus
      : (5 <= power && power <= 16) ? sizeBonus
        : ((power >> 2) + (power & 1)) - 4 + sizeBonus;
  }
  randomBackground () {
    this.background = new Background ();
  }
  setSpecies (species) {
    newSpecies = beastiary[species];
    this.species = newSpecies.name;
    this.bodyType = newSpecies.body_type;
    this.moveRate = newSpecies.movement;
    this.skills.updateSpecies(newSpecies.name);
    this.speciesAttributes = new Attributes (newSpecies.attributes);
    updateAttributes();

    // TODO create an array in beastiary.js for skill increases and activate them here
  }
  updateAttributes () {
    this.learnBonus = this.attributes.int < 9 ? (9 - this.attributes.int) * -3
      : this.attributes.int > 12 ? (this.attributes.int - 12) * 3
        : 0;
    this.body = new Body(this.hitpoint) // TODO update hit points. Also, differentiate between current and max hp values
  }
  increaseAttribute (name) {
    
  }
  increaseSkills () {
    this.skills.increase(this.learnBonus)
  }
}
