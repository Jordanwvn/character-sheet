/* CULTS **********************************************************************
* This page holds all of the information about cults in RuneQuest. This is a  *
* page strictly to be used with reference, so a user can look up information  *
* on any cult in an efficient and clear way.                                  *
*****************************************************************/'use strict';


/***** CONSTRUCTORS *****/


let Cult = function (name, mythos, nature, organization, layMembership, initiateMembership, runeLordMembership, runePriesthood, subservientCults, associatedCults, miscellaneousNotes) {
  this.name = name;
  this.mythos = mythos;
  this.nature = nature;
  this.organization = organization;
  this.layMembership = layMembership;
  this.initiateMembership = initiateMembership;
  this.runeLordMembership = runeLordMembership;
  this.runePriesthood = runePriesthood;
  this.subservientCults = subservientCults;
  this.associatedCults = associatedCults;
  this.miscellaneousNotes = miscellaneousNotes;
}

let Mythos = function (beforeDawn, sinceTimeBegan, lifeAfterDeath, runicAssociations) {
  this.beforeDawn = beforeDawn;
  this.sinceTimeBegan = sinceTimeBegan;
  this.lifeAfterDeath = lifeAfterDeath;
  this.runicAssociations = runicAssociations;
}

let Nature = function (reasonForContinuedExistence, socialPoliticalPositionAndPower, particularLikeAndDislikes) {
  this.reasonForContinuedExistence = reasonForContinuedExistence;
  this.socialPoliticalPositionAndPower = socialPoliticalPositionAndPower;
  this.particularLikeAndDislikes = particularLikeAndDislikes;
}

let Organization = function (intercultOrganization, intracultOrganization, centerOfPowerAndHolyPlaces, holyDaysAndHighHolyDays) {
  this.intercultOrganization = intercultOrganization;
  this.intracultOrganization = intracultOrganization;
  this.centerOfPowerAndHolyPlaces = centerOfPowerAndHolyPlaces;
  this.holyDaysAndHighHolyDays = holyDaysAndHighHolyDays;
}

let LayMembership = function (joinRequirements, belongRequirements, benefits, skills, battleMagic) {
  this.joinRequirements = joinRequirements;
  this.belongRequirements = belongRequirements;
  this.benefits = benefits;
  this.skills = skills;
  this.battleMagic = battleMagic;
}

let InitiateMembership = function (initiationRequirements, remainRequirements, benefits, skills, spells) {
  this.initiationRequirements = initiationRequirements;
  this.remainRequirements = remainRequirements;
  this.benefits = benefits;
  this.skills = skills;
  this.spells = spells;
}

let RuneLordMembership = function (generalStatement, acceptanceRequirements, restrictions, benefits) {
  this.generalStatement = generalStatement;
  this.acceptanceRequirements = acceptanceRequirements;
  this.restrictions = restrictions;
  this.benefits = benefits;
}

let RunePriesthood = function (generalStatement, acceptanceRequirements, restrictions, benefits, runeSpellCompatability, cultSpecialRuneSpells, spellbook) {
  this.generalStatement = generalStatement;
  this.acceptanceRequirements = acceptanceRequirements;
  this.benefits = benefits;
  this.runeSpellCompatability = runeSpellCompatability;
  this.cultSpecialRuneSpells = cultSpecialRuneSpells;
  this.spellbook = spellbook;
}

let RuneSpell = function (name, range, passive, reusable, duration, stackLimit, power, cost, description) {
  this.name = name;
  this.range = range;
  this.passive = passive;
  this.reusable = reusable;
  this.duration = duration;
  this.stackLimit = stackLimit;
  this.power = power;
  this.cost = cost;
  this.description = description;
}


/***** CULTS *****/


let dakaFal = new Cult ('Daka Fal',
  new Mythos (
    // BEFORE DAWN
    'There are no known tales of Daka Fal before the Great Darkness. Ancient philosophers connect him with the primeval being called Grandfather Mortal, who is the Rune-ancestor of the Man-Rune, and thereby the common ancestor of all humanoid creatures. The tales of Grandfather Mortal explain the current position of mankind in the cosmos through a series of legends and fables. Briefly told, they mention the origin of the first man, called Wanderer in those days, in the Court of Creation of the Celestial Court. His origin was held in common by many gods so that he contained some of all the world within him, and so he could work for all of the gods. Grandfather Mortal had many adventures, but most important was his encounter with Death. The destroying god was still an infant, a small sharp thing cradled in the palm of Humakt, when Grandfather Mortal was invited to test the newcomer\'s powers. When he agreed, he was the first to know Death. Since then all men have been destined to die, and follow in the path of their great Ancestor. Thus disappeared Grandfather Mortal from the tales of the gods. When the Darkness came it was the time for all mortality to join in with their ancestor, but many resisted. They lived in hopeless fear amid the disintegrating world where chaos seeped or howled in, unable to separate life from death anymore. It was then that Daka Fal appeared and taught them how to separate the living from the dead. He taught the living how to test a creature to see if it is truly alive or if it is a phantom spirit. He also taught the first burial rites to keep the deceased from harassing the living afterwards. He also taught the basic cult spells which allow communication to the Other Side. Thus, by aid from their ancestors some people survived the dark',
    // SINCE TIME BEGAN
    'Daka Fal was named by the gods to be the Judge of the Dead, for it was he who first knew that power and who holds all of the secrets of Death. In Prax his worship has had no actual power in the face of the gods. In times of crisis, when the gods fail their worshippers, this cult gets very popular.',
    // LIFE AFTER Death
    'The cult assures its worshippers that they will continue to have a personalized existance after death. They cannot guarantee any quality, nor any future for that existance. All magics and functions of the cult prove those facts to worshippers. The cult also insures that the living will never be bothered by the souls of the dead if they follow their priest\’s rituals and rules. Funeral Rites are non-specific except that they must include some variation of this chant. It is a spell and prayer which must be spoken over the dead to separate them from the world of the living. It goes: Go! Go! Don\’t be Slow, To the place that Life don\'t know. Stay Away! Stay Away! Night is there, this is Day. Flee! Flee! Flee from me. Your kind here can never be. I am free. Not thee. Go, you can\'t touch me. At the end of the ceremony the people place their hands over their faces so the spirit cannot recognize them, then turn their backs and run away from the funeral site, and must never look back under pain of death.',
    // RUNIC ASSOCIATIONS
    'The cult is associated with the runes of Man and Spirit'
  ),
  new Nature (
    // REASON FOR CONTINUED EXISTENCE
    'The religion of Daka Fal is an integral link in the cosmic structure. It supports the reality of human mortality by worshipping the Lord of the Dead, and by drawing upon the dead for strength to survive in life. At the same time it provides the basic barriers to help protect weak humans from the mighty powers.',
    // SOCIAL/POLITICAL POSITION AND POWER
    'The cult of Daka Fal is widespread among the disaffected members of the tribes of Prax, as wherever gods and people do not agree. As happens in most such circumstances, there is little actual social power or prestige in a Daka Fal priestly position, except for rare and dangerous occasions of cult business. But the forces of mortality are too basic to be eradicated, and Daka Fal will exist as long as people die.',
    // PARTICULAR LIKES AND DISLIKES
    'The cult dislikes gods in general, but is willing to compromise itself in favor of being left alone when possible. Still, it is a hostile world full of imminent dangers, and the cult distrusts all which it has not conquered. Conquest for this cult is always temporary, so they are very cautious. However, there is no particular dislike of any deity beyond any other, save for two. The most hated deity is Death, which separated the men from the gods and robbed humans of their birthright. The second most hated is Chaos, which is a specialized form of Death, but capable of destroying the gods as well as mortal beings.'
  ),
  new Organization (
    // INTER-CULT ORGANIZATION
    'There is no effective organization to bind the cult into a single driving force. There have been occasional priests who inspired widespread interest by motivating many ancestral bindings, but these never survived their founder’s deaths.',
    // INTRA-CULT ORGANIZATION
    'The cult in Prax had no official cult organization. Priests of Daka Fal bring a certain amount of prestige and power to their immediate families and can initiate relatives as well, Each tribe averages one or two High Priests, but these are more likely to be enemies than hierarchical co-workers. High priesthood implies that there are priests serving beneath the High Priest, but there are no particular bonds or duties other than those which the High Priest personally arranges and maintains.',
    // CENTER OF POWER, HOLY PLACES
    'There is no specific place known to the worshippers of Daka Fal as being more significant than any other. Each priest has knowledge of the methods to create a Center of Power for their ceremonies. This Center, called Axis Mundi, is a gateway for the spirits.',
    // HOLY DAYS AND HIGH HOLY DAYS
    'The cult of Daka Fal scrupulously observes the Sacred Time as their High Holy Days. Otherwise the cult has no set holy days, but arranges them as needed for their personal worship.'
  ),
  new LayMembership (
    // REQUIREMENTS TO JOIN
    'Lay membership is given free to all living people. This includes all humanoids who worship this deity (trolls, baboons, elves, and so on). Anyone is allowed to enter into the general worship of Daka Fal. (Indeed, cult philosophers whisper that all mortals are members whether they wish to be or not!)',
    // REQUIREMENTS TO BELONG
    'There are no particular requirements except to partake in the ceremonies.',
    // MUNDANE BENEFITS
    'The cult offers no automatic mundane benefits, but provides that worshippers will be able to benefit from their earned benefits by being alive.',
    // SKILLS
    'All skills are possible to members of this cult, if they can learn them through experience or lessons. The cult itself offers no special lessons.',
    // SPELLS
    'All Battle Magics are available to cult members at normal costs. The source of these human-originated magics is claimed to come from this cult, whose wide spread assures some constants across all humanity.'
  ),
  new InitiateMembership (
    // REQUIREMENTS FOR INITIATION
    'Initiates must be willing to disavow all previous cult connections and stand by the rules of this cult. They must be initiated by a priest of the cult, or by a shaman.',
    // REQUIREMENTS TO REMAIN INITIATED
    'Belonging is merely dependent upon the priest\'s demands. Initiates always are expected to help defend their priest, and to assist in rituals and other magical acts. They must usually help provide for his upkeep as well by providing food and shelter.',
    // MUNDANE BENEFITS
    'The cult offers no automatic mundane benefits, but provides that worshippers will be able to benefit from their earned benefits by being alive.',
    // SKILLS
    'All skills are possible to members of this cult, if they can learn them through experience or lessons. The cult itself offers no special lessons.',
    // SPELLS
    'Initiates may trade one Rune point of permanent Power for one use of the cult specialty Rune Magic spell of SUMMON ANCESTOR.'
  ),
  new RuneLordMembership (
    // GENERAL STATEMENT
    'This cult has no formal Rune Lord status. Anyone who fulfills the acceptance requirements will get the status benefits, such as dividing weapon attacks, iron armor, and an allied spirit. However, the cult cannot use Divine Intervention.',
    // REQUIREMENTS FOR ACCEPTANCE
    'The member must be an Initiate of the cult. They must have 90% skill in any five skills, including five different weapons if desired; they must have a POW of 15; they must convince the examiners. Convincing the Examiners consists of calling an Ancestor, using the SUMMON ANCESTOR SPELL. The candidate must then enter into spirit combat with the ancestor, and if he succeeds in reducing the spirit\'s POW to 3 or less, then the spirit will submit and become his Allied Spirit if it survives. Only one Allied Spirit at a time is allowed.',
    // RESTRICTIONS
    'There are no special restriction to this status.',
    // BENEFITS
    'The benefits of this status is that a member may gain an Allied Spirit, and may use iron armor or weapons or tools if they procure them.'
  ),
  new RunePriesthood (
    // GENERAL STATEMENTS
    'The Rune Priests form the core of the cult. The size of the active cult will depend entirely upon their personal success or failure and their Charisma.',
    // REQUIREMENTS FOR ACCEPTANCE
    'There are the usual minimal requirements to join a cult, plus whatever else the priest may choose to charge. Literacy is waived. For this cult it is necessary to know 90% Spirit Speech instead. It is possible to approach one\'s own ancestors insstead of an established priest to become a Priest. When this occurs a Random Ancestor is chosen to be the Examiner for the Cult. However, there is no chance to use gold, money, or other sacrifices to help convince them. If it is a Malevolent Ancestor which appears it will attack immediately the Initiate who is trying for alliance. If it is a Neutral or Friendly spirit, it will become malevolent and attack the candidate if the spirits to not approve of his acceptance into the priesthood.',
    // RESTRICTIONS
    'Priests are required to give one point of POW per week to each of their bound spirits. The POW may come from themselves or from their worshippers. Only then will each of the spirits remain loyal and present.',
    // BENEFITS
    'Priests benefit by getting considerable magical power under their command without becoming an outcast like normal shamans. It is often the only channel of power for warriors with little status or property outside of the established noble and priestly families.',
    // RUNE SPELL COMPATABILITY
    'une Magic allow them to know only a few Rune Spells. These few listed are said to be originally made by Daka Fal, from whom the other gods learned them. Spells available are: Discorporation, Divination, Extension 1-3, Mind Link, Warding.',
    // CULT SPECIAL RUNE SPELLS
    'This list of spells are known to have been made by Daka Fal and taught to living mortals in the Darkness. These are, as indicated, available to any mortal being who meets priestly requirements. Some cults of other gods forbid their hierarchy to use these spells, as noted in this book.'
  ),
  // SPELLS
  [
    new RuneSpell ( // name, range, passive, reusable, duration, stackLimit, power, description, cost
      'Free Ghost', 160, true, true, 'instant', 1, 1, 0,
      'This Rune Spell is cast to unbind a ghost from its haunting spot and return it to the Land of the Dead. It is cast on one ghost, and the POW of the caster must overcome the POW of the ghost for it to be successful.'
    ),
    new RuneSpell (
      'Summon Ancestor', 160, true, true, '1 combat', 1, 1, 0,
      'This summons a randomly determined spirit of the caster\’s ancestors from the Land of the Dead. The same spirit is rarely gotten twice. The spirit arrives as indicated on the ANCESTRAL SUMMONS CHART. After giving commands to the spirit (providing it is friendly) the summoner must throw D100 and if a 96-00 (fumble) is cast then the spirit misunderstands the command and turns on the summoner. These may be used for Spirit Attack against a foe, as ordered by the Summoner. They may also use known spells but will deplete their Power to do so. In either case, loss of Power to a level of 11 will cause the spirit to disappear (even from Spirit Combat) and return to the Land of the Dead. They can not be used to memorize spells, supply Power, or to teach the summoner.'
    ),
    new RuneSpell ( // name, range, passive?, reusable?, duration, stack limit, power, cost
      'Summon Specific Ancestor', 160, true, true, 'instant', 1, 2, 0,
      'This spell must be stacked with a 1 point Summon Ancestor. It will call a specific ancestor spirit already known to the summoner. Otherwise is as Summon Ancestor.'
    ),
    new RuneSpell ( // name, range, passive?, reusable?, duration, stack limit, power, cost
      'Summon Spirit Teacher', 160, true, true, '1 day', 1, 2, 0,
      'This must be stacked with the 1 point Summon Ancestor spell. The spirit so summoned will be able to teach spells, give information, or act as a shaman\'s fetch for the length of the spell. It allows “rapid teaching” of spells, to be learned in one day. It may be stacked with Summon Specific Ancestor.'
    ),
    new RuneSpell ( // name, range, passive?, reusable?, duration, stack limit, power, cost
      'Incarnate Ancestor', 160, true, true, '15 minutes', 1, 3, 0,
      'This spell can bring the spirit of an ancestor to occupy the body of one of its descendants. The family member must be willing, and the Daka Fal priest is typically the host body. The summoned spirit will know all spells, knowledge, and possible skills which it knew while still living. The host spirit is temporarily suspended in the Spirit Plane and will return when the spell expires unless a Fumble Roll was made when the spell was cast, or the Spell was extended longer than one day. In either case, the body is permanently possessed, and the previous host spirit goes to the Land of the Dead.'
    ),
    new RuneSpell ( // name, range, passive?, reusable?, duration, stack limit, power, cost
      'Resurrection', 1, true, false, 'duration to completion', 1, 3, 0,
      'With this spell the priest will find the departed spirit of a patient and return it to the healed body for the resurrection of its life. The deceased must have died by wounds, poison, or other physical damage, It does not work on beings slain in spirit combat, by Soul Waste, or magically-oriented, Power-draining death. The body must be healed to a minimum of three positive hit points or characteristic points using a cure spell appropriate to the cause of death, such as a Cure Shakes or Cure All Disease for someone dead from that illness. Heal Body also may be used. Once using the spell, the priest or his allied spirit must engage in spirit combat with the departed\'s soul. If the healing spirit or priest is successful in the first round of combat, then the resurrection occurs. If the soul of the departed wins the round, it returns again to the courts of silence. If a number of full days passed before resurrection was attempted, the resurrected may have lost some abilities and magics. See the Chalana Arroy (Lightbringers) Resurrection spell section for details.'
    )
  ],
  // SUBSERVIENT CULTS
  [
    {
      name: 'Grandfather Mortal',
      description: 'As explained, Grandfather Mortal is thought to have been Daka Fal during the divine age of the early creation. The association, though, confers no special spells or abilities.'
    },
    {
      name: 'Flesh Man',
      description: 'Flesh Man is explained in more detail in the Introduction to the Lightbringer\'s Cult. There it explains that he has no cult, but he is known. He is especially liked because he taught this spell to all living priests. He called it their “vote on the spirit plane.”',
      spells: [
        new RuneSpell ( // name, range, passive?, reusable?, duration, stack limit, power, cost
          'Spirit Block', 160, true, true, '15 minutes', false, 1, 0,
          'Each point of Rune Spell used blocks off ten points from the attacking spirit’s Power.'
        )
      ]
    }
  ],
  // MISCELLANEOUS NOTES
  'None.'
);
