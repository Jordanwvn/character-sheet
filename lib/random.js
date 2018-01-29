/* RANDOMIZATIONS **************************************************************
* this file contains elements of the code which generate randomness. This      *
* includes things like dice rolls or random results from tables.               *
*****************************************************************/ 'use strict';


const random = module.exports = {};

const d4 = 4; // four-sided die
const d6 = 6; // six-sided die
const d8 = 8; // eight-sided die
const d10 = 10; // ten-sided die
const d20 = 20; // twenty-sided die
const d100 = 100; // one hundred-sided die, or "percentile"


/***** RANDOM DICE RESULTS *****/


// method: roll die and return the result
random.roll = (rolls, die) => {
  return !rolls ? 0 : ~~(Math.random() * die) + random.roll(--rolls, die); //TODO check if random can become 'this'
}

// for (var result = 0; rolls; rolls--, result += ~~(Math.random() * die) );
// return result; // return the result
// let dieResult = ~~(Math.random () * (die - 1) + 1) // end floor

/***** RANDOM CHECKS *****/


// function: makes a percentile check and returns if it passed, as well as by how much
random.check = goal => {
  let result = random.roll (1, d100);
  let percentage = Math.ceil((result / goal) * 100);
  return result <= goal ? [true, percentage] : [false, percentage];
}

random.resistance = (attackingPower, defendingPower) => {
  let difference = 50 + (5 * (attackingPower - defendingPower)); // set difference between attacking and defending
  return check (difference)[0] === true ? 'attack successful' : 'attack unsuccessful'; // return the result of a check
}

// TODO find a way to lower big O
random.hitLocation = (target) => {
  let locationRoll = random.roll(1, d20); // roll a twenty-sided die, then
  for (let part in target.body) { // for every part of the body...
    for (let hit in target.body[part].hitNumbers) { // and for every hit number of that part...
      if (locationRoll === target.body[part].hitNumbers[hit]) return target.body[part].name  // if the part is hit, return the part
    } // end for (hit number)
  } // end for (part)
} // end randomHitLocation function


/***** RANDOM CHARACTER ELEMENTS *****/


random.attributes = rollsArray => {
  let rolledAttributes = [];
  for (let attribute in rollsArray) {
    let attributeRoll = rollsArray[attribute];
    rolledAttributes.push (random.roll (attributeRoll[0], attributeRoll[1]) + attributeRoll[2]); // end push
  } // end for
  return rolledAttributes;
}

// TODO use switch / case statement here
random.background = () => {
  let backgroundIndex = random.roll (1, d100);
  let income = random.roll (1, d100);
  return backgroundIndex <= 25 ? ['peasant', roll (1, d100), 0]
  : backgroundIndex <= 60 ? ['townsman', roll (2, d100), 0]
  : backgroundIndex <= 85 ? ['barbarian', roll (1, d100), 0]
  : backgroundIndex <= 95 ? ['poor noble', income * 5, income * 5]
  : backgroundIndex <= 99 ? ['rich noble', income * 10, income * 10]
  : ['very rich noble', income * 20, income * 20];
}


/***** RANDOM ENCOUNTERS *****/


// random.encounter = location => {
//   let encounterIndex = random.roll (1, d20) - 1; // encounter index is something between 1 and 20
//   let encounterCreature = location.results[encounterIndex][0]; // get the random creature from the defined location
//   let encounterDice = location.results[encounterIndex][1]; // get the dice to define the number of those creatures
//   return check(location.chance)[0] === true ? ( // did you find a location in the area?
//     location.results[encounterIndex][1] !== 1 ? `${roll (1, encounterDice)} ${encounterCreature}` // return what creatures are there
//     : `1 ${encounterCreature}` // if there is only 1, don't roll for number
//   ) : 'nothing found'; // if you didn't find a creature, return nothing found
// }
//
// random.disposition = (index, rangeOne, rangeTwo, rangeThree, rangeFour) => {
//   return index <= rangeOne ? 'encountered creatures are extremely friendly to party, and very ameable to suggestions'
//   : index <= rangeTwo ? 'encountered creatures are extremely friendly to party, and very ameable to suggestions'
//   : index <= rangeThree ? 'encountered creatures are unsure and will stall for time, or for something significant or telling to occur'
//   : index <= rangeFour ? 'encountered creatures take an active dislike of the party, just short of blind hatred'
//   : 'encountered creatures cannot conceal their contempt and/or hatred for the party'
// }
//
// //
// random.response = (predisposition) => {
//   let responseIndex = roll (1, d100);
//   return predisposition === 'hostile' ? findResponse (responseIndex, 5, 15, 25, 85)
//   : predisposition === 'neutral' ? findResponse (responseIndex, 10, 30, 70, 90)
//   : findResponse (responseIndex, 15, 75, 85, 95);
// }


/***** RANDOM TREASURE *****/


random.spell = () => {
  var index = ~~++(roll (1, d100) / 2); // needs to be rounded up
  return battleMagicSpellbook[index];
}

random.scroll = () => {
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

// TODO refactor into switch / case
random.potion = () => {
  let index = random.roll (1, d100);
  let poisonPotency = random.roll (2, d6) + 3;
  let poisons = ['poison gas', 'poison gas', 'herbal poison', 'mineral poison'];
  let venoms = ['manticore venom', 'wyvern venom', 'spider venom', 'spider venom'];
  let antidotes = poisons.concat(venoms).slice(1, 7);
  return index <= 10 ? `potion of healing ${random.roll (1, d6)} damage to the body\'s worst wound`
  : index <= 25 ? `potion of ${random.spell().name} with two hour duration`
  : index <= 55 ? `bottle of ${poisonPotency} potency ${poisons[random.roll (1, d4) - 1]}`
  : index <= 65 ? `${venoms[random.roll (1, d4) - 1]} blade venom of ${poisonPotency} potency`
  : index <= 80 ? `antidote of ${antidotes[random.roll (1, d6) - 1]}`
  : index <= 90 ? 'special potion at referee\'s discretion'
  : `spoiled potion: treated like poison of ${poisonPotency} yet indestinguishable from a normal potion`;
}

// TODO refactor into switch / case
random.crystalAttribute = index => {
  return index <= 5 ? ['healing focusing', random.roll (1, d8)]
  : index <= 8 ? ['sensitivity', random.roll(1, d8)]
  : index <= 11 ? ['twice power yielding', random.roll (1, d8)]
  : index <= 14 ? ['power enhancing', random.roll(1, d8)]
  : index <= 16 ? ['spell reinforcing', random.roll (1, d4)]
  : index <= 18 ? ['spell strenthening', random.roll (1, d4)]
  : index <= 20 ? ['spell resisting', random.roll (1, d4)]
  : index <= 22 ? ['spell supporting', random.roll (1, d4)]
  : index <= 24 ? ['spell storing', random.roll (1, d4)]
  : ['power storing / spirit trapping', (random.roll (2, d6) + 3)];
}

random.crystal = () => {
  let index = roll (1, d100);
  let crystalOne = random.crystalAttribute (roll (1, d100));
  let crystalTwo = random.crystalAttribute (roll (1, d100));
  return index === 1 ? `crystal of ${crystalOne[0]} and ${crystalTwo[0]} filled with ${crystalOne[1] + crystalTwo[1]} power`
  : index === 2 ? `crystal of ${crystalOne[0]} filled with ${crystalOne[1] + roll (1, d6)} power`
  : index <= 30 ? 'flawed crystal'
  : `crystal of ${random.crystalAttribute (index)[0]} filled with ${random.crystalAttribute (index)[1]} power`;
}

random.specialItem = () => {
  let index = roll (1, d100);
  return index <= 35 ? randomScroll()
  : index <= 60 ? randomPotion()
  : index <= 85 ? `spell of ${randomSpell().name}`
  : random.crystal(); //TODO: add functionality to choose between this and an item with a spell matrix
}

// TODO refactor into switch / case
random.gemAttribute = index => {
  return index <= 3 ? ['ancient treasure', (roll (1, d20) * 1e4)]
  : index <= 5 ? ['heirloom jewelry', (roll (3, d6) * 1e3)]
  : index <= 10 ? ['superb gemstone', (roll (1, d10) * 1e3)]
  : index <= 15 ? ['excellent jewelry', (roll (1, d6) * 1e3)]
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

random.gem = () => {
  let index = random.roll (1, d100);
  let gem = random.gemAttribute (index);
  return index === 1 ? `${random.specialItem()} worth ${random.gemAttribute (index)[1]} lunars`
  : index === 2 ? random.crystal()
  : `${gem[0]} worth ${gem[1]} lunars`;
}

// random.treasureCheck = goal => {
//   let results = random.check (goal);
//   let pass = results[0];
//   let passPercent = results[1];
//   return pass === true ? (
//     passPercent <= 5 ? 10
//     : passPercent <= 10 ? 5
//     : passPercent <= 12.5 ? 4
//     : passPercent <= 25 ? 3
//     : passPercent <= 50 ? 2
//     : 1
//   ) : 0
// }
//
// random.treasureRoll = function (treasureInput) {
//   return random.treasureCheck (treasureInput[0]) * random.roll (treasureInput[1], treasureInput[2]);
// }
//
// random.treasureValueReturn = treasureValue => {
//   let clacks = 0, lunars = 0, wheels = 0, gems = 0, specialItems = 0;
//   let gemOutput = '', specialItemsOutput = '';
//   let treasureIndex = ~~(treasureValue / 10); // same as Math.floor
//
//   if (treasureValue === 0) return false;
//   clacks += random.treasureRoll(treasureArray[treasureIndex][0]);
//   lunars += random.treasureRoll(treasureArray[treasureIndex][1]);
//   wheels += random.treasureRoll(treasureArray[treasureIndex][2]);
//   gems += treasureCheck (treasureArray[treasureIndex][3][0]) * treasureArray[treasureIndex][3][1];
//   specialItems += treasureCheck (treasureArray[treasureIndex][4][0]) * treasureArray[treasureIndex][4][1];
//
//   for (gems; gems > 0; gems--) gemOutput += `, ${random.gem()}` // for every gem, generate a gem
//   for (specialItems; specialItems > 0; specialItems--) specialItemsOutput = `, ${random.specialItem()}`// if there is a special item, make it
//   return `${clacks} clacks, ${lunars} lunars, ${wheels} wheels${gemOutput}${specialItemsOutput}`; // return everything
// }
