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
const check = require ('./check.js');

module.exports = class {
  constructor () {
    this.name = null;
    this.species = null;
    this.background = null;
    this.sex = null;
    this.age = null;
    this.nationality = null;
    this.cults = null;
    this.cultStatus = null;
    this.attributes = null;
    this.skills = new Skills ();
    this.learnBonus = 0;
  }
  setName (name) {
    this.name = name;
  }
  setSex (sex) {
    this.sex = sex;
  }
  setAge (age) {
    this.age = age;
  }
  setAttributes () {
  }
  setBackground () {
    this.background = new Background ();
  }
  setSpecies (species) {
    this.species = beastiary[species].name;
    this.moveRate = beastiary[species].movement;
    this.skills.updateSpecies(beastiary[species].name);
    this.attributes = new Attributes (beastiary[species].attributes);
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

var Character = function (name, species, sex, age, nationality, weapons, armor, spells) {
  this.name = name;
  this.species = species;
  this.background = background();
  this.sex = sex;
  this.age = age;
  this.nationality = nationality;
  this.cults = 'none';
  this.cultStatus = 'none';
  this.attributes = new Attributes (random.attributes (this.species.attributeValues));
  this.skills = new Skills (this.attributes);
  this.skillsToIncrease = [];
  this.learnBonus = learningBonus (this.attributes.int);
  this.weapons = weapons; // array
  this.armor = armor; // array
  this.spells = spells; // array
  this.hitPoints = this.attributes.con + this.hpBonus;
  this.hpBonus = healthBonus (this.attributes.siz, this.attributes.pow);
  this.body = new Body (this.hitPoints);
}


/***** HELPER FUNCTIONS *****/

let healthBonus = (size, power) => {
  let sizeBonus = (size >> 2) + (size & 1) - 3; // set size bonus to size divided by 4, rounded up
  return power <= 4 ? -1 + sizeBonus // power less than 4? Return -1 plus size bonus
    : (5 <= power && power <= 16) ? sizeBonus // otherwise, power between 5 and 16? Return size bonus
      : ((power >> 2) + (power & 1)) - 4 + sizeBonus; // otherwise, return power divided by four, minus 2, plus size bonus
}
