'use strict';

const skillsJSON = require('../storage/skills.json');
const check = require('./check.js');
const skills = JSON.parse(skillsJSON);

module.exports = class {
  constructor() {
    this.agility = {
      climb: skills.agility.climb.starting_value;
      dodge: skills.agility.dodge.starting_value;
      jump: skills.agility.jump.starting_value;
      ride: skills.agility.ride.starting_value;
      swim: skills.agility.swim.starting_value;
    }
    this.communication = {
      act: skills.communication.act.starting_value;
      art: skills.communication.art.starting_value;
      bargain: skills.communication.bargain.starting_value;
      charm: skills.communication.charm.starting_value;
      dance: skills.communication.dance.starting_value;
      disguise: skills.communication.disguise.starting_value;
      fastTalk: skills.communication.fast_talk.starting_value;
      intimidate: skills.communication.intimidate.starting_value;
      intrigue: skills.communication.intrigue.starting_value;
      orate: skills.communication.orate.starting_value;
      sing: skills.communication.sing.starting_value;
      speakEsrolian: skills.communication.speak_esrolian.starting_value;
      speakGrazelander: skills.communication.speak_grazelander.starting_value;
      speakLunar: skills.communication.speak_lunar.starting_value;
      speakOldPavic: skills.communication.speak_old_pavic.starting_value;
      speakPraxian: skills.communication.speak_praxian.starting_value;
      speakShartarite: skills.communication.speak_shartarite.starting_value;
      speakTarshite: skills.communication.speak_tarshite.starting_value;
      speakTradetalk: skills.communication.speak_tradetalk.starting_value;
      speakAldryami: skills.communication.speak_aldryami.starting_value;
      speakBeastspeech: skills.communication.speak_beastspeech.starting_value;
      speakDarktongue: skills.communication.speak_esrolian.starting_value;
      speakDraconic: skills.communication.speak_draconic.starting_value;
      speakEarthtongue: skills.communication.speak_earthtongue.starting_value;
      speakFirespeech: skills.communication.speak_firespeech.starting_value;
      speakMostali: skills.communication.speak_mostali.starting_value;
      speakSeatongue: skills.communication.speak_seatongue.starting_value;
      speakSpiritspeech: skills.communication.speak_spiritspeech.starting_value;
      speakStormspeech: skills.communication.speak_stormspeech.starting_value;
    }
    this.knowledge = {
      battle: skills.knowledge.battle.starting_value;
      // TODO figure out customs: every city
      evaluate: skills.knowledge.evaluate.starting_value;
      farm: skills.knowledge.farm.starting_value;
      firstAid: skills.knowledge.first_aid.starting_value;
      herd: skills.knowledge.herd.starting_value;
      // TODO figure out lore: every cult
      manageHousehold: skills.knowledge.manage_household.starting_value;
      readWriteEsrolian: skills.knowledge.read_write_esrolian.starting_value;
      readWriteGrazelander: skills.knowledge.read_write_grazelander.starting_value;
      readWriteLunar: skills.knowledge.read_write_lunar.starting_value;
      readWriteOldPavic: skills.knowledge.read_write_old_pavic.starting_value;
      readWritePraxian: skills.knowledge.read_write_praxian.starting_value;
      readWriteShartarite: skills.knowledge.read_write_shartarite.starting_value;
      readWriteTarshite: skills.knowledge.read_write_tarshite.starting_value;
      readWriteTradetalk: skills.knowledge.read_write_tradetalk.starting_value;
      readWriteAldryami: skills.knowledge.read_write_aldryami.starting_value;
      readWriteBeastspeech: skills.knowledge.read_write_beastspeech.starting_value;
      readWriteDarktongue: skills.knowledge.read_write_esrolian.starting_value;
      readWriteDraconic: skills.knowledge.read_write_draconic.starting_value;
      readWriteEarthtongue: skills.knowledge.read_write_earthtongue.starting_value;
      readWriteFirespeech: skills.knowledge.read_write_firespeech.starting_value;
      readWriteMostali: skills.knowledge.read_write_mostali.starting_value;
      readWriteSeatongue: skills.knowledge.read_write_seatongue.starting_value;
      readWriteSpiritspeech: skills.knowledge.read_write_spiritspeech.starting_value;
      readWriteStormspeech: skills.knowledge.read_write_stormspeech.starting_value;
      survival: skills.knowledge.survival.starting_value;
    }
    this.magic = {
      meditate: skills.magic.meditate.starting_value;
      prepareCorpse: skills.magic.prepare_corpse.starting_value;
      spiritCombat: skills.magic.spirit_combat.starting_value;
      // worshipDeity: skills.magic.worship_deity.starting_value; TODO might need to be more specific
    }
    this.manipulation = {
      conceal: skills.manipulation.conceal.starting_value;
      // TODO figure out craft: various things
      hatchet: skills.manipulation.hatchet.starting_value;
      battleAxeOneHanded: skills.manipulation.battle_axe_one_handed.starting_value;
      battleAxeTwoHanded: skills.manipulation.battle_axe_two_handed.starting_value;
      greatAxe: skills.manipulation.great_axe.starting_value;
      poleAxe: skills.manipulation.pole_axe.starting_value;
      rhomphaia: skills.manipulation.rhomphaia.starting_value;
      butt: skills.manipulation.butt.starting_value;
      dagger: skills.manipulation.dagger.starting_value;
      fist: skills.manipulation.fist.starting_value;
      claw: skills.manipulation.claw.starting_value;
      heavyCestus: skills.manipulation.heavy_cestus.starting_value;
      lightCestus: skills.manipulation.light_cestus.starting_value;
      grainFlail: skills.manipulation.grain_flail.starting_value;
      warFlail: skills.manipulation.war_flail.starting_value;
      militaryFlail: skills.manipulation.military_flail.starting_value;
      grapple: skills.manipulation.grapple.starting_value;
      warHammer: skills.manipulation.war_hammer.starting_value;
      greatHammer: skills.manipulation.great_hammer.starting_value;
      kick: skills.manipulation.kick.starting_value;
      heavyMaceOneHanded: skills.manipulation.heavy_mace_one_handed.starting_value;
      heavyMaceTwoHanded: skills.manipulation.heavy_mace_two_handed.starting_value;
      lightMace: skills.manipulation.light_mace.starting_value;
      singlestick: skills.manipulation.singlestick.starting_value;
      maul: skills.manipulation.maul.starting_value;
      quarterstaff: skills.manipulation.quarterstaff.starting_value;
      morningStarFlail: skills.manipulation.morning_star_flail.starting_value;
      pike: skills.manipulation.pike.starting_value;
      rapier: skills.manipulation.rapier.starting_value;
      shortsword: skills.manipulation.shortsword.starting_value;
      sickle: skills.manipulation.sickle.starting_value;
      longSpearOneHanded: skills.manipulation.long_spear_one_handed.starting_value;
      longSpearTwoHanded: skills.manipulation.long_spear_two_handed.starting_value;
      shortSpearOneHanded: skills.manipulation.short_spear_one_handed.starting_value;
      shortSpearTwoHanded: skills.manipulation.short_spear_two_handed.starting_value;
      lance: skills.manipulation.lance.starting_value;
      bastardSwordOneHanded: skills.manipulation.bastard_sword_one_handed.starting_value;
      bastardSwordTwoHanded: skills.manipulation.bastard_sword_two_handed.starting_value;
      broadsword: skills.manipulation.broadsword.starting_value;
      scimitar: skills.manipulation.scimitar.starting_value;
      greatSword: skills.manipulation.great_sword.starting_value;
      throwingAxe: skills.manipulation.throwing_axe.starting_value;
      compositeBow: skills.manipulation.composite_bow.starting_value;
      elfBow: skills.manipulation.elf_bow.starting_value;
      selfBow: skills.manipulation.self_bow.starting_value;
      arbalest: skills.manipulation.arbalest.starting_value;
      heavyCrossbow: skills.manipulation.heavy_crossbow.starting_value;
      lightCrossbow: skills.manipulation.light_crossbow.starting_value;
      throwingDagger: skills.manipulation.throwing_dagger.starting_value;
      dart: skills.manipulation.dart.starting_value;
      javelin: skills.manipulation.javelin.starting_value;
      rock: skills.manipulation.rock.starting_value;
      sling: skills.manipulation.sling.starting_value;
      staffSling: skills.manipulation.staff_sling.starting_value;
      smallShield: skills.manipulation.small_shield.starting_value;
      mediumShield: skills.manipulation.medium_shield.starting_value;
      largeShield: skills.manipulation.large_shield.starting_value;
      sleight: skills.manipulation.sleight.starting_value;
    }
    this.perception = {
      // TODO insight: every creature
      listen: skills.perception.listen.starting_value;
      scan: skills.perception.scan.starting_value;
      search: skills.perception.search.starting_value;
      track: skills.perception.track.starting_value;
    }
    this.stealth = {
      hide: skills.stealth.hide.starting_value;
      moveQuietly: skills.stealth.move_quietly.starting_value;
    }
    this.toIncrease = [];
  }
  check (category, skillName) {
    let chance = this[category][skillName] + this[`${category}Bonus`];
    return check.skill(chance) ? (this.toIncrease.push({c: category, s: skillName}), true) : false;
  }
  combatCheck (skill) {
    // TODO
  }
  increase (learnBonus) {
    while (toIncrease.length) {
      let increase = toIncrease.shift();
      if (check.skill(100 - this[increase.c][increase.s] + learnBonus))
        this[increase.c][increase.s] += 5;
    }
  }
  updateSpecies (species) {
    for (let bonus in species.skills) {
      this[bonus.name] = bonus.value;
    }
  }
  addAttributeBonus (attributes) {
    let str = this.assign ('low',  attributes.str),
        siz = this.assign ('low',  attributes.siz),
        int = this.assign ('high', attributes.int),
        pow = this.assign ('low',  attributes.pow),
        dex = this.assign ('high', attributes.dex),
        cha = this.assign ('high', attributes.cha);

    this.agilityBonus = str + pow + dex;
    this.communicationBonus = int + pow + cha;
    this.knowledgeBonus = int + pow;
    this.magicBonus = int + pow;
    this.manipulationBonus = str + int + pow + dex;
    this.perceptionBonus = int + pow;
    this.stealthBonus = int - siz - pow + dex;
  }
  assign (type, attribute) {
    switch (type) {
      case 'low': {
        return attribute <= 4 ? -5
          : attribute <= 16 ? 0
            : ((attribute >> 2) - 3) * 5;
      }
      case 'high': {
        return ((attribute >> 2) - 2) * 5;
      }
    }
  }
  setDmgBonus (str, siz) {
    let bonus = ((str + siz) >> 1) + ((str + siz) & 1);
    switch (true) {
      case 0  < bonus && bonus <=  6: return [-1, 4]; //quantity, die
      case 7  < bonus && bonus <= 12: return [ 0, 0];
      case 13 < bonus && bonus <= 16: return [ 1, 4];
      case 17 < bonus && bonus <= 20: return [ 1, 6];
      default: [ ((bonus - 12) >> 3) + (str + siz) & 1, 6 ];
    }
  }
}
