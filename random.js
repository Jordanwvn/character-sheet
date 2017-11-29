/* RANDOMIZATIONS **************************************************************
* this file contains elements of the code which generate randomness. This      *
* includes things like dice rolls or random results from tables.               *
*****************************************************************/ 'use strict';


/***** RANDOM DICE RESULTS *****/


// function: roll die and return the result
var roll = function (numberOfDice, diceType) {
  var rollResult = 0; // declare a variable to hold the final result
  for (var rolls = numberOfDice; rolls > 0; rolls --) { // for every dice to roll...
    var dieResult = Math.floor (Math.random () * (diceType[1] - diceType[0]) + diceType[0]) // end floor
    rollResult += dieResult; // add the result of the single die to the end result
  } // end for
  return rollResult; // return the result
} // end roll function


/***** RANDOM CHECKS *****/


// function: makes a percentile check and returns if it passed, as well as by how much
var check = function (goal) {
  var percentile = roll (1, d100);
  if (percentile <= goal) {
    return [true, Math.ceil((percentile / goal) * 100)];
  } else {
    return [false, Math.ceil((percentile / goal) * 100)];
  }
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


/***** RANDOM CHARACTER ELEMENTS *****/


var randomAttributes = function (attributeRolls) {
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


/***** RANDOM COMBAT ELEMENTS *****/


var randomHitLocation = function () {
  var locationRoll = roll(1, d20); // roll a twenty-sided die, then
  for (var part = 0; part < body.length; part++) { // for every part of the body...
    for (var hit = 0; hit < body[part].hitNumbers.length; hit++) { // and for every hit number of that part...
      if (locationRoll === body[part].hitNumbers[hit]) { // if the rolled number matches a hit at that part...
        return body[part].name; // return that body part
      } // end if
    } // end for (hit number)
  } // end for (part)
} // end randomHitLocation function

var resistanceCheck = function (attackingPower, defendingPower) {
  var difference = 50 + (5 * (attackingPower - defendingPower));
  if (check (difference)[0] === true) {
    return 'attack successful';
  }
  return 'attack unsuccessful';
}


/***** RANDOM ENCOUNTERS *****/


var randomEncounter = function (location) {
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


/***** RANDOM TREASURE *****/


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
