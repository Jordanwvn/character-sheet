'use strict';

module.exports = class {
  constructor () {
    this.rLeg = {health: 0, armor: 0};
    this.lLeg = {health: 0, armor: 0};
    this.head = {health: 0, armor: 0};
    this.rArm = {health: 0, armor: 0};
    this.lArm = {health: 0, armor: 0};
    this.abdo = {health: 0, armor: 0};
    this.chst = {health: 0, armor: 0};
  }
  setMaxHealth (hp) {
    let index = ~~(hp / 3) + (hp & 1);
    this.rleg.health = this.rleg.health = this.head.health = this.abdo.health = index;
    this.rarm.health = this.larm.health = index - 1
    this.chst.health = index + 1
  }
}



// let partHP = (hitPoints, part) => {
//   let index = ~~(hitPoints / 3) + (hitPoints & 1); // let index equal hit points divided by 3, rounded up
//   if (index === 0) index ++; // if index is 0, increase it by one
//   // switch (part) {
//   //   case ('rl' || 'll' || 'h' || 'a'):
//   //     return index;
//   //   case ('ra' || 'la'):
//   //     return index - 1;
//   //   default:
//   //     return index + 1;
//   // }
//   return (part === 'rl' || part === 'll' || part === 'h' || part === 'a') ? index // for one of these parts, return index
//   : (part === 'ra' || part === 'la') ? index - 1 // otherwise, for these other parts, return index minus 1
//   : index + 1 // otherwise, return index plus 1
// }
//
// var BodyPart = function (name, hitNumbers, health, armor) {
//   this.name = name;
//   this.health = health;
//   this.armor = armor;
// }
//
// var Body = function (hitPoints) {
//   this.rightLeg = new BodyPart ('right leg', partHP(hitPoints, 'rl'), 0); // create the right leg
//   this.leftLeg = new BodyPart ('left leg', partHP(hitPoints, 'll'), 0); // create the left leg
//   this.abdomen = new BodyPart ('abdomen', partHP(hitPoints, 'a'), 0); // create the abdomen
//   this.chest = new BodyPart ('chest', partHP(hitPoints, 'c'), 0); // create the chest
//   this.rightArm = new BodyPart ('right arm', partHP(hitPoints, 'ra'), 0); // create the right arm
//   this.leftArm = new BodyPart ('left arm', partHP(hitPoints, 'la'), 0); // create the left arm
//   this.head = new BodyPart ('head', partHP(hitPoints, 'h'), 0); // create the head
// }
