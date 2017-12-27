/* RuneQuest Character Sheet **************************************************
* This web app is designed to act as a character sheet for the RPG RuneQuest. *
* The user creates a character by going through the options provided by the   *
* base rules of the game. Other attributes are then calculated from those. In *
* the end, the character will be able to engage in combat and level up.       *
****************************************************************/ 'use strict';


/***** OBJECT CONSTRUCTORS *****/


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
  this.background = randomBackground();
  this.sex = sex;
  this.age = age;
  this.nationality = nationality;
  this.cults = 'none';
  this.cultStatus = 'none';
  this.attributes = new Attributes (randomAttributes (this.species.attributeValues));
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


/***** OBJECT METHODS *****/


Spell.prototype.useOnSelf = function () { // if the spell is used on the user
  this.focused = false; // the spell does not need to be focused
} // end useOnSelf method


Item.prototype.removeIfEmpty = function () {
  this.quantity === 0 && delete this; // same as a single line if statement
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


let randomHitLocation = (target) => {
  let locationRoll = roll(1, d20); // roll a twenty-sided die, then
  for (let part in target.body) { // for every part of the body...
    for (let hit in target.body[part].hitNumbers) { // and for every hit number of that part...
      if (locationRoll === target.body[part].hitNumbers[hit]) return target.body[part].name  // if the part is hit, return the part
    } // end for (hit number)
  } // end for (part)
} // end randomHitLocation function

let resistanceCheck = (attackingPower, defendingPower) => {
  let difference = 50 + (5 * (attackingPower - defendingPower)); // set difference between attacking and defending
  return check (difference)[0] === true ? 'attack successful' : 'attack unsuccessful'; // return the result of a check
}

let resolveSkillIncreases = (player) => {
  for (let validSkills in player.skillsToIncrease) { // fo each skill set to be increased...
    let currentSkill = player.skillsToIncrease[validSkills]; // find the skill at the current index
    return check (100 - player.skills[currentSkill] + player.learnBonus)[0] === true ? ( // if the skill passes increasing,
      player.skills[currentSkill] += 5, // increase the skill by 5%
      player.skillsToIncrease.splice(validSkills, 1), // remove it from the array of skills to be increased
      `${currentSkill} was increased to ${player.skills[currentSkill]}` // return that it was increased
    ) : `${currentSkill} was not increased`; // if increasing failed, return that message
  } // end loop
} // end function
