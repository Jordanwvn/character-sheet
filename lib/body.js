'use strict';

module.exports = class {
  constructor (hp) {

  }
}



let partHP = (hitPoints, part) => {
  let index = ~~(hitPoints / 3) + hitPoints % 2; // let index equal hit points divided by 3, rounded up
  if (index === 0) index ++; // if index is 0, increase it by one
  // switch (part) {
  //   case ('rl' || 'll' || 'h' || 'a'):
  //     return index;
  //   case ('ra' || 'la'):
  //     return index - 1;
  //   default:
  //     return index + 1;
  // }
  return (part === 'rl' || part === 'll' || part === 'h' || part === 'a') ? index // for one of these parts, return index
  : (part === 'ra' || part === 'la') ? index - 1 // otherwise, for these other parts, return index minus 1
  : index + 1 // otherwise, return index plus 1
}

var BodyPart = function (name, hitNumbers, health, armor) {
  this.name = name;
  this.hitNumbers = hitNumbers;
  this.health = health;
  this.armor = armor;
}

var Body = function (hitPoints) {
  this.rightLeg = new BodyPart ('right leg', [1, 2, 3, 4], partHP(hitPoints, 'rl'), 0); // create the right leg
  this.leftLeg = new BodyPart ('left leg', [5, 6, 7, 8], partHP(hitPoints, 'll'), 0); // create the left leg
  this.abdomen = new BodyPart ('abdomen', [9, 10, 11], partHP(hitPoints, 'a'), 0); // create the abdomen
  this.chest = new BodyPart ('chest', [12], partHP(hitPoints, 'c'), 0); // create the chest
  this.rightArm = new BodyPart ('right arm', [13, 14, 15], partHP(hitPoints, 'ra'), 0); // create the right arm
  this.leftArm = new BodyPart ('left arm', [16, 17, 18], partHP(hitPoints, 'la'), 0); // create the left arm
  this.head = new BodyPart ('head', [19, 20], partHP(hitPoints, 'h'), 0); // create the head
}
