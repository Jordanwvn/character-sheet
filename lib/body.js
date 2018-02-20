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
  updateMaxHealth (hp) {
    let index = ~~(hp / 3) + (hp & 1);
    this.rleg.health = this.rleg.health = this.head.health = this.abdo.health = index;
    this.rarm.health = this.larm.health = index - 1
    this.chst.health = index + 1
  }
  damage (part, amount) {
    this[part].health -= amount;
  }
}
