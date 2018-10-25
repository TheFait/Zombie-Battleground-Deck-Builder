const cardList = {
	"Izze": {faction: "Water",rank:"Minion",name:"Izze",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"28",cardText:"Attack: Freeze Target"},
	"Jetter": {faction: "Water",rank:"Officer",name:"Jetter",count:0,cost:4,type:"Walker",attack:3,defense:3,id:"29",cardText:"Entry: 1 damage to a zombie"},
	"Freezzee": {faction: "Water",rank:"Officer",name:"Freezzee",count:0,cost:5,type:"Walker",attack:3,defense:3,id:"30",cardText:"Entry: Freeze zombie and adjacent zombies, 2 damage If frozen"},
	"Tzunamy": {faction: "Water",rank:"General",name:"Tzunamy",count:0,cost:11,type:"Walker",attack:6,defense:6,id:"31",cardText:"Entry: 2 damage to all enemies, then freeze them"},
	"Zhatterer": {faction: "Water",rank:"Minion",name:"Zhatterer",count:0,cost:5,type:"Walker",attack:2,defense:4,id:"48",cardText:"Entry: Destroy a frozen zombie"},
	"Znowman": {faction: "Water",rank:"Minion",name:"Znowman",count:0,cost:3,type:"Heavy",attack:0,defense:3,id:"49",cardText:"Heavy, enemies that attack this become frozen"},
	"Embryo #086": {faction: "Water",rank:"Minion",name:"Embryo #086",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"86",cardText:"-1"},
	"Embryo #087": {faction: "Water",rank:"Minion",name:"Embryo #087",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"87",cardText:"-1"},
	"Embryo #088": {faction: "Water",rank:"Minion",name:"Embryo #088",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"88",cardText:"-1"},
	"Zub-Zero": {faction: "Water",rank:"Commander",name:"Zub-Zero",count:0,cost:7,type:"Walker",attack:4,defense:5,id:"89",cardText:"Entry: 3 Damage to a Zombie, if it survives Freeze it"},
	"Blizzard": {faction: "Water",rank:"Commander",name:"Blizzard",count:0,cost:6,type:"Walker",attack:3,defense:4,id:"90",cardText:"Entry: Freeze all enemy zombies"},
	"Embryo #133": {faction: "Water",rank:"Minion",name:"Embryo #133",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"133",cardText:"-1"},
	"Embryo #134": {faction: "Water",rank:"Minion",name:"Embryo #134",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"134",cardText:"-1"},
	"Vortex": {faction: "Water",rank:"General",name:"Vortex",count:0,cost:11,type:"Walker",attack:6,defense:7,id:"135",cardText:"Entry: replace ally water zombies in play with stronger ones"},
	"Embryo #136": {faction: "Water",rank:"Officer",name:"Embryo #136",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"136",cardText:"-1"},
	"Zplash": {faction: "Water",rank:"Commander",name:"Zplash",count:0,cost:6,type:"Walker",attack:4,defense:4,id:"137",cardText:"Entry: 1 damage to random enemy for each water zombie in your hand "},
	"Embryo #138": {faction: "Water",rank:"Officer",name:"Embryo #138",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"138",cardText:"-1"},
	"Froztbite": {faction: "Water",rank:"Commander",name:"Froztbite",count:0,cost:4,type:"Walker",attack:0,defense:6,id:"139",cardText:"Delayed 1: +6 Atk"},
	"Zpring": {faction: "Water",rank:"Commander",name:"Zpring",count:0,cost:5,type:"Walker",attack:3,defense:4,id:"140",cardText:"As long as this is in play you have 1 extra goo"},
	"Maelstrom": {faction: "Water",rank:"Commander",name:"Maelstrom",count:0,cost:8,type:"Walker",attack:5,defense:5,id:"141",cardText:"Entry: Return all other zombies to their owners' Hands"},
	"Ozmoziz": {faction: "Water",rank:"Minion",name:"Ozmoziz",count:0,cost:2,type:"Walker",attack:1,defense:2,id:"152",cardText:"Entry: Freeze a random ally, add Tainted Goo to your hand"},
	"Geyzer": {faction: "Water",rank:"Officer",name:"Geyzer",count:0,cost:4,type:"Walker",attack:2,defense:3,id:"153",cardText:"Entry: Freeze 2 random allies, add Corrupted Goo to your hand"},
	"Poizom": {faction: "Toxic",rank:"Minion",name:"Poizom",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"24",cardText:"Attack: +1 damage to Earth zombies"},
	"Ghoul": {faction: "Toxic",rank:"Officer",name:"Ghoul",count:0,cost:2,type:"Walker",attack:3,defense:2,id:"25",cardText:"Attack: -1 Attack"},
	"Embryo #026": {faction: "Toxic",rank:"Minion",name:"Embryo #026",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"26",cardText:"-1"},
	"Cherno-bill": {faction: "Toxic",rank:"General",name:"Cherno-bill",count:0,cost:11,type:"Heavy",attack:7,defense:9,id:"27",cardText:"Heavy, Death: 3 damage to all zombies"},
	"Zpitter": {faction: "Toxic",rank:"Minion",name:"Zpitter",count:0,cost:3,type:"Walker",attack:2,defense:2,id:"46",cardText:"Entry: 1 damage to a random enemy"},
	"Zeeter": {faction: "Toxic",rank:"Officer",name:"Zeeter",count:0,cost:5,type:"Embryo",attack:1,defense:1,id:"47",cardText:"Entry: Devour an ally zombie, get its Atk and Def"},
	"Embryo #079": {faction: "Toxic",rank:"Minion",name:"Embryo #079",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"79",cardText:"-1"},
	"Embryo #080": {faction: "Toxic",rank:"Minion",name:"Embryo #080",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"80",cardText:"-1"},
	"Embryo #081": {faction: "Toxic",rank:"Minion",name:"Embryo #081",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"81",cardText:"-1"},
	"Azzazzin": {faction: "Toxic",rank:"Officer",name:"Azzazzin",count:0,cost:3,type:"Feral",attack:5,defense:1,id:"82",cardText:"Blitz"},
	"RelentleZZ": {faction: "Toxic",rank:"Officer",name:"RelentleZZ",count:0,cost:3,type:"Walker",attack:3,defense:6,id:"83",cardText:"Entry: 2 damage to this zombie"},
	"Polluter": {faction: "Toxic",rank:"Officer",name:"Polluter",count:0,cost:4,type:"Walker",attack:3,defense:3,id:"84",cardText:"Death: Gain 1 goo"},
	"Zludge": {faction: "Toxic",rank:"Commander",name:"Zludge",count:0,cost:5,type:"Walker",attack:4,defense:4,id:"85",cardText:"Rage: +2 attack"},
	"Germ": {faction: "Toxic",rank:"Minion",name:"Germ",count:0,cost:1,type:"Walker",attack:2,defense:1,id:"126",cardText:""},
	"Ectoplasm": {faction: "Toxic",rank:"Minion",name:"Ectoplasm",count:0,cost:1,type:"Walker",attack:2,defense:2,id:"127",cardText:"Entry: Lose 1 goo"},
	"Wazte": {faction: "Toxic",rank:"Minion",name:"Wazte",count:0,cost:2,type:"Heavy",attack:3,defense:3,id:"128",cardText:"Heavy, Entry: Lose 1 goo bottle"},
	"Zlopper": {faction: "Toxic",rank:"Commander",name:"Zlopper",count:0,cost:7,type:"Walker",attack:3,defense:5,id:"129",cardText:" +1 attack to all ally Toxic zombies"},
	"Boomer": {faction: "Toxic",rank:"Commander",name:"Boomer",count:0,cost:9,type:"Walker",attack:6,defense:6,id:"130",cardText:"Death: Adjacent zombies get +2 Atk"},
	"Zteroid": {faction: "Toxic",rank:"Commander",name:"Zteroid",count:0,cost:6,type:"Walker",attack:5,defense:4,id:"131",cardText:"Death: All ally zombies get +2 Atk until end of turn"},
	"GooZilla": {faction: "Toxic",rank:"General",name:"GooZilla",count:0,cost:8,type:"Walker",attack:1,defense:1,id:"132",cardText:"Entry: Return 4 Goo, and use all your goo for 2x Atk/Def"},
	"Zeptic": {faction: "Toxic",rank:"Minion",name:"Zeptic",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"150",cardText:"Overflow 2, deal 2 damage to your Overlord"},
	"Hazzard": {faction: "Toxic",rank:"Officer",name:"Hazzard",count:0,cost:5,type:"Walker",attack:4,defense:4,id:"151",cardText:"Overflow 7, deal 4 damage to your Overlord"},
	"Azuraz": {faction: "Life",rank:"Minion",name:"Azuraz",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"19",cardText:"Attack: +1 damage to Life zombies"},
	"Shroom": {faction: "Life",rank:"Officer",name:"Shroom",count:0,cost:4,type:"Walker",attack:4,defense:2,id:"20",cardText:"Entry: 2 damage to a zombie"},
	"Vindrom": {faction: "Life",rank:"Officer",name:"Vindrom",count:0,cost:4,type:"Walker",attack:2,defense:3,id:"21",cardText:"Attack: Freeze zombie"},
	"Shammann": {faction: "Life",rank:"General",name:"Shammann",count:0,cost:11,type:"Walker",attack:5,defense:6,id:"22",cardText:"Turn: Summon two 1/1 zombie minions"},
	"Puffer": {faction: "Life",rank:"Officer",name:"Puffer",count:0,cost:3,type:"Walker",attack:2,defense:2,id:"23",cardText:"Entry: +1 attack to all Life Zombies in play"},
	"Z-Virus": {faction: "Life",rank:"General",name:"Z-Virus",count:0,cost:11,type:"Walker",attack:0,defense:0,id:"42",cardText:"Devour all ally zombies, gain their Atk and Def"},
	"Yggdrazil": {faction: "Life",rank:"General",name:"Yggdrazil",count:0,cost:11,type:"Walker",attack:4,defense:5,id:"43",cardText:"Entry: Reanimate all Life zombies that died this match"},
	"Sapper": {faction: "Life",rank:"Officer",name:"Sapper",count:0,cost:5,type:"Walker",attack:1,defense:4,id:"44",cardText:"Attack: Restore 1 Def for each damage this deals"},
	"Keeper": {faction: "Life",rank:"Officer",name:"Keeper",count:0,cost:3,type:"Walker",attack:1,defense:3,id:"45",cardText:"Entry: Summon a 1/1 Feral zombie minion"},
	"Embryo #073": {faction: "Life",rank:"Minion",name:"Embryo #073",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"73",cardText:"-1"},
	"Embryo #074": {faction: "Life",rank:"Minion",name:"Embryo #074",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"74",cardText:"-1"},
	"Bloomer": {faction: "Life",rank:"Minion",name:"Bloomer",count:0,cost:2,type:"Walker",attack:1,defense:1,id:"75",cardText:"Entry: Draw a card if you have a Life zombie in play"},
	"EverlaZting": {faction: "Life",rank:"Officer",name:"EverlaZting",count:0,cost:4,type:"Walker",attack:2,defense:3,id:"76",cardText:"Death: Shuffle this card into your deck"},
	"Healz": {faction: "Life",rank:"Officer",name:"Healz",count:0,cost:4,type:"Walker",attack:2,defense:3,id:"77",cardText:"Entry: Overlord +3 Def. If Overlord 10 Def or less, Overlord +5 Def"},
	"Rainz": {faction: "Life",rank:"Commander",name:"Rainz",count:0,cost:6,type:"Walker",attack:3,defense:4,id:"78",cardText:"Entry: Restore 10 Def randomly split among allies"},
	"Embryo #120": {faction: "Life",rank:"Minion",name:"Embryo #120",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"120",cardText:"-1"},
	"Zplitter": {faction: "Life",rank:"Commander",name:"Zplitter",count:0,cost:7,type:"Walker",attack:3,defense:4,id:"121",cardText:"Entry: Place another copy of this minion in play"},
	"Embryo #122": {faction: "Life",rank:"Minion",name:"Embryo #122",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"122",cardText:"-1"},
	"Embryo #123": {faction: "Life",rank:"Minion",name:"Embryo #123",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"123",cardText:"-1"},
	"Zeeder": {faction: "Life",rank:"Commander",name:"Zeeder",count:0,cost:5,type:"Walker",attack:2,defense:5,id:"124",cardText:"End: Summon a 0/2 zombie with Heavy"},
	"Blight": {faction: "Life",rank:"Commander",name:"Blight",count:0,cost:6,type:"Walker",attack:0,defense:6,id:"125",cardText:"Delayed 3: Place two 4/4 copies of this zombie in play then Destroy this"},
	"Zap": {faction: "Life",rank:"Minion",name:"Zap",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"148",cardText:"Overflow 3: Summon a 1/1 enemy zombie minion"},
	"Cactuz": {faction: "Life",rank:"Officer",name:"Cactuz",count:0,cost:4,type:"Walker",attack:2,defense:3,id:"149",cardText:"Overflow 6, Entry: Summon two 1/1 enemy zombie minions"},
	"Stapler": {faction: "Item",rank:"Item",name:"Stapler",count:0,cost:4,type:"Item",attack:0,defense:0,id:"15",cardText:"Restore 4 Def to a zombie"},
	"Nail Bomb": {faction: "Item",rank:"Item",name:"Nail Bomb",count:0,cost:4,type:"Item",attack:0,defense:0,id:"16",cardText:"4 damage to a zombie, Swing 4"},
	"Goo Bottles": {faction: "Item",rank:"Item",name:"Goo Bottles",count:0,cost:4,type:"Item",attack:0,defense:0,id:"17",cardText:"Get 2 empty goo vials"},
	"Chainsaw": {faction: "Item",rank:"Item",name:"Chainsaw",count:0,cost:4,type:"Item",attack:0,defense:0,id:"18",cardText:"+4 Atk to a zombie; End: 4 damage to this zombie"},
	"Molotov": {faction: "Item",rank:"Item",name:"Molotov",count:0,cost:4,type:"Item",attack:0,defense:0,id:"39",cardText:"3 damage to a zombie, Swing 3"},
	"Bat": {faction: "Item",rank:"Item",name:"Bat",count:0,cost:3,type:"Item",attack:0,defense:0,id:"40",cardText:"2 damage to a zombie and Distract it"},
	"Super Serum": {faction: "Item",rank:"Item",name:"Super Serum",count:0,cost:4,type:"Item",attack:0,defense:0,id:"41",cardText:"Give an ally zombie +3/+3"},
	"Whistle": {faction: "Item",rank:"Item",name:"Whistle",count:0,cost:0,type:"Item",attack:0,defense:0,id:"68",cardText:"Draw a card"},
	"Supply Drop": {faction: "Item",rank:"Item",name:"Supply Drop",count:0,cost:3,type:"Item",attack:0,defense:0,id:"69",cardText:"Each player puts a random zombie from their deck to play"},
	"Goo Beaker": {faction: "Item",rank:"Item",name:"Goo Beaker",count:0,cost:2,type:"Item",attack:0,defense:0,id:"70",cardText:"Get 1 empty goo vial"},
	"Junk Spear": {faction: "Item",rank:"Item",name:"Junk Spear",count:0,cost:4,type:"Item",attack:0,defense:0,id:"71",cardText:"Damage enemy Overlord equal to the number of items played this game"},
	"Item #072": {faction: "Item",rank:"Item",name:"Item #072",count:0,cost:-1,type:"Item",attack:0,defense:0,id:"72",cardText:"-1"},
	"Item #112": {faction: "Item",rank:"Item",name:"Item #112",count:0,cost:-1,type:"Item",attack:0,defense:0,id:"112",cardText:"-1"},
	"Extinguisher": {faction: "Item",rank:"Item",name:"Extinguisher",count:0,cost:4,type:"Item",attack:0,defense:0,id:"113",cardText:"Entry: Freeze all enemy zombies"},
	"Lawnmower": {faction: "Item",rank:"Item",name:"Lawnmower",count:0,cost:6,type:"Item",attack:0,defense:0,id:"114",cardText:"Entry: 2 damage to all enemy zombies"},
	"Shovel": {faction: "Item",rank:"Item",name:"Shovel",count:0,cost:3,type:"Item",attack:0,defense:0,id:"115",cardText:"4 damage to an enemy OR restore 5 Def to an ally"},
	"Shopping Cart": {faction: "Item",rank:"Item",name:"Shopping Cart",count:0,cost:6,type:"Item",attack:0,defense:0,id:"116",cardText:"Entry: All ally zombies get Swing"},
	"Fresh Meat": {faction: "Item",rank:"Item",name:"Fresh Meat",count:0,cost:5,type:"Item",attack:0,defense:0,id:"117",cardText:"Entry: All enemy zombies get -3 Atk until end of turn"},
	"Item #118": {faction: "Item",rank:"Item",name:"Item #118",count:0,cost:-1,type:"Item",attack:0,defense:0,id:"118",cardText:"-1"},
	"Item #119": {faction: "Item",rank:"Item",name:"Item #119",count:0,cost:-1,type:"Item",attack:0,defense:0,id:"119",cardText:"-1"},
	"Boomstick": {faction: "Item",rank:"Item",name:"Boomstick",count:0,cost:2,type:"Item",attack:0,defense:0,id:"154",cardText:"2 damage to 3 random zombies in play"},
	"Tainted Goo": {faction: "Item",rank:"Item",name:"Tainted Goo",count:0,cost:2,type:"Item",attack:0,defense:0,id:"155",cardText:"Overflow 3, disables 1 goo vial for next turn"},
	"Corrupted Goo": {faction: "Item",rank:"Item",name:"Corrupted Goo",count:0,cost:4,type:"Item",attack:0,defense:0,id:"156",cardText:"Overflow 6, disables 2 goo vials for next turn"},
	"Pyromaz": {faction: "Fire",rank:"Minion",name:"Pyromaz",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"10",cardText:"Attack: +1 damage to Life zombies"},
	"Burrrnn": {faction: "Fire",rank:"Officer",name:"Burrrnn",count:0,cost:3,type:"Feral",attack:2,defense:2,id:"11",cardText:"Feral"},
	"Cynderman": {faction: "Fire",rank:"Officer",name:"Cynderman",count:0,cost:4,type:"Walker",attack:2,defense:3,id:"12",cardText:"Entry: 2 damage to a zombie"},
	"Gargantua": {faction: "Fire",rank:"General",name:"Gargantua",count:0,cost:11,type:"Heavy",attack:6,defense:8,id:"13",cardText:"Entry: 2 damage to all enemies"},
	"Fire-Maw": {faction: "Fire",rank:"Commander",name:"Fire-Maw",count:0,cost:5,type:"Feral",attack:3,defense:3,id:"14",cardText:"Feral, Flash"},
	"Cerberus": {faction: "Fire",rank:"General",name:"Cerberus",count:0,cost:12,type:"Feral",attack:7,defense:8,id:"37",cardText:"Attack: Deal damage before receiving damage"},
	"Werezomb": {faction: "Fire",rank:"Officer",name:"Werezomb",count:0,cost:3,type:"Walker",attack:1,defense:1,id:"38",cardText:"Entry: Ally zombie gets Feral"},
	"BlaZter": {faction: "Fire",rank:"Minion",name:"BlaZter",count:0,cost:2,type:"Walker",attack:1,defense:1,id:"62",cardText:"Entry: 1 damage to an enemy zombie"},
	"Embryo #063": {faction: "Fire",rank:"Minion",name:"Embryo #063",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"63",cardText:"-1"},
	"Embryo #064": {faction: "Fire",rank:"Minion",name:"Embryo #064",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"64",cardText:"-1"},
	"Zlinger": {faction: "Fire",rank:"Officer",name:"Zlinger",count:0,cost:3,type:"Feral",attack:4,defense:4,id:"65",cardText:"Feral, Entry: 2 damage to your Overlord"},
	"Enrager": {faction: "Fire",rank:"Commander",name:"Enrager",count:0,cost:6,type:"Feral",attack:5,defense:4,id:"66",cardText:"Feral, Entry: If your overlord has 10 or less Def or less this gets +2 Atk"},
	"Zhampion": {faction: "Fire",rank:"Commander",name:"Zhampion",count:0,cost:5,type:"Feral",attack:5,defense:2,id:"67",cardText:"Feral, Entry: Summon two 1/1 enemy Pyromaz zombies"},
	"Sparky": {faction: "Fire",rank:"Minion",name:"Sparky",count:0,cost:1,type:"Feral",attack:2,defense:1,id:"105",cardText:"Feral, End: 1 damage to this"},
	"Embryo #106": {faction: "Fire",rank:"Minion",name:"Embryo #106",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"106",cardText:"-1"},
	"Firewall": {faction: "Fire",rank:"Minion",name:"Firewall",count:0,cost:2,type:"Heavy",attack:2,defense:1,id:"107",cardText:"Heavy"},
	"BurZt": {faction: "Fire",rank:"Minion",name:"BurZt",count:0,cost:3,type:"Feral",attack:4,defense:1,id:"108",cardText:"Feral, Entry: Cannot attack the enemy Overlord"},
	"Rager": {faction: "Fire",rank:"Officer",name:"Rager",count:0,cost:4,type:"Walker",attack:4,defense:4,id:"109",cardText:"Entry: If this is your only zombie in play, it gets Heavy"},
	"Alpha": {faction: "Fire",rank:"Officer",name:"Alpha",count:0,cost:5,type:"Walker",attack:3,defense:4,id:"110",cardText:"Entry: All other Ally zombies in play get Feral"},
	"Volcan": {faction: "Fire",rank:"Commander",name:"Volcan",count:0,cost:6,type:"Walker",attack:5,defense:5,id:"111",cardText:"Cannot Attack, End: 5 damage to a random enemy"},
	"Quazi": {faction: "Fire",rank:"Minion",name:"Quazi",count:0,cost:1,type:"Feral",attack:0,defense:1,id:"146",cardText:"Feral, Overflow 2, End: 2 damage to this and adjacent zombies"},
	"Modo": {faction: "Fire",rank:"Officer",name:"Modo",count:0,cost:3,type:"Feral",attack:2,defense:2,id:"147",cardText:"Feral, Overflow 5, End: 4 damage to this and adjacent zombies"},
	"Rockky": {faction: "Earth",rank:"Minion",name:"Rockky",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"5",cardText:"Attack: +1 damage to Air zombies"},
	"Golem": {faction: "Earth",rank:"Officer",name:"Golem",count:0,cost:5,type:"Heavy",attack:2,defense:6,id:"6",cardText:"Heavy"},
	"Bolderr": {faction: "Earth",rank:"Minion",name:"Bolderr",count:0,cost:3,type:"Walker",attack:1,defense:2,id:"7",cardText:"Entry: 1 damage to a zombie"},
	"Mountain": {faction: "Earth",rank:"General",name:"Mountain",count:0,cost:11,type:"Heavy",attack:6,defense:8,id:"8",cardText:"Heavy, Swing 4"},
	"Walley": {faction: "Earth",rank:"Officer",name:"Walley",count:0,cost:4,type:"Walker",attack:2,defense:2,id:"9",cardText:"Entry: Adjacent zombies get Heavy"},
	"Tiny": {faction: "Earth",rank:"Officer",name:"Tiny",count:0,cost:3,type:"Heavy",attack:0,defense:4,id:"35",cardText:"Heavy"},
	"Earthshaker": {faction: "Earth",rank:"Commander",name:"Earthshaker",count:0,cost:5,type:"Walker",attack:4,defense:4,id:"36",cardText:"Entry: Destroy a Heavy zombie"},
	"Embryo #056": {faction: "Earth",rank:"Minion",name:"Embryo #056",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"56",cardText:"-1"},
	"Embryo #057": {faction: "Earth",rank:"Minion",name:"Embryo #057",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"57",cardText:"-1"},
	"Embryo #058": {faction: "Earth",rank:"Minion",name:"Embryo #058",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"58",cardText:"-1"},
	"Spiker": {faction: "Earth",rank:"Officer",name:"Spiker",count:0,cost:3,type:"Heavy",attack:2,defense:3,id:"59",cardText:"Heavy, Attack: +1 damage to Heavy zombies"},
	"Defender": {faction: "Earth",rank:"Commander",name:"Defender",count:0,cost:8,type:"Walker",attack:4,defense:6,id:"60",cardText:"Entry: Give ally Earth zombies that cost 2 or less Heavy"},
	"IgneouZ": {faction: "Earth",rank:"Commander",name:"IgneouZ",count:0,cost:4,type:"Heavy",attack:3,defense:3,id:"61",cardText:"Heavy, Entry: If your Overlord has 10 Def or less, this gets +2 Def"},
	"Blocker": {faction: "Earth",rank:"Minion",name:"Blocker",count:0,cost:1,type:"Heavy",attack:0,defense:3,id:"98",cardText:"Heavy"},
	"Embryo #099": {faction: "Earth",rank:"Minion",name:"Embryo #099",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"99",cardText:"-1"},
	"Hardy": {faction: "Earth",rank:"Minion",name:"Hardy",count:0,cost:3,type:"Heavy",attack:3,defense:3,id:"100",cardText:"Heavy"},
	"Slab": {faction: "Earth",rank:"Minion",name:"Slab",count:0,cost:3,type:"Walker",attack:3,defense:4,id:"101",cardText:""},
	"Groundy": {faction: "Earth",rank:"Officer",name:"Groundy",count:0,cost:5,type:"Walker",attack:5,defense:5,id:"102",cardText:"Entry: If this is your only zombie in play, it gets Heavy"},
	"Pyrite": {faction: "Earth",rank:"Commander",name:"Pyrite",count:0,cost:5,type:"Heavy",attack:0,defense:8,id:"103",cardText:"Heavy, Delayed 2: This loses Heavy but gains +4 Atk"},
	"Gaea": {faction: "Earth",rank:"General",name:"Gaea",count:0,cost:11,type:"Walker",attack:4,defense:7,id:"104",cardText:"Entry: All ally Earth zombies in play get +1 Atk"},
	"Pit": {faction: "Earth",rank:"Minion",name:"Pit",count:0,cost:1,type:"Heavy",attack:0,defense:2,id:"144",cardText:"Heavy, Entry: Add a Tainted Goo to your hand"},
	"Crater": {faction: "Earth",rank:"Officer",name:"Crater",count:0,cost:3,type:"Heavy",attack:1,defense:4,id:"145",cardText:"Heavy, Entry: Add a Corruputed Goo to your hand"},
	"Whizpar": {faction: "Air",rank:"Minion",name:"Whizpar",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"1",cardText:"Attack: +1 damage to Water zombies"},
	"Pushhh": {faction: "Air",rank:"Officer",name:"Pushhh",count:0,cost:3,type:"Walker",attack:3,defense:3,id:"2",cardText:"Entry: Return a zombie to its owner’s hand"},
	"Ztormmcaller": {faction: "Air",rank:"Officer",name:"Ztormmcaller",count:0,cost:5,type:"Walker",attack:3,defense:3,id:"3",cardText:"Entry: 1 damage to a zombie, Swing 1"},
	"ZeuZ": {faction: "Air",rank:"General",name:"ZeuZ",count:0,cost:11,type:"Walker",attack:5,defense:6,id:"4",cardText:"Entry: 3 damage to all enemies"},
	"Bouncer": {faction: "Air",rank:"Officer",name:"Bouncer",count:0,cost:4,type:"Heavy",attack:2,defense:3,id:"32",cardText:"Heavy"},
	"Mind Flayer": {faction: "Air",rank:"General",name:"Mind Flayer",count:0,cost:7,type:"Walker",attack:5,defense:5,id:"33",cardText:"Entry: Take control of an enemy zombie"},
	"Wheezy": {faction: "Air",rank:"Minion",name:"Wheezy",count:0,cost:2,type:"Walker",attack:1,defense:2,id:"34",cardText:"Entry: A random card in your hand gets -1 cost"},
	"Soothsayer": {faction: "Air",rank:"Minion",name:"Soothsayer",count:0,cost:2,type:"Walker",attack:1,defense:1,id:"50",cardText:"Entry: Draw a card"},
	"Buffer": {faction: "Air",rank:"Minion",name:"Buffer",count:0,cost:2,type:"Walker",attack:1,defense:1,id:"51",cardText:"Death: Give an ally zombie +1 Atk"},
	"Embryo #052": {faction: "Air",rank:"Minion",name:"Embryo #052",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,id:"52",cardText:"-1"},
	"Dragger": {faction: "Air",rank:"Officer",name:"Dragger",count:0,cost:3,type:"Walker",attack:1,defense:2,id:"53",cardText:"Entry: Summon a zombie from your Hand that costs 2 or less"},
	"Zephyr": {faction: "Air",rank:"Officer",name:"Zephyr",count:0,cost:4,type:"Walker",attack:3,defense:3,id:"54",cardText:"Costs 1 less for each Air zombie you have in play"},
	"Zyclone": {faction: "Air",rank:"Officer",name:"Zyclone",count:0,cost:5,type:"Walker",attack:2,defense:3,id:"55",cardText:"Entry: Return all zombies that cost 3 or less to their owner’s hands"},
	"Breezee": {faction: "Air",rank:"Minion",name:"Breezee",count:0,cost:1,type:"Walker",attack:1,defense:1,id:"91",cardText:""},
	"Banshee": {faction: "Air",rank:"Minion",name:"Banshee",count:0,cost:2,type:"Feral",attack:2,defense:1,id:"92",cardText:"Feral"},
	"Zhocker": {faction: "Air",rank:"Minion",name:"Zhocker",count:0,cost:1,type:"Walker",attack:0,defense:2,id:"93",cardText:"Dealyed 1: +2 Attack"},
	"Ztorm Shield": {faction: "Air",rank:"Commander",name:"Ztorm Shield",count:0,cost:6,type:"Walker",attack:4,defense:4,id:"94",cardText:"Guard, Entry: Give adjacent zombies guard"},
	"Zquall": {faction: "Air",rank:"Commander",name:"Zquall",count:0,cost:6,type:"Walker",attack:4,defense:6,id:"95",cardText:"Entry: Put 2 Air zombies that cost 2 goo from your Hand to play."},
	"Draft": {faction: "Air",rank:"Commander",name:"Draft",count:0,cost:5,type:"Walker",attack:4,defense:5,id:"96",cardText:"Entry: Draw a card from enemy deck"},
	"MonZoon": {faction: "Air",rank:"Commander",name:"MonZoon",count:0,cost:9,type:"Walker",attack:6,defense:6,id:"97",cardText:"Costs 1 less for each Air zombie in your hand"},
	"Fumez": {faction: "Air",rank:"Minion",name:"Fumez",count:0,cost:2,type:"Walker",attack:1,defense:1,id:"142",cardText:"Entry: Add a Tainted Goo to your hand"},
	"Gaz": {faction: "Air",rank:"Officer",name:"Gaz",count:0,cost:4,type:"Walker",attack:2,defense:2,id:"143",cardText:"Guard, add a Corrupted Goo to your hand"}
};

let currentList = {};

let categoryList = [];
let currentDeck = {};
let loadedCards = false;
let currentPage = "";
const MAX_CARDS = 30;
const MAX_MINIONS = 4;
const MAX_OFFICERS = 2;
const MAX_ITEMS = 2;
const MAX_COMMANDERS = 2;
const MAX_GENERALS = 1;

let currentFilter = {
	faction: "",
	rank: "",
	name: "",
	minCost: -1,
	maxCost: -1,
	type: "",
	minAttack: -1,
	maxAttack: -1,
	minDefense: -1,
	maxDefense: -1,
	cardText: ""
};


let chartData = {
	labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
	datasets: [{
		label: "Goo Cost Graph",
		backgroundColor: [
			'rgba(200, 200, 255, 0.4)',
			'rgba(150, 150, 150, 0.4)',
			'rgba(100, 100, 255, 0.4)',
			'rgba(200, 200, 255, 0.4)',
			'rgba(150, 150, 150, 0.4)',
			'rgba(100, 100, 255, 0.4)',
			'rgba(200, 200, 255, 0.4)',
			'rgba(150, 150, 150, 0.4)',
			'rgba(100, 100, 255, 0.4)',
			'rgba(200, 200, 255, 0.4)',
			'rgba(150, 150, 150, 0.4)',
			'rgba(100, 100, 255, 0.4)',
			'rgba(200, 200, 255, 0.4)'
		],
		borderColor: [
			'rgba(200, 200, 255, 1)',
			'rgba(150, 150, 150, 1)',
			'rgba(100, 100, 255, 1)',
			'rgba(200, 200, 255, 1)',
			'rgba(150, 150, 150, 1)',
			'rgba(100, 100, 255, 1)',
			'rgba(200,2000, 255, 1)',
			'rgba(150, 150, 150, 1)',
			'rgba(100, 100, 255, 1)',
			'rgba(200, 200, 255, 1)',
			'rgba(150, 150, 150, 1)',
			'rgba(100, 100, 255, 1)',
			'rgba(200, 200, 255, 1)'
		],
		borderWidth: 1,
		data: [0,0,0,0,0,0,0,0,0,0,0,0],
	}]
};

function resetFilter()
{
	currentFilter = {
	faction: "",
	rank: "",
	name: "",
	minCost: -1,
	maxCost: -1,
	type: "",
	minAttack: -1,
	maxAttack: -1,
	minDefense: -1,
	maxDefense: -1,
	cardText: ""
	};
}


function testFilter(key, checkCount)
{
	let testCard = cardList[key];
	
	let faction = currentFilter["faction"].toLowerCase();
	let rank = currentFilter["rank"].toLowerCase();
	let name = currentFilter["name"].toLowerCase();
	let minCost = currentFilter["minCost"];
	let maxCost = currentFilter["maxCost"];
	let type = currentFilter["type"].toLowerCase();
	let minAttack = currentFilter["minAttack"];
	let maxAttack = currentFilter["maxAttack"];
	let minDefense = currentFilter["minDefense"];
	let maxDefense = currentFilter["maxDefense"];
	let cardText = currentFilter["cardText"].toLowerCase();
	
	if(checkCount)
	{
		if(currentList[key] <= 0)
			return false;
	}
	
	if(testCard.name.includes("Embryo"))
		return false;
	
	if (testCard.cost == -1)
		return false;
	
	if (faction != "")
	{
		if(testCard.faction.toLowerCase() != faction)
			return false;
	}
	if (rank != "")
	{
		if(testCard.rank.toLowerCase() != rank)
			return false;
	}
	if (name != "")
	{
		if(testCard.name.toLowerCase() != name)
			return false;
	}
	if (type != "")
	{
		if(testCard.type.toLowerCase() != type)
			return false;
	}
	
	if (minCost != -1)
	{
		if(testCard.cost < minCost)
			return false;
		else if (maxCost != -1)
		{
			if(testCard.cost > maxCost)
				return false;
		}
	}
	if (maxCost != -1)
	{
		if(testCard.cost > maxCost)
			return false;
	}
	
	if (minAttack != -1)
	{
		if(testCard.attack < minAttack)
			return false;
		else if (maxAttack != -1)
		{
			if(testCard.attack > maxAttack)
				return false;
		}
	}
	if (maxAttack != -1)
		{
			if(testCard.attack > maxAttack)
				return false;
		}	
	
	
	if (minDefense != -1)
	{
		if(testCard.defense < minDefense)
			return false;
		else if (maxDefense != -1)
		{
			if(testCard.defense > maxDefense)
				return false;
		}
	}
	if (maxDefense != -1)
	{
		if(testCard.defense > maxDefense)
			return false;
	}
	
	if (cardText != "")
	{
		if (!testCard.cardText.toLowerCase().includes(cardText))
			return false;
	}
	
	
	return true;
}

function evaluateFilter()
{
	let result = false;
	$.each( cardList, function(key,value){
		if (testFilter(key))
		{
			result = true;
			return;
		}
	});
	return result;
}

function formatId(toFormat)
{
	if(Number(toFormat) < 10)
	{
		toFormat = "00" + toFormat;
	}
	else if (Number(toFormat) < 100)
	{
		toFormat = "0" + toFormat;
	}
	
	return toFormat;
}

function loadCards()
{	
	let sortedArray = [];
	$("#cardList").empty();
	$("#cardList").scrollLeft();
	
	if (loadedCards && !$("#ownedCheckbox").is(":checked"))
	{
		$.each( currentList, function(key,value){
			if (testFilter(key, true))
			{
				sortedArray.push(key);
			}
		});
	}
	else
	{
		$.each( currentList, function(key,value){
			if (testFilter(key, false))
			{
				sortedArray.push(key);
			}
		});
	}
	
	sortedArray.sort(function (a,b){

		if ( cardList[a].cost < cardList[b].cost) return -1;
		if ( cardList[a].cost > cardList[b].cost) return 1;
		
		if (cardList[a].name < cardList[b].name) return -1;
		if (cardList[a].name > cardList[b].name) return 1;

	});
	
	
	sortedArray.forEach(function(key,index){
		
		let cardWrapper = $('<span class="card"/>');
		let cardImage = $('<img class="cardImage"/>');
		cardImage.attr('src', "https://loom.games/img/cards/" + formatId(cardList[key].id) + ".png");
		cardImage.click(function(){
				addToDeck(key, cardList[key]);
		});
				
		cardWrapper.append(cardImage);
		
		if(loadedCards)
		{
			let cardAmount = $('<h3 />', {
				text: currentList[key]
			});
			cardWrapper.append(cardAmount);
		}		
		
		
		$("#cardList").append(cardWrapper);
	});
}


function addToDeck(key, value)
{
	$("#error").text("");
	//Only add if there are less than 30 cards
	if (checkTotalCards(currentDeck) < MAX_CARDS)
	{
		
		if(currentDeck[key] !== undefined)
		{
			let toAdd = true;
			switch (value.rank)
			{
				case "Item":
					if(currentDeck[key] < MAX_ITEMS)
						currentDeck[key] += 1;
					else
						$("#error").text("You cannot have more than " + MAX_ITEMS + " of an " + value.rank + " in a deck");
					break;
				case "Minion":
					if(currentDeck[key] < MAX_MINIONS)
						currentDeck[key] += 1;
					else
						$("#error").text("You cannot have more than " + MAX_MINIONS + " of a " + value.rank + " in a deck");
					break;
				case "General":
					if(currentDeck[key] < MAX_GENERALS)
						currentDeck[key] += 1;
					else
						$("#error").text("You cannot have more than " + MAX_GENERALS + " of a " + value.rank + " in a deck");
					break;
				case "Commander":
					if(currentDeck[key] < MAX_COMMANDERS)
						currentDeck[key] += 1;
					else
						$("#error").text("You cannot have more than " + MAX_COMMANDERS + " of a " + value.rank + " in a deck");
					break;
				case "Officer":
					if(currentDeck[key] < MAX_OFFICERS)
						currentDeck[key] += 1;
					else
						$("#error").text("You cannot have more than " + MAX_OFFICERS + " of an " + value.rank + " in a deck");
					break;
				default:
					console.log("Error: " + value.rank);
			}
		}
		else
		{
			//add card to deck
			currentDeck[key] = 1;
		}
		
		populateDeck();
	}
	else
	{
		$("#error").text("You can only have 30 cards in your deck!");
	}
}

function checkTotalCards(list)
{
	let size = 0;
	$.each( list, function(key,value){
		size += value;
	});
	
	return size;
}

function removeFromDeck(key)
{
	if(currentDeck[key] == 1)
	{
		//remove from deck
		delete currentDeck[key];
	}
	else
	{
		//decrement counter by 1
		currentDeck[key] -= 1;
	}
	populateDeck();
}

function emptyDeck()
{
	currentDeck = {};
	populateDeck();
}

function populateCategories()
{
	categoryList = ["Fire","Water","Air","Earth","Life","Toxic","Item","Empty"];
	
	$.each ( categoryList, function(index,value){
		let buttonTest = $('<img/>',{
				//text: toTest,
				src: "images/" + value.toLowerCase() + ".png",
				click: function(){
					if(value == "Empty")
						currentFilter["faction"] = '';
					else
						currentFilter["faction"] = value.toLowerCase();
					loadCards();
					}
			});

			$("#filter").append(buttonTest);
	});
}


function populateDeck()
{
	$("#deck").empty();
	
	let sortedArray = [];	
	$.each( currentDeck, function(key,value){
		sortedArray.push(key);
	});
	
	sortedArray.sort(function (a,b){

		if ( cardList[a].cost < cardList[b].cost) return -1;
		if ( cardList[a].cost > cardList[b].cost) return 1;
		
		if (cardList[a].name < cardList[b].name) return -1;
		if (cardList[a].name > cardList[b].name) return 1;

	});
	
	sortedArray.forEach(function(key,index){
		let cardWrapper = $('<span class="card"/>');
		let cardImage = $('<img class="cardImage"/>');
		cardImage.attr('src', "https://loom.games/img/cards/" + formatId(cardList[key].id) + ".png");
		cardImage.click(function(){
				removeFromDeck(key);
		});
		
		let cardAmount = '';
		
		if (loadedCards)
		{
			cardAmount = $('<h3 />', {
				text: currentDeck[key] + " (" + (Number(currentList[key]) - Number(currentDeck[key])) + ")"
			});
		}
		else
		{
			cardAmount = $('<h3 />', {
				text: currentDeck[key]
			});
		}

		cardWrapper.append(cardImage);
		cardWrapper.append(cardAmount);
			
		$("#deck").append(cardWrapper);
	});
	
	updateCardAmount();
	updateDeckURL();
	updateGraph();
	
}

function getParams(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	}
	return params;
};

function updateCardAmount()
{
	$("#cardCount").text("Deck Size: " + checkTotalCards(currentDeck) + "/" + MAX_CARDS);
	
	let minionCount = 0;
	let officerCount = 0;
	let commanderCount = 0;
	let generalCount = 0;
	let itemCount = 0;
	
	$.each( currentDeck, function(key,value){
		switch (cardList[key].rank)
		{
			case "Item":
				itemCount+= value;
				break;
			case "Minion":
				minionCount+= value;
				break;
			case "General":
				generalCount+= value;
				break;
			case "Commander":
				commanderCount+= value;
				break;
			case "Officer":
				officerCount+= value;
				break;
			default:
				console.log("Error: ");
		}
	});
	
	$("#minionCount").text("Minions: " + minionCount);
	$("#officerCount").text("Officers: " + officerCount);
	$("#commanderCount").text("Commanders: " + commanderCount);
	$("#generalCount").text("Generals: " + generalCount);
	$("#itemCount").text("Items: " + itemCount);
	
	
}

function updateDeckURL()
{
	let url = window.location.href.split('?')[0] + "?page=" + currentPage + "&";
	$.each( currentDeck, function(key,value){
		url += key + "=" + value + "&";
	});
	url = url.slice(0, -1);
	
	url = encodeURI(url);
	
	$("#deckURL").val(url);
}

function updateGraph()
{
	let graphData = [0,0,0,0,0,0,0,0,0,0,0,0];
	$.each( currentDeck, function(key,value){
		graphData[(cardList[key].cost)] += value;
	});
	
	chartData.datasets[0].data = graphData;
	window.chart.update();
}

function copyText()
{
	let textToCopy="";
	if(currentPage === "assembly")
		textToCopy = $("#deckURL");
	else if (currentPage === "wishlist")
		textToCopy = $("#wishlistURL");
	textToCopy.select();
	document.execCommand("copy");	
}

function updateSearch()
{
	let params = "";
	if(currentPage === "assembly")
		params = $("#searchParams").val();
	else
		params = $("#filterParams").val();
	
	let previousFilter = currentFilter;
	resetFilter();
	
	var vars = params.split(',');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split(':');
		
		if(pair.length > 1)
		{
			let value1 = pair[0].toLowerCase().trim();
			let value2 = pair[1].toLowerCase().trim();
			
			switch(value1)
			{
				case "attack":
					if(value2.includes('-'))
					{
						let splitValues = value2.split('-');
						if (splitValues[1] == '')
						{
							currentFilter["maxAttack"] = Number(splitValues[0]);
						}
						else
						{	
							currentFilter["minAttack"] = Number(splitValues[0]);
							currentFilter["maxAttack"] = Number(splitValues[1]);
						}
					}
					else if (value2.includes('+'))
					{
						let splitValues = value2.split('+');
						currentFilter["minAttack"] = Number(splitValues[0]);
					}
					else
					{
						currentFilter["minAttack"] = Number(value2);
						currentFilter["maxAttack"] = Number(value2);
					}
					break;
				case "defense":
					if(value2.includes('-'))
					{
						let splitValues = value2.split('-');
						if (splitValues[1] == '')
						{
							currentFilter["maxDefense"] = Number(splitValues[0]);
						}
						else
						{
							currentFilter["minDefense"] = Number(splitValues[0]);
							currentFilter["maxDefense"] = Number(splitValues[1]);
						}
					}
					else if (value2.includes('+'))
					{
						let splitValues = value2.split('+');
						currentFilter["minDefense"] = Number(splitValues[0]);
					}
					else
					{
						currentFilter["minDefense"] = Number(value2);
						currentFilter["maxDefense"] = Number(value2);
					}
					break;
				case "goo":
					if(value2.includes('-'))
					{
						let splitValues = value2.split('-');
						if (splitValues[1] == '')
						{
							currentFilter["maxCost"] = Number(splitValues[0]);
						}
						else
						{
							currentFilter["minCost"] = Number(splitValues[0]);
							currentFilter["maxCost"] = Number(splitValues[1]);
						}
					}
					else if (value2.includes('+'))
					{
						let splitValues = value2.split('+');
						currentFilter["minCost"] = Number(splitValues[0]);
					}
					else
					{
						currentFilter["minCost"] = Number(value2);
						currentFilter["maxCost"] = Number(value2);
					}
					break;
				case "faction":
					currentFilter["faction"] = value2;
					break;
				case "rank":
					currentFilter["rank"] = value2;
					break;
				case "name":
					currentFilter["name"] = value2;
					break;
				case "type":
					currentFilter["type"] = value2;
					break;
				case "ability":
					currentFilter["cardText"] = value2;
					break;
			}
		}
	}
	
	if(evaluateFilter() == false)
	{
		currentFilter = previousFilter;
	}
	
	if($("#wishlist").css("display") != "none")
	{
		loadWishlistCards();
	}
	if($("#assembly").css("display") != "none")
	{
		loadCards();
	}
	
}


function clearSearch()
{
	$("#searchParams").val('');
	resetFilter();
	loadCards();
}

function loadOwnedCards()
{	
	if(Object.keys(ownedCards).length > 0)
	{
		currentList = ownedCards;
		loadedCards = true;
	}
	loadCards();
	populateDeck();
}

function clearOwnedCards()
{
	currentList = {};
	$.each(cardList, function(key,value){
		currentList[key] = value.count;
	});
	loadedCards = false;
	loadCards();
	populateDeck();
}

function loadAssembly()
{
	if($("#assembly").css("display") == "none")
	{
		$("#scraper").slideUp('slow');
		$("#assembly").slideDown('slow');
		$("#wishlist").slideUp('slow');
	}
	
	$(".linkWrapper").removeClass("active");
	$("#assemblyWrapper").addClass("active");
	
	$("#searchParams").val($("#filterParams").val());
	currentPage = "assembly";
	loadCards();
}

function loadScraper()
{
	if($("#scraper").css("display") == "none")
	{
		$("#scraper").slideDown('slow');
		$("#assembly").slideUp('slow');
		$("#wishlist").slideUp('slow');
	}
	$(".linkWrapper").removeClass("active");
	$("#scraperWrapper").addClass("active");
	currentPage = "scraper";
}

function loadWishlist()
{
	if($("#wishlist").css("display") == "none")
	{
		$("#scraper").slideUp('slow');
		$("#assembly").slideUp('slow');
		$("#wishlist").slideToggle('slow');
	}
	$(".linkWrapper").removeClass("active");
	$("#wishlistWrapper").addClass("active");
	
	$("#filterParams").val($("#searchParams").val());
	currentPage = "wishlist";
	loadWishlistCards();
}

function toWishlist()
{
	
	$.each(currentDeck, function(key,value){
		
		if (loadedCards)
		{
			if((value - ownedCards[key]) > 0)
				wishlist[key] = value - ownedCards[key];
		}
		else
		{
			wishlist[key] = value;
		}
	});
	
	populateWishlist();
	loadWishlist();
}

$(document).ready(function(){
	
	$.each(cardList, function(key,value){
		currentList[key] = value.count;
	});
	
	currentPage = "assembly";
	
    loadCards();
	populateCategories();
	populateWishlistCategories();
	
	var ctx = $('#myChart')[0].getContext('2d');
	window.chart = new Chart(ctx, {
		type: "bar",
		data: chartData,
		options: {
			responsive: false,
			maintainAspectRatio: false,
			scales: {
				yAxes: [{
					ticks: {
						min: 0,
						suggestedMax: 10,
						stepSize: 1
					},
					gridLines: {
						color: "rgba(100, 100, 100, 1)"
					}
				}],
				xAxes: [{
					gridLines: {
						color: "rgba(100, 100, 100, 1)"
					}
				}]
			}
		}
	});
	
	updateCardAmount();
	
	let loadedDeck = getParams(window.location.href);
	
	if (!Object.keys(loadedDeck)[0] == "")
	{
		//key 1 is whether this is deck or wishlist
		let toPage = loadedDeck.page;
		
		if (toPage === "assembly")
		{
			delete loadedDeck.page;
			//Convert string values into numbers
			$.each( loadedDeck, function(key,value)
			{
				loadedDeck[key] = Number(value);
			});
			currentDeck = loadedDeck;
			populateDeck();
		}
		else if (toPage === "wishlist")
		{
			delete loadedDeck.page;
			
			$.each( loadedDeck, function(key,value)
			{
				loadedDeck[key] = Number(value);
			});
			wishlist = loadedDeck;
			currentPage = "wishlist";
			populateWishlist();
			loadWishlist();
		}
		
		
		
	}
	
	$(".searchText").change(function(){
		updateSearch();
	});
	
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 10) {
		 $('#header').addClass('changeColor');
	  }
	  if ($(this).scrollTop() < 10) {
		 $('#header').removeClass('changeColor');
	  }
	});
	
	$("#ownedCheckbox").change(function() {
		loadCards();
		populateDeck();
	});
	
});
