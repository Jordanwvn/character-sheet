/* RuneQuest Character Sheet **************************************************
* This web app is designed to act as a character sheet for the RPG RuneQuest. *
* The user creates a character by going through the options provided by the   *
* base rules of the game. Other attributes are then calculated from those. In *
* the end, the character will be able to engage in combat and level up.       *
****************************************************************/ 'use strict';


/***** OBJECT CONSTRUCTORS *****/


let Attributes = function (attributesArray) {
  this.str = attributesArray[0]; // strength
  this.con = attributesArray[1]; // constitution
  this.siz = attributesArray[2]; // size
  this.int = attributesArray[3]; // intelligence
  this.pow = attributesArray[4]; // power
  this.dex = attributesArray[5]; // dexterity
  this.cha = attributesArray[6]; // charisma
}

let Skills = function (playerAttributes) { // take in Character.Attributes
  let str = playerAttributes.str; // get strength from the player's attributes
  let con = playerAttributes.con; // get constitution from the player's attributes
  let siz = playerAttributes.siz; // get size from the player's attributes
  let int = playerAttributes.int; // get intelligence from the player's attributes
  let pow = playerAttributes.pow; // get power from the player's attributes
  let dex = playerAttributes.dex; // get dexterity from the player's attributes
  let cha = playerAttributes.cha; // get charisma from the player's attributes

  this.combat = { // the combat section of skills
    attack: this.setValue ('low', str) + this.setValue ('high', int) + this.setValue ('low', pow) + this.setValue ('high', dex), // attack skill is initially set by checking various ability scores
    parry: this.setValue ('low', str) - this.setValue ('low', siz) + this.setValue ('low', pow) + this.setValue ('high', dex), // parry skill is initially set by checking various ability scores
    defense: this.setValue ('high', int) - this.setValue ('low', siz) + this.setValue ('low', pow) + this.setValue ('high', dex), //
    damageBonus: this.setDmgBonus(str, siz)
  };

  this.knowledge = this.setValue ('high', int) + this.setValue ('low', pow);

  this.evaluateTreasure = this.knowledge + 5,
  this.readWriteOwnLanguage = this.knowledge + 10

  this.manipulation = this.setValue ('low', str) + this.setValue ('high', int) + this.setValue ('low', pow) + this.setValue ('high', dex);

  this.armorMaking = 0,
  this.climbing = this.manipulation + 15,
  this.hideItem = this.manipulation + 10,
  this.jumping = this.manipulation + 15,
  this.lockPicking = this.manipulation + 5,
  this.mapMaking = this.manipulation + 10,
  this.riding = this.manipulation + 5,
  this.shieldMaking = 0,
  this.swimming = this.manipulation + 15,
  this.trapSetAndDisarm = this.manipulation + 5,
  this.tumbling = 0,
  this.weaponMaking = 0

  this.perception = this.setValue ('high', int) + this.setValue ('low', pow);

  this.listen = this.perception + 25,
  this.spotHiddenItem = this.perception + 5,
  this.spotTrap = this.perception + 5,
  this.tracking = this.perception + 10

  this.stealth = this.setValue ('high', int) - this.setValue ('high', siz) + this.setValue ('low', pow) + this.setValue ('high', dex);

  this.camoflauge = this.stealth + 10,
  this.hideInCover = this.stealth + 5,
  this.moveSilently = this.stealth + 5,
  this.pickPockets = this.stealth + 5

  this.oratory = this.setValue ('low', int) + this.setValue ('low', pow) + this.setValue ('high', cha);
  this.acting = this.oratory + 5
}

var BodyPart = function (name, hitNumbers, health, armor) {
  this.name = name;
  this.hitNumbers = hitNumbers;
  this.health = health;
  this.armor = armor;
}

var Body = function (hitPoints) {
  this.rightLeg = new BodyPart ('right leg', [1, 2, 3, 4], hitPoints - 4, 0); // create the right leg
  this.leftLeg = new BodyPart ('left leg', [5, 6, 7, 8], hitPoints - 5, 0); // create the left leg
  this.abdomen = new BodyPart ('abdomen', [9, 10, 11], hitPoints - 2, 0); // create the abdomen
  this.chest = new BodyPart ('chest', [12], hitPoints - 4, 0); // create the chest
  this.rightArm = new BodyPart ('right arm', [13, 14, 15], hitPoints - 3, 0); // create the right arm
  this.leftArm = new BodyPart ('left arm', [16, 17, 18], hitPoints - 2, 0); // create the left arm
  this.head = new BodyPart ('head', [19, 20], hitPoints - 2, 0); // create the head
}

var Character = function (name, species, sex, age, nationality, weapons, armor, spells) {
  this.name = name;
  this.species = species;
  this.background = randomBackground();
  this.sex = sex;
  this.age = age;
  this.nationality = nationality;
  this.cults = 'none';
  this.attributes = new Attributes (randomAttributes (this.species.attributeValues));
  this.skills = new Skills (this.attributes);
  this.weapons = weapons; // array
  this.armor = armor; // array
  this.spells = spells; // array
  this.hitPoints = this.attributes.con
  this.body = new Body (this.hitPoints)
}


/***** OBJECT METHODS *****/


Skills.prototype.setValue = function (type, attribute) {
  var output = 0;
  if (type === 'low') {
    if (attribute < 5) {
      output = -5;
    } else if (4 < attribute && attribute < 17) {
      output = 0;
    } else {
      output = (Math.ceil(attribute / 4) - 4) * 5;
    }
  } else if (type === 'high') {
    output = (Math.ceil(attribute / 4) - 3) * 5;
  }
  return output;
}

Skills.prototype.setDmgBonus = function (str, siz) {
  var bonus = Math.ceil((str + siz) / 2);
  if (bonus < 7) {
    return [-1, d4];
  } else if (bonus < 13) {
    return [0, 0];
  } else if (bonus < 17) {
    return [1, d4];
  } else if (bonus < 21) {
    return [1, d6];
  } else {
    return [Math.ceil((bonus - 12) / 8), d6];
  }
}


Spell.prototype.useOnSelf = function () { // if the spell is used on the user
  this.focused = false; // the spell does not need to be focused
} // end useOnSelf method


Item.prototype.removeIfEmpty = function () {
  if (this.quantity === 0) {
    delete this;
  }
}


/***** HELPER FUNCTIONS *****/

// TODO maybe move to app.js
let randomHitLocation = (target) => {
  let locationRoll = roll(1, d20); // roll a twenty-sided die, then
  for (let part in target.body) { // for every part of the body...
    for (let hit in target.body[part].hitNumbers) { // and for every hit number of that part...
      if (locationRoll === target.body[part].hitNumbers[hit]) return target.body[part].name  // if the part is hit, return the part
    } // end for (hit number)
  } // end for (part)
} // end randomHitLocation function

let resistanceCheck = (attackingPower, defendingPower) => {
  let difference = 50 + (5 * (attackingPower - defendingPower));
  return check (difference)[0] === true ? 'attack successful' : 'attack unsuccessful';
}

// TODO move to app.js
let skillCheck = (player, skill) => {
  return check (player['skills'][skill])[0] === true ? ( // if a check of the selected skill passes...
    check (100 - player['skills'][skill])[0] === true ? ( // and if that skill is set to increase...
      //TODO add learning bonus
      player['skills'][skill] += 5, // increase the skill
      `${player.name} was successful, ${skill} was increased to ${player['skills'][skill]}`
    ) : `${player.name} was successful`
  ) : `${player.name} was unsuccessful`;
} // end skillCheck function


/***** LOCAL STORAGE *****/
