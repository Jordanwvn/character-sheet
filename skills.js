'use strict';


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

let Skills = function (playerAttributes) { // take in Character.Attributes
  let {str, con, siz, int, pow, dex, cha} = playerAttributes; // set values to their equivalent at playerAttributes

  let strLow = this.setValue ('low', str),
      sizLow = this.setValue ('low', siz), sizHigh = this.setValue ('high', siz),
      intLow = this.setValue ('low', int), intHigh = this.setValue ('high', int),
      powLow = this.setValue ('low', pow),
                                           dexHigh = this.setValue ('high'),
                                           chaHigh = this.setValue ('high');

  this.combat = { // the combat section of skills
    attack: strLow + intHigh + powLow + dexHigh, // attack skill is initially set by checking various ability scores
    parry: strLow - sizLow + powLow + dexHigh, // parry skill is initially set by checking various ability scores
    defense: intHigh - sizLow + powLow + dexHigh, //
    damageBonus: this.setDmgBonus(str, siz)
  };

  this.knowledge = intHigh + powLow;

  this.evaluateTreasure = this.knowledge + 5,
  this.readWriteOwnLanguage = this.knowledge + 10

  this.manipulation = strLow + intHigh + powLow + dexHigh;

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

  this.perception = intHigh + powLow;

  this.listen = this.perception + 25,
  this.spotHiddenItem = this.perception + 5,
  this.spotTrap = this.perception + 5,
  this.tracking = this.perception + 10

  this.stealth = intHigh - sizHigh + powLow + dexHigh;

  this.camoflauge = this.stealth + 10,
  this.hideInCover = this.stealth + 5,
  this.moveSilently = this.stealth + 5,
  this.pickPockets = this.stealth + 5

  this.oratory = intLow + powLow + chaH;
  this.acting = this.oratory + 5
}


/***** PROTOTYPE METHODS *****/


Skills.prototype.setValue = function (type, attribute) {
  return type === 'low' ? (
    attribute <= 4 ? -5
    : (5 <= attribute && attribute <= 16) ? 0
    : (Math.ceil(attribute / 4) - 4) * 5
  ) : (Math.ceil(attribute / 4) - 3) * 5
}

Skills.prototype.setDmgBonus = function (str, siz) {
  let bonus = Math.ceil((str + siz) / 2);
  return bonus <= 6 ? [-1, d4]
  : bonus <= 12 ? [0, 0]
  : bonus <= 16 ? [1, d4]
  : bonus <= 20 ? [1, d6]
  : [Math.ceil((bonus - 12) / 8), d6]
}


/***** HELPER FUNCTIONS *****/


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
  : `${player.name} was unsuccessful`
} // end skillCheck function
