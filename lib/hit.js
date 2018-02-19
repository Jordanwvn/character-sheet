'use strict';

const roll = require('./dice.js');

module.exports = function (bodyType) {
  switch (bodyType) {

    case 'basalisk' || 'cockatrice' || 'griffin' || 'skybull': {
      var body = {
        1: 'right hind leg',
        2: 'right hind leg',
        3: 'left hind leg',
        4: 'left hind leg',
        5: 'hindquarters',
        6: 'hindquarters',
        7: 'hindquarters',
        8: 'forequarters',
        9: 'forequarters',
        10: 'forequarters',
        11: 'right wing',
        12: 'right wing',
        13: 'left wing',
        14: 'left wing',
        15: 'right fore leg',
        16: 'right fore leg',
        17: 'left fore leg',
        18: 'left fore leg',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'bolo lizard' || 'demibird': {
      var body = {
         1: 'right leg',
         2: 'right leg',
         3: 'right leg',
         4: 'right leg',
         5: 'left leg',
         6: 'left leg',
         7: 'left leg',
         8: 'left leg',
         9: 'abdomen',
        10: 'abdomen',
        11: 'chest',
        12: 'chest',
        13: 'chest',
        14: 'right wing / arm', // TODO: possibly create two different tables
        15: 'right wing / arm',
        16: 'left wing / arm',
        17: 'left wing / arm',
        18: 'head',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'dragonsnail (one head)': {
      var body = {
         1: 'shell',
         2: 'shell',
         3: 'shell',
         4: 'shell',
         5: 'shell',
         6: 'shell',
         7: 'shell',
         8: 'shell',
         9: 'forebody',
        10: 'forebody',
        11: 'forebody',
        12: 'forebody',
        13: 'forebody',
        14: 'forebody',
        15: 'head',
        16: 'head',
        17: 'head',
        18: 'head',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'dragonsnail (two heads)': {
      var body = {
         1: 'shell',
         2: 'shell',
         3: 'shell',
         4: 'shell',
         5: 'shell',
         6: 'shell',
         7: 'shell',
         8: 'shell',
         9: 'forebody',
        10: 'forebody',
        11: 'forebody',
        12: 'forebody',
        13: 'forebody',
        14: 'forebody',
        15: 'head 1',
        16: 'head 1',
        17: 'head 1',
        18: 'head 2',
        19: 'head 2',
        20: 'head 2'
      }
      break;
    }

    case 'centaur': {
      var body = {
         1: 'right hind leg',
         2: 'right hind leg',
         3: 'left hind leg',
         4: 'left hind leg',
         5: 'hindquarters',
         6: 'hindquarters',
         7: 'forequarters',
         8: 'forequarters',
         9: 'forequarters',
        10: 'right fore leg',
        11: 'right fore leg',
        12: 'left fore leg',
        13: 'left fore leg',
        14: 'chest',
        15: 'right arm',
        16: 'right arm',
        17: 'left arm',
        18: 'left arm',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'dragon' || 'manticore': {
      var body = {
         1: 'right hind leg',
         2: 'right hind leg',
         3: 'left hind leg',
         4: 'left hind leg',
         5: 'hindquarters',
         6: 'hindquarters',
         7: 'tail',
         8: 'tail',
         9: 'forequarters',
        10: 'forequarters',
        11: 'right wing',
        12: 'right wing',
        13: 'left wing',
        14: 'left wing',
        15: 'right fore leg',
        16: 'right fore leg',
        17: 'left fore leg',
        18: 'left fore leg',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'gargoyle' || 'wind child': {
      var body = {
         1: 'right leg',
         2: 'right leg',
         3: 'right leg',
         4: 'left leg',
         5: 'left leg',
         6: 'left leg',
         7: 'abdomen',
         8: 'abdomen',
         9: 'abdomen',
        10: 'chest',
        11: 'right wing',
        12: 'right wing',
        13: 'left wing',
        14: 'left wing',
        15: 'right arm',
        16: 'right arm',
        17: 'left arm',
        18: 'left arm',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'scorpion men': {
      var body = {
         1: 'right hind leg',
         2: 'right center leg',
         3: 'right fore leg',
         4: 'right fore leg',
         5: 'left hind leg',
         6: 'left center leg',
         7: 'left fore leg',
         8: 'left fore leg',
         9: 'tail',
        10: 'tail',
        11: 'thorax',
        12: 'thorax',
        13: 'chest',
        14: 'chest',
        15: 'right arm',
        16: 'right arm',
        17: 'left arm',
        18: 'left arm',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'snake': {
      var body = {
         1: 'tail',
         2: 'tail',
         3: 'tail',
         4: 'tail',
         5: 'tail',
         6: 'tail',
         7: 'body',
         8: 'body',
         9: 'body',
        10: 'body',
        11: 'body',
        12: 'body',
        13: 'body',
        14: 'body',
        15: 'head',
        16: 'head',
        17: 'head',
        18: 'head',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'walktapi': {
      var body = {
         1: 'right leg',
         2: 'right leg',
         3: 'left leg',
         4: 'left leg',
         5: 'abdomen',
         6: 'chest',
         7: 'right arm',
         8: 'right arm',
         9: 'left arm',
        10: 'left arm',
        11: 'tentacle 1',
        12: 'tentacle 2',
        13: 'tentacle 3',
        14: 'tentacle 4',
        15: 'tentacle 5',
        16: 'tentacle 6',
        17: 'tentacle 7',
        18: 'tentacle 8',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'clifftoad' || 'rock lizard' || 'rubble runner' || 'shadow cat' || 'four-legged mount': {
      var body = {
         1: 'right hind leg',
         2: 'right hind leg',
         3: 'left hind leg',
         4: 'left hind leg',
         5: 'hindquarters',
         6: 'hindquarters',
         7: 'hindquarters',
         8: 'forequarters',
         9: 'forequarters',
        10: 'forequarters',
        11: 'right fore leg',
        12: 'right fore leg',
        13: 'right fore leg',
        14: 'left fore leg',
        15: 'left fore leg',
        16: 'left fore leg',
        17: 'head',
        18: 'head',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'gorp': {
      var body = {
         1: 'body',
         2: 'body',
         3: 'body',
         4: 'body',
         5: 'body',
         6: 'body',
         7: 'body',
         8: 'body',
         9: 'body',
        10: 'body',
        11: 'body',
        12: 'body',
        13: 'body',
        14: 'body',
        15: 'body',
        16: 'body',
        17: 'body',
        18: 'body',
        19: 'body',
        20: 'body'
      }
      break;
    }

    case 'wyrm': {
      var body = {
         1: 'tail',
         2: 'tail',
         3: 'tail',
         4: 'tail',
         5: 'abdomen',
         6: 'abdomen',
         7: 'abdomen',
         8: 'abdomen',
         9: 'chest',
        10: 'chest',
        11: 'chest',
        12: 'chest',
        13: 'right wing',
        14: 'right wing',
        15: 'left wing',
        16: 'left wing',
        17: 'head',
        18: 'head',
        19: 'head',
        20: 'head'
      }
      break;
    }

    case 'wyvern': {
      var body = {
         1: 'right leg',
         2: 'right leg',
         3: 'right leg',
         4: 'left leg',
         5: 'left leg',
         6: 'left leg',
         7: 'abdomen',
         8: 'abdomen',
         9: 'chest',
        10: 'chest',
        11: 'chest',
        12: 'tail',
        13: 'right wing',
        14: 'right wing',
        15: 'left leg',
        16: 'left leg',
        17: 'head',
        18: 'head',
        19: 'head',
        20: 'head'
      }
      break;
    }

    default: {
      var body = {
        1: 'right leg',
        2: 'right leg',
        3: 'right leg',
        4: 'right leg',
        5: 'left leg',
        6: 'left leg',
        7: 'left leg',
        8: 'left leg',
        9: 'abdomen',
        10: 'abdomen',
        11: 'abdomen',
        12: 'chest',
        13: 'right arm',
        14: 'right arm',
        15: 'right arm',
        16: 'left arm',
        17: 'left arm',
        18: 'left arm',
        19: 'head',
        20: 'head'
      }
    }

  }
  return body[roll.die(20)];
  // NOTE: could return body instead, to allow for players to make their own roll.
}
