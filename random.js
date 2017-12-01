/* RANDOMIZATIONS **************************************************************
* this file contains elements of the code which generate randomness. This      *
* includes things like dice rolls or random results from tables.               *
*****************************************************************/ 'use strict';


/***** RANDOM DICE RESULTS *****/


// function: roll die and return the result
var roll = (rolls, diceType) => {
  let rollResult = 0; // declare a variable to hold the final result
  for (rolls; rolls > 0; rolls --) { // for every dice to roll...
    let dieResult = Math.floor (Math.random () * (diceType[1] - diceType[0]) + diceType[0]) // end floor
    rollResult += dieResult; // add the result of the single die to the end result
  } // end for
  return rollResult; // return the result
} // end roll function


/***** RANDOM CHECKS *****/


// function: makes a percentile check and returns if it passed, as well as by how much
<<<<<<< HEAD
var check = function (goal) {
  var percentile = roll (1, d100);
  return percentile <= goal ? [true, Math.ceil((percentile / goal) * 100)] : [false, Math.ceil((percentile / goal) * 100)];
=======
let check = goal => {
  let result = roll (1, d100);
  let percentage = Math.ceil((result / goal) * 100);
  return result <= goal ? [true, percentage] : [false, percentage];
>>>>>>> 777a55734a60b36be35e2985e90e6883c3541b51
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


/***** RANDOM CHARACTER ELEMENTS *****/


let randomAttributes = rollsArray => {
  let rolledAttributes = [];
  for (let attribute in rollsArray) {
    let attributeRoll = rollsArray[attribute];
    rolledAttributes.push (roll (attributeRoll[0], attributeRoll[1]) + attributeRoll[2]); // end push
  } // end for
  return rolledAttributes;
}

let randomBackground = () => {
  let backgroundIndex = roll (1, d100);
  let income = roll (1, d100);
  return backgroundIndex <= 25 ? ['peasant', roll (1, d100), 0]
  : backgroundIndex <= 60 ? ['townsman', roll (2, d100), 0]
  : backgroundIndex <= 85 ? ['barbarian', roll (1, d100), 0]
  : backgroundIndex <= 95 ? ['poor noble', income * 5, income * 5]
  : backgroundIndex <= 99 ? ['rich noble', income * 10, income * 10]
  : ['very rich noble', income * 20, income * 20];
}


/***** RANDOM COMBAT ELEMENTS *****/


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


/***** RANDOM ENCOUNTERS *****/


let randomEncounter = location => {
  let encounterIndex = roll (1, d20) - 1;
  let encounterCreature = location.results[encounterIndex][0];
  let encounterDice = location.results[encounterIndex][1];

  return check(location.chance)[0] === true ? (
    location.results[encounterIndex][1] !== 1 ? `${roll (1, encounterDice)} ${encounterCreature}`
    : `1 ${encounterCreature}`
  ) : 'nothing found';
}

let findResponse = (index, rangeOne, rangeTwo, rangeThree, rangeFour) => {
  return index <= rangeOne ? 'encountered creatures are extremely friendly to party, and very ameable to suggestions'
  : index <= rangeTwo ? 'encountered creatures are extremely friendly to party, and very ameable to suggestions'
  : index <= rangeThree ? 'encountered creatures are unsure and will stall for time, or for something significant or telling to occur'
  : index <= rangeFour ? 'encountered creatures take an active dislike of the party, just short of blind hatred'
  : 'encountered creatures cannot conceal their contempt and/or hatred for the party'
}

let randomResponse = (predisposition) => {
  let responseIndex = roll (1, d100);
  return predisposition === 'hostile' ? findResponse (responseIndex, 5, 15, 25, 85)
  : predisposition === 'neutral' ? findResponse (responseIndex, 10, 30, 70, 90)
  : findResponse (responseIndex, 15, 75, 85, 95);
}


/***** RANDOM TREASURE *****/


var randomSpell = () => {
  var index = Math.ceil(roll (1, d100) / 2);
  return battleMagicSpellbook[index];
}

var randomScroll = () => {
  let index = roll (1, d100);
  let randomIncrease = roll (1, d4) * 5;

  let randomAttributesArray = ['strength', 'constitution', 'dexterity', 'charisma'];
  let attributeIndex = roll (1, d4);
  let attributeTime = roll (1, d20);
  var randomSkillArray = ['knowledge', 'perception', 'manipulation', 'manipulation', 'stealth', 'stealth'];
  var skillIndex = roll (1, d6);

  return index === 1 ? 'special scroll at referee\'s discretion'
  : index <= 15 ? `scroll of increasing ${randomAttributesArray[attributeIndex]} over ${attributeTime} weeks`
  : index <= 30 ? 'letter of credit, deed, or valuable historical knowledge'
  : index <= 50 ? `secret technique scroll giving a ${randomIncrease}% increase in any weapon` // TODO implemet weapons table
  : index <= 65 ? `scroll holding the secrets of using ${randomSkillArray[skillIndex]} and increasing all related skills by ${randomIncrease}%`
  : index <= 75 ? 'map of an area which seems quite interesting'
  : 'seemingly useless scroll that\'s not even readable';
}

let randomPotion = () => {
  let index = roll (1, d100);
  let poisonPotency = roll (2, d6) + 3;
  let poisons = ['poison gas', 'poison gas', 'herbal poison', 'mineral poison'];
  let venoms = ['manticore venom', 'wyvern venom', 'spider venom', 'spider venom'];
  let antidotes = poisons.concat(venoms).slice(1, 7);
  return index <= 10 ? `potion of healing ${roll (1, d6)} damage to the body\'s worst wound`
  : index <= 25 ? `potion of ${randomSpell().name} with two hour duration`
  : index <= 55 ? `bottle of ${poisonPotency} potency ${poisons[roll (1, d4) - 1]}`
  : index <= 65 ? `${venoms[roll (1, d4) - 1]} blade venom of ${poisonPotency} potency`
  : index <= 80 ? `antidote of ${antidotes[roll (1, d6) - 1]}`
  : index <= 90 ? 'special potion at referee\'s discretion'
  : `spoiled potion: treated like poison of ${poisonPotency} yet indestinguishable from a normal potion`;
}

let randomCrystalAttribute = index => {
  return index <= 5 ? ['healing focusing', roll (1, d8)]
  : index <= 8 ? ['sensitivity', roll(1, d8)]
  : index <= 11 ? ['twice power yielding', roll (1, d8)]
  : index <= 14 ? ['power enhancing', roll(1, d8)]
  : index <= 16 ? ['spell reinforcing', roll (1, d4)]
  : index <= 18 ? ['spell strenthening', roll (1, d4)]
  : index <= 20 ? ['spell resisting', roll (1, d4)]
  : index <= 22 ? ['spell supporting', roll (1, d4)]
  : index <= 24 ? ['spell storing', roll (1, d4)]
  : ['power storing / spirit trapping', (roll (2, d6) + 3)];
}

let randomCrystal = () => {
  let index = roll (1, d100);
  let crystalOne = randomCrystalAttribute (roll (1, d100));
  let crystalTwo = randomCrystalAttribute (roll (1, d100));
  return index === 1 ? `crystal of ${crystalOne[0]} and ${crystalTwo[0]} filled with ${crystalOne[1] + crystalTwo[1]} power`
  : index === 2 ? `crystal of ${crystalOne[0]} filled with ${crystalOne[1] + roll (1, d6)} power`
  : index <= 30 ? 'flawed crystal'
  : `crystal of ${randomCrystalAttribute (index)[0]} filled with ${randomCrystalAttribute (index)[1]} power`;
}

let randomSpecialItem = () => {
  let index = roll (1, d100);
  return index <= 35 ? randomScroll()
  : index <= 60 ? randomPotion()
  : index <= 85 ? `spell of ${randomSpell().name}`
  : randomCrystal(); //TODO: add functionality to choose between this and an item with a spell matrix
}

let randomGemAttribute = index => {
  return index <= 3 ? ['ancient treasure', (roll (1, d20) * 10000)]
  : index <= 5 ? ['heirloom jewelry', (roll (3, d6) * 1000)]
  : index <= 10 ? ['superb gemstone', (roll (1, d10) * 1000)]
  : index <= 15 ? ['excellent jewelry', (roll (1, d6) * 1000)]
  : index <= 20 ? ['excellent gemstone', (roll (3, d6) * 100)]
  : index <= 30 ? ['very good jewelry', roll (12, d100)]
  : index <= 40 ? ['very good gemstone', roll (6, d100)]
  : index <= 50 ? ['good jewelry', roll (10, d20)]
  : index <= 60 ? ['good gemstone', roll (2, d100)]
  : index <= 70 ? ['costume jewelry', roll (5, d20)]
  : index <= 80 ? ['flawed gemstone', roll (1, d100)]
  : index <= 90 ? ['trade junk jewelry', roll (1, d20)]
  : index <= 95 ? ['semi-precious stones', roll (1, d10)]
  : ['pretty stones', 0];
}

let randomGem = () => {
  let index = roll (1, d100);
  let gem = randomGemAttribute (index);
  return index === 1 ? `${randomSpecialItem()} worth ${randomGemAttribute (index)[1]} lunars`
  : index === 2 ? randomCrystal()
  : `${gem[0]} worth ${gem[1]} lunars`;
}

let treasureCheck = goal => {
  let results = check (goal);
  let pass = results[0];
  let passPercent = results[1];
  return pass === true ? (
    passPercent <= 5 ? 10
    : passPercent <= 10 ? 5
    : passPercent <= 12.5 ? 4
    : passPercent <= 25 ? 3
    : passPercent <= 50 ? 2
    : 1
  ) : 0
}

let treasureResults = function (treasureInput) {
  return treasureCheck (treasureInput[0]) * roll (treasureInput[1], treasureInput[2]);
}

let treasureValueReturn = treasureValue => {
  let clacks = 0, lunars = 0, wheels = 0, gems = 0, specialItems = 0;
  let gemOutput = '', specialItemsOutput = '';
  let treasureIndex = Math.floor(treasureValue / 10);

  if (treasureValue === 0) return false;
  clacks += treasureResults(treasureArray[treasureIndex][0]);
  lunars += treasureResults(treasureArray[treasureIndex][1]);
  wheels += treasureResults(treasureArray[treasureIndex][2]);
  gems += treasureCheck (treasureArray[treasureIndex][3][0]) * treasureArray[treasureIndex][3][1];
  specialItems += treasureCheck (treasureArray[treasureIndex][4][0]) * treasureArray[treasureIndex][4][1];

  for (gems; gems > 0; gems--) gemOutput += `, ${randomGem()}` // for every gem, generate a gem
  for (specialItems; specialItems > 0; specialItems--) specialItemsOutput = `, ${randomSpecialItem()}`// if there is a special item, make it
  return `${clacks} clacks, ${lunars} lunars, ${wheels} wheels${gemOutput}${specialItemsOutput}`; // return everything
}
