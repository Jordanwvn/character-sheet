const spellbook = module.exports = {};




const battleMagicSpellbook = [

  new Spell (
    'Befuddle', // spell name
    80, // range, in meters
    true, // focused
    true, // passive
    10, // duration, in rounds. Categorized as "temporal".
    1, // power required
    'This spell confuses an opponent who succumbs to it. It causes him to wonder such things as: Is that a friend? Which ones are my enemies? Why is everyone fighting? A Befuddled enemy will not attack, cast an offensive spell, sound the alarm, etc. If attacked, he will parry and defend at full value, and beginning next round his confusion will go away (the guy that attacked me is my enemy, and after he is dead his obvious allies are my enemies). Thus, with some clever management, a Befuddled opponent might end up attacking his own party for as long as the spell is in effect.',
    1500 // cost in Lunars
  ),

  new Spell (
    'Binding', // spell name
    80, // range, in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    1, // power required
    'This spell halves the movement class of those affected by it. It can never reduce the movement class below "one". It is often carried by huntsmen, police, and intelligent beasts of prey, such as baboons.',
    1500 // cost in Lunars
  ),

  new Spell (
    'Bladesharp (1)', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    1, // power required
    'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    500 // cost in Lunars
  ),

  new Spell (
    'Bladesharp (2)', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    2, // power required
    'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    1000 // cost in Lunars
  ),

  new Spell (
    'Bladesharp (3)', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    3, // power required
    'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    1500 // cost in Lunars
  ),

  new Spell (
    'Bladesharp (4)', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    4, // power required
    'This spell, when cast on any thrusting, stabbing, or hacking weapon, increases the chance of hitting with it by 5% per point of POW invested in the spell. It also increases the damage done by one point per point of spell. No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    2000 // cost in Lunars
  ),

  new Spell (
    'Bludgeon (1)', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    1, // power required
    'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    500 // cost in Lunars
  ),

  new Spell (
    'Bludgeon (2)', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    2, // power required
    'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    1000 // cost in Lunars
  ),

  new Spell (
    'Bludgeon (3)', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    3, // power required
    'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    1500 // cost in Lunars
  ),

  new Spell (
    'Bludgeon (4)', // spell name
    80, // range in meters
    true, // focused
    true, // passive
    10, // duration, in rounds
    4, // power required
    'When cast on any smashing weapon the spell increases the chance of hitting 5% per point of spell. It also adds one point of damage per point of spell.  No weapon can be enchanted past 20% to hit and four points extra damage. It can be used to enchant one weapon up to +20% and +4 damage or four weapons up to +5% and +1 damage, or any combination possible within the limitation of the level of the spell known. The spell is incompatible with other weapon improving spells',
    2000 // cost in Lunars
  ),

  new Spell (
    'Coordination', // spell name
    80, // range in meters
    true, // focused, on others
    true, // passive
    10, // duration, in rounds
    2, // power required
    'This spell adds three to a character\'s effective DEX. This will decrease strike rank by one and improve the character\'s chance of making DEX rolls. DEX is never raised over the species maximum. Thus, the greatest DEX a human can have is 21.',
    1500 // cost, in Lunars
  ),

  new Spell (
    'Counterspell', // spell name
    80, // range, in meters
    true, // focused, on others

    500 * this.power // cost, in Lunars
  ),

  new Spell (
    'Darkwall', // spell name
    80, // range, in meters
    true,
    true,
    10,
    2,
    'This spell creates a 10 meter wide by 3 meter high wall of darkness. Thickness of this is 6 cm. This wall can be moved by the caster at 3 meters per melee round on any round that he does nothing else. Torches yield no light within the wall and creatures that can see in the dark cannot see through it. It is opaque from both sides. The wall can be formed or moved into any shape desired.',
    1500
  ),

  new Spell (
    'Demoralize',
    80,
    true,
    true,
    10,
    1,
    'The victim of this spell loses faith in the ability of himself and his party to win the fight, find the treasure, rescue the princess, or whatever. He can still defend himself at full, but attacks at half value. The victim will not use offensive magic. The advantage of the spell is that you can attack a Demoralized foe without affecting the spell. Essentially, it softens an enemy up for the kill. If it takes place before combat a Demoralized foe generally will not attack unless ordered to. If faced with superior force, he will probably run or surrender. A Fanaticism spell will cancel the effect of a Demoralize spell, and vice versa.',
    1500
  ),

  new Spell (
    'Detect Detection',
    80,
    true, // focused on others
    true,
    10,
    1,
    'This may be cast on any person or object within reach of the spell. It informs the caster if that personal object is detected by magic, whether by battle magic or more sophisticated means.',
    300
  ),

  new Spell (
    'Detect Enemies',
    40,
    true,
    false,
    1,
    1,
    'This spell gives the direction and distance from the caster of any being intending to harm a specific individual on whom the caster concentrates. If the caster does not specify someone else as the person whose enemies are being detected, it detects enemies of the caster. It is stopped by more than 3 meters of solid rock or metal.',
    300
  ),

  new Spell (
    'Detect Gems',
    40,
    true,
    false,
    1,
    1,
    'This spell will give the number and position relative to the caster of all gems within range. Like Detect Magic it will cause detected gems to glow while the spell is in effect. The position given includes direction and distance. The spell is blocked by more than 3 meters of rock or metal.',
    1000
  ),

  new Spell (
    'Detect Gold',
    40,
    true,
    false,
    1,
    1,
    'Detects direction, distance, and approximate amount (to the nearest tenth of a kg) within the range of the spell. It is stopped by more than 3 meters of solid rock or metal.',
    300
  ),

  new Spell (
    'Detect Life',
    40, // range, in meters
    true, // focused
    false, // impassive
    1, // duration
    1, // power used
    'Detects the existence of human or larger size life. Gives direction and distance from the spellcaster. Divides life forms detected into two classes, those of human size (between 3 and 21, and those of large size (from 22 on up). Life smaller than SIZ 3 is ignored. It is stopped by more than 3 meters of solid rock or metal.',
    300 // cost, in lunars
  ),

  new Spell (
    'Detect Magic',
    40,
    true,
    false,
    1,
    1,
    'This spell gives direction and distance from the caster of all enchantments and similar magically potent objects. It does not distinguish between magical objects or enchantments, telling only that it is magical, not what or how powerful it is. Also, any magic object within range of the spell will glow, possibly warning enemies. It is stopped by 3 meters or more of rock or metal.',
    300
  ),

  new Spell (
    'Detect Silver',
    80,
    true,
    false,
    1,
    1,
    'Similar to Detect Gold in all respects except that it detects silver rather than gold. It is stopped by more than 3 meters of rock or metal.',
    200
  ),

  new Spell (
    'Detect Spirit',
    40,
    true,
    false,
    1,
    1,
    'Like Detect Life in its effects except that it detects the presence of spirits. It divides spirits detected into two sizes, those of POW 18 and below, and those of POW 19 and above. It is stopped by more than 3 meters of rock or metal.',
    300
  ),

  new Spell (
    'Detect Traps',
    40,
    true,
    false,
    1,
    2,
    'This spell detects the intent to trap. Thus, it would detect an ambush, magical trap, or physical trap. It would not detect a naturally occurring pit, or poison, which is not in itself a trap. It makes a 3 meter diameter circle around the trap glow. It does not give the exact location or type of the trap. Note that it will not detect the existence of defensive spells, such as Warding. It is stopped by more than 3 meters of rock or metal.',
    300
  ),

  new Spell (
    'Detect Undead',
    40,
    true,
    false,
    1,
    1,
    'This spell functions like Detect Life in its effect, except that it detects things neither dead nor alive, such as zombies, mummies, and vampires. It does not tell which type of undead is being detected, but it does tell the size. It is stopped by more than 3 meters of stone or metal.',
    300
  ),

  new Spell (
    'Detection Blank',
    80, // range, in meters
    true, // focused on others
    true, // passive
    10, // cast time
    1, // variable
    'A specialized version of Countermagic, designed to block detection spells. May screen either the caster or another person from detection. It stops only detection spells, but unlike Countermagic it does not let the person doing the detection know that his spell has been blocked. Otherwise it functions like Countermagic.',
    500 // per point of spell
  ),
]
