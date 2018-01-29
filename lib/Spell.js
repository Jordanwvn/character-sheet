'use strict';

module.exports = function (name, range, focused, passive, duration, power, description, cost) {
  this.name = name;
  this.range = range;
  this.focused = focused;
  this.passive = passive;
  this.duration = duration;
  this.power = power;
  this.description = description;
  this.cost = cost;
}
