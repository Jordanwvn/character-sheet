/* RuneQuest Character Sheet **************************************************
* This web app is designed to act as a character sheet for the RPG RuneQuest. *
* The user creates a character by going through the options provided by the   *
* base rules of the game. Other attributes are then calculated from those. In *
* the end, the character will be able to engage in combat and level up.       *
****************************************************************/ 'use strict';


/***** VARIABLE DECLARATIONS *****/


// types of dice
var d4 = [1, 4]; // four-sided die
var d6 = [1, 6]; // six-sided die
var d8 = [1, 8]; // eight-sided die
var d20 = [1, 20]; // twenty-sided die
var d100 = [1, 100]; // one hundred-sided die, or "percentile"

// body hit locations
var rightLeg = [1, 2, 3, 4];
var leftLeg = [5, 6, 7, 8];
var abdomen = [9, 10, 11];
var chest = [12];
var rightArm = [13, 14, 15];
var leftArm = [16, 17, 18];
var head = [19, 20];

// combined combinations
var legs = rightLeg.concat(leftLeg);
var arms = rightArm.concat(leftArm);
var abdomenAndLegs = abdomen.concat(legs);
var chestAndAbdomen = chest.concat(abdomen);

// species starting attribute rolls: STR, CON, SIZ, INT, POW, DEX, CHA
var humanAttributes = [[3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]];
var dwarfAttributes = [[4, d6, 0], [2, d6, 6], [2, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]];
var elfAttributes = [[2, d6, 2], [3, d6, 0], [2, d4, 4], [4, d6, 0], [2, d6, 6], [3, d6, 3], [3, d6, 0]];
var minotaurAttributes = [[3, d6, 12], [2, d6, 6], [3, d6, 12], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 0]];
var newtlingAttributes = [[3, d6, 0], [3, d6, 0], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 6], [3, d6, 0]];
var pixieAttributes = [[2, d4, 0], [3, d6, 0], [1, d6, 0], [3, d6, 0], [2, d6, 6], [4, d6, 0], [3, d6, 0]];
var runnerAttributes = [[2, d6, 0], [2, d6, 6], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 6], [3, d6, 0]];


/***** OBJECT CONSTRUCTORS *****/


var Attributes = function (attributesArray) {
  this.str = attributesArray[0]; // strength
  this.con = attributesArray[1]; // constitution
  this.siz = attributesArray[2]; // size
  this.int = attributesArray[3]; // intelligence
  this.pow = attributesArray[4]; // power
  this.dex = attributesArray[5]; // dexterity
  this.cha = attributesArray[6]; // charisma
}

var Species = function (type, attributeValues, moveRate, treasureFactor, defenseBonus) {
  this.type = type;
  this.attributeValues = attributeValues;
  this.moveRate = moveRate;
  this.treasureFactor = treasureFactor;
  this.defenseBonus = defenseBonus;

  // TODO finish constructor
}

var Character = function (name, species, socialClass, sex, age, nationality, cults) {
  this.name = name;
  this.species = species;
  this.socialClass = socialClass;
  this.sex = sex;
  this.age = age;
  this.nationality = nationality;
  this.cults = cults;
  this.attributes = new Attributes (rollAttributes (this.Species.attributeValues));
}

var Weapon = function (name, strRequirement, dexRequirement, damage, hp, mastery, cost, enc, length, sr, q1Training, q2Training, q3Training) {
  this.name = name;
  this.strRequirement = strRequirement;
  this.dexRequirement = dexRequirement;
  this.damage = damage;
  this.hp = hp;
  this.mastery = mastery;
  this.cost = cost;
  this.enc = enc;
  this.length = length;
  this.sr = sr;
  this.q1Training = q1Training;
  this.q2Training = q2Training;
  this.q3Training = q3Training;
}

var Shield = function (size, strRequirement, absorbs, mastery, cost, enc, q1Training, q2Training, q3Training) {
  this.size = size;
  this.strRequirement = strRequirement;
  this.absorbs = absorbs;
  this.mastery = mastery;
  this.cost = cost;
  this.enc = enc;
  this.q1Training = q1Training;
  this.q2Training = q2Training;
  this.q3Training = q3Training;
}

var Armor = function (location, ) {
  
}


/***** OBJECT METHODS *****/


/***** OBJECT INSTANTIATION *****/


/***** HELPER FUNCTIONS *****/


// function: roll die and return the result
var roll = function (numberOfDice, diceType) {
  var rollResult = 0; // declare a variable to hold the final result
  for (var rolls = 0; rolls < numberOfDice; rolls ++) { // for every dice to roll...
    var dieResult = Math.floor ( //
      Math.random ( // a random number between...
        (diceType[0] * diceType[1]) - diceType[0] // the range of the two values in the dice array
      ) // end random
    ) // end floor
    rollResult += dieResult; // add the result of the single die to the end result
  } // end for
  return rollResult; // return the result
} // end roll function


var rollAttributes = function (attributesArray) {
  var randomAttributes = [];
  for (attributeIndex = 0; attributeIndex < attributesArray.length; attributeIndex++) {
    randomAttributes.push (
      roll (
        attributesArray[attributeIndex][0], attributesArray[attributeIndex][1]
      )
      + attributesArray[attributeIndex][2]
    );
  } // end for
  return randomAttributes;
}

/***** LOCAL STORAGE *****/




/***** BESTIARY *****/


var baboon = new Species (

)

var human = new Species (
  'human', // type
  [[3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]], // attributes
)
