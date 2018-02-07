/* REFERENCES *****************************************************************
* this section holds unchanging arrays and objects that will be referenced in *
* the main JS file. The data in this file will not change when the program is *
* ran. This includes random generation data information for different         *
* species, spells, weapons, armor, etc.                                       *
*****************************************************************/ 'use strict';



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

// let Weapon = function (name, strRequirement, dexRequirement, damage, hp, mastery, cost, enc, length, sr, q1Training, q2Training, q3Training) {
//   this.name = name;
//   this.strRequirement = strRequirement;
//   this.dexRequirement = dexRequirement;
//   this.damage = damage;
//   this.hp = hp;
//   this.mastery = mastery;
//   this.cost = cost;
//   this.enc = enc;
//   this.length = length;
//   this.sr = sr;
//   this.q1Training = q1Training;
//   this.q2Training = q2Training;
//   this.q3Training = q3Training;
// }
//
// let Shield = function (size, strRequirement, absorbs, mastery, cost, enc, q1Training, q2Training, q3Training) {
//   this.size = size;
//   this.strRequirement = strRequirement;
//   this.absorbs = absorbs;
//   this.mastery = mastery;
//   this.cost = cost;
//   this.enc = enc;
//   this.q1Training = q1Training;
//   this.q2Training = q2Training;
//   this.q3Training = q3Training;
// }


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
