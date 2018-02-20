'use strict';

const roll = module.exports = {};

// const d4 = 4; // four-sided die
// const d6 = 6; // six-sided die
// const d8 = 8; // eight-sided die
// const d10 = 10; // ten-sided die
// const d20 = 20; // twenty-sided die
// const d100 = 100; // one hundred-sided die, or "percentile"

roll.die = (die, bonus) => Math.ceil(Math.random() * die) + (bonus || 0);

roll.dice = (rolls, die, bonus) => {
  rolls ? roll.die(die) + roll.dice(--rolls, die, bonus) : bonus || 0;
}
