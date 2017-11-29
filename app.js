/* RuneQuest Character Sheet **************************************************
* This web app is designed to act as a character sheet for the RPG RuneQuest. *
* The user creates a character by going through the options provided by the   *
* base rules of the game. Other attributes are then calculated from those. In *
* the end, the character will be able to engage in combat and level up.       *
****************************************************************/ 'use strict';


/***** VARIABLE DECLARATIONS *****/


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

  this.combat = {
    attack: this.setValue ('low', str) + this.setValue ('high', int) + this.setValue ('low', pow) + this.setValue ('high', dex),
    parry: this.setValue ('low', str) - this.setValue ('low', siz) + this.setValue ('low', pow) + this.setValue ('high', dex),
    defense: this.setValue ('high', int) - this.setValue ('low', siz) + this.setValue ('low', pow) + this.setValue ('high', dex),
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
  this.rightLeg = new BodyPart ('right leg', [1, 2, 3, 4], hitpoints - 4, 0);
  // this.rightLeg = { name: 'right leg', health: hitPoints - 4, hitNumbers: [1, 2, 3, 4], armor: 0 };
  // this.leftLeg = { name: 'left leg', hitNumbers: [5, 6, 7, 8], armor: 0 };
  // this.abdomen = { name: 'abdomen', hitNumbers: [9, 10, 11], armor: 0 };
  // this.chest = { name: 'chest', hitNumbers: [12], armor: 0 };
  // this.rightArm = { name: 'right arm', hitNumbers: [13, 14, 15], armor: 0 };
  // this.leftArm = { name: 'left arm', hitNumbers: [16, 17, 18], armor: 0 };
  // this.head = { name: 'head', hitNumbers: [19, 20], armor: 0 };
}

var Character = function (name, species, sex, age, nationality, weapons, armor, spells) {
  this.name = name;
  this.species = species;
  this.background = randomBackground();
  this.sex = sex;
  this.age = age;
  this.nationality = nationality;
  this.cults = 'none';
  this.attributes = new Attributes (rollAttributes (this.species.attributeValues));
  this.skills = new Skills (this.attributes);
  this.weapons = weapons; // array
  this.armor = armor; // array
  this.spells = spells; // array
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


// function: roll die and return the result
var roll = function (numberOfDice, diceType) {
  var rollResult = 0; // declare a variable to hold the final result
  for (var rolls = numberOfDice; rolls > 0; rolls --) { // for every dice to roll...
    var dieResult = Math.floor (Math.random () * (diceType[1] - diceType[0]) + diceType[0]) // end floor
    rollResult += dieResult; // add the result of the single die to the end result
  } // end for
  return rollResult; // return the result
} // end roll function


var rollAttributes = function (attributeRolls) {
  var rolledAttributes = [];
  for (var attributeIndex = 0; attributeIndex < attributeRolls.length; attributeIndex++) {
    rolledAttributes.push (
      roll (
        attributeRolls[attributeIndex][0], attributeRolls[attributeIndex][1]
      )
      + attributeRolls[attributeIndex][2]
    ); // end push
  } // end for
  return rolledAttributes;
}

var findHitLocation = function () {
  var locationRoll = roll(1, d20); // roll a twenty-sided die, then
  for (var part = 0; part < body.length; part++) { // for every part of the body...
    for (var hit = 0; hit < body[part].hitNumbers.length; hit++) { // and for every hit number of that part...
      if (locationRoll === body[part].hitNumbers[hit]) { // if the rolled number matches a hit at that part...
        return body[part].name; // return that body part
      } // end if
    } // end for (hit number)
  } // end for (part)
} // end findHitLocation function

// function: makes a percentile check and returns if it passed, as well as by how much
var check = function (goal) {
  var percentile = roll (1, d100);
  if (percentile <= goal) {
    return [true, Math.ceil((percentile / goal) * 100)];
  } else {
    return [false, Math.ceil((percentile / goal) * 100)];
  }
}

var resistanceCheck = function (attackingPower, defendingPower) {
  var difference = 50 + (5 * (attackingPower - defendingPower));
  if (check (difference)[0] === true) {
    return 'attack successful';
  }
  return 'attack unsuccessful';
}

var skillCheck = function (player, skill) {
  if (check (player['skills'][skill])[0] === true) { // if a check of the selected skill passes...
    if (check (100 - player['skills'][skill])[0] === true) { // and if that skill is set to increase...
      //TODO add learning bonus
      player['skills'][skill] += 5; // increase the skill
      return `${player.name} was successful, ${skill} was increased to ${player['skills'][skill]}`;
    } else { // otherwise, if the check was successful but the skill is not set to increase...
      return `${player.name} was successful`;
    } // end else
  } else { // otherwise, if the check was unsuccessful...
    return `${player.name} was unsuccessful`;
  } // end else
} // end skillCheck function

var randomBackground = function () {
  var backgroundIndex = roll (1, d100);
  var income = 0;
  if (backgroundIndex <= 25) {
    return ['peasant', roll (1, d100), income];
  } else if (backgroundIndex <= 60) {
    return ['townsman', roll (2, d100), income];
  } else if (backgroundIndex <= 85) {
    return ['barbarian', roll (1, d100), income];
  } else if (backgroundIndex <= 95) {
    income = (roll (1, d100)) * 5;
    return ['poor noble', income, income];
  } else if (backgroundIndex <= 99) {
    income = (roll (1, d100)) * 10;
    return ['rich noble', income, income];
  } else if (backgroundIndex <= 100) {
    income = (roll (1, d100)) * 20;
    return ['very rich noble', income, income];
  }
}

var findEncounter = function (location) {
  if (check(location.chance)[0] === true) {
    var encounterIndex = roll (1, d20) - 1;
    if (location.results[encounterIndex][1] !== 1) {
      return `${roll (1, location.results[encounterIndex][1])} ${location.results[encounterIndex][0]}`;
    }
    return `1 ${location.results[encounterIndex][0]}`;
  }
  return 'nothing found';
}

var findResponse = function (index, rangeOne, rangeTwo, rangeThree, rangeFour, rangeFive) {
  if (index <= rangeOne) {
    return 'encountered creatures are extremely friendly to party, and very ameable to suggestions';
  } else if (index <= rangeTwo) {
    return 'encountered creatures are will to let the party go their own way; they will go theirs';
  } else if (index <= rangeThree) {
    return 'encountered creatures are unsure and will stall for time, or for something significant or telling to occur';
  } else if (index <= rangeFour) {
    return 'encountered creatures take an active dislike of the party, just short of blind hatred';
  } else if (index <= rangeFive) {
    return 'encountered creatures cannot conceal their contempt and/or hatred for the party';
  }
}

var randomResponse = function (predisposition) {
  var responseIndex = roll (1, d100);
  var response;
  if (predisposition === 'hostile') {
    response = findResponse (responseIndex, 5, 15, 25, 85, 100);
    return response;
  } else if (predisposition === 'neutral') {
    response = findResponse (responseIndex, 10, 30, 70, 90, 100);
    return response;
  } else if (predisposition === 'friendly') {
    response = findResponse (responseIndex, 15, 75, 85, 95, 100);
    return response;
  }
}

var randomSpell = function () {
  var index = Math.ceil(roll (1, d100) / 2);
  return battleMagicSpellbook[index];
}

var randomScroll = function () {
  var index = roll (1, d100);
  var randomIncrease = roll (1, d4) * 5;
  if (index === 1) {
    return 'special scroll at referee\'s discretion';
  } else if (2 <= index && index <= 15) {
    var randomAttributesArray = ['strength', 'constitution', 'dexterity', 'charisma'];
    var attributeIndex = roll (1, d4);
    var attributeTime = roll (1, d20);
    return `scroll of increasing ${randomAttributesArray[attributeIndex]} over ${attributeTime} weeks`;
  } else if (16 <= index && index <= 30) {
    return 'letter of credit, deed, or valuable historical knowledge';
  } else if (31 <= index && index <= 50) {
    return `secret technique scroll giving a ${randomIncrease}% increase in any weapon`;

    //TODO implement this with the weapons table when built

  } else if (51 <= index && index <= 65) {
    var randomSkillArray = ['knowledge', 'perception', 'manipulation', 'manipulation', 'stealth', 'stealth'];
    var skillIndex = roll (1, d6);
    return `scroll holding the secrets of using ${randomSkillArray[skillIndex]} and increasing all related skills by ${randomIncrease}%`;
  } else if (66 <= index && index <= 75) {
    return 'map of an area which seems quite interesting';
  } else {
    return 'seemingly useless scroll that\'s not even readable'
  }
}

var randomPotion = function () {
  var index = roll (1, d100);
  var poisonPotency = roll (2, d6) + 3
  if (1 <= index && index <= 10) {
    return `potion of healing ${roll (1, d6)} damage to the body\'s worst wound`;
  } else if (11 <= index && index <= 25) {
    var spell = randomSpell();
    return `potion of ${spell.name} with two hour duration`; // TODO: make spell names work
  } else if (26 <= index && index <= 55) {
    let poison = ['poison gas', 'poison gas', 'herbal poison', 'mineral poison'];
    return `bottle of ${poisonPotency} potency ${poison[roll (1, d4) - 1]}`;
  } else if (56 <= index && index <= 65) {
    let venom = ['manticore', 'wyvern', 'spider', 'spider'];
    return `${venom[roll (1, d4) - 1]} blade venom of ${poisonPotency} potency`;
  } else if (66 <= index && index <= 80) {
    let antidote = ['manticore venom', 'poison gas', 'wyvern venom', 'spider venom', 'herbal poison', 'mineral poison'];
    return `antidote of ${antidote[roll (1, d6) - 1]}`;
  } else if (81 <= index <= 90) {
    return 'special potion at referee\'s discretion';
  } else {
    return `spoiled potion: treated like poison of ${poisonPotency} yet indestinguishable from a normal potion`;
  }
}

var randomCrystalAttribute = function (index) {
  if (index <= 5) {
    return ['healing focusing', roll (1, d8)];
  } else if (index <= 8) {
    return ['sensitivity', roll (1, d8)];
  } else if (index <= 11) {
    return ['twice power yielding', roll (1, d8)];
  } else if (index <= 14) {
    return ['power enhancing', roll (1, d8)];
  } else if (index <= 16) {
    return ['spell reinforcing', roll (1, d4)];
  } else if (index <= 18) {
    return ['spell strengthening', roll (1, d4)];
  } else if (index <= 20) {
    return ['spell resisting', roll (1, d4)];
  } else if (index <= 22) {
    return ['spell supporting', roll (1, d4)];
  } else if (index <= 24) {
    return ['spell storing', roll (1, d4)];
  } else {
    return ['power storing / spirit trapping', (roll (2, d6) + 3)];
  }
}

var randomCrystal = function () {
  var index = roll (1, d100);
  if (index === 1) {
    var crystalOne = randomCrystalAttribute (roll (1, d100));
    var crystalTwo = randomCrystalAttribute (roll (1, d100));
    return `crystal of ${crystalOne[0]} and ${crystalTwo[0]} filled with ${crystalOne[1] + crystalTwo[1]} power`;
  } else if (index === 2) {
    var boostedCrystal = randomCrystalAttribute (roll (1, d100))
    return `crystal of ${boostedCrystal[0]} filled with ${boostedCrystal[1] + roll (1, d6)} power`;
  } else if (25 <= index && index <= 30) {
    return 'flawed crystal';
  } else {
    return `crystal of ${randomCrystalAttribute (index)[0]} filled with ${randomCrystalAttribute (index)[1]} power`;
  }
}

var randomSpecialItem = function () {
  var index = roll (1, d100);
  if (index <= 35) {
    return randomScroll();
  } else if (index <= 60) {
    return randomPotion();
  } else if (index <= 85) {
    var specialItemSpell = randomSpell();
    return `spell of ${specialItemSpell.name}`;
  } else {
    return randomCrystal(); //TODO: add functionality to choose between this and an item with a spell matrix
  }
}

var randomGemAttribute = function (index) {
  if (index <= 3) {
    return ['ancient treasure', (roll (1, d20) * 10000)];
  } else if (index <= 5) {
    return ['heirloom jewelry', (roll (3, d6) * 1000)];
  } else if (index <= 10) {
    return ['superb gemstone', (roll (1, d10) * 1000)];
  } else if (index <= 15) {
    return ['excellent jewelry', (roll (1, d6) * 1000)];
  } else if (index <= 20) {
    return ['excellent gemstone', (roll (3, d6) * 100)];
  } else if (index <= 30) {
    return ['very good jewelry', roll (12, d100)];
  } else if (index <= 40) {
    return ['very good gemstone', roll (6, d100)];
  } else if (index <= 50) {
    return ['good jewelry', roll (10, d20)];
  } else if (index <= 60) {
    return ['good gemstone', roll (2, d100)];
  } else if (index <= 70) {
    return ['costume jewelry', roll (5, d20)];
  } else if (index <= 80) {
    return ['flawed gemstone', roll (1, d100)];
  } else if (index <= 90) {
    return ['trade junk jewelry', roll (1, d20)];
  } else if (index <= 95) {
    return ['semi-precious stones', roll (1, d10)];
  } else {
    return ['pretty stones', 0];
  }
}

var randomGem = function () {
  var index = roll (1, d100);
  if (index === 1) {
    return `${randomSpecialItem()} worth ${randomGemAttribute (index)[1]} lunars`;
  } else if (index === 2) {
    return randomCrystal();
  } else {
    var gem = randomGemAttribute(index);
    return `${gem[0]} worth ${gem[1]} lunars`;
  }
}

var treasureCheck = function (goal) {
  var results = check(goal);
  var pass = results[0];
  var passPercent = results[1];
  if (pass === true) {
    if (passPercent <= 5) {return 10}
    else if (passPercent <= 10) {return 5}
    else if (passPercent <= 12.5) {return 4}
    else if (passPercent <= 25) {return 3}
    else if (passPercent <= 50) {return 2}
    else {return 1}
  } else {
    return 0;
  }
}

var treasureResults = function (treasureInput) {
  return treasureCheck (treasureInput[0]) * roll (treasureInput[1], treasureInput[2]);
}

var treasureValueReturn = function (treasureValue) {
  var clacks = 0;
  var lunars = 0;
  var wheels = 0;
  var gems = 0;
  var gemOutput = '';
  var specialItems = 0;
  var specialItemsOutput = '';

  if (treasureValue === 0) {return false}

  var treasureIndex = Math.floor(treasureValue / 10);

  clacks += treasureResults(treasureArray[treasureIndex][0]);
  lunars += treasureResults(treasureArray[treasureIndex][1]);
  wheels += treasureResults(treasureArray[treasureIndex][2]);
  gems += treasureCheck (treasureArray[treasureIndex][3][0]) * treasureArray[treasureIndex][3][1];
  specialItems += treasureCheck (treasureArray[treasureIndex][4][0]) * treasureArray[treasureIndex][4][1];

  for (gems; gems > 0; gems--) { gemOutput += (', ' + randomGem ()) } // for every gem, generate a gem
  for (specialItems; specialItems > 0; specialItems--) { specialItemsOutput = ', ' + randomSpecialItem () } // if there is a special item, make it
  return `${clacks} clacks, ${lunars} lunars, ${wheels} wheels${gemOutput}${specialItemsOutput}`; // return everything
}

/***** LOCAL STORAGE *****/
