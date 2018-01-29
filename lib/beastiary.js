'use strict';

const Species = require ('./species.js');
const beasiary = module.exports = {};

beastiary.baboon = new Species (
  'baboon',
  [[3, d6, 6], [3, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 6], [2, d6, 6], [3, d6, 0]],
  10, // movement
  8, // treasure factor
  5 // defense bonus
)

beastiary.basalisk = new Species (
  'basalisk',
  [[2, d6, 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0], [1, d6, 12], [2, d6, 0], [1, [1, 1], 0]],
  4, // move
  10, // treasure
  0 // defense
)

beastiary.bearwalker = new Species (
  'bearwalker',
  [[2, d6, 6], [3, d6, 0], [1, d6, 12], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]],
  8, // move
  11, // treasure
  0 // defense
)

beastiary.bison = new Species (
  'bison',
  [[3, d6, 24], [3, d6, 0], [3, d6, 24], [1, [1 ,1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
  12, // move
  0, // treasure
  0 // defense
)

beastiary.boloLizard = new Species (
  'bolo lizard',
  [[2, d6, 12], [3, d6, 0], [2, d6, 12], [1, [1, 1], 0], [3, d6, 0], [1, d6, 12], [1, [1, 1], 0]],
  12, // move
  0, // treasure
  0 // defense
)

beastiary.broo = new Species (
  'broo',
  [[2, d6, 6], [1, d6, 12], [2, d6, 6], [3, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 0]],
  9, // move
  12, // treasure
  0 // defense
)

beastiary.centaur = new Species (
  'centaur',
  [[3, d6, 6], [3, d6, 0], [4, d6, 12], [3, d6, 0], [3, d6, 0], [3, d6, 3], [3, d6, 0]],
  12, // move
  11, // treasure
  0 // defense
)

beastiary.smallCliffToad = new Species (
  'cliff toad',
  [[2, d6, 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0], [3, d6, 0], [3, d6, 0], [1, [1, 1], 0]],
  6, // 2 speed walking
  8,
  0
)

beastiary.largeCliffToad = new Species (
  'cliff toad',
  [[12, d6, 0], [3, d6, 0], [12, d6, 0], [1, [1, 1], 0], [3, d6, 0], [3, d6, 0], [1, [1, 1], 0]],
  6, // 2 speed walking
  8,
  0
)

beastiary.cockatrice = new Species (
  'cockatrice',
  [[2, d6, 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0], [1, d6, 12], [2, d6, 6], [1, [1, 1], 0]],
  8,
  10,
  0
)

beastiary.demiBird = new Species (
  'demi-bird',
  [[3, d6, 18], [2, d6, 6], [3, d6, 12], [1, [1, 1], 0], [3, d6, 0], [2, d6, 6], [1, [1, 1], 0]],
  12, // move
  0, // treasure
  0
)

beastiary.dreamDragon = new Species (
  'dream dragon',
  // make a way to take in a variable size of dragon to use for both the strength and size
)

beastiary.dragonewt = new Species (
  'crested dragonewt',
  [[2, d6, 0], [3, d6, 0], [2, d6, 0], [3, d6, 0], [2, d6, 0], [2, d6, 6], [3, d6, 0]],
  7,
  7,
  5
)

beastiary.dragonsnail = new Species (
  'draonsnail',
  [[4, d6, 12], [3, d6, 0], [4, d6, 12], [1, [1, 1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
  3, // movement
  13, // treasure
  0 // defense
)

beastiary.dryad = new Species (
  'dryad',
  [[2, d6, 0], [3, d6, 0], [2, d6, 0], [4, d6, 0], [2, d6, 8], [2, d6, 6],[3, d6, 0]],
  9, // movement
  9, // treasure value
  10 // defense
)

beastiary.duck = new Species (
  'duck',
  [[2, d6, 1], [2, d6, 6], [1, d6, 2], [3, d6, 0], [3, d6, 0], [2, d6, 6], [2, d6, 0]],
  5, // movement
  6, // treasure
  10 // defense
)

beastiary.dwarf = new Species (
  'dwarf',
  [[4, d6, 0], [2, d6, 6], [2, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]],
  6, // movement
  10, // treasure
  0 // defense
)

beastiary.elf = new Species (
  'elf',
  [[2, d6, 2], [3, d6, 0], [2, d4, 4], [4, d6, 0], [2, d6, 6], [3, d6, 3], [3, d6, 0]],
  9, // movement
  14, // treasure
  10 // defense
)

beastiary.gargoyle = new Species (
  'gargoyle',
  // letiable size
)

beastiary.ghost = new Species (
  'ghost', // int pow dex 20
  [[1, [1, 1], 0], [1, [1, 1], 0], [1, [1, 1], 0], [1, [20, 20], 0], [1, [20, 20], 0], [1, [20, 20], 0], [1, [1, 1], 0]],
  0,
  0,
  0
)

beastiary.ghoul = new Species (
  'ghoul',
  [[4, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 0], [2, d6, 6], [3, d6, 0], [1, [0, 0], 0]],
  8, // movement
  9, // treasure value
  0 // defense
)

beastiary.giant = new Species (
  'giant',
  // letiable size
)

beastiary.gorp = new Species (
  'gorp',
  [[1, [0, 0], 0], [3, d6, 0], [6, d6, 0], [1, [0, 0], 0], [3, d6, 0], [1, [0, 0], 0], [1, [0, 0], 0]],
  5, // movement
  10, // treasure
  0 // defense
)

beastiary.griffin = new Species (
  'griffin',
  [[8, d6, 0], [2, d6, 6], [8, d6, 0], [2, d6, 6], [2, d6, 6], [3, d6, 0], [3, d6, 0]],
  8, // movement, 12 flying
  18, // treasure
  0 // defense
)

beastiary.highLlama = new Species (
  'high llama',
  [[2, d6, 24], [3, d6, 0], [3, d6, 24], [1 [1, 1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
  12, // movement
  0, // treasure
  0 // defense
)

beastiary.horse = new Species (
  'horse',
  [[3, d6, 18], [2, d6, 6], [4, d6, 12], [1, [1, 1], 0], [3, d6, 0], [3, d6, 0], [1, [1, 1], 0]],
  12, // movement
  0, // treasure
  0 // defense
)

beastiary.human = new Species (
  'human', // type
  [[3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]], // attributes
  8, // movement
  10, // treasure
  0 // defense
)

beastiary.impala = new Species (
  'impala',
  [[2, d6, 6], [3, d6, 0], [2, d6, 6], [1, [1, 1], 0], [3, d6, 0], [2, d6, 6], [1, [1, 1], 0]],
  10, // movement
  0, // treasure
  0 // defense
)

beastiary.jackOBears = new Species (
  'jack o\'bears',
  [[3, d6, 6], [2, d6, 6], [3, d6, 6], [2, d6, 0], [4, d6, 0], [3, d6, 0], [3, d6, 0]],
  10, // movement
  10, // treasure
  0 // defense
)

beastiary.manticore = new Species (
  'manticore',
  [[4, d6, 12], [2, d6, 6], [4, d6, 12], [2, d6, 0], [3, d6, 0], [2, d6, 3], [2, d6, 0]],
  9, // movement
  15, // treasure
  0 // defense
)

beastiary.minotaur = new Species (
  'minotaur',
  [[3, d6, 12], [2, d6, 6], [3, d6, 12], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 0]],
  10, // movement
  10, // treasure
  0 // defense
)

beastiary.morokanth = new Species (
  'morokanth',
  [[3, d6, 6], [3, d6, 0], [3, d6, 6], [3, d6, 0], [3, d6, 0], [2, d6, 3], [3, d6, 0]],
  8, // movement
  13, // treasure
  0 // defense
)

beastiary.newtling = new Species (
  'newtling',
  [[3, d6, 0], [3, d6, 0], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 6], [3, d6, 0]],
  6, // movement
  5, // treasure
  5 // defense
)

beastiary.ogre = new Species (
  'ogre',
  [[2, d6, 12], [2, d6, 6], [3, d6, 0], [3, d6, 0], [2, d6, 6], [3, d6, 0], [3, d6, 0]],
  8, // movement
  10, // treasure
  0 // defense
)

beastiary.pixie = new Species (
  'pixie',
  [[2, d4, 0], [3, d6, 0], [1, d6, 0], [3, d6, 0], [2, d6, 6], [4, d6, 0], [3, d6, 0]],
  3, // movement, 10 flying
  13, // treasure
  10 // defense
)

beastiary.rhino = new Species (
  'rhino',
  [[2, d6, 30], [3, d6, 0], [2, d6, 30], [1, [1, 1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
  8, // movement
  0, // treasure
  0 // defense
)

beastiary.rockLizard = new Species (
  'rock lizard',
  [[2, d6, 6], [2, d6, 6], [4, d6, 0], [1, [1, 1], 0], [2, d6, 3], [2, d6, 6], [1, [1, 1], 0]],
  4, // movement
  8, // treasure
  0 // defense
)

beastiary.rubbleRunner = new Species (
  'rubble runnner',
  [[1, d6, 0], [3, d6, 0], [1, d4, 0], [1, [1, 1], 0], [1, d6, 6], [2, d6, 6], [1, [1, 1], 0]],
  6, // movement
  5, // treasure
  10 // defense
)

beastiary.runner = new Species (
  'runner',
  [[2, d6, 0], [2, d6, 6], [2, d6, 0], [3, d6, 0], [3, d6, 0], [2, d6, 6], [3, d6, 0]],
  5, // movement, 9 in trees
  5, // treasure
  5 // defense
)

beastiary.sable = new Species (
  'sable',
  [[3, d6, 12], [3, d6, 0], [3, d6, 12], [1, [1, 1], 0], [3, d6, 0], [2, d6, 6], [1, [1, 1], 0]],
  12, // movement
  0, // treasure
  0 // defense
)

beastiary.scorpionMan = new Species (
  'scorpion man',
  [[2, d6, 12], [3, d6, 0], [2, d6, 12], [2, d6, 0], [2, d6, 0], [3, d6, 3], [3, d6, 0]],
  8, // movement
  12, // treasure
  0 // defense
)

beastiary.shadowCat = new Species (
  'shadow cat',
  [[2, d6, 0], [2, d6, 6], [1, d6, 0], [1, [1, 1], 0], [2, d6, 12], [2, d6, 12], [1, [1, 1], 0]],
  10, // movement
  6, // treasure
  20 // defense
)

beastiary.skeleton = new Species (
  'skeleton',
  [[1, d4, 8], [1, [0, 0], 0], [3, d6, 0], [1, [0, 0], 0], [1, [1, 1], 0], [3, d6, 0], [1, [0, 0], 0]],
  8, // movement
  3, // treasure
  0 // defense
)

beastiary.skyBull = new Species (
  'sky bull',
  [[4, d6, 12], [2, d6, 6], [8, d6, 12], [1, [1, 1], 0], [3, d6, 0], [2, d6, 0], [1, [1, 1], 0]],
  11, // movement, 11 flying
  12, // treasure
  0 // defense
)

// snake

// tigerson

beastiary.trollCave = new Species (
  'Cave Troll',
  [[3, d6, 12], [2, d6, 6], [4, d6, 12], [2, d6, 0], [2, d6, 0], [2, d6, 3], [1, d6, 0]],
  7, // movement
  12, // treasure
  0 // defense
)

beastiary.trollDark = new Species (
  'Dark Troll',
  [[3, d6, 6], [3, d6, 0], [3, d6, 6], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0]],
  8, // movement
  12, // treasure
  0 // defense
)

beastiary.trollGreat = new Species (
  'Great Troll',
  [[4, d6, 12], [1, d4, 14], [4, d6, 12], [2, d6, 2], [3, d6, 0], [3, d6, 0], [2, d6, 0]],
  7, // movement
  16, // treasure
  0 // defense
)

beastiary.trollMistress = new Species (
  'Mistress Troll',
  [[4, d6, 6], [2, d6, 6], [3, d6, 12], [2, d6, 6], [4, d6, 0], [2, d6, 6], [2, d6, 6]],
  9, // movement
  20, // treasure
  0 // defense
)

beastiary.trollkin = new Species (
  'Trollkin',
  [[2, d6, 3], [3, d6, 0], [1, d6, 6], [2, d6, 3], [2, d6, 0], [3, d6, 3], [2, d6, 0]],
  6, // movement
  6, // treasure
  5 // defense
)

// Tusk Brother

beastiary.tuskRider = new Species (
  'Tusk Rider',
  [[2, d6, 6], [2, d6, 6], [3, d6, 0], [3, d6, 0], [3, d6, 0], [3, d6, 0], [1, d6, 0]],
  8, // movement
  7, // treasure
  0 // defense
)

beastiary.tusker = new Species (
  'Tusker',
  [[3, d6, 12], [1, d6, 12], [4, d6, 12], [1, [1, 1], 0], [3, d6, 0], [1, d6, 0], [1, [1, 1], 0]],
  10, // movement
  0, // treasure
  0 // defense
)

beastiary.unicorn = new Species (
  'Unicorn',
  [[2, d6, 24], [2, d6, 6], [2, d6, 18], [3, d6, 0], [2, d6, 12], [2, d6, 6], [1, [1, 1], 0]],
  12, // movement
  0, // treasure
  0 // defense
)

// Vampire

beastiary.walktapi = new Species (
  'Walktapi',
  [[2, d6, 18], [2, d6, 6], [2, d6, 18], [1, [1, 1], 0], [3, d6, 0], [3, d6, 0], [1, [1, 1], 0]],
  7, // movement
  15, // treasure
  0 // defense
)

beastiary.windChild = new Species (
  'Wind Child',
  [[2, d6, 0], [3, d6, 0], [2, d6, 0], [3, d6, 0], [2, d6, 6], [2, d6, 6], [3, d6, 0]],
  6, // movement, 12 flying
  18, // treasure
  0 // defense
)

// Wolfbrother

beastiary.wyrm = new Species (
  'Wyrm',
  [[10, d6, 0], [3, d6, 0], [10, d6, 0], [3, d6, 0], [3, d6, 6], [3, d6, 0], [3, d6, 0]],
  10, // movement
  18, // treasure
  0 // defense
)

beastiary.wyvern = new Species (
  'Wyvern',
  [[4, d6, 12], [2, d6, 6], [2, d6, 24], [2, d6, 0], [3, d6, 0], [2, d6, 6], [2, d6, 0]],
  6, // movement, 10 flying
  19, // treasure
  0 // defense
)
