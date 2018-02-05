'use strict';

const attack = module.exports = {};

// TODO reformat with a hash table to avoid O(n^2)

attack.location = (target) => {
  let index = roll.die(20); // roll a twenty-sided die, then
  for (let part in target.body) { // for every part of the body...
    for (let hit in target.body[part].hitNumbers) { // and for every hit number of that part...
      if (index === target.body[part].hitNumbers[hit]) return target.body[part].name  // if the part is hit, return the part
    } // end for (hit number)
  } // end for (part)
} // end randomHitLocation function
