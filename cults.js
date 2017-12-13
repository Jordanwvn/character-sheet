/* CULTS **********************************************************************
* This page holds all of the information about cults in RuneQuest. This is a  *
* page strictly to be used with reference, so a user can look up information  *
* on any cult in an efficient and clear way.                                  *
*****************************************************************/'use strict';


let Cult = function (name, runes, purpose, joining, restrictions, benefits, spells) {
  this.name = name;
  this.runes = runes;
  this.purpose = purpose;
  this.joining = joining;
  this.restrictions = restrictions;
  this.benefits = benefits;
  this.spells = spells;
}

let barbarian_god = [
  new Cult (
    // DEITY NAME
    'Daka Fal',
    // RUNES
    ['man', 'spirit'],
    // PURPOSE OF THE CULT
    'The religion of Daka Fal is an integral link in the cosmic structure. It supports the reality of human mortality by worshipping the Lord of the Dead, and by drawing upon the dead for strength to survive in life. At the same time it provides the basic barriers to help protect weak humans from the mighty powers.',
    // JOINING
    {
      lay: 'Anyone is allowed to join',
      initiate: 'Initiates must be willing to disavow all previous cult connections and stand by the rules of this cult. They must be initiated by a priest of the cult, or by a shaman.',
      runelord: 'The member must be an Initiate of the cult. They must have 90% skill in any five skills, including five different weapons if desired; they must have a POW of 15; they must convince the examiners by calling an Ancestor.',
      runepriest: 'Must have 18 POW. 90% Spirit Speech is required instead of literacy. It is possible to approach one\'s own ancestors instead of an established priest to become a Priest.'
    },
    // RESTRICTIONS
    {
      lay: 'There are no particular requirements except to partake in the ceremonies.',
      initiate: 'Belonging is merely dependent upon the priest\'s demands. Initiates always are expected to help defend their priest, and to assist in rituals and other magical acts. They must usually help provide for his upkeep as well by providing food and shelter.',
      runelord: 'There are no special restrictions.',
      runepriest: 'Priests are required to give one point of POW per week to each of their bound spirits. The POW may come from themselves or from their worshippers.'
    },
    // BENEFITS
    {
      lay: 'No automatic mundane benefits.',
      initiate: 'No automatic mundane benefits.',
      runelord: 'May gain an Allied Spirit, and may use iron armor or weapons or tools if they procure them.',
      runepriest: 'Priests benefit by getting considerable magical power under their command without becoming an outcast like normal shamans.'
    },
    // SPELLS
    ['Free Ghost', 'Summon Ancestor', 'Summon Specific Ancestor', 'Summon Spirit Teacher', 'Incarnate Ancestor', 'Resurrection']
  ),

  new Cult (
    // DEITY NAME
    'Storm Bull',
    // RUNES
    ['death', 'storm/air', 'beast'],
    // PURPOSE OF THE CULT
    'The purpose of the Storm Bull is to prevent the rise of the Devil, or any associated form of Chaos.',
    // JOINING
    {
      lay: 'To join the cult of the Storm Bull requires that the candidates not be tainted by chaos, that they be armed with magic or weapons, be willing to follow the orders of their superiors, and pay ten Lunars to the priest accepting them.',
      initiate: 'Candidates for Initiation must have been Lay Members for at least one year, and to have shown during that time that they upheld the laws of the cult. Candidates must pay their priest 100 Lunars for the ceremony.',
      runelord: 'Rune Lord candidates must have 90% ability with their tribal weapon, know at least 4 point Healing, and have 90% ability in any four from this list: Another weapon, Shield, Riding, Tracking, Spot Hidden, Climb, Sense Chaos.',
      runepriest: 'Rune Priest must fulfill all the normal priestly requirements, except that instead of the literacy requirements they must know Beast Speech at least 80%. They must have defeated forces of chaos in a combat of personal danger.'
    },
    // RESTRICTIONS
    {
      lay: 'Lay members must attend all cult functions. Also, until they are initiated, they must pay for their own upkeep and make a donation of 5 Lunars a week to their priest. Alternatively they may sacrifice one herd beast for a year\'s membership. Members must all shun the presence of chaos, however, Lay members are expected to report it rather than directly fight.',
      initiate: 'Initiates must be present for at least one half of the year, where they must only interact with friendly or associated cults and are required to investigate any hints or rumors of chaotic presence personally, rousing local lay members if possible. They may also be responsible to caring for a number of lay members',
      runelord: 'If a Rune Long learns of or sense the presence of chaos they must leap up, shout for their god, grab their weapons, and set off on their task.',
      runepriest: 'Rune Priests must pledge themselves fully to their god, and swear away the opportunity to ever enter normal tribal life.'
    },
    // BENEFITS
    {
      lay: 'The cult promises to protect its lay members while they are with their priest. They do not provide weapons, horses, money, or free aid to lay members.',
      initiate: 'Initiates are provided food, weapons, magic, steeds, gold, and other favors from their priest.',
      runelord: 'Rune Lords of Storm Bull are given great honor, freedom through all of Prax, iron armor and weapons by the cult if available, and freedom from allegience to any priest. They can always tell when a storm is approaching, and have a highly developed Sense Chaos ability.',
      runepriest: 'Rune Priests are given honor, and are gifted once per year by the Kahn of the tribe which they originally left. This gift must be at least three beasts suitable for riding or eating, as specified by the priest, and the exchange of all damaged weapons from the Storm Bulls for as many repaired and whole weapons from the tribe.'
    },
    // SPELLS
    ['Defend Against Chaos', 'Face Chaos']
  ),

  new Cult (
    // DEITY NAME
    'Waha',
    // RUNES
    ['death', 'beast', 'man'],
    // PURPOSE OF THE CULT
    'The cult of Waha provides the basic life style and survival needs for the men of the animal nomads of Prax. It carefully explains what each man must do to survive, and determines the social order within the tribe.',
    // JOINING
    {
      lay: 'Unless already chosen for another cult, all male barbarian children join as Lay Members as part of their puberty initiation. The cult is not open to women.',
      initiate: 'Tribe members are Initiated after they have proved their warrior abilities to the tribe elders when the men are 20-25 years old or by proving themselves at a seasonal festival. Tribal warriors must have 50%+ ability in riding and in a tribal weapon, and know one spell.',
      runelord: 'Rune Lords must have proven themselves, and not be proved murderers, robbers, or cowards. Candidates must provide their own iron armor and weapons. Candidates must have a 90% Ability with Riding and using their Tribal Weapon, and a 90% Ability in any three of these skills: Peaceful Cut, Another weapon, Shield, Tracking, Sense Ambush, or Oratory.'
      runepriest: 'Membership in the priesthood requires that a person be of noble blood. Instead of knowing how to read and write his native tongue a candidate must have purchased the Beast-speech Rune Magic spell as an Initiate'
    },
    // RESTRICTIONS
    {
      lay: 'All Lay Members of the cult must attend to the needs of the herds without stint of time, and this takes most of their time. On each holy day they sacrifice one point of Power to their god during a rope-tieing ceremony dedicated to Waha. Lay members are assigned to family-grouped warrior bands, following the orders of a  warrior-leader, who is an Initiate of the cult.',
      initiate: 'Initiates must sacrifice two points of Power each holy day. They must follow every command from their chieftains and protect the Lay Members they lead from chaos and other dangers, to the point of sacrificing their lives.',
      runelord: 'Rune Lords of Waha are required to celebrate High Holy Day with followers of the cult. They are not allowed ever to ride any steed but their own herd beasts. Once in his lifetime a Rune Lord must travel to the Marsh and kill a thing of chaos.',
      runepriest: 'Once in their life, Rune Priests must make pilgrimmage to the Marsh and kill something of chaos. Rune Priests are responsible for the welfare of their followers, and must not do anything which will uselessly or foolishly endanger his wards.'
    },
    // BENEFITS
    {
      lay: 'Lay members of the cult of Waha are provided tribal weapons, clothes, and food by the cult. They may learn skills from their elders and priests.',
      initiate: 'Initiates  are allowed to go on war parties and raids, and they may gain special powers through a heroquest. Initiates receive the third choice of portions from a slaughtered animal and a second choice of weapons from traders.',
      runelord: 'A Rune Lord receives first choice of weapons from the traders, and shares the second portion of a slaughtered animal with the priests of the cult. Rune Lords are allowed to lead a chosen party of Initiates on independent missions away from the herds. Rune Lords who capture ten each of the herd beasts of the other four tribes will receive a blessing from their god. This takes the form of a Protection spell permanently cast upon their favorite riding animal, unlocking full intelligence.',
      runepriest: 'As noblemen of the tribes the Rune Priests get second portions of slaughtered beasts. They receive all gifts from foreign travellers to distribute as they see fit. Their favorite riding animal will become their allied spirit, with unlocked intelligence and Protection cast over it.'
    },
    // SPELLS
    ['Summon Spirit of Law']
  ),

  new Cult (
    // DEITY NAME
    'Eiritha',
    // RUNES
    ['beast', 'fertility'],
    // PURPOSE OF THE CULT
    'The people of Prax are utterly dependent upon the goddess Eiritha for their daily existence upon the bleak plains. She is the source of all their daily goods, for the people are unable to extract the requirements for survival from the region, but the beast-daughters of the cult can. To be cursed or exiled by the goddess means death, unless the victim is able to flee the plains.',
    // JOINING
    {
      lay: 'All people are Lay members of the cult if they live with the tribe. Outsiders may be allowed in the worship, but they must join by paying two cattle, its cost equivalent, or otherwise satisfy the priestess presiding and show that they are sincere and friendly.',
      initiate: 'Initiate membership requires that a person have been a Lay Member in good standing and be a female member of the tribe.',
      runelord: 'Herd Sisters must have a 90% skill in these: Find Water, Find Cattle Food, and Riding. They must also have two of these skills: Any 1-hand axe weapon, Understand Beast-talk, Read Own Language, Spot Trap, Spot Hidden, First Aid, Treat Disease. Also, each 3 points of Xenohealing may be substituted for one of the optional skills.',
      runepriest: 'Priestesses must be women. There is no literacy requirement, but instead they must know Beast-speech at 90%. Other requirements are as normal.'
    },
    // RESTRICTIONS
    {
      lay: 'Membership in the cult is permanent for all Lay members unless they are outlawed. They must also worship each week with the cult and maintain the cult prejudices.',
      initiate: 'Membership in the cult is permanent for all Initiate members unless they are outlawed. They must also worship each week with the cult and maintain the cult prejudices.'
      runelord: 'Herd Sisters have only the usual restrictions on their status.',
      runepriest: 'The restrictions are the same as those of the Initiates, but there is a strict prohibition against using any weapons other than axes or knives. Also, they may not use any weapons magic. Offensive spells are allowed.'
    },
    // BENEFITS
    {
      lay: 'As a result of Lay membership the peoples may partake of the gifts of the goddess. This means that they have food, clothing, and the tools and implements made from the bodies of the beasts.',
      initiate: 'As a result of Initiate membership the peoples may partake of the gifts of the goddess. This means that they have food, clothing, and the tools and implements made from the bodies of the beasts.',
      runelord: 'The benefits of being a Herd Sister of the cult are that the person is accorded priority over all members of the tribe in gift-receiving except the kahns and priestesses, and maintain whatever status they may personally acquire.',
      runepriest: 'Priestesses receive the first choice of any portions of a slaughtered animal. They receive great status among their tribes as well, and all social benefits thereby granted.'
    },
    // SPELLS
    ['Bless Animals', 'Speak to Beast']
  )
]

let invader_deities = [
  new Cult (
    // DEITY NAME
    'Humakt',
    // RUNES
    ['death', 'truth'],
    // PURPOSE OF THE CULT
    'As the god of soldiers, Humakt has a permanent place in the godly ranks of any religion. Priests act as trainers and chaplins for mercenary and national forces, and their Rune Lords are the first asked to lead perilous quests, unless subtlety will be called for. Temples are also used as hiring halls in many regions.',
    // JOINING
    {
      lay: 'Humakt welcomes all races as long as they are warriors and will swear to keep discipline and uphold the Humakt Code of fair play and honor.',
      initiate: 'Lay Members who have shown true dedication to the ideal and cult of Humakt may be invited to become Initiates of the cult. An Initiate must have a sponsor who is already an Initiate and a battle comrade of the candidate. He must also pass a test which is abstracted for the game by rolling on D100 the formula CHA x 5 + % to hit with Sword, divided by 2.',
      runelord: 'A candidate for Sword of Humakt must have been an Initiate in the cult for at least two years. The candidate must have 90% skill in at least five of the following skills. At least three skills must be with weapons. Broadsword, Riding, Greatsword, Spot Hidden, Shortsword, Camouflage, Rapier, Detect Assassin, Epee, Armoring/Weapon Making, Dagger, First Aid, Dagger Throwing, Treat Poison, Oratory, Shield Parry, The candidate must also have a Power of 15 or, greater and convince the Examining Council of the cult and the god with a 1D100 roll of (POW + CHA) X 5, divided by 2.',
      runepriest: 'Candidates must have spent two years or more as an Initiate of the cult, and must convince the Examining Council. Rune Priest Examiners will take contributions to the cult treasury into account. Literacy is not required.'
    },
    // RESTRICTIONS
    {
      lay: 'Lay Members are expected to tithe ten percent of their current silver every cult holy day and give up the usual point of Power when they worship. They must uphold the Code of Humakt, 1. always fighting other Humakt members fairly, 2. honoring the fallen, and 3. maintaining strict truth and confidence with one another.',
      initiate: 'Once accepted, the Initiate must take a Humakt gift(s) and accept a Humakt geas per gift. The Initiate (often called a “Swordbrother/sister”) must also sacrifice two points of POW every holy day. They often are in demand as bodyguards against assassination.',
      runelord: 'A Rune Lord must personify honor and fair combat in his every deed, upholding the meek and protecting the oppressed. He must never turn his back on a fair fight in a good cause and never break a sworn vow.',
      runepriest: 'Humakt Rune Priests must serve time as chaplains to regiments and Temple business. However, they continue training in skills hallowed to their god as a form of worship.'
    },
    // BENEFITS
    {
      lay: 'The Humakt temple maintains good relations with the Arroin cult, so that its members can be assured of first aid for their battle wounds. Members can occasionally call on the Temple for room and board.',
      initiate: 'Initiates get first call on all Sargent positions within the Temple, lead other members in devotions, always have healing, room, and board arranged, and will be ransomed or rescued if captured. A cult member will never be called back from the dead in any way, not even as a skeleton or zombie.',
      runelord: 'the Sword of Humakt attains an Allied Spirit (which is always put into an iron sword), iron armor (if available to the Temple), support of his Power so that he will be able to fend off magical attack, and Divine Intervention on call. The Rune Lord of Humakt must also take unto himself at least one more gift and its attendant geas(es). A Rune Lord of Humakt may become a Rune Priest any time he meets the Power requirements, with no reduction of fighting ability.',
      runepriest: 'A new Priest must take one new gift of his choice and its geases. A Humakt Sword Priest always has a place in any council of war, and has a claim second only to a Sword in taking any tactical command. Humakt-worshipping soldiers will always see that the Priest gets fed on the march.'
    },
    // SPELLS
    ['Bind Ghosts', 'Detect Truth', 'Turn Undead', 'Truesword', 'Morale', 'Oath', 'Sever Spirit']
  ),

  new Cult (
    // DEITY NAME
    'The Seven Mothers',
    // RUNES
    ['lunar', 'life/fertility', 'death'],
    // PURPOSE OF THE CULT
    'The Seven Mothers is the guardian cult of the borderlands, and is an official state cult responsible for keeping foes of the Empire out and admitting friends of the Empire. In the former mode, the cult has a warrior subcult, terrible in its fury. In the latter mode is a teacher subcult whose mission is to educate those wanting to meet the greater Red Goddess.',
    // JOINING
    {
      lay: 'There are no racial, birth, or ability requirements. Lay Members must rejoin every Full Moon by telling the priestess of their desire to join. However, a member can ask to be placed on a list that lasts for 5 years instead.',
      initiate: 'Candidates for initiation must be in good standing and have been Lay Members for a total of 49 weeks, the last three of the weeks consecutively and at the temple. They will be quizzed about the basics of the religion, on their attitudes, expectations, and intentions.',
      runelord: 'Rune Lords of the cult are required to have been Initiates in good standing with the cult for at least one full year and to have served in the temple regiment for at least one year (these may be concurrent). Rune Lords must also have a 90% or better skill in two of the following: Mounted Lance, Spear, Scimitar, or Shield Parry. They must have 90% ability in three of the following: Riding, Read and Write Lunar, Map-Making, Climbing, Listening, Spot Hidden, Camouflage, Tracking, Move Quietly, or General Knowledge. They must have a minimum of 50% in all of these abilities: Riding, Oratory, Spot Hidden. They also must pass the test of the examiners.',
      runepriest: 'Rune Priest candidates must have been Initiates for at least one full year and otherwise meet standard requirements as in RuneQuest.'
    },
    // RESTRICTIONS
    {
      lay: 'There are no unusual requirements in remaining a Lay Member of the cult.',
      initiate: 'Initiates must serve one week per month in active duty for the temple. Initiates should attend regular weekly services if at all possible, and if not possible they should meditate and sacrifice privately.',
      runelord: 'The Rune Lord must spend an average of five-sevenths of their time on cult business. The other two-sevenths is free time.',
      runepriest: 'The greatest restriction placed upon Lunar Priests is the cyclical nature of their Rune Magic. Priests do not consider this a weakness but a great honor to be so bound to their goddess’ nature.'
    },
    // BENEFITS
    {
      lay: 'Members may partake of the Poor Fund at any time, and also be allowed to sleep under the roof of the Outer Temple. Also, Lay Members can purchase healing for themselves or their friends from priestesses at the cult temple.',
      initiate: 'All Lay benefits are available. Initiates also are allowed to join special units in the regular Lunar army.',
      runelord: 'Upon acceptance, a Rune Lord will receive a free iron helmet, breastplate, and greaves, plus an iron-bound shield and two iron weapons. Rune Lords of any Lunar Cult are generally welcome at any other Lunar Temple. They wield considerable influence among all Lunarites. They may join any other Lunar cult as an Initiate',
      runepriest: 'Rune Priests of the cult are allowed two weeks per season of freedom to do as they wish, and they are also given an average of one day per week off-duty. This “vacation time" may be accumulated gradually if circumstances allow. They always receive free room and board at any Lunar cult'
    },
    // SPELLS
    ['Summon Small Lune', 'Summon Small Elemental', 'Summon Medium Lune', 'Madness', 'Mind Blast', 'Summon Large Lune']
  )
]
