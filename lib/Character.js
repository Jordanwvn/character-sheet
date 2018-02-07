/* RuneQuest Character Sheet **************************************************
* This web app is designed to act as a character sheet for the RPG RuneQuest. *
* The user creates a character by going through the options provided by the   *
* base rules of the game. Other attributes are then calculated from those. In *
* the end, the character will be able to engage in combat and level up.       *
****************************************************************/ 'use strict';


/***** OBJECT CONSTRUCTORS *****/


const random = require ('./random.js');
const beastiary = require ('./beastiary.js');
const Attributes = require ('./Attributes.js');
const roll = require ('./dice.js');

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
    this.skills = null;
    this.skillsToIncrease = [];
    this.learnBonus = null;
  }
  setName (name) {
    this.name = name;
  }
  setBackground () {
    this.background = background();
  }
  setSpecies (species) {
    this.species = beastiary[species].name;
    this.moveRate = beastiary[species].moveRate;
    // TODO create an array in beastiary.js for skill increases and activate them here
  }
  setAttributes () {
    this.attributes = new Attributes (this.species.attributeValues);
    this.learnBonus = this.attributes.int < 9 ? (9 - this.attributes.int) * -3
      : this.attributes.int > 12 ? (this.attributes.int - 12) * 3
        : 0;
    this.body = new Body(this.hitpoint) // TODO update hit points. Also, differentiate between current and max hp values
  }
}


var BodyPart = function (name, health, armor) {
  this.name = name;
  this.health = health;
  this.armor = armor;
}

var Body = function (hitPoints) {
  this.rightLeg = new BodyPart ('right leg', partHP(hitPoints, 'rl'), 0); // create the right leg
  this.leftLeg = new BodyPart ('left leg', partHP(hitPoints, 'll'), 0); // create the left leg
  this.abdomen = new BodyPart ('abdomen', partHP(hitPoints, 'a'), 0); // create the abdomen
  this.chest = new BodyPart ('chest', partHP(hitPoints, 'c'), 0); // create the chest
  this.rightArm = new BodyPart ('right arm', partHP(hitPoints, 'ra'), 0); // create the right arm
  this.leftArm = new BodyPart ('left arm', partHP(hitPoints, 'la'), 0); // create the left arm
  this.head = new BodyPart ('head', partHP(hitPoints, 'h'), 0); // create the head
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

background = () => {
  let index = roll.die (100);
  let income = roll.die (100);
  switch (true) {
    case 20 < index && index <=  60: return ['townsman', roll.dice (2, 100), 0];
    case 60 < index && index <=  85: return ['barbarian', income, 0];
    case 85 < index && index <=  95: return ['poor noble', income * 5, income * 5];
    case 95 < index && index <=  99: return ['rich noble', income * 10, income * 10];
    case 99 < index && index <= 100: return ['very rich noble', income * 20, income * 20];
    default: return ['peasant', income, 0];
  }
}


// let learningBonus = int => {
//   return int < 9 ? (9 - int) * -3 // if intelligence less than 9? Set a negative learning bonus
//   : int > 12 ? (int - 12) * 3 // otherwise, is intelligence greater than 12? Set a positive learning bonus
//   : 0 // otherwise, set the learning bonus to 0.
// }

let healthBonus = (size, power) => {
  let sizeBonus = Math.ceil(size / 4) - 3; // set size bonus to size divided by 4, rounded up
  return power <= 4 ? -1 + sizeBonus // power less than 4? Return -1 plus size bonus
  : (5 <= power && power <= 16) ? 0 + sizeBonus // otherwise, poser between 5 and 16? Return size bonus
  : ((power >> 2) + power % 2) - 2 + sizeBonus; // otherwise, return power divided by four, minus 2, plus size bonus
}

let partHP = (hitPoints, part) => {
  let index = ~~(hitPoints / 3) + hitPoints % 2; // let index equal hit points divided by 3, rounded up
  if (index === 0) index ++; // if index is 0, increase it by one
  return (part === 'rl' || part === 'll' || part === 'h' || part === 'a') ? index // for one of these parts, return index
  : (part === 'ra' || part === 'la') ? index - 1 // otherwise, for these other parts, return index minus 1
  : index + 1 // otherwise, return index plus 1
}
