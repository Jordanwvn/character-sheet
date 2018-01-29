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

let barbarian_gods = [
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
      runelord: 'Rune Lords must have proven themselves, and not be proved murderers, robbers, or cowards. Candidates must provide their own iron armor and weapons. Candidates must have a 90% Ability with Riding and using their Tribal Weapon, and a 90% Ability in any three of these skills: Peaceful Cut, Another weapon, Shield, Tracking, Sense Ambush, or Oratory.',
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
      initiate: 'Membership in the cult is permanent for all Initiate members unless they are outlawed. They must also worship each week with the cult and maintain the cult prejudices.',
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
  ),

  new Cult (
    // DEITY NAME
    'Pavis',
    // RUNES
    ['earth', 'stasis', 'harmony', 'man'],
    // PURPOSE OF THE CULT
    'Pavis is a “city cult.” Like most of them, it is essentially a worship of the founder of the city, with the belief that this worship reinforces the potency of the worshipper, without which the city will die. The cult draws worshippers from town residents. Most are principal worshippers of other gods, but worship at the Pavis temple as well to augment the city\'s strength. With the Orlanth agreement, Pavis became the patron god of Pavis Outside the Walls as well as in the Rubble, and the Sartarite colonists worship there as well as to their normal gods.',
    // JOINING
    {
      lay: 'Anyone in the city can join the Cult of Pavis, even if they are also worshippers of other gods. Worship at city festivals is all that’s needed.',
      initiate: 'All Initiates of this temple must have been born in Pavis or in Pavis Outside the Walls, and every Initiate must first have been a Lay Member. The applicant must be passed by the examiners of the cult, a board composed of all the priests of Pavis. The Examination of Initiation can be abstracted by rolling POW+CHA divided by 2 X 5 on D100 or less.',
      runelord: 'The priests are desperate for proper Champions of Pavis. They will accept anyone with mastery of two weapons skills and any other three skills which will work to the benefit of cult and city. To convince the Examiners, the applicant must have a Power of 15, but otherwise must fulfill the requirements for an Initiate.',
      runepriest: 'The applicant must be an Initiate with a Power of 18 and some ability to read and write Old Pavic or Old Wyrmish.'
    },
    // RESTRICTIONS
    {
      lay: 'Lay members are expected to support the city against invasion and lend a hand if the Temple needs repairs. They must sacrifice 1 point of POW per season in worship.',
      initiate: 'The Initiate may worship only Pavis and friendly and associated gods. Every holy day the Initiate must temporarily sacrifice two points of Power to the god. If the temple is ever assailed, Initiates must defend it to the death. Initiates also may be called upon to quest for the cult and to bring back glory for the cult.',
      runelord: 'The Champion of Pavis always remains within the Rubble or in Pavis Outside the Walls except when he is called by the cult and given missions for the glory of the city.',
      runepriest: 'The priests of Pavis must stay within the city, spending all regard toward the welfare of the citizens. Of an ecumenical nature, the cult has no other special behavior restrictions.'
    },
    // BENEFITS
    {
      lay: 'Mostly, the cult serves as a social meeting place for people throughout the city, acting as a sort of “lodge” for consummation of business deals and organization of mutual welfare organizations',
      initiate: 'If there is room, Initiates may live in the temple. Temple Initiation gives a character some influence with the ruling council of Pavis. All Initiates of Pavis always can find the directions of the compass in Pavis Outside the Wall or in the Rubble.',
      runelord: 'The Champion of Pavis is automatically Captain of the Pavis Survivors. This may be a figurehead post unless the Rune Lord’s skills include riding and horse archery, but the Survivors will train their captain in these skills. The Champion of Pavis also has a manor house for his residence.',
      runepriest: 'Within the city of Pavis Outside the Wall, the Priests of Pavis are prestigious; the Council hears them automatically'
    },
    // SPELLS
    ['City Harmony']
  ),

  new Cult (
    // DEITY NAME
    'Yemalio',
    // RUNES
    ['light', 'truth'],
    // PURPOSE OF THE CULT
    'The cult has continued its existence amid the hostile Storm worshippers because of the sacred pacts signed in mythical times wherein Orlanth and Yelm grudgingly admitted each other\'s right to live. The pact allowed certain minor air gods to be worshipped in sky-god territory and, conversely, some minor sky gods represent their element within storms. Such balance is, after all, necessary to maintain the cosmos.',
    // JOINING
    {
      lay: 'Lay Membership is open to humans, elves, beast people, dragonewts, or griffins. Trolls and dwarves, creatures of Dark and underground, respectively, may not join. Humans and elves pay ten Lunars each time they join, but other races are required to pay 100 Lunars to become Lay Members, and so are not so often found in the cult.',
      initiate: 'Lay Members who were born into residence in the temple area or who served two years with the temple mercenaries may become Initiates.',
      runelord: 'Acceptance as a Light Son requires that the person have proved a loyal Initiate for at least four years. They must have at least 90% proficiency in Bow and one of these skills: Javelin, Listen, Spot Hidden, Large Shield, 1- or 2-Handed Spear, Move Silently, Sense Ambush. An Initiate also must know the battle magic spell Farsee, or have the power as a Yelmalio gift.',
      runepriest: 'To become a Rune Priest, the candidate must have been an Initiate for at least five years and have an unstained record for that time. They also must know the battle magic spells Farsee (unless they have it as a gift from Yelmalio), Lightwall, and Xenohealing. They must take another Yelmalio gift, this time one of their own choosing, along with the requisite number of geases.'
    },
    // RESTRICTIONS
    {
      lay: 'Lay Members must without fail attend the regular weekly services on Fireday. Lay Members never befriend trolls or dwarves, always support the Truth in all they do, and suffer expulsion if discovered to be lying to the detriment of the cult.',
      initiate: 'Initiates are required either to spend four days per week working for the cult, or work two weeks per season for the cult. The work period may not be spent in training. Initiates also must temporarily sacrifice two points of POW every holy day. It is insisted that Initiates of the Adventuring Path accept a gift and take on a geas.',
      runelord: 'Every Light Son must own a gold spear worth at least 1,000 Lunars for ceremonial purposes, and are urged to own properly gilded spurs, helmet, and cuirass. On all Firedays Light Sons speak only in the cult tongue of Firespeech. No Light Son ever may sleep under a red blanket or ride upon a horse with a red saddle blanket, because red is the color of Fire.',
      runepriest: 'Priests of this cult have heavy responsibilities, and so all their Dexterity-based skills will be reduced to DEX times 5, as normal.'
    },
    // BENEFITS
    {
      lay: 'Lay Members may farm, hunt, or live on lands owned by the cult. All buildings and livestock are also owned by the cult, though ownership of personal private property is respected.',
      initiate: 'The temple provides further plots of cult land, ransom when necessary, and one set of armor and weapons for all Initiates free of charge. This includes a Scale armor hauberk, cuirboilli limb armor, and an open helm, plus two spears, a large shield, and a self bow.',
      runelord: 'Light Sons receive one untrained war horse and gear, though they must purchase the horse\'s training and any replacements. They may pick three Initiates of the cult as their personal guards, and these three will attend the Light Son at all times and pay loyalty to him before all else, even before the High Priests or other priests of the cult.',
      runepriest: 'Priests of the cult may take one pilgrimmage to the Golden Hill during their lifetime, unless they are on HeroQuest. If they find any of their god\'s crystals there, then they have the chance to receive a four-point Divine Intervention.'
    },
    // SPELLS
    ['catseye', 'sunbright', 'cloud clear']
  )
]

let lightbringers = [
  new Cult (
    // DEITY NAME
    'Issaries',
    // RUNES
    ['mobility', 'harmony', 'issaries'],
    // PURPOSE OF THE CULT
    'The worshippers of this deity fulfill their appropriate functions in their societies. Among primitive societies the priests of “Spare Grain” are the individuals who deal with outsiders, thanks to their special language skills. The very existence of trade and exchange rests upon the skills of middlemen, and civilization could not exist without this exchange. Goldentongue provides long-distance communication between parts of the cult and, less directly, parts of the world.',
    // JOINING
    {
      lay: 'To join the cult of Issaries as a Lay person only requires purchase of a statue of Issaries from another member of the cult of Initiate or Rune rank. Costs vary widely.',
      initiate: 'Initiation is a prerequisite to becoming a full priest or Rune Lord, and also an assurance to shop-owners that their region will be protected by some higher magics. To join as an initiate will require previous Lay membership of at least one month, a fee of 100 Lunars, and convincing an examiner.',
      runelord: 'To become a Rune Lord of the cult of Issaries one must first be an Initiate for at least a year, and be in good standing with his priest. Candidates must have a 90% ability in Tradetalk and Staff Fighting, plus three other abilities from this list: Spot Hidden, Oratory, Evaluate Treasure, Evaluate Trade Goods, Bargaining, up to two other languages, up to two other weapons.',
      runepriest: 'Candidates for priesthood must have been an Initiate in good standing for at least one year and have Priest or Rune Lord as sponsor. They must have a POW of 18 and know their native language (Tradetalk) at 90%. They must also pass their examination.'
    },
    // RESTRICTIONS
    {
      lay: 'Remaining a member costs but one point of Power sacrificed per season, renewable of course. This will be done by reciting a simple prayer with the sacrifice, followed by some sort of business transaction.',
      initiate: 'Initiates must vow to uphold the cult ideals and never to defile any other cult member\'s ground or market. They use only Tradetalk in cult functions. They do not have to report to a Priest or Rune Lord.',
      runelord: 'Rune Lords of Issaries are obliged to go to the aid of any Issaries priest in trouble. They must also protect all their own followers with their own lives, if necessary. This is a formal obligation which may be temporarily hired by outsiders.',
      runepriest: 'Priests of Issaries are never allowed to steal, except from someone who stole from them or from a being of chaos. They must always come to the aid of fellow cultists, except where such aid would greatly endanger them. They form their own opinion of the potential danger involved.'
    },
    // BENEFITS
    {
      lay: 'None to Lay members.',
      initiate: 'An Initiate  will receive room, board, and one week of each five set aside for free training in a cult skill by their priest or lord. Initiates also may own their own shops.',
      runelord: 'Rune Lords are allowed to hire themselves out as travelling guards to anyone who will meet their fees. Their clients must temporarily join the cult of Issaries for the duration of the employment. The Rune Lords may also hire Initiates for this task, and no priest is allowed to force his Initiates to stay if invited to go by a Rune Lord. Finally, they may initiate members into their cult at the rate of one per month.',
      runepriest: 'Benefits for the Priests of Issaries are primarily those which their neutrality will bring: a presumed friendship with all whom they meet, a chance to trade with anyone who comes along, and few automatic enemies. They may also accept laypeople into the cult, and also initiate them, They are often hired to act as interpreters if no one else is about.'
    },
    // SPELLS
    ['Lock', 'Special Lock', 'Create Great Market', 'Spell Trading', 'Path Watch', 'Create Market']
  ),

  new Cult (
    // DEITY NAME
    'Chalana Arroy',
    // RUNES
    ['life', 'harmony'],
    // PURPOSE OF THE CULT
    'As the goddess of Healing and Comfort, Chalana Arroy’s worship will continue until there is no need to heal anyone again.',
    // JOINING
    {
      lay: 'Anyone with a sincere wish to heal may join the cult. The sincerity is checked with Divination.',
      initiate: 'The candidate for Initiate status must have 90% ability with one of the Healing Arts, and pass the test given by the Priestesses. They need not have been a Lay Member before becoming an Initiate, as long as they swear to live by the dictates of the Cult on becoming Initiates.',
      runelord: '90% ability in the three Healing Arts, plus knowledge of Healing 6 as Battle Magic or Potion, and at least one Poison Antidote at the level of 20.',
      runepriest: 'The Healer candidate must be an Initiate with a Power of 18.'
    },
    // RESTRICTIONS
    {
      lay: 'Lay Members must work at least as many hours for the temple or the individual healer to whom they apprentice as they do in learning skills from the temple or healer. Lay Members also must take an oath never to harm a living creature and to aid all within the limits of their ability. Lay Members must become vegetarians.',
      initiate: 'The Initiate must teach the mastered skill to Lay Members and spend four hours a day on temple duties, i.e., healing or training, and meet other usual requirements,',
      runelord: 'There are no further restrictions to the Status of Arroin Healer, since they are thoroughly restricted at Lay and Initiate level and those restrictions still apply.',
      runepriest: 'The Healer Priest is expected to improve his skills up to the level of a Rune Lord, but is in no other way more restricted than the Rune Lord.'
    },
    // BENEFITS
    {
      lay: 'Lay Members will be healed by the temple for free and gain this privilege for family members as well.',
      initiate: 'The Initiate is given room and board at the Temple, or any other Temple he may visit. They are known by the title of Nurse. They may receive 4 hours/day training free from the cult.',
      runelord: 'The Chalana Arroy healer is inviolate in the eyes of most gods. Almost anyone harming a healer would be outcast from his cult unless he belonged to a Darkness or a chaos cult. Healers are welcome always at feasts and festivals and are much honored. Chalana Arroy cult spells work equally well on any creature, and need not distinguish between Healing and Xenohealing. For each year in the cult, Healers receive another 5% free training in Find Healing Plants.',
      runepriest: 'The Healer Priest receives the same benefits as the Healer Lord.'
    },
    // SPELLS
    ['Comfort Song', 'Cure Brain Fever', 'Cure Chaos Wound', 'Cure Chills', 'Cure Shakes', 'Cure Wasting', 'Heal Area', 'Refine Medicine', ' Cure All Disease', 'Cure Soul Waste', 'Heal Constitution', 'Regrow Limb', 'Resurrection']
  ),

  new Cult (
    // DEITY NAME
    'Lhankor Mhy',
    // RUNES
    ['truth', 'stasis'],
    // PURPOSE OF THE CULT
    'The cult of Lhankor Mhy provides the same service to the Material Plane as its god does for the Spirit Plane. The Sages (as the priests and Rune Lords of the cult are called) provide information to all who will pay for it, whether in money or service. They also constantly quest for new information.',
    // JOINING
    {
      lay: 'There are two forms of membership. Apprentices are young people who are apprenticed to the Sages to become scribes, historians, and other forms of clerks. They will be trained, paying for it with service to the cult. Worshippers are any people who come to the temple to worship and learn by paying for training.',
      initiate: 'An Initiate to the Cult of Lhankor Mhy must be a Master (90%) of one of the Cult\'s Skills. Once tested by the Cult and accepted into Master status, he will automatically be accepted if he has been an Apprentice. If he has been only a worshipping Lay Member he must pass a test. This may be attempted once per game year.',
      runelord: 'The Sage must be an Initiate, master of a Sage skill, and a master of four other skills which may be other Sage skills, weapon skills, or other skills taught by cult temples.',
      runepriest: 'Rune Priests, as premier representatives of their god, must have a firm grasp of their subjects. They must meet at least three of these requirements: Read and Write Language other than their own, 90%; Identify Treasure, 90%; Map-Making, 90%; Orate, 75%; General Knowledge, 75%; brew Potency 10 poison or antidote.'
    },
    // RESTRICTIONS
    {
      lay: 'Continued Lay Membership involves continued dedication to studies. Apprentices must remain celibate and cloistered within the Temple. Normal worshippers have no restrictions on non-study hours. All Lay Members take a vow of Truth.',
      initiate: 'An Initiate is required to voluntarily sacrifice 2 points of Power each Holy Day, Also, he must spend at least 1⁄2 of each year teaching and the rest of his time doing further research. All fees earned for teaching are split 30 - 70 with the Temple getting the 70.',
      runelord: 'Temple Sage Lords must never mix into individual quarrels nor participate in wars. They must spend half their time teaching and pay 90% to the temple. They must never allow a repository of knowledge to be threatened and any items of importance to the gathering of knowledge must be acquired for the cult.',
      runepriest: 'The Sage Priest must follow the same restrictions imposed on the Rune Lord of Lhankor Mhy. Furthermore, he is expected to give 3⁄4 of his time to teaching and research.'
    },
    // BENEFITS
    {
      lay: 'As membership implies the chance to study it is about the sole benefit given to Lay Members.',
      initiate: 'Initiates of the Grey Lords have complete access to all cult libraries and instructors. They may also be assured of a season’s room and board at any temple.',
      runelord: 'The major benefit of the status of Sage is the ability to increase one\'s skills beyond the 100% mark. However, they are much in demand as advisers.',
      runepriest: 'Priests take formal precedence in all ceremonies, and are the most prized of advisors. However, they will only act as free-lance advisers and never permanently attach themself to any individual or government. In this way they have come to be known by their other name, the Brotherhood of Free Sages. The Sage Priest is also allowed to use the Evaluate Treasure skill on all items brought to the temple for evaluation. Of this income 90% must go to the temple, but the remainder does help brighten lives.'
    },
    // SPELLS
    ['Analyze Magic', 'Translate', 'Knowledge', 'Mind-Read', 'Clairvoyance / Clairaudience', 'Truespeak', 'Reconstruction']
  ),

  new Cult (
    // DEITY NAME
    'Orlanth',
    // RUNES
    ['air/storm', 'motion', 'mastery'],
    // PURPOSE OF THE CULT
    'The general cosmological reasons for Orlanth\'s existence is the necessity of a god of the elemental Air. It provides a cult for wanderers and others willing to move outside of their rigid tribal or civilized hierarchies. In Prax, Orlanth provides an acceptable outlet for the dissidents who do not wish to follow the rigid role models of the Waha and Eiritha cults, yet wish to remain with the tribe.',
    // JOINING
    {
      lay: 'Orlanth welcomes almost all beings who breathe air. Lay Members must have reached their maturity and must make the choice to join by their own free will.',
      initiate: 'The prospective Initiate of Orlanth must have belonged to the cult for at least a year as a Lay Member, and must make a formal rejection of former cult ties and swear to devote himself “to the winds.” He must have a sponser who is already an Initiate. He must pass a test given by the Priest. The Priest may choose to take into account great deeds done for the god.',
      runelord: 'Candidates for Wind Lord who fulfill the minimal requirements and have been Initiates for at least a year will be accepted by the priests almost automatically. Candidates may also attempt to become a Wind Lord even if they have not previously been Initiates. They must prove their sincerity, make a contribution of at least 1500 Lunars in cash or kind, and pass an exam. All candidates for Wind Lord must have 90% proficiency with any sword weapon, plus 90% proficiency with any four of this list: Another Weapon, Oratory, Riding, Climbing, Shield Parry, Mapping, Spot Hidden, Hide, Move Silently, and Storm Speech.',
      runepriest: 'Priests of Orlanth Adventurous must be able to speak their native tongue and Storm Speech at least 80%, have a Power of 18 or more, and convince the examiners in the usual fashion. They must also have been Initiates for at least 2 years.'
    },
    // RESTRICTIONS
    {
      lay: 'Lay Members are required to  give three clacks, or some comparable foodstuff, to the priest at each worship. Lay Members are expected to act in accordance with the wishes of their priests and to come to the aid of the cult.',
      initiate: 'Initiates must tithe 10% of their income, including income made while on leave. Initiates are required to spend at least six weeks a year aiding in the defense of their priest and in performing tasks for him. They are now bound to the cult likes and dislikes.',
      runelord: 'Wind Lords have specific greetings and challenges they must meet followers of Yelmalio, Eiritha, and Chaos with. A Yelmalio follower must be riddled, a Eiritha priestess must be served, and a follower of Chaos must be slain.',
      runepriest: 'Wind Voices must never fail to succor a member of his congregation nor fail to aid an Initiate of any Lightbringers cult. The same rivalries arise for Wind Voices as for Wind Lords, but the Wind Voices do not have the standardized challenges to go through. Their hatred of chaos, and the Lunar chaos connections, is intense and undisguised.'
    },
    // BENEFITS
    {
      lay: 'Because of the wandering nature of this cult there are rarely any board or food supplied by the cult. Ransom or liberating Lay Members is also not required of the cult.',
      initiate: 'Initiates of Orlanth may receive room and board from any Orlanth temple, though not for a period of time beyond Windsday of the next Mobility week. They may demand assistance in combat from all Air Rune cultists, but if non-Orlanthians assist then the helpers may demand a price for it afterwards.',
      runelord: 'A Wind Lord has the immense benefit of being called upon for many dangerous tasks and trying to outshine his contemporaries in feats of glory and prowess. He is the subject of awe, admiration and many poems. Iron weapons and armor are rarely available to present to a Wind Lord upon his accession to the rank. He may receive one piece of iron to mark his status, but it is often the first quest for the new Wind Lord to gain his whole regalia of iron accoutrements.',
      runepriest: 'Wind Voices attached to tribes or clans are revered for having their exotic powers of Rune Magic normally unknown to the Waha pantheon. Although they have no official status in tribal affairs they are usually allowed to sit in on council meetings and voice their opinions to the elders. Priests are allowed to Initiate new members, as usual, and to keep the money given as part of their examination'
    },
    // SPELLS
    ['Telekinesis', 'Guided Teleportation', 'Teleportation']
  )
]

let nonhuman_gods = [

]
