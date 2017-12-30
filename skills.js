'use strict';


/***** VARIABLE DECLARATIONS *****/


let strLow = setValue ('low', str),
    sizLow = setValue ('low', siz), sizHigh = setValue ('high', siz),
    intLow = setValue ('low', int), intHigh = setValue ('high', int),
    powLow = setValue ('low', pow),
                                    dexHigh = setValue ('high', dex),
                                    chaHigh = setValue ('high', cha);

const skillArray = [
  ['knowledge',    'evaluateTreasure'],
  ['knowledge',    'readWriteOwnLanguage'],
  ['manipulation', 'armorMaking'],
  ['manipulation', 'climbing'],
  ['manipulation', 'hideItem'],
  ['manipulation', 'jumping'],
  ['manipulation', 'lockPicking'],
  ['manipulation', 'mapMaking'],
  ['manipulation', 'riding'],
  ['manipulation', 'shieldMaking'],
  ['manipulation', 'swimming'],
  ['manipulation', 'trapSetAndDisarm'],
  ['manipulation', 'tumbling'],
  ['manipulation', 'weaponMaking'],
  ['perception',   'listen'],
  ['perception',   'spotHiddenItem'],
  ['perception',   'spotTrap'],
  ['perception',   'tracking'],
  ['stealth',      'camoflauge'],
  ['stealth',      'hideInCover'],
  ['stealth',      'moveSilently'],
  ['stealth',      'pickPockets'],
  ['oratory',      'acting']
];


/***** CONSTRUCTORS *****/


let Attributes = function (attributesArray) {
  this.str = attributesArray[0]; // strength
  this.con = attributesArray[1]; // constitution
  this.siz = attributesArray[2]; // size
  this.int = attributesArray[3]; // intelligence
  this.pow = attributesArray[4]; // power
  this.dex = attributesArray[5]; // dexterity
  this.cha = attributesArray[6]; // charisma
}

let BaseSkills = function (playerAttributes) { // take in Character.Attributes
  let {str, con, siz, int, pow, dex, cha} = playerAttributes; // set values to their equivalent at playerAttributes

  // COMBAT SKILLS
  this.combat = { // the combat section of skills
   attack: strLow + intHigh + powLow + dexHigh, // attack skill is initially set by checking various ability scores
   parry: strLow - sizLow + powLow + dexHigh, // parry skill is initially set by checking various ability scores
   defense: intHigh - sizLow + powLow + dexHigh, //
   damageBonus: setDmgBonus(str, siz)
  };

  // NON-COMBAT SKILLS
  this.knowledge = intHigh + powLow;
  this.manipulation = strLow + intHigh + powLow + dexHigh;
  this.perception = intHigh + powLow;
  this.stealth = intHigh - sizHigh + powLow + dexHigh;
  this.oratory = intLow + powLow + chaHigh;
}

let SetSkillBonuses = function (species) {
  for (let skill in skillArray) {
    for (let )
  }
  this.evaluateTreasure = getSpeciesSkill (species, 'evaluateTreasure');
}

let Skills = function (player) { // take in Character.Attributes
  for (let skill in skillArray) {
    this[skill[1]]
    = player[BaseSkills][skill[0]] // add attribute bonus, by category
    + player[Species][skillBonuses][skill[1]] // addvspecies bonus, by name
    + player[skillAdditions][skill[1]] // add logged increases, by name
  }
}


/***** HELPER FUNCTIONS *****/


let setValue = function (type, attribute) {
  return type === 'low' ? (
    attribute <= 4 ? -5
    : (5 <= attribute && attribute <= 16) ? 0
    : (Math.ceil(attribute / 4) - 4) * 5
  ) : (Math.ceil(attribute / 4) - 3) * 5
}

let setDmgBonus = function (str, siz) {
  let bonus = Math.ceil((str + siz) / 2);
  return bonus <= 6 ? [-1, d4]
  : bonus <= 12 ? [0, 0]
  : bonus <= 16 ? [1, d4]
  : bonus <= 20 ? [1, d6]
  : [Math.ceil((bonus - 12) / 8), d6]
}

let getSpeciesSkill = function (species, skillName) {
  return species[skillName] ? species[skillName] : 0;
}

let skillNotSet = (player, skill) => {
  for (let skillItem in player[skillsToIncrease]) {
    if (player[skillsToIncrease][skillItem] === skill) return false;
  }
  return true;
}

let skillCheck = (player, skill) => {
  return check (player[skills][skill])[0] === true ? (
    skillNotSet(player, skill === true) ? (
      player.skillsToIncrease.push(skill),
      `${player.name} was successful, and ${skill} is eligable to be increased`
    ) : `${player.name} was successful`
  )
  : `${player.name} was unsuccessful`;
} // end skillCheck function

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

// TODO create function for increasing ability scores, and refreshing the base values



//   // KNOWLEDGE
//   this.evaluateTreasure = player[BaseSkills][knowledge] + 5;
//   this.readWriteOwnLanguage = player[BaseSkills][knowledge] + 10;
//
//   // MANIPULATION
//   this.armorMaking = 0,
//   this.climbing = player[BaseSKills][manipulation] + 15,
//   this.hideItem = this.manipulation + 10,
//   this.jumping = this.manipulation + 15,
//   this.lockPicking = this.manipulation + 5,
//   this.mapMaking = this.manipulation + 10,
//   this.riding = this.manipulation + 5,
//   this.shieldMaking = 0,
//   this.swimming = this.manipulation + 15,
//   this.trapSetAndDisarm = this.manipulation + 5,
//   this.tumbling = 0,
//   this.weaponMaking = 0
//
//   // PERCEPTION
//   this.listen = this.perception + 25,
//   this.spotHiddenItem = this.perception + 5,
//   this.spotTrap = this.perception + 5,
//   this.tracking = this.perception + 10
//
//   // STEALTH
//   this.camoflauge = this.stealth + 10,
//   this.hideInCover = this.stealth + 5,
//   this.moveSilently = this.stealth + 5,
//   this.pickPockets = this.stealth + 5
//
//   // ORATORY
//   this.acting = this.oratory + 5
// }
