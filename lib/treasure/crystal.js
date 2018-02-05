'use strict';

module.exports = () => {
  let index = roll.die (100);
  let crystalOne = attributeTable (roll.die (100));
  let crystalTwo = attributeTable (roll.die (100));
  return index === 1 ? `crystal of ${crystalOne[0]} and ${crystalTwo[0]} filled with ${crystalOne[1] + crystalTwo[1]} power`
    : index === 2 ? `crystal of ${crystalOne[0]} filled with ${crystalOne[1] + roll.die (d6)} power`
      : index <= 30 ? 'flawed crystal'
        : `crystal of ${attributeTable (index)[0]} filled with ${attributeTable (index)[1]} power`;
}

attributeTable = index => {
  switch (true) {
    case  0 < index && index <=  5: return ['healing focusing', roll.die (d8)];
    case  5 < index && index <=  8: return ['sensitivity', roll.die (d8)];
    case  8 < index && index <= 11: return ['twice power yielding', roll.die (d8)];
    case 11 < index && index <= 14: return ['power enhancing', roll.die(d8)];
    case 14 < index && index <= 16: return ['spell reinforcing', roll.die (d4)];
    case 16 < index && index <= 18: return ['spell strenthening', roll.die (d4)];
    case 18 < index && index <= 20: return ['spell resisting', roll.die (d4)];
    case 20 < index && index <= 22: return ['spell supporting', roll.die (d4)];
    case 22 < index && index <= 24: return ['spell storing', roll.die (d4)];
    default: return ['power storing / spirit trapping', roll.dice (2, d6, 3)];
}
