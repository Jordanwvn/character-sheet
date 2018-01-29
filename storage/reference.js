/* REFERENCES *****************************************************************
* this section holds unchanging arrays and objects that will be referenced in *
* the main JS file. The data in this file will not change when the program is *
* ran. This includes random generation data information for different         *
* species, spells, weapons, armor, etc.                                       *
*****************************************************************/ 'use strict';


/***** DICE *****/


// const d4 = [1, 4]; // four-sided die
// const d6 = [1, 6]; // six-sided die
// const d8 = [1, 8]; // eight-sided die
// const d10 = [1, 10]; // ten-sided die
// const d20 = [1, 20]; // twenty-sided die
// const d100 = [1, 100]; // one hundred-sided die, or "percentile"


/***** TREASURE *****/


// const treasureArray = [ // copper, silver, gold, gems, then special items
//   [[75, 1, d100], [75, 1, d10], [50, 1, d6], [50, 1], [5, 1]],
//   [[85, 1, d100], [85, 1, d100], [65, 1, d10], [65, 1], [10, 1]],
//   [[95, 2, d100], [95, 2, d100], [75, 1, d10], [75, 1], [15, 1]],
//   [[95, 4, d100], [95, 3, d100], [90, 1, d20], [90, 1], [20, 1]],
//   [[95, 8, d100], [95, 4, d100], [95, 2, d20], [95, 1], [25, 1]],
//   [[95, 10, d100], [95, 5, d100], [95, 3, d20], [95, 1], [30, 1]],
//   [[95, 10, d100], [95, 6, d100], [95, 5, d20], [95, 2], [35, 1]],
//   [[95, 20, d100], [95, 10, d100], [95, 2, d100], [95, 2], [40, 1]],
//   [[95, 20, d100], [95, 10, d100], [95, 3, d100], [95, 2], [45, 1]],
//   [[95, 30, d100], [95, 20, d100], [95, 4, d100], [95, 3], [50, 1]]
// ];


/***** RANDOM ENCOUNTERS *****/


// const inTown = {
//   chance: 85,
//   results: [['residents at work', d4], ['residents at work', d4], ['residents at work', d8], ['residents at work', d8], ['residents at work', d10], ['residents at work', d10], ['residents at work', d20], ['residents at work', d100], ['local rowdies', d6], ['non-local rowdies', d6], ['members of the local constabulary', d4], ['members of the local constabulary', d6], ['in company of a priest', d4], ['in company of a priest', d8], ['NPC friend', 1], ['hold-up man', 1], ['assassin', 1], ['pickpocket', 1], ['tiger sons', d4], ['vampire', 1]]
// };
//
// const inCultivatedLands = {
//   chance: 75,
//   results:[['residents at work', d6], ['residents at work', d8], ['residents at work', d10], ['residents at work', d20], ['residents at work', d100], ['residents from the militia', d10], ['residents from the militia', d4], ['members of the local soldiery', d20], ['adventurers', d6], ['snakes', d4], ['rubble runners', d4], ['rubble runners', d6], ['centaurs', d4], ['ogre', 1], ['raiding elves', d20], ['raiding elves', d100], ['raiding trolls', d100], ['thieves', d10], ['highwayman', 1], ['wyrm', 1]]
// };
//
// const inOpenCountry = {
//   chance: 60,
//   results: [['baboons', d6], ['centaurs', d6], ['minotaurs', d4], ['adventurers', d6], ['other thieves', d20], ['ogres', d4], ['morokanth', d4], ['crested dragonewt', 1], ['beaked dragonewt', 1], ['dragonewts in a party', d8], ['residents', d4], ['residents', d6], ['residents', d8], ['residents', d10], ['werewolf', 1], ['sky bull', 1], ['giant', 1], ['manticore', 1], ['wyrm', 1], ['dragon', 1]]
// };
//
// const inPrax = {
//   chance: 40,
//   results: [['animals in a wild herd', d10], ['baboons', d4], ['morokanth', d6], ['morokanth', d8], ['newtling', 1], ['rhino riders', d8], ['horse barbarians', d20], ['zebra people', d20], ['sable people', d20], ['sable people', d100], ['impala people', d8], ['impala people', d20], ['high llama people', d10], ['high llama people', d20], ['bison people', d4], ['bison people', d8], ['centaurs', d4], ['griffin', 1], ['wyvern', 1], ['dragon', 1]]
// };
//
// const inWoods = {
//   chance: 30,
//   results: [['pixie', 1], ['runner', 1], ['elf', 1], ['cockatrice', 1], ['dryad', 1], ['trollkin', 1], ['jack o bear', 1], ['dark trolls', d6], ['adventurers', d6], ['outlaws', d10], ['tusk riders', d8], ['crested dragonewt', 1], ['beaked dragonewt', 1], ['priest dragonewt', 1], ['shadow cat', 1], ['tusk brothers', d6], ['bear walker', 1], ['baboons', d8], ['wolfbrother', 1], ['snakes', d6]]
// };
//
// const inElfWoods = {
//   chance: 80,
//   results: [['pixies', d4], ['pixies', d8], ['runners', d4], ['runners', d8], ['runners', d20], ['elves', d6], ['elves', d8], ['elves', d10], ['elves', d20], ['elves', d100], ['dryads', d6], ['dryads', d10], ['elves in a war party', d20], ['elves in a war party', d100], ['ghost', 1], ['raiding dwarves', d100], ['raiding trolls', d100], ['raiding adventurer', 1], ['bear walker', 1], ['centaur', 1]]
// };
//
// const inMountains = {
//   chance: 80,
//   results: [['dwarf', 1], ['dwarf', 1], ['dwarf', 1], ['ghost', 1], ['adventurers', d6], ['trollkin', 1], ['trollkin', 1], ['dark trolls', d4], ['dark trolls', d6], ['great trolls', d6], ['rock lizards', d8], ['cliff toad', 1], ['wyvern', 1], ['wind children', d6], ['sky bull', 1], ['griffin', 1], ['gargoyle', 1], ['giants', d4], ['giants', d8], ['broos', d8]]
// };
//
// const inDwarfMountains = {
//   chance: 80,
//   results: [['dwarves', d4], ['dwarves', d6], ['dwarves', d8], ['dwarves', d10], ['dwarves', d10], ['dwarves', d20], ['dwarves', d20], ['dwarves', d100], ['dwarves', d100], ['rock lizards', d6], ['cliff toad', 1], ['wyverns', d4], ['wind children', d8], ['sky bulls', d6], ['griffins', d4], ['gargoyles', d6], ['giants', d4], ['raiding trolls', d20], ['raiding trolls', d100]]
// };
//
// const inRivers = {
//   chance: 30,
//   results: [['fishermen', d4], ['fishermen', d6], ['fishermen', d8], ['duck', d6], ['duck', d10], ['snakes', d6], ['snakes', d20], ['giant toad', 1], ['small toad', 1], ['cave trolls', d6], ['dragonsnails', d4], ['adventurers', d6], ['dragonewts', d6], ['dragonewts', d10], ['dragonewts', d20], ['newtlings', d6], ['newtlings', d8], ['newtlings', d10], ['newtlings', d20], ['wyrm', 1]]
// };
//
// const inMarsh = {
//   chance: 45,
//   results: [['duck', d4], ['duck', d8], ['snake', d4], ['snake', d6], ['snake', d8], ['skeleton', 1], ['zombie', 1], ['ghoul', 1], ['vampire', 1], ['dragonsnail', 1], ['gorp', 1], ['giant toads', d4], ['lizards', d6], ['beaked dragonewt', 1], ['newtlings', d6], ['walktapi', d4], ['ghost', 1], ['ghosts', d4], ['wyrm', 1], ['dragon', 1]]
// };
//
// const inRuins = {
//   chance: 85,
//   results: [['baboons', d6], ['rock lizard', 1], ['snakes', d4], ['rubble runners', d8], ['shadow cats', d4], ['cave trolls', d6], ['dark trolls', d4], ['gargoyle', 1], ['adventurers', d6], ['weretiger', 1], ['scorpion men', d4], ['werewolf', 1], ['broos', d4], ['dragonsnail', 1], ['skeletons', d20], ['zombies', d20], ['ghouls', d10], ['vampire', 1], ['wyrm', 1], ['gorp', 1]]
// };
//
// const inChaosNests = {
//   chance: 85,
//   results: [['skeleton', 1], ['ghoul', 1], ['zombie', 1], ['vampire', 1], ['ghost', 1], ['broos', d4], ['broos', d8], ['scorpion man', 1], ['scorpion men', d4], ['scorpion men', d8], ['werebear', 1], ['weretiger', 1], ['werepig', 1], ['werewolf', 1], ['ogre', 1], ['basalisk', 1], ['jack o bear', 1], ['dragonsnail', 1], ['dragonewts in a party', d6], ['walktapus', 1]]
// };
//
// const inTrollAreas = {
//   chance: 80,
//   results: [['great troll', 1], ['great troll', 1], ['dark troll', 1], ['dark trolls', d4], ['dark trolls', d8], ['trollkin', d4], ['trollkin', d6], ['trollkin', d8], ['trollkin', d10], ['cave troll', 1], ['cave trolls', d6], ['dark trolls in war party', d20], ['dark trolls in war party', d100], ['cliff toad', 1], ['jack o bear', 1], ['wyrm', 1], ['raiding adventurers', d20], ['raiding dwarves', d100], ['raiding elves', d100]]
// };


/***** SPECIES *****/


// let Species = function (name, attributeValues, moveRate, treasureFactor, defenseBonus) {
//   this.name = name;
//   this.attributeValues = attributeValues;
//   this.moveRate = moveRate;
//   this.treasureFactor = treasureFactor;
//   this.defenseBonus = defenseBonus;
//
//   // TODO finish constructor
// }
//
// const baboon = new Species (
//   'baboon',
//   [[3, d6, 6], [3, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 6], [2, d6, 6], [3, d6, 0]],
//   10, // movement
//   8, // treasure factor
//   5 // defense bonus
// )
//
// const basalisk = new Species (
//   'basalisk',
//   [[2, d6, 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0], [1, d6, 12], [2, d6, 0], [1, [1, 1], 0]],
//   4, // move
//   10, // treasure
//   0 // defense
// )
//
// const bearwalker = new Species (
//   'bearwalker',
//   [[2, d6, 6], [3, d6, 0], [1, d6, 12], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]],
//   8, // move
//   11, // treasure
//   0 // defense
// )
//
// const bison = new Species (
//   'bison',
//   [[3, d6, 24], [3, d6, 0], [3, d6, 24], [1, [1 ,1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
//   12, // move
//   0, // treasure
//   0 // defense
// )
//
// const boloLizard = new Species (
//   'bolo lizard',
//   [[2, d6, 12], [3, d6, 0], [2, d6, 12], [1, [1, 1], 0], [3, d6, 0], [1, d6, 12], [1, [1, 1], 0]],
//   12, // move
//   0, // treasure
//   0 // defense
// )
//
// const broo = new Species (
//   'broo',
//   [[2, d6, 6], [1, d6, 12], [2, d6, 6], [3, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 0]],
//   9, // move
//   12, // treasure
//   0 // defense
// )
//
// const centaur = new Species (
//   'centaur',
//   [[3, d6, 6], [3, d6, 0], [4, d6, 12], [3, d6, 0], [3, d6, 0], [3, d6, 3], [3, d6, 0]],
//   12, // move
//   11, // treasure
//   0 // defense
// )
//
// const smallCliffToad = new Species (
//   'cliff toad',
//   [[2, d6, 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0], [3, d6, 0], [3, d6, 0], [1, [1, 1], 0]],
//   6, // 2 speed walking
//   8,
//   0
// )
//
// const largeCliffToad = new Species (
//   'cliff toad',
//   [[12, d6, 0], [3, d6, 0], [12, d6, 0], [1, [1, 1], 0], [3, d6, 0], [3, d6, 0], [1, [1, 1], 0]],
//   6, // 2 speed walking
//   8,
//   0
// )
//
// const cockatrice = new Species (
//   'cockatrice',
//   [[2, d6, 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0], [1, d6, 12], [2, d6, 6], [1, [1, 1], 0]],
//   8,
//   10,
//   0
// )
//
// const demiBird = new Species (
//   'demi-bird',
//   [[3, d6, 18], [2, d6, 6], [3, d6, 12], [1, [1, 1], 0], [3, d6, 0], [2, d6, 6], [1, [1, 1], 0]],
//   12, // move
//   0, // treasure
//   0
// )
//
// const dreamDragon = new Species (
//   'dream dragon',
//   // make a way to take in a variable size of dragon to use for both the strength and size
// )
//
// const dragonewt = new Species (
//   'crested dragonewt',
//   [[2, d6, 0], [3, d6, 0], [2, d6, 0], [3, d6, 0], [2, d6, 0], [2, d6, 6], [3, d6, 0]],
//   7,
//   7,
//   5
// )
//
// const dragonsnail = new Species (
//   'draonsnail',
//   [[4, d6, 12], [3, d6, 0], [4, d6, 12], [1, [1, 1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
//   3, // movement
//   13, // treasure
//   0 // defense
// )
//
// const dryad = new Species (
//   'dryad',
//   [[2, d6, 0], [3, d6, 0], [2, d6, 0], [4, d6, 0], [2, d6, 8], [2, d6, 6],[3, d6, 0]],
//   9, // movement
//   9, // treasure value
//   10 // defense
// )
//
// const duck = new Species (
//   'duck',
//   [[2, d6, 1], [2, d6, 6], [1, d6, 2], [3, d6, 0], [3, d6, 0], [2, d6, 6], [2, d6, 0]],
//   5, // movement
//   6, // treasure
//   10 // defense
// )
//
// const dwarf = new Species (
//   'dwarf',
//   [[4, d6, 0], [2, d6, 6], [2, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]],
//   6, // movement
//   10, // treasure
//   0 // defense
// )
//
// const elf = new Species (
//   'elf',
//   [[2, d6, 2], [3, d6, 0], [2, d4, 4], [4, d6, 0], [2, d6, 6], [3, d6, 3], [3, d6, 0]],
//   9, // movement
//   14, // treasure
//   10 // defense
// )
//
// const gargoyle = new Species (
//   'gargoyle',
//   // letiable size
// )
//
// const ghost = new Species (
//   'ghost', // int pow dex 20
//   [[1, [1, 1], 0], [1, [1, 1], 0], [1, [1, 1], 0], [1, [20, 20], 0], [1, [20, 20], 0], [1, [20, 20], 0], [1, [1, 1], 0]],
//   0,
//   0,
//   0
// )
//
// const ghoul = new Species (
//   'ghoul',
//   [[4, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 0], [2, d6, 6], [3, d6, 0], [1, [0, 0], 0]],
//   8, // movement
//   9, // treasure value
//   0 // defense
// )
//
// const giant = new Species (
//   'giant',
//   // letiable size
// )
//
// const gorp = new Species (
//   'gorp',
//   [[1, [0, 0], 0], [3, d6, 0], [6, d6, 0], [1, [0, 0], 0], [3, d6, 0], [1, [0, 0], 0], [1, [0, 0], 0]],
//   5, // movement
//   10, // treasure
//   0 // defense
// )
//
// const griffin = new Species (
//   'griffin',
//   [[8, d6, 0], [2, d6, 6], [8, d6, 0], [2, d6, 6], [2, d6, 6], [3, d6, 0], [3, d6, 0]],
//   8, // movement, 12 flying
//   18, // treasure
//   0 // defense
// )
//
// const highLlama = new Species (
//   'high llama',
//   [[2, d6, 24], [3, d6, 0], [3, d6, 24], [1 [1, 1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
//   12, // movement
//   0, // treasure
//   0 // defense
// )
//
// const horse = new Species (
//   'horse',
//   [[3, d6, 18], [2, d6, 6], [4, d6, 12], [1, [1, 1], 0], [3, d6, 0], [3, d6, 0], [1, [1, 1], 0]],
//   12, // movement
//   0, // treasure
//   0 // defense
// )
//
// const human = new Species (
//   'human', // type
//   [[3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]], // attributes
//   8, // movement
//   10, // treasure
//   0 // defense
// )
//
// const impala = new Species (
//   'impala',
//   [[2, d6, 6], [3, d6, 0], [2, d6, 6], [1, [1, 1], 0], [3, d6, 0], [2, d6, 6], [1, [1, 1], 0]],
//   10, // movement
//   0, // treasure
//   0 // defense
// )
//
// const jackOBears = new Species (
//   'jack o\'bears',
//   [[3, d6, 6], [2, d6, 6], [3, d6, 6], [2, d6, 0], [4, d6, 0], [3, d6, 0], [3, d6, 0]],
//   10, // movement
//   10, // treasure
//   0 // defense
// )
//
// const manticore = new Species (
//   'manticore',
//   [[4, d6, 12], [2, d6, 6], [4, d6, 12], [2, d6, 0], [3, d6, 0], [2, d6, 3], [2, d6, 0]],
//   9, // movement
//   15, // treasure
//   0 // defense
// )
//
// const minotaur = new Species (
//   'minotaur',
//   [[3, d6, 12], [2, d6, 6], [3, d6, 12], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 0]],
//   10, // movement
//   10, // treasure
//   0 // defense
// )
//
// const morokanth = new Species (
//   'morokanth',
//   [[3, d6, 6], [3, d6, 0], [3, d6, 6], [3, d6, 0], [3, d6, 0], [2, d6, 3], [3, d6, 0]],
//   8, // movement
//   13, // treasure
//   0 // defense
// )
//
// const newtling = new Species (
//   'newtling',
//   [[3, d6, 0], [3, d6, 0], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 6], [3, d6, 0]],
//   6, // movement
//   5, // treasure
//   5 // defense
// )
//
// const ogre = new Species (
//   'ogre',
//   [[2, d6, 12], [2, d6, 6], [3, d6, 0], [3, d6, 0], [2, d6, 6], [3, d6, 0], [3, d6, 0]],
//   8, // movement
//   10, // treasure
//   0 // defense
// )
//
// const pixie = new Species (
//   'pixie',
//   [[2, d4, 0], [3, d6, 0], [1, d6, 0], [3, d6, 0], [2, d6, 6], [4, d6, 0], [3, d6, 0]],
//   3, // movement, 10 flying
//   13, // treasure
//   10 // defense
// )
//
// const rhino = new Species (
//   'rhino',
//   [[2, d6, 30], [3, d6, 0], [2, d6, 30], [1, [1, 1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
//   8, // movement
//   0, // treasure
//   0 // defense
// )
//
// const rockLizard = new Species (
//   'rock lizard',
//   [[2, d6, 6], [2, d6, 6], [4, d6, 0], [1, [1, 1], 0], [2, d6, 3], [2, d6, 6], [1, [1, 1], 0]],
//   4, // movement
//   8, // treasure
//   0 // defense
// )
//
// const rubbleRunner = new Species (
//   'rubble runnner',
//   [[1, d6, 0], [3, d6, 0], [1, d4, 0], [1, [1, 1], 0], [1, d6, 6], [2, d6, 6], [1, [1, 1], 0]],
//   6, // movement
//   5, // treasure
//   10 // defense
// )
//
// const runner = new Species (
//   'runner',
//   [[2, d6, 0], [2, d6, 6], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 6], [3, d6, 0]],
//   5, // movement, 9 in trees
//   5, // treasure
//   5 // defense
// )
//
// const sable = new Species (
//   'sable',
//   [[3, d6, 12], [3, d6, 0], [3, d6, 12], [1, [1, 1], 0], [3, d6, 0], [2, d6, 6], [1, [1, 1], 0]],
//   12, // movement
//   0, // treasure
//   0 // defense
// )
//
// const scorpionMan = new Species (
//   'scorpion man',
//   [[2, d6, 12], [3, d6, 0], [2, d6, 12], [2, d6, 0], [2, d6, 0], [3, d6, 3], [3, d6, 0]],
//   8, // movement
//   12, // treasure
//   0 // defense
// )
//
// const shadowCat = new Species (
//   'shadow cat',
//   [[2, d6, 0], [2, d6, 6], [1, d6, 0], [1, [1, 1], 0], [2, d6, 12], [2, d6, 12], [1, [1, 1], 0]],
//   10, // movement
//   6, // treasure
//   20 // defense
// )
//
// const skeleton = new Species (
//   'skeleton',
//   [[1, d4, 8], [1, [0, 0], 0], [3, d6, 0], [1, [0, 0], 0], [1, [1, 1], 0], [3, d6, 0], [1, [0, 0], 0]],
//   8, // movement
//   3, // treasure
//   0 // defense
// )
//
// const skyBull = new Species (
//   'sky bull',
//   [[4, d6, 12], [2, d6, 6], [8, d6, 12], [1, [1, 1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
//   11, // movement, 11 flying
//   12, // treasure
//   0 // defense
// )
//
// // snake
//
// // tigerson
//
// const trollCave = new Species (
//   'Cave Troll',
//   [[3, d6, 12], [2, d6, 6], [4, d6, 12], [2, d6, 0], [2, d6, 0], [2, d6, 3], [1, d6, 0]],
//   7, // movement
//   12, // treasure
//   0 // defense
// )
//
// const trollDark = new Species (
//   'Dark Troll',
//   [[3, d6, 6], [3, d6, 0], [3, d6, 6], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]],
//   8, // movement
//   12, // treasure
//   0 // defense
// )
//
// const trollGreat = new Species (
//   'Great Troll',
//   [[4, d6, 12], [1, d4, 14], [4, d6, 12], [2, d6, 2], [3, d6, 0], [3, d6, 0], [2, d6, 0]],
//   7, // movement
//   16, // treasure
//   0 // defense
// )
//
// const trollMistress = new Species (
//   'Mistress Troll',
//   [[4, d6, 6], [2, d6, 6], [3, d6, 12], [2, d6, 6], [4, d6, 0], [2, d6, 6], [2, d6, 6]],
//   9, // movement
//   20, // treasure
//   0 // defense
// )
//
// const trollkin = new Species (
//   'Trollkin',
//   [[2, d6, 3], [3, d6, 0], [1, d6, 6], [2, d6, 3], [2, d6, 0], [3, d6, 3], [2, d6, 0]],
//   6, // movement
//   6, // treasure
//   5 // defense
// )
//
// // Tusk Brother
//
// const tuskRider = new Species (
//   'Tusk Rider',
//   [[2, d6, 6], [2, d6, 6], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [1, d6, 0]],
//   8, // movement
//   7, // treasure
//   0 // defense
// )
//
// const tusker = new Species (
//   'Tusker',
//   [[3, d6, 12], [1, d6, 12], [4, d6, 12], [1, [1, 1], 0], [3, d6, 0], [1, d6, 0], [1, [1, 1], 0]],
//   10, // movement
//   0, // treasure
//   0 // defense
// )
//
// const unicorn = new Species (
//   'Unicorn',
//   [[2, d6, 24], [2, d6, 6], [2, d6, 18], [3, d6, 0], [2, d6, 12], [2, d6, 6], [1, [1, 1], 0]],
//   12, // movement
//   0, // treasure
//   0 // defense
// )
//
// // Vampire
//
// const walktapi = new Species (
//   'Walktapi',
//   [[2, d6, 18], [2, d6, 6], [2, d6, 18], [1, [1, 1], 0], [3, d6, 0], [3, d6, 0], [1, [1, 1], 0]],
//   7, // movement
//   15, // treasure
//   0 // defense
// )
//
// const windChild = new Species (
//   'Wind Child',
//   [[2, d6, 0], [3, d6, 0], [2, d6, 0], [3, d6, 0], [2, d6, 6], [2, d6, 6], [3, d6, 0]],
//   6, // movement, 12 flying
//   18, // treasure
//   0 // defense
// )
//
// // Wolfbrother
//
// const wyrm = new Species (
//   'Wyrm',
//   [[10, d6, 0], [3, d6, 0], [10, d6, 0], [3, d6, 0], [3, d6, 6], [3, d6, 0], [3, d6, 0]],
//   10, // movement
//   18, // treasure
//   0 // defense
// )
//
// const wyvern = new Species (
//   'Wyvern',
//   [[4, d6, 12], [2, d6, 6], [2, d6, 24], [2, d6, 0], [3, d6, 0], [2, d6, 6], [2, d6, 0]],
//   6, // movement, 10 flying
//   19, // treasure
//   0 // defense
// )

// Zombie

/***** SPELLS *****/


// let Spell = function (name, range, focused, passive, duration, power, description, cost) {
//   this.name = name;
//   this.range = range;
//   this.focused = focused;
//   this.passive = passive;
//   this.duration = duration;
//   this.power = power;
//   this.description = description;
//   this.cost = cost;
// }

// const battleMagicSpellbook = [
//
//   new Spell (
//     'Befuddle', // spell name
//     80, // range, in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds. Categorized as "temporal".
//     1, // power required
//     'This spell confuses an opponent who succumbs to it. It causes him to wonder such things as: Is that a friend? Which ones are my enemies? Why is everyone fighting? A Befuddled enemy will not attack, cast an offensive spell, sound the alarm, etc. If attacked, he will parry and defend at full value, and beginning next round his confusion will go away (the guy that attacked me is my enemy, and after he is dead his obvious allies are my enemies). Thus, with some clever management, a Befuddled opponent might end up attacking his own party for as long as the spell is in effect.',
//     1500 // cost in Lunars
//   ),
//
//   new Spell (
//     'Binding', // spell name
//     80, // range, in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     1, // power required
//     'This spell halves the movement class of those affected by it. It can never reduce the movement class below "one". It is often carried by huntsmen, police, and intelligent beasts of prey, such as baboons.',
//     1500 // cost in Lunars
//   ),
//
//   new Spell (
//     'Bladesharp (1)', // spell name
//     80, // range in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     1, // power required
//     'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
//     500 // cost in Lunars
//   ),
//
//   new Spell (
//     'Bladesharp (2)', // spell name
//     80, // range in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     2, // power required
//     'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
//     1000 // cost in Lunars
//   ),
//
//   new Spell (
//     'Bladesharp (3)', // spell name
//     80, // range in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     3, // power required
//     'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
//     1500 // cost in Lunars
//   ),
//
//   new Spell (
//     'Bladesharp (4)', // spell name
//     80, // range in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     4, // power required
//     'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
//     2000 // cost in Lunars
//   ),
//
//   new Spell (
//     'Bludgeon (1)', // spell name
//     80, // range in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     1, // power required
//     'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
//     500 // cost in Lunars
//   ),
//
//   new Spell (
//     'Bludgeon (2)', // spell name
//     80, // range in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     2, // power required
//     'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
//     1000 // cost in Lunars
//   ),
//
//   new Spell (
//     'Bludgeon (3)', // spell name
//     80, // range in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     3, // power required
//     'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
//     1500 // cost in Lunars
//   ),
//
//   new Spell (
//     'Bludgeon (4)', // spell name
//     80, // range in meters
//     true, // focused
//     true, // passive
//     10, // duration, in rounds
//     4, // power required
//     'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
//     2000 // cost in Lunars
//   ),
//
//   new Spell (
//     'Coordination', // spell name
//     80, // range in meters
//     true, // focused, on others
//     true, // passive
//     10, // duration, in rounds
//     2, // power required
//     'This spell adds three to a character\'s effective DEX. This will decrease strike rank by one and improve the character\'s chance of making DEX rolls. DEX is never raised over the species maximum. Thus, the greatest DEX a human can have is 21.',
//     1500 // cost, in Lunars
//   ),
//
//   new Spell (
//     'Counterspell', // spell name
//     80, // range, in meters
//     true, // focused, on others
//
//     500 * this.power // cost, in Lunars
//   ),
//
//   new Spell (
//     'Darkwall', // spell name
//     80, // range, in meters
//     true,
//     true,
//     10,
//     2,
//     'This spell creates a 10 meter wide by 3 meter high wall of darkness. Thickness of this is 6 cm. This wall can be moved by the caster at 3 meters per melee round on any round that he does nothing else. Torches yield no light within the wall and creatures that can see in the dark cannot see through it. It is opaque from both sides. The wall can be formed or moved into any shape desired.',
//     1500
//   ),
//
//   new Spell (
//     'Demoralize',
//     80,
//     true,
//     true,
//     10,
//     1,
//     'The victim of this spell loses faith in the ability of himself and his party to win the fight, find the treasure, rescue the princess, or whatever. He can still defend himself at full, but attacks at half value. The victim will not use offensive magic. The advantage of the spell is that you can attack a Demoralized foe without affecting the spell. Essentially, it softens an enemy up for the kill. If it takes place before combat a Demoralized foe generally will not attack unless ordered to. If faced with superior force, he will probably run or surrender. A Fanaticism spell will cancel the effect of a Demoralize spell, and vice versa.',
//     1500
//   ),
//
//   new Spell (
//     'Detect Detection',
//     80,
//     true, // focused on others
//     true,
//     10,
//     1,
//     'This may be cast on any person or object within reach of the spell. It informs the caster if that personal object is detected by magic, whether by battle magic or more sophisticated means.',
//     300
//   ),
//
//   new Spell (
//     'Detect Enemies',
//     40,
//     true,
//     false,
//     1,
//     1,
//     'This spell gives the direction and distance from the caster of any being intending to harm a specific individual on whom the caster concentrates. If the caster does not specify someone else as the person whose enemies are being detected, it detects enemies of the caster. It is stopped by more than 3 meters of solid rock or metal.',
//     300
//   ),
//
//   new Spell (
//     'Detect Gems',
//     40,
//     true,
//     false,
//     1,
//     1,
//     'This spell will give the number and position relative to the caster of all gems within range. Like Detect Magic it will cause detected gems to glow while the spell is in effect. The position given includes direction and distance. The spell is blocked by more than 3 meters of rock or metal.',
//     1000
//   ),
//
//   new Spell (
//     'Detect Gold',
//     40,
//     true,
//     false,
//     1,
//     1,
//     'Detects direction, distance, and approximate amount (to the nearest tenth of a kg) within the range of the spell. It is stopped by more than 3 meters of solid rock or metal.',
//     300
//   ),
//
//   new Spell (
//     'Detect Life',
//     40, // range, in meters
//     true, // focused
//     false, // impassive
//     1, // duration
//     1, // power used
//     'Detects the existence of human or larger size life. Gives direction and distance from the spellcaster. Divides life forms detected into two classes, those of human size (between 3 and 21, and those of large size (from 22 on up). Life smaller than SIZ 3 is ignored. It is stopped by more than 3 meters of solid rock or metal.',
//     300 // cost, in lunars
//   ),
//
//   new Spell (
//     'Detect Magic',
//     40,
//     true,
//     false,
//     1,
//     1,
//     'This spell gives direction and distance from the caster of all enchantments and similar magically potent objects. It does not distinguish between magical objects or enchantments, telling only that it is magical, not what or how powerful it is. Also, any magic object within range of the spell will glow, possibly warning enemies. It is stopped by 3 meters or more of rock or metal.',
//     300
//   ),
//
//   new Spell (
//     'Detect Silver',
//     80,
//     true,
//     false,
//     1,
//     1,
//     'Similar to Detect Gold in all respects except that it detects silver rather than gold. It is stopped by more than 3 meters of rock or metal.',
//     200
//   ),
//
//   new Spell (
//     'Detect Spirit',
//     40,
//     true,
//     false,
//     1,
//     1,
//     'Like Detect Life in its effects except that it detects the presence of spirits. It divides spirits detected into two sizes, those of POW 18 and below, and those of POW 19 and above. It is stopped by more than 3 meters of rock or metal.',
//     300
//   ),
//
//   new Spell (
//     'Detect Traps',
//     40,
//     true,
//     false,
//     1,
//     2,
//     'This spell detects the intent to trap. Thus, it would detect an ambush, magical trap, or physical trap. It would not detect a naturally occurring pit, or poison, which is not in itself a trap. It makes a 3 meter diameter circle around the trap glow. It does not give the exact location or type of the trap. Note that it will not detect the existence of defensive spells, such as Warding. It is stopped by more than 3 meters of rock or metal.',
//     300
//   ),
//
//   new Spell (
//     'Detect Undead',
//     40,
//     true,
//     false,
//     1,
//     1,
//     'This spell functions like Detect Life in its effect, except that it detects things neither dead nor alive, such as zombies, mummies, and vampires. It does not tell which type of undead is being detected, but it does tell the size. It is stopped by more than 3 meters of stone or metal.',
//     300
//   ),
//
//   new Spell (
//     'Detection Blank',
//     80, // range, in meters
//     true, // focused on others
//     true, // passive
//     10, // cast time
//     1, // variable
//     'A specialized version of Countermagic, designed to block detection spells. May screen either the caster or another person from detection. It stops only detection spells, but unlike Countermagic it does not let the person doing the detection know that his spell has been blocked. Otherwise it functions like Countermagic.',
//     500 // per point of spell
//   ),
// ]


/***** LIVING COSTS *****/


let Item = function (name, cost, description, quantity) {
  this.name = name;
  this.cost = cost;
  this.description = description;
  this.quantity = quantity;
}

// FOOD
let cheapMeal = new Item ('cheap meal', 0.2, '', 1);
let goodMeal = new Item ('good meal', 0.5, '', 1);
let banquet = new Item ('banquet', 1, '', 1);
let trailProvisions = new Item ('trail provisions', 5, '', 7); // week's worth of food

// DRINK
let beerMug = new Item ('mug of beer', 0.05, '', 1);
let beerCask = new Item ('cask of beer', 0.5, '', 1);
let beerKeg = new Item ('keg of beer', 1.5, '', 1);
let wineMug = new Item ('mug of wine', 0.2, '', 1);
let wineCask = new Item ('cask of wine', 2, '', 1);
let wineKeg = new Item ('keg of wine', 6, '', 1);

// ROOM
let floor = new Item ('common room floor', 0.1, '', 1);
let dorm = new Item ('dormitory', 0.5, '', 1);
let shared = new Item ('shared private room', 1, '', 1);
let single = new Item ('private room', 2, '', 1);
let hotWater = new Item ('hot water', 0.2, '', 1);

// CLOTHING
let peasantClothes = new Item ('peasant yearly clothes', 2, '', 12);
let townsmanClothes = new Item ('townsman yearly clothes', 5, '', 12);
let adventurerClothes = new Item ('adventurer monthly clothes', 10, '', 1);
let nobleClothes = new Item ('noble monthly clothes', 20, '', 1);

// STABLE COSTS
let stableStall = new Item ('stall for a day', 0.1, '', 1);
let stableFeed = new Item ('feed for a day', 0.4, '', 1);
let stableSpecialCare = new Item ('special care', 1, '', 1);

// TRAIL FODDER
let trailOats = new Item ('trail fodder for a week', 2, '', 7);


/***** ARMS *****/

let Weapon = function (name, strRequirement, dexRequirement, damage, hp, mastery, cost, enc, length, sr, q1Training, q2Training, q3Training) {
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

let Shield = function (size, strRequirement, absorbs, mastery, cost, enc, q1Training, q2Training, q3Training) {
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


/***** ARMOR *****/

let Armor = function (location, ) {

}


/***** GENERAL COSTS *****/


// GENERAL FEES
let adventurerFees = new Item ('average weekly adventurer expenses', 5, '', 7);
// let adventurersPack = [backPack, wineSkin, rope, peasantClothes, handAxe, hammer, woodSpikes, fishHooks, sackSmall, knife, cookingGear, blanket];
let nobleFees = new Item ('average weekly noble expenses', 10, '', 7);

// TRANSPORTATION
let horseCart = new Item ('cart horse', 50, '18 average HP', 1);
let horseRiding = new Item ('riding horse (untrained)', 100, '18 average HP', 1);
let horseCavalry = new Item ('cavalry horse (battle-trained)', 1500, '20 average HP', 1);
let horseWar = new Item ('war horse (attack trained)', 5000, '25% on all attacks, 22 average HP', 1);
let cartTwoWheeled = new Item ('two-wheeled cart', 35, '', 1);
let cartFourWheeled = new Item ('four-wheeled cart', 85, '', 1);

// EQUIPMENT
let hammer = new Item ('hammer', 0.2, '', 1);
let mallet = new Item ('mallet', 0.5, '', 1);
let climbingPack = new Item ('climbing pack', 20, '', 1);
let fishHooks = new Item ('fish hooks', 0.2, '', 1);
let writingTools = new Item ('writing tools', 10, '', 1);
let papyrus = new Item ('papyrus sheet', 0.5, '', 1);

// CAMPING GEAR
let cookingGear = new Item ('cooking and eating gear', 2, '', 1);
let tentSmall = new Item ('small tent (1 man)', 10, '', 1);
let tentMedium = new Item ('medium tent (3 man)', 25, '', 1);
let tentLarge = new Item ('large tent (5 man)', 40, '', 1);
let fireStarter = new Item ('fire starter', 1, '', 1);
let backPack = new Item ('back pack', 1, '', 1);

// EXPEDITION GEAR
let rope = new Item ('15m rope', 5, '', 1);
let pole = new Item ('3m pole', 0, '', 1);
let woodSpikes = new Item ('wood spikes', 1, '', 10);
let lamp = new Item ('lamp', 5, '', 1);
let lampOil = new Item ('lamp oil', 0.5, '', 1);
let sackSmall = new Item ('small sack', 0.2, '', 1);
let sackLarge = new Item ('large sack', 0.5, '', 1);
let torch = new Item ('torch', 0, '', 1);

// RIDING GEAR
let horseSaddle = new Item ('saddle', 20, '', 1);
let horseBarding;

// CONTAINERS
let wineSkin = new Item ('wine skin', 1, '', 1);
let flask = new Item ('flask', 1, '', 1);
let jug = new Item ('jug (2 liters)', 2, '', 1);
let cask = new Item ('cask (5 liters)', 5, '', 1);
let keg = new Item ('keg (15 liters)', 15, '', 1);
let barrel = new Item ('barrel (50 liters)', 25, '', 1);

// MUSICAL INSTRUMENTS
let bugle = new Item ('bugle', 5, '', 1);
let lurHorn = new Item ('lur horn', 25, '', 1);
let harp = new Item ('harp', 10, '', 1);
let lyre = new Item ('lyre', 20, '', 1);
let reedPipes = new Item ('reed pipes', 5, '', 1);
let bagpipes = new Item ('bagpipes', 25, '', 1);
