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
var d10 = [1, 10]; // ten-sided die
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

// random encounters
var inTown = [
  ['residents at work', d4], ['residents at work', d4], ['residents at work', d8], ['residents at work', d8], ['residents at work', d10], ['residents at work', d10], ['residents at work', d20], ['residents at work', d100], ['local rowdies', d6], ['non-local rowdies', d6], ['members of the local constabulary', d4], ['members of the local constabulary', d6], ['in company of a priest', d4], ['in company of a priest', d8], ['NPC friend', 1], ['hold-up man', 1], ['assassin', 1], ['pickpocket', 1], ['tiger sons', d4], ['vampire', 1]
];
var inCultivatedLands = [
  ['residents at work', d6], ['residents at work', d8], ['residents at work', d10], ['residents at work', d20], ['residents at work', d100], ['residents from the militia', d10], ['residents from the militia', d4], ['members of the local soldiery', d20], ['adventurers', d6], ['snakes', d4], ['rubble runners', d4], ['rubble runners', d6], ['centaurs', d4], ['ogre', 1], ['raiding elves', d20], ['raiding elves', d100], ['raiding trolls', d100], ['thieves', d10], ['highwayman', 1], ['wyrm', 1]
];
var inOpenCountry = [
  ['baboons', d6], ['centaurs', d6], ['minotaurs', d4], ['adventurers', d6], ['other thieves', d20], ['ogres', d4], ['morokanth', d4], ['crested dragonewt', 1], ['beaked dragonewt', 1], ['dragonewts in a party', d8], ['residents', d4], ['residents', d6], ['residents', d8], ['residents', d10], ['werewolf', 1], ['sky bull', 1], ['giant', 1], ['manticore', 1], ['wyrm', 1], ['dragon', 1]
];
var inPrax = [
  ['animals in a wild herd', d10], ['baboons', d4], ['morokanth', d6], ['morokanth', d8], ['newtling', 1], ['rhino riders', d8], ['horse barbarians', d20], ['zebra people', d20], ['sable people', d20], ['sable people', d100], ['impala people', d8], ['impala people', d20], ['high llama people', d10], ['high llama people', d20], ['bison people', d4], ['bison people', d8], ['centaurs', d4], ['griffin', 1], ['wyvern', 1], ['dragon', 1]
];
var inWoods = [
  ['pixie', 1], ['runner', 1], ['elf', 1], ['cockatrice', 1], ['dryad', 1], ['trollkin', 1], ['jack o bear', 1], ['dark trolls', d6], ['adventurers', d6], ['outlaws', d10], ['tusk riders', d8], ['crested dragonewt', 1], ['beaked dragonewt', 1], ['priest dragonewt', 1], ['shadow cat', 1], ['tusk brothers', d6], ['bear walker', 1], ['baboons', d8], ['wolfbrother', 1], ['snakes', d6]
];
var inElfWoods = [
  ['pixies', d4], ['pixies', d8], ['runners', d4], ['runners', d8], ['runners', d20], ['elves', d6], ['elves', d8], ['elves', d10], ['elves', d20], ['elves', d100], ['dryads', d6], ['dryads', d10], ['elves in a war party', d20], ['elves in a war party', d100], ['ghost', 1], ['raiding dwarves', d100], ['raiding trolls', d100], ['raiding adventurer', 1], ['bear walker', 1], ['centaur', 1]
];
var inMountains = [
  ['dwarf', 1], ['dwarf', 1], ['dwarf', 1], ['ghost', 1], ['adventurers', d6], ['trollkin', 1], ['trollkin', 1], ['dark trolls', d4], ['dark trolls', d6], ['great trolls', d6], ['rock lizards', d8], ['cliff toad', 1], 'wyvern', 'wind children', 'sky bull', 'griffin', 'gargoyle', 'giants', 'giants', 'broos'
];
var inDwarfMountains = [
  'dwarves', 'dwarves', 'dwarves', 'dwarves', 'dwarves', 'dwarves', 'dwarves', 'dwarves', 'dwarves', 'rock lizards', 'cliff toad', 'wyverns', 'wind children', 'sky bulls', 'griffins', 'gargoyles', 'giants', 'raiding trolls', 'raiding trolls'
];
var inRivers = [
  'fishermen', 'fishermen', 'fishermen', 'duck', 'duck', 'snakes', 'snakes', 'giant toad', 'small toad', 'cave trolls', 'dragonsnails', 'adventurers', 'dragonewts', 'dragonewts', 'dragonewts', 'newtlings', 'newtlings', 'newtlings', 'newtlings', 'wyrm'
];
var inMarsh = [
  'duck', 'duck', 'snake', 'snake', 'snake', 'skeleton', 'zombie', 'ghoul', 'vampire', 'dragonsnail', 'gorp', 'giant toads', 'lizards', 'beaked dragonewt', 'newtlings', 'walktapi', 'ghost', 'ghosts', 'wyrm', 'dragon'
];
var inRuins = [
  'baboobs', 'rock lizard', 'snakes', 'rubble runners', 'shadow cats', 'cave trolls', 'dark trolls', 'gargoyle', 'adventurers', 'weretiger', 'scorpion men', 'werewolf', 'broos', 'dragonsnail', 'skeletons', 'zombies', 'ghouls', 'vampire or ghost', 'wyrm or manticore', 'gorp'
];
var inChaosNests = [
  'skeleton', 'ghoul', 'zombie', 'vampire', 'ghost', 'broos', 'broos', 'scorpion man', 'scorpion men', 'scorpion men', 'werebear', 'weretiger', 'werepig', 'werewolf', 'ogre', 'basalisk', 'jack o bear', 'dragonsnail', 'dragonewt party', 'walktapus'
];
var inTrollAreas = [
  'great troll', 'great troll', 'dark troll', 'dark trolls', 'dark trolls', 'trollkin', 'trollkin', 'trollkin', 'trollkin', 'cave troll', 'cave trolls', 'dark troll war party', 'dark troll war party', 'cliff toad', 'jack o bear', 'wyrm', 'raiding adventurers', 'raiding dwarves', 'raiding elves'
];

// random treasure drops
var treasureArray = [
  [[75, 1, d100], [75, 1, d10], [50, 1, d6], [50, 1], [5, 1]],
  [[85, 1, d100], [85, 1, d100], [65, 1, d10], [65, 1], [10, 1]],
  [[95, 2, d100], [95, 2, d100], [75, 1, d10], [75, 1], [15, 1]],
  [[95, 4, d100], [95, 3, d100], [90, 1, d20], [90, 1], [20, 1]],
  [[95, 8, d100], [95, 4, d100], [95, 2, d20], [95, 1], [25, 1]],
  [[95, 10, d100], [95, 5, d100], [95, 3, d20], [95, 1], [30, 1]],
  [[95, 10, d100], [95, 6, d100], [95, 5, d20], [95, 2], [35, 1]],
  [[95, 20, d100], [95, 10, d100], [95, 2, d100], [95, 2], [40, 1]],
  [[95, 20, d100], [95, 10, d100], [95, 3, d100], [95, 2], [45, 1]],
  [[95, 30, d100], [95, 20, d100], [95, 4, d100], [95, 3], [50, 1]]
];

// combined combinations
// var legs = rightLeg.concat(leftLeg);
// var arms = rightArm.concat(leftArm);
// var abdomenAndLegs = abdomen.concat(legs);
// var chestAndAbdomen = chest.concat(abdomen);

// species starting attribute rolls: STR, CON, SIZ, INT, POW, DEX, CHA
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
  this.combat = {
    attack: this.setValue ('low', str) + this.setValue ('high', int) + this.setValue ('low', pow) + this.setValue ('high', dex),
    parry: this.setValue ('low', str) - this.setValue ('low', siz) + this.setValue ('low', pow) + this.setValue ('high', dex),
    defense: this.setValue ('high', int) - this.setValue ('low', siz) + this.setValue ('low', pow) + this.setValue ('high', dex),
    damageBonus: this.setDmgBonus(str, siz)
  };

  this.baseKnowledge = this.setValue ('high', int) + this.setValue ('low', pow);
  this.knowledge = {
    evaluateTreasure: this.baseKnowledge + 5,
    readWriteOwnLanguage: this.baseKnowledge + 10
  };

  this.baseManipulation = this.setValue ('low', str) + this.setValue ('high', int) + this.setValue ('low', pow) + this.setValue ('high', dex);
  this.manipulation = {
    armorMaking: 0,
    climbing: this.baseManipulation + 15,
    hideItem: this.baseManipulation + 10,
    jumping: this.baseManipulation + 15,
    lockPicking: this.baseManipulation + 5,
    mapMaking: this.baseManipulation + 10,
    riding: this.baseManipulation + 5,
    shieldMaking: 0,
    swimming: this.baseManipulation + 15,
    trapSetAndDisarm: this.baseManipulation + 5,
    tumbling: 0,
    weaponMaking: 0
  };

  this.basePerception = this.setValue ('high', int) + this.setValue ('low', pow);
  this.perception = {
    listen: this.basePerception + 25,
    spotHiddenItem: this.basePerception + 5,
    spotTrap: this.basePerception + 5,
    tracking: this.basePerception + 10
  };

  this.baseStealth = this.setValue ('high', int) - this.setValue ('high', siz) + this.setValue ('low', pow) + this.setValue ('high', dex);
  this.stealth = {
    camoflauge: this.baseStealth + 10,
    hideInCover: this.baseStealth + 5,
    moveSilently: this.baseStealth + 5,
    pickPockets: this.baseStealth + 5
  };

  this.baseOratory = this.setValue ('low', int) + this.setValue ('low', pow) + this.setValue ('high', cha);
  this.oratory = {
    acting: this.baseOratory + 5
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

var Item = function (name, cost, description, quantity) {
  this.name = name;
  this.cost = cost;
  this.description = description;
  this.quantity = quantity;
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


/***** OBJECT INSTANTIATION *****/


/***** HELPER FUNCTIONS *****/


// function: roll die and return the result
var roll = function (numberOfDice, diceType) {
  var rollResult = 0; // declare a variable to hold the final result
  for (var rolls = numberOfDice; rolls > 0; rolls --) { // for every dice to roll...
    // console.log('rolls left:', rolls);
    var dieResult = Math.floor (Math.random () * (diceType[1] - diceType[0]) + diceType[0]) // end floor
    // console.log('die result:', dieResult);
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

// function: makes a percentile check and returns if it passed, as well as by how much
var check = function (goal) {
  var percentile = roll (1, d100);
  if (percentile <= goal) {
    return [true, Math.ceil((percentile / goal) * 100)];
  } else {
    return [false, Math.ceil((percentile / goal) * 100)];
  }
}

var findEncounter = function (location) {
  var encounterIndex = roll (1, d20) - 1;
  if (location[encounterIndex][1] !== 1) {
    return roll (1, location[encounterIndex][1]) + ' ' + location[encounterIndex][0]
  }
  return '1 ' + location[encounterIndex][0];
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
    return 'scroll of increasing ' + randomAttributesArray[attributeIndex] + ' over ' + attributeTime + ' weeks'
  } else if (16 <= index && index <= 30) {
    return 'letter of credit, deed, or valuable historical knowledge';
  } else if (31 <= index && index <= 50) {
    return 'secret technique scroll giving a ' + randomIncrease + '% increase in any weapon';

    //TODO implement this with the weapons table when built

  } else if (51 <= index && index <= 65) {
    var randomSkillArray = ['knowledge', 'perception', 'manipulation', 'manipulation', 'stealth', 'stealth'];
    var skillIndex = roll (1, d6);
    return 'scroll holding the secrets of using ' + randomSkillArray[skillIndex] + 'and increasing all related skills by ' + randomIncrease + '%';
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
    return 'potion of healing ' + roll (1, d6) + ' damage to the body\'s worst wound';
  } else if (11 <= index && index <= 25) {
    var spell = randomSpell();
    return 'potion of ' + spell.name + 'with two hour duration'; // TODO: make spell names work
  } else if (26 <= index && index <= 55) {
    var poison = ['poison gas', 'poison gas', 'herbal poison', 'mineral poison'];
    return 'bottle of ' + poisonPotency + ' potency ' + poison[roll (1, d4) - 1];
  } else if (56 <= index && index <= 65) {
    var venom = ['manticore', 'wyvern', 'spider', 'spider'];
    return venom[roll (1, d4) - 1] + ' blade venom of ' + poisonPotency + ' potency';
  } else if (66 <= index && index <= 80) {
    var antidote = ['manticore venom', 'poison gas', 'wyvern venom', 'spider venom', 'herbal poison', 'mineral poison'];
    return 'antidote of ' + antidote[roll (1, d6) - 1];
  } else if (81 <= index <= 90) {
    return 'special potion at referee\'s discretion';
  } else {
    return 'spoiled potion: treated like poison of ' + poisonPotency + ' yet indestinguishable from a normal potion';
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
    return 'crystal of ' + crystalOne[0] + ' and ' + crystalTwo[0] + ' filled with ' + (crystalOne[1] + crystalTwo[1]) + ' power';
  } else if (index === 2) {
    var boostedCrystal = randomCrystalAttribute (roll (1, d100))
    return 'crystal of ' + boostedCrystal[0] + ' filled with ' + (boostedCrystal[1] + roll (1, d6)) + ' power';
  } else if (25 <= index && index <= 30) {
    return 'flawed crystal';
  } else {
    return 'crystal of ' + randomCrystalAttribute (index)[0] + ' filled with ' + randomCrystalAttribute (index)[1] + ' power';
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
    return 'spell of ' + specialItemSpell.name;
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
    return randomSpecialItem() + ' worth ' + randomGemAttribute (index)[1] + ' lunars';
  } else if (index === 2) {
    return randomCrystal();
  } else {
    var gem = randomGemAttribute(index);
    return gem[0] + ' worth ' + gem[1] + ' lunars';
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
  return clacks + ' clacks, ' + lunars + ' lunars, ' + wheels + ' wheels' + gemOutput + specialItemsOutput; // return everything
}

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
var battleMagicSpellbook = [

  new Spell (
    'Befuddle', // spell name
    80, // range, in meters
    true, // focused
    true, // passive
    10, // duration, in rounds. Categorized as "temporal".
    1, // power required
    'This spell confuses an opponent who succumbs to it. It causes him to wonder such things as: Is that a friend? Which ones are my enemies? Why is everyone fighting? A Befuddled enemy will not attack, cast an offensive spell, sound the alarm, etc. If attacked, he will parry and defend at full value, and beginning next round his confusion will go away (the guy that attacked me is my enemy, and after he is dead his obvious allies are my enemies). Thus, with some clever management, a Befuddled opponent might end up attacking his own party for as long as the spell is in effect.',
    1500 // cost in Lunars
  ),

  new Spell (
    'Binding', // spell name
    80, // range, in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    1, // power required
    'This spell halves the movement class of those affected by it. It can never reduce the movement class below "one". It is often carried by huntsmen, police, and intelligent beasts of prey, such as baboons.',
    1500 // cost in Lunars
  ),

  new Spell (
    'Bladesharp', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    [1, 2, 3, 4], // power required
    'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    500 * this.power // cost in Lunars
  ),

  new Spell (
    'Bludgeon', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    [1, 2, 3, 4], // power required
    'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    500 * this.power // cost in Lunars
  ),

  new Spell (
    'Coordination', // spell name
    80, // range in meters
    true, // focused, on others
    true, // passive
    10, // duration, in rounds
    2, // power required
    'This spell adds three to a character\'s effective DEX. This will decrease strike rank by one and improve the character\'s chance of making DEX rolls. DEX is never raised over the species maximum. Thus, the greatest DEX a human can have is 21.',
    1500 // cost, in Lunars
  ),

  new Spell (
    'Counterspell', // spell name
    80, // range, in meters
    true, // focused, on others

    500 * this.power // cost, in Lunars
  )
]


/***** LIVING COSTS *****/


// FOOD
var cheapMeal = new Item ('cheap meal', 0.2, '', 1);
var goodMeal = new Item ('good meal', 0.5, '', 1);
var banquet = new Item ('banquet', 1, '', 1);
var trailProvisions = new Item ('trail provisions', 5, '', 7); // week's worth of food

// DRINK
var beerMug = new Item ('mug of beer', 0.05, '', 1);
var beerCask = new Item ('cask of beer', 0.5, '', 1);
var beerKeg = new Item ('keg of beer', 1.5, '', 1);
var wineMug = new Item ('mug of wine', 0.2, '', 1);
var wineCask = new Item ('cask of wine', 2, '', 1);
var wineKeg = new Item ('keg of wine', 6, '', 1);

// ROOM
var floor = new Item ('common room floor', 0.1, '', 1);
var dorm = new Item ('dormitory', 0.5, '', 1);
var shared = new Item ('shared private room', 1, '', 1);
var single = new Item ('private room', 2, '', 1);
var hotWater = new Item ('hot water', 0.2, '', 1);

// CLOTHING
var peasantClothes = new Item ('peasant yearly clothes', 2, '', 12);
var townsmanClothes = new Item ('townsman yearly clothes', 5, '', 12);
var adventurerClothes = new Item ('adventurer monthly clothes', 10, '', 1);
var nobleClothes = new Item ('noble monthly clothes', 20, '', 1);

// STABLE COSTS
var stableStall = new Item ('stall for a day', 0.1, '', 1);
var stableFeed = new Item ('feed for a day', 0.4, '', 1);
var stableSpecialCare = new Item ('special care', 1, '', 1);

// TRAIL FODDER
var trailOats = new Item ('trail fodder for a week', 2, '', 7);


/***** GENERAL COSTS *****/


// GENERAL FEES
var adventurerFees = new Item ('average weekly adventurer expenses', 5, '', 7);
// var adventurersPack = [backPack, wineSkin, rope, peasantClothes, handAxe, hammer, woodSpikes, fishHooks, sackSmall, knife, cookingGear, blanket];
var nobleFees = new Item ('average weekly noble expenses', 10, '', 7);

// TRANSPORTATION
var horseCart = new Item ('cart horse', 50, '18 average HP', 1);
var horseRiding = new Item ('riding horse (untrained)', 100, '18 average HP', 1);
var horseCavalry = new Item ('cavalry horse (battle-trained)', 1500, '20 average HP', 1);
var horseWar = new Item ('war horse (attack trained)', 5000, '25% on all attacks, 22 average HP', 1);
var cartTwoWheeled = new Item ('two-wheeled cart', 35, '', 1);
var cartFourWheeled = new Item ('four-wheeled cart', 85, '', 1);

// EQUIPMENT
var hammer = new Item ('hammer', 0.2, '', 1);
var mallet = new Item ('mallet', 0.5, '', 1);
var climbingPack = new Item ('climbing pack', 20, '', 1);
var fishHooks = new Item ('fish hooks', 0.2, '', 1);
var writingTools = new Item ('writing tools', 10, '', 1);
var papyrus = new Item ('papyrus sheet', 0.5, '', 1);

// CAMPING GEAR
var cookingGear = new Item ('cooking and eating gear', 2, '', 1);
var tentSmall = new Item ('small tent (1 man)', 10, '', 1);
var tentMedium = new Item ('medium tent (3 man)', 25, '', 1);
var tentLarge = new Item ('large tent (5 man)', 40, '', 1);
var fireStarter = new Item ('fire starter', 1, '', 1);
var backPack = new Item ('back pack', 1, '', 1);

// EXPEDITION GEAR
var rope = new Item ('15m rope', 5, '', 1);
var pole = new Item ('3m pole', 0, '', 1);
var woodSpikes = new Item ('wood spikes', 1, '', 10);
var lamp = new Item ('lamp', 5, '', 1);
var lampOil = new Item ('lamp oil', 0.5, '', 1);
var sackSmall = new Item ('small sack', 0.2, '', 1);
var sackLarge = new Item ('large sack', 0.5, '', 1);
var torch = new Item ('torch', 0, '', 1);

// RIDING GEAR
var horseSaddle = new Item ('saddle', 20, '', 1);
var horseBarding;

// CONTAINERS
var wineSkin = new Item ('wine skin', 1, '', 1);
var flask = new Item ('flask', 1, '', 1);
var jug = new Item ('jug (2 liters)', 2, '', 1);
var cask = new Item ('cask (5 liters)', 5, '', 1);
var keg = new Item ('keg (15 liters)', 15, '', 1);
var barrel = new Item ('barrel (50 liters)', 25, '', 1);

// MUSICAL INSTRUMENTS
var bugle = new Item ('bugle', 5, '', 1);
var lurHorn = new Item ('lur horn', 25, '', 1);
var harp = new Item ('harp', 10, '', 1);
var lyre = new Item ('lyre', 20, '', 1);
var reedPipes = new Item ('reed pipes', 5, '', 1);
var bagpipes = new Item ('bagpipes', 25, '', 1);
