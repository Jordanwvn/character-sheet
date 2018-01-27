'use strict';

const random = require('./random.js');

module.exports = class {
  constructor (location) {
    this.index = random.roll(1, d20) - 1
    this.creature = location.results[this.index][0]
    this.dice = location.results[1]
  }
}


random.encounter = location => {
  let encounterIndex = random.roll (1, d20) - 1; // encounter index is something between 1 and 20
  let encounterCreature = location.results[encounterIndex][0]; // get the random creature from the defined location
  let encounterDice = location.results[encounterIndex][1]; // get the dice to define the number of those creatures
  return random.check(location.chance)[0] === true ? ( // did you find a location in the area?
    location.results[encounterIndex][1] !== 1 ? `${roll (1, encounterDice)} ${encounterCreature}` // return what creatures are there
    : `1 ${encounterCreature}` // if there is only 1, don't roll for number
  ) : 'nothing found'; // if you didn't find a creature, return nothing found
}

random.disposition = (index, rangeOne, rangeTwo, rangeThree, rangeFour) => {
  return index <= rangeOne ? 'encountered creatures are extremely friendly to party, and very ameable to suggestions'
  : index <= rangeTwo ? 'encountered creatures are extremely friendly to party, and very ameable to suggestions'
  : index <= rangeThree ? 'encountered creatures are unsure and will stall for time, or for something significant or telling to occur'
  : index <= rangeFour ? 'encountered creatures take an active dislike of the party, just short of blind hatred'
  : 'encountered creatures cannot conceal their contempt and/or hatred for the party'
}

random.response = (predisposition) => {
  let responseIndex = random.roll (1, d100);
  return predisposition === 'hostile' ? findResponse (responseIndex, 5, 15, 25, 85)
  : predisposition === 'neutral' ? findResponse (responseIndex, 10, 30, 70, 90)
  : findResponse (responseIndex, 15, 75, 85, 95);
}


const inTown = {
  chance: 85,
  results: [['residents at work', d4], ['residents at work', d4], ['residents at work', d8], ['residents at work', d8], ['residents at work', d10], ['residents at work', d10], ['residents at work', d20], ['residents at work', d100], ['local rowdies', d6], ['non-local rowdies', d6], ['members of the local constabulary', d4], ['members of the local constabulary', d6], ['in company of a priest', d4], ['in company of a priest', d8], ['NPC friend', 1], ['hold-up man', 1], ['assassin', 1], ['pickpocket', 1], ['tiger sons', d4], ['vampire', 1]]
};

const inCultivatedLands = {
  chance: 75,
  results:[['residents at work', d6], ['residents at work', d8], ['residents at work', d10], ['residents at work', d20], ['residents at work', d100], ['residents from the militia', d10], ['residents from the militia', d4], ['members of the local soldiery', d20], ['adventurers', d6], ['snakes', d4], ['rubble runners', d4], ['rubble runners', d6], ['centaurs', d4], ['ogre', 1], ['raiding elves', d20], ['raiding elves', d100], ['raiding trolls', d100], ['thieves', d10], ['highwayman', 1], ['wyrm', 1]]
};

const inOpenCountry = {
  chance: 60,
  results: [['baboons', d6], ['centaurs', d6], ['minotaurs', d4], ['adventurers', d6], ['other thieves', d20], ['ogres', d4], ['morokanth', d4], ['crested dragonewt', 1], ['beaked dragonewt', 1], ['dragonewts in a party', d8], ['residents', d4], ['residents', d6], ['residents', d8], ['residents', d10], ['werewolf', 1], ['sky bull', 1], ['giant', 1], ['manticore', 1], ['wyrm', 1], ['dragon', 1]]
};

const inPrax = {
  chance: 40,
  results: [['animals in a wild herd', d10], ['baboons', d4], ['morokanth', d6], ['morokanth', d8], ['newtling', 1], ['rhino riders', d8], ['horse barbarians', d20], ['zebra people', d20], ['sable people', d20], ['sable people', d100], ['impala people', d8], ['impala people', d20], ['high llama people', d10], ['high llama people', d20], ['bison people', d4], ['bison people', d8], ['centaurs', d4], ['griffin', 1], ['wyvern', 1], ['dragon', 1]]
};

const inWoods = {
  chance: 30,
  results: [['pixie', 1], ['runner', 1], ['elf', 1], ['cockatrice', 1], ['dryad', 1], ['trollkin', 1], ['jack o bear', 1], ['dark trolls', d6], ['adventurers', d6], ['outlaws', d10], ['tusk riders', d8], ['crested dragonewt', 1], ['beaked dragonewt', 1], ['priest dragonewt', 1], ['shadow cat', 1], ['tusk brothers', d6], ['bear walker', 1], ['baboons', d8], ['wolfbrother', 1], ['snakes', d6]]
};

const inElfWoods = {
  chance: 80,
  results: [['pixies', d4], ['pixies', d8], ['runners', d4], ['runners', d8], ['runners', d20], ['elves', d6], ['elves', d8], ['elves', d10], ['elves', d20], ['elves', d100], ['dryads', d6], ['dryads', d10], ['elves in a war party', d20], ['elves in a war party', d100], ['ghost', 1], ['raiding dwarves', d100], ['raiding trolls', d100], ['raiding adventurer', 1], ['bear walker', 1], ['centaur', 1]]
};

const inMountains = {
  chance: 80,
  results: [['dwarf', 1], ['dwarf', 1], ['dwarf', 1], ['ghost', 1], ['adventurers', d6], ['trollkin', 1], ['trollkin', 1], ['dark trolls', d4], ['dark trolls', d6], ['great trolls', d6], ['rock lizards', d8], ['cliff toad', 1], ['wyvern', 1], ['wind children', d6], ['sky bull', 1], ['griffin', 1], ['gargoyle', 1], ['giants', d4], ['giants', d8], ['broos', d8]]
};

const inDwarfMountains = {
  chance: 80,
  results: [['dwarves', d4], ['dwarves', d6], ['dwarves', d8], ['dwarves', d10], ['dwarves', d10], ['dwarves', d20], ['dwarves', d20], ['dwarves', d100], ['dwarves', d100], ['rock lizards', d6], ['cliff toad', 1], ['wyverns', d4], ['wind children', d8], ['sky bulls', d6], ['griffins', d4], ['gargoyles', d6], ['giants', d4], ['raiding trolls', d20], ['raiding trolls', d100]]
};

const inRivers = {
  chance: 30,
  results: [['fishermen', d4], ['fishermen', d6], ['fishermen', d8], ['duck', d6], ['duck', d10], ['snakes', d6], ['snakes', d20], ['giant toad', 1], ['small toad', 1], ['cave trolls', d6], ['dragonsnails', d4], ['adventurers', d6], ['dragonewts', d6], ['dragonewts', d10], ['dragonewts', d20], ['newtlings', d6], ['newtlings', d8], ['newtlings', d10], ['newtlings', d20], ['wyrm', 1]]
};

const inMarsh = {
  chance: 45,
  results: [['duck', d4], ['duck', d8], ['snake', d4], ['snake', d6], ['snake', d8], ['skeleton', 1], ['zombie', 1], ['ghoul', 1], ['vampire', 1], ['dragonsnail', 1], ['gorp', 1], ['giant toads', d4], ['lizards', d6], ['beaked dragonewt', 1], ['newtlings', d6], ['walktapi', d4], ['ghost', 1], ['ghosts', d4], ['wyrm', 1], ['dragon', 1]]
};

const inRuins = {
  chance: 85,
  results: [['baboons', d6], ['rock lizard', 1], ['snakes', d4], ['rubble runners', d8], ['shadow cats', d4], ['cave trolls', d6], ['dark trolls', d4], ['gargoyle', 1], ['adventurers', d6], ['weretiger', 1], ['scorpion men', d4], ['werewolf', 1], ['broos', d4], ['dragonsnail', 1], ['skeletons', d20], ['zombies', d20], ['ghouls', d10], ['vampire', 1], ['wyrm', 1], ['gorp', 1]]
};

const inChaosNests = {
  chance: 85,
  results: [['skeleton', 1], ['ghoul', 1], ['zombie', 1], ['vampire', 1], ['ghost', 1], ['broos', d4], ['broos', d8], ['scorpion man', 1], ['scorpion men', d4], ['scorpion men', d8], ['werebear', 1], ['weretiger', 1], ['werepig', 1], ['werewolf', 1], ['ogre', 1], ['basalisk', 1], ['jack o bear', 1], ['dragonsnail', 1], ['dragonewts in a party', d6], ['walktapus', 1]]
};

const inTrollAreas = {
  chance: 80,
  results: [['great troll', 1], ['great troll', 1], ['dark troll', 1], ['dark trolls', d4], ['dark trolls', d8], ['trollkin', d4], ['trollkin', d6], ['trollkin', d8], ['trollkin', d10], ['cave troll', 1], ['cave trolls', d6], ['dark trolls in war party', d20], ['dark trolls in war party', d100], ['cliff toad', 1], ['jack o bear', 1], ['wyrm', 1], ['raiding adventurers', d20], ['raiding dwarves', d100], ['raiding elves', d100]]
};
