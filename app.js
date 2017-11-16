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

// hit location object
var body = [
  { name: 'right leg', hitNumbers: [1, 2, 3, 4], armor: 0 }, // body[0]
  { name: 'left leg', hitNumbers: [5, 6, 7, 8], armor: 0 },  // body[1]
  { name: 'abdomen', hitNumbers: [9, 10, 11], armor: 0 },    // body[2]
  { name: 'chest', hitNumbers: [12], armor: 0 },             // body[3]
  { name: 'right arm', hitNumbers: [13, 14, 15], armor: 0 }, // body[4]
  { name: 'left arm', hitNumbers: [16, 17, 18], armor: 0 },  // body[5]
  { name: 'head', hitNumbers: [19, 20], armor: 0 }           // body[6]
];

// combined combinations
// var legs = rightLeg.concat(leftLeg);
// var arms = rightArm.concat(leftArm);
// var abdomenAndLegs = abdomen.concat(legs);
// var chestAndAbdomen = chest.concat(abdomen);

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

var Skills = function (str, con, siz, int, pow, dex, cha) { // take in character.attributes
  this.knowledge = {
    value: setValue ('high', int) + setValue ('low', pow),
    evaluateTreasure: this.value + 5,
    readWriteOwnLanguage: this.value + 10
  };
  this.manipulation = {
    value: setValue ('low', str) + setValue ('high', int) + setValue ('low', pow) + setValue ('high', dex),
    armorMaking: 0,
    climbing: this.value + 15,
    hideItem: this.value + 10,
    jumping: this.value + 15,
    lockPicking: this.value + 5,
    mapMaking: this.value + 10,
    riding: this.value + 5,
    shieldMaking: 0,
    swimming: this.value + 15,
    trapSetAndDisarm: this.value + 5,
    tumbling: 0,
    weaponMaking: 0
  };
  this.perception = {
    value: setValue ('high', int) + setValue ('low', pow),
    listen: this.value + 25,
    spotHiddenItem: this.value + 5,
    spotTrap: this.value + 5,
    tracking: this.value + 10
  };
  this.stealth = {
    value: setValue ('high', int) - setValue ('high', siz) + setValue ('low', pow) + setValue ('high', dex),
    camoflauge: this.value + 10,
    hideInCover: this.value + 5,
    moveSilently: this.value + 5,
    pickPockets: this.value + 5
  };
  this.oratory = {
    value: setValue ('low', int) + setValue ('low', pow) + setValue ('high', cha)
  }
}

var Species = function (type, attributeValues, moveRate, treasureFactor, defenseBonus) {
  this.type = type;
  this.attributeValues = attributeValues;
  this.moveRate = moveRate;
  this.treasureFactor = treasureFactor;
  this.defenseBonus = defenseBonus;

  // TODO finish constructor
}

var Character = function (name, species, socialClass, sex, age, nationality, cults, weapons, armor, spells) {
  this.name = name;
  this.species = species;
  this.socialClass = socialClass;
  this.sex = sex;
  this.age = age;
  this.nationality = nationality;
  this.cults = cults;
  this.attributes = new Attributes (rollAttributes (this.Species.attributeValues));
  this.weapons = weapons; // array
  this.armor = armor;
  this.spells = spells; // array
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

var Spell = function (name, range, focused, passive, duration, power, description, cost) {
  this.name = name;
  this.range = range;
  this.focused = focused;
  this.passive = passive;
  this.duration = duration;
  this.power = power;
  this.description = description;
  this.cost = cost;
}


/***** OBJECT METHODS *****/


Skills.prototype.setValue = function (type, attribute) {
  var output = 0;
  if (type === 'low') {
    if (attribute < 5 && attribute < 17) {
      output -= 5;
    } else {
      output += ((attribute % 4) - 3) * 5;
    }
  } else if (type === 'high') {
    output += ((atribute % 4) - 2) * 5;
  } else if (type === 'hpLow') {
    output += ((atribute % 4) - 2);
  } else if (type === 'hpHigh') {
    if (attribute < 5 && attribute < 17) {
      output -= 1;
    } else {
      output += ((attribute % 4) - 3);
    }
  }
  return output;
}


Spell.prototype.useOnSelf = function () { // if the spell is used on the user
  this.focused = false; // the spell does not need to be focused
} // end useOnSelf method


/***** OBJECT INSTANTIATION *****/


/***** HELPER FUNCTIONS *****/


// function: roll die and return the result
var roll = function (numberOfDice, diceType) {
  var rollResult = 0; // declare a variable to hold the final result
  for (var rolls = numberOfDice; rolls > 0; rolls --) { // for every dice to roll...
    console.log('rolls left:', rolls);
    var dieResult = Math.floor (Math.random () * (diceType[1] - diceType[0]) + diceType[0]) // end floor
    console.log('die result:', dieResult);
    rollResult += dieResult; // add the result of the single die to the end result
  } // end for
  return rollResult; // return the result
} // end roll function


var rollAttributes = function (attributeRolls) {
  var rolledAttributes = [];
  for (attributeIndex = 0; attributeIndex < attributeRolls.length; attributeIndex++) {
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

/***** LOCAL STORAGE *****/




/***** BESTIARY *****/


var baboon = new Species (

)

var human = new Species (
  'human', // type
  [[3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]], // attributes
)


/***** WEAPONRY *****/


/***** ARMORY *****/


/***** SPELLS *****/
var befuddle = new Spell (
  'Befuddle', // spell name
  80, // range, in meters
  true, // focused
  true, // passive
  10, // duration, in rounds. Categorized as "temporal".
  1, // power required
  'This spell confuses an opponent who succumbs to it. It causes him to wonder such things as: Is that a friend? Which ones are my enemies? Why is everyone fighting? A Befuddled enemy will not attack, cast an offensive spell, sound the alarm, etc. If attacked, he will parry and defend at full value, and beginning next round his confusion will go away (the guy that attacked me is my enemy, and after he is dead his obvious allies are my enemies). Thus, with some clever management, a Befuddled opponent might end up attacking his own party for as long as the spell is in effect.',
  1500 // cost in Lunars
);

var binding = new Spell (
  'Binding', // spell name
  80, // range, in meters
  true, // focused
  true, // passive
  10, // duration, in rounds
  1, // power required
  'This spell halves the movement class of those affected by it. It can never reduce the movement class below "one". It is often carried by huntsmen, police, and intelligent beasts of prey, such as baboons.',
  1500 // cost in Lunars
);

var bladesharp = new Spell (
  'Bladesharp', // spell name
  80, // range in meters
  true, // focused
  true, // passive
  10, // duration, in rounds
  [1, 2, 3, 4], // power required
  'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
  500 * this.power // cost in Lunars
);

var bludgeon = new Spell (
  'Bludgeon', // spell name
  80, // range in meters
  true, // focused
  true, // passive
  10, // duration, in rounds
  [1, 2, 3, 4], // power required
  'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
  500 * this.power // cost in Lunars
);

var coordination = new Spell (
  'Coordination', // spell name
  80, // range in meters
  true, // focused, on others
  true, // passive
  10, // duration, in rounds
  2, // power required
  'This spell adds three to a character\'s effective DEX. This will decrease strike rank by one and improve the character\'s chance of making DEX rolls. DEX is never raised over the species maximum. Thus, the greatest DEX a human can have is 21.',
  1500 // cost, in Lunars
);

var countermagic = new Spell (
  'Counterspell', // spell name
  80, // range, in meters
  true, // focused, on others

  500 * this.power // cost, in Lunars
)
