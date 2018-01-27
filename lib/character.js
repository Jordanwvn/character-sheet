/* RuneQuest Character Sheet **************************************************
* This web app is designed to act as a character sheet for the RPG RuneQuest. *
* The user creates a character by going through the options provided by the   *
* base rules of the game. Other attributes are then calculated from those. In *
* the end, the character will be able to engage in combat and level up.       *
****************************************************************/ 'use strict';


/***** OBJECT CONSTRUCTORS *****/


const random = require ('./random.js')


var BodyPart = function (name, hitNumbers, health, armor) {
  this.name = name;
  this.hitNumbers = hitNumbers;
  this.health = health;
  this.armor = armor;
}

var Body = function (hitPoints) {
  this.rightLeg = new BodyPart ('right leg', [1, 2, 3, 4], partHP(hitPoints, 'rl'), 0); // create the right leg
  this.leftLeg = new BodyPart ('left leg', [5, 6, 7, 8], partHP(hitPoints, 'll'), 0); // create the left leg
  this.abdomen = new BodyPart ('abdomen', [9, 10, 11], partHP(hitPoints, 'a'), 0); // create the abdomen
  this.chest = new BodyPart ('chest', [12], partHP(hitPoints, 'c'), 0); // create the chest
  this.rightArm = new BodyPart ('right arm', [13, 14, 15], partHP(hitPoints, 'ra'), 0); // create the right arm
  this.leftArm = new BodyPart ('left arm', [16, 17, 18], partHP(hitPoints, 'la'), 0); // create the left arm
  this.head = new BodyPart ('head', [19, 20], partHP(hitPoints, 'h'), 0); // create the head
}

var Character = function (name, species, sex, age, nationality, weapons, armor, spells) {
  this.name = name;
  this.species = species;
  this.background = random.background();
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


let learningBonus = int => {
  return int < 9 ? (9 - int) * -3 // if intelligence less than 9? Set a negative learning bonus
  : int > 12 ? (int - 12) * 3 // otherwise, is intelligence greater than 12? Set a positive learning bonus
  : 0 // otherwise, set the learning bonus to 0.
}

let healthBonus = (size, power) => {
  let sizeBonus = Math.ceil(size / 4) - 3; // set size bonus to size divided by 4, rounded up
  return power <= 4 ? -1 + sizeBonus // power less than 4? Return -1 plus size bonus
  : (5 <= power && power <= 16) ? 0 + sizeBonus // otherwise, poser between 5 and 16? Return size bonus
  : Math.ceil(power / 4) - 2 + sizeBonus; // otherwise, return power divided by four, minus 2, plus size bonus
}

let partHP = (hitPoints, part) => {
  let index = Math.ceil(hitPoints / 3); // let index equal hit points divided by 3, rounded up
  if (index === 0) index ++; // if index is 0, increase it by one
  return (part === 'rl' || part === 'll' || part === 'h' || part === 'a') ? index // for one of these parts, return index
  : (part === 'ra' || part === 'la') ? index - 1 // otherwise, for these other parts, return index minus 1
  : index + 1 // otherwise, return index plus 1
}
