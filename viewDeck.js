const cardList = {
	"28": {faction: "Water",rank:"Minion",name:"Izze",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:"Attack: Freeze Target"},
	"29": {faction: "Water",rank:"Officer",name:"Jetter",count:0,cost:4,type:"Walker",attack:3,defense:3,cardText:"Entry: 1 damage to a zombie"},
	"30": {faction: "Water",rank:"Officer",name:"Freezzee",count:0,cost:5,type:"Walker",attack:3,defense:3,cardText:"Entry: Freeze zombie and adjacent zombies, 2 damage If frozen"},
	"31": {faction: "Water",rank:"General",name:"Tzunamy",count:0,cost:11,type:"Walker",attack:6,defense:6,cardText:"Entry: 2 damage to all enemies, then freeze them"},
	"48": {faction: "Water",rank:"Minion",name:"Zhatterer",count:0,cost:5,type:"Walker",attack:2,defense:4,cardText:"Entry: Destroy a frozen zombie"},
	"49": {faction: "Water",rank:"Minion",name:"Znowman",count:0,cost:3,type:"Heavy",attack:0,defense:3,cardText:"Heavy, enemies that attack this become frozen"},
	"86": {faction: "Water",rank:"Minion",name:"Embryo #086",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"87": {faction: "Water",rank:"Minion",name:"Embryo #087",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"88": {faction: "Water",rank:"Minion",name:"Embryo #088",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"89": {faction: "Water",rank:"Commander",name:"Zub-Zero",count:0,cost:7,type:"Walker",attack:4,defense:5,cardText:"Entry: 3 Damage to a Zombie, if it survives Freeze it"},
	"90": {faction: "Water",rank:"Commander",name:"Blizzard",count:0,cost:6,type:"Walker",attack:3,defense:4,cardText:"Entry: Freeze all enemy zombies"},
	"133": {faction: "Water",rank:"Minion",name:"Embryo #133",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"134": {faction: "Water",rank:"Minion",name:"Embryo #134",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"135": {faction: "Water",rank:"General",name:"Vortex",count:0,cost:11,type:"Walker",attack:6,defense:7,cardText:"Entry: replace ally water zombies in play with stronger ones"},
	"136": {faction: "Water",rank:"Officer",name:"Embryo #136",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"137": {faction: "Water",rank:"Commander",name:"Zplash",count:0,cost:6,type:"Walker",attack:4,defense:4,cardText:"Entry: 1 damage to random enemy for each water zombie in your hand "},
	"138": {faction: "Water",rank:"Officer",name:"Embryo #138",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"139": {faction: "Water",rank:"Commander",name:"Froztbite",count:0,cost:4,type:"Walker",attack:0,defense:6,cardText:"Delayed 1: +6 Atk"},
	"140": {faction: "Water",rank:"Commander",name:"Zpring",count:0,cost:5,type:"Walker",attack:3,defense:4,cardText:"As long as this is in play you have 1 extra goo"},
	"141": {faction: "Water",rank:"Commander",name:"Maelstrom",count:0,cost:8,type:"Walker",attack:5,defense:5,cardText:"Entry: Return all other zombies to their owners' Hands"},
	"152": {faction: "Water",rank:"Minion",name:"Ozmoziz",count:0,cost:2,type:"Walker",attack:1,defense:2,cardText:"Entry: Freeze a random ally, add Tainted Goo to your hand"},
	"153": {faction: "Water",rank:"Officer",name:"Geyzer",count:0,cost:4,type:"Walker",attack:2,defense:3,cardText:"Entry: Freeze 2 random allies, add Corrupted Goo to your hand"},
	"24": {faction: "Toxic",rank:"Minion",name:"Poizom",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:"Attack: +1 damage to Earth zombies"},
	"25": {faction: "Toxic",rank:"Officer",name:"Ghoul",count:0,cost:2,type:"Walker",attack:3,defense:2,cardText:"Attack: -1 Attack"},
	"26": {faction: "Toxic",rank:"Minion",name:"Embryo #026",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"27": {faction: "Toxic",rank:"General",name:"Cherno-bill",count:0,cost:11,type:"Heavy",attack:7,defense:9,cardText:"Heavy, Death: 3 damage to all zombies"},
	"46": {faction: "Toxic",rank:"Minion",name:"Zpitter",count:0,cost:3,type:"Walker",attack:2,defense:2,cardText:"Entry: 1 damage to a random enemy"},
	"47": {faction: "Toxic",rank:"Officer",name:"Zeeter",count:0,cost:5,type:"Embryo",attack:1,defense:1,cardText:"Entry: Devour an ally zombie, get its Atk and Def"},
	"79": {faction: "Toxic",rank:"Minion",name:"Embryo #079",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"80": {faction: "Toxic",rank:"Minion",name:"Embryo #080",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"81": {faction: "Toxic",rank:"Minion",name:"Embryo #081",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"82": {faction: "Toxic",rank:"Officer",name:"Azzazzin",count:0,cost:3,type:"Feral",attack:5,defense:1,cardText:"Blitz"},
	"83": {faction: "Toxic",rank:"Officer",name:"RelentleZZ",count:0,cost:3,type:"Walker",attack:3,defense:6,cardText:"Entry: 2 damage to this zombie"},
	"84": {faction: "Toxic",rank:"Officer",name:"Polluter",count:0,cost:4,type:"Walker",attack:3,defense:3,cardText:"Death: Gain 1 goo"},
	"85": {faction: "Toxic",rank:"Commander",name:"Zludge",count:0,cost:5,type:"Walker",attack:4,defense:4,cardText:"Rage: +2 attack"},
	"126": {faction: "Toxic",rank:"Minion",name:"Germ",count:0,cost:1,type:"Walker",attack:2,defense:1,cardText:""},
	"127": {faction: "Toxic",rank:"Minion",name:"Ectoplasm",count:0,cost:1,type:"Walker",attack:2,defense:2,cardText:"Entry: Lose 1 goo"},
	"128": {faction: "Toxic",rank:"Minion",name:"Wazte",count:0,cost:2,type:"Heavy",attack:3,defense:3,cardText:"Heavy, Entry: Lose 1 goo bottle"},
	"129": {faction: "Toxic",rank:"Commander",name:"Zlopper",count:0,cost:7,type:"Walker",attack:3,defense:5,cardText:" +1 attack to all ally Toxic zombies"},
	"130": {faction: "Toxic",rank:"Commander",name:"Boomer",count:0,cost:9,type:"Walker",attack:6,defense:6,cardText:"Death: Adjacent zombies get +2 Atk"},
	"131": {faction: "Toxic",rank:"Commander",name:"Zteroid",count:0,cost:6,type:"Walker",attack:5,defense:4,cardText:"Death: All ally zombies get +2 Atk until end of turn"},
	"132": {faction: "Toxic",rank:"General",name:"GooZilla",count:0,cost:8,type:"Walker",attack:1,defense:1,cardText:"Entry: Return 4 Goo, and use all your goo for 2x Atk/Def"},
	"150": {faction: "Toxic",rank:"Minion",name:"Zeptic",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:"Overflow 2, deal 2 damage to your Overlord"},
	"151": {faction: "Toxic",rank:"Officer",name:"Hazzard",count:0,cost:5,type:"Walker",attack:4,defense:4,cardText:"Overflow 7, deal 4 damage to your Overlord"},
	"19": {faction: "Life",rank:"Minion",name:"Azuraz",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:"Attack: +1 damage to Life zombies"},
	"20": {faction: "Life",rank:"Officer",name:"Shroom",count:0,cost:4,type:"Walker",attack:4,defense:2,cardText:"Entry: 2 damage to a zombie"},
	"21": {faction: "Life",rank:"Officer",name:"Vindrom",count:0,cost:4,type:"Walker",attack:2,defense:3,cardText:"Attack: Freeze zombie"},
	"22": {faction: "Life",rank:"General",name:"Shammann",count:0,cost:11,type:"Walker",attack:5,defense:6,cardText:"Turn: Summon two 1/1 zombie minions"},
	"23": {faction: "Life",rank:"Officer",name:"Puffer",count:0,cost:3,type:"Walker",attack:2,defense:2,cardText:"Entry: +1 attack to all Life Zombies in play"},
	"42": {faction: "Life",rank:"General",name:"Z-Virus",count:0,cost:11,type:"Walker",attack:0,defense:0,cardText:"Devour all ally zombies, gain their Atk and Def"},
	"43": {faction: "Life",rank:"General",name:"Yggdrazil",count:0,cost:11,type:"Walker",attack:4,defense:5,cardText:"Entry: Reanimate all Life zombies that died this match"},
	"44": {faction: "Life",rank:"Officer",name:"Sapper",count:0,cost:5,type:"Walker",attack:1,defense:4,cardText:"Attack: Restore 1 Def for each damage this deals"},
	"45": {faction: "Life",rank:"Officer",name:"Keeper",count:0,cost:3,type:"Walker",attack:1,defense:3,cardText:"Entry: Summon a 1/1 Feral zombie minion"},
	"73": {faction: "Life",rank:"Minion",name:"Embryo #073",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"74": {faction: "Life",rank:"Minion",name:"Embryo #074",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"75": {faction: "Life",rank:"Minion",name:"Bloomer",count:0,cost:2,type:"Walker",attack:1,defense:1,cardText:"Entry: Draw a card if you have a Life zombie in play"},
	"76": {faction: "Life",rank:"Officer",name:"EverlaZting",count:0,cost:4,type:"Walker",attack:2,defense:3,cardText:"Death: Shuffle this card into your deck"},
	"77": {faction: "Life",rank:"Officer",name:"Healz",count:0,cost:4,type:"Walker",attack:2,defense:3,cardText:"Entry: Overlord +3 Def. If Overlord 10 Def or less, Overlord +5 Def"},
	"78": {faction: "Life",rank:"Commander",name:"Rainz",count:0,cost:6,type:"Walker",attack:3,defense:4,cardText:"Entry: Restore 10 Def randomly split among allies"},
	"120": {faction: "Life",rank:"Minion",name:"Embryo #120",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"121": {faction: "Life",rank:"Commander",name:"Zplitter",count:0,cost:7,type:"Walker",attack:3,defense:4,cardText:"Entry: Place another copy of this minion in play"},
	"122": {faction: "Life",rank:"Minion",name:"Embryo #122",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"123": {faction: "Life",rank:"Minion",name:"Embryo #123",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"124": {faction: "Life",rank:"Commander",name:"Zeeder",count:0,cost:5,type:"Walker",attack:2,defense:5,cardText:"End: Summon a 0/2 zombie with Heavy"},
	"125": {faction: "Life",rank:"Commander",name:"Blight",count:0,cost:6,type:"Walker",attack:0,defense:6,cardText:"Delayed 3: Place two 4/4 copies of this zombie in play then Destroy this"},
	"148": {faction: "Life",rank:"Minion",name:"Zap",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:"Overflow 3: Summon a 1/1 enemy zombie minion"},
	"149": {faction: "Life",rank:"Officer",name:"Cactuz",count:0,cost:4,type:"Walker",attack:2,defense:3,cardText:"Overflow 6, Entry: Summon two 1/1 enemy zombie minions"},
	"15": {faction: "Item",rank:"Item",name:"Stapler",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"Restore 4 Def to a zombie"},
	"16": {faction: "Item",rank:"Item",name:"Nail Bomb",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"4 damage to a zombie, Swing 4"},
	"17": {faction: "Item",rank:"Item",name:"Goo Bottles",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"Get 2 empty goo vials"},
	"18": {faction: "Item",rank:"Item",name:"Chainsaw",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"+4 Atk to a zombie; End: 4 damage to this zombie"},
	"39": {faction: "Item",rank:"Item",name:"Molotov",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"3 damage to a zombie, Swing 3"},
	"40": {faction: "Item",rank:"Item",name:"Bat",count:0,cost:3,type:"Item",attack:0,defense:0,cardText:"2 damage to a zombie and Distract it"},
	"41": {faction: "Item",rank:"Item",name:"Super Serum",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"Give an ally zombie +3/+3"},
	"68": {faction: "Item",rank:"Item",name:"Whistle",count:0,cost:0,type:"Item",attack:0,defense:0,cardText:"Draw a card"},
	"69": {faction: "Item",rank:"Item",name:"Supply Drop",count:0,cost:3,type:"Item",attack:0,defense:0,cardText:"Each player puts a random zombie from their deck to play"},
	"70": {faction: "Item",rank:"Item",name:"Goo Beaker",count:0,cost:2,type:"Item",attack:0,defense:0,cardText:"Get 1 empty goo vial"},
	"71": {faction: "Item",rank:"Item",name:"Junk Spear",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"Damage enemy Overlord equal to the number of items played this game"},
	"72": {faction: "Item",rank:"Item",name:"Item #072",count:0,cost:-1,type:"Item",attack:0,defense:0,cardText:"-1"},
	"112": {faction: "Item",rank:"Item",name:"Item #112",count:0,cost:-1,type:"Item",attack:0,defense:0,cardText:"-1"},
	"113": {faction: "Item",rank:"Item",name:"Extinguisher",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"Entry: Freeze all enemy zombies"},
	"114": {faction: "Item",rank:"Item",name:"Lawnmower",count:0,cost:6,type:"Item",attack:0,defense:0,cardText:"Entry: 2 damage to all enemy zombies"},
	"115": {faction: "Item",rank:"Item",name:"Shovel",count:0,cost:3,type:"Item",attack:0,defense:0,cardText:"4 damage to an enemy OR restore 5 Def to an ally"},
	"116": {faction: "Item",rank:"Item",name:"Shopping Cart",count:0,cost:6,type:"Item",attack:0,defense:0,cardText:"Entry: All ally zombies get Swing"},
	"117": {faction: "Item",rank:"Item",name:"Fresh Meat",count:0,cost:5,type:"Item",attack:0,defense:0,cardText:"Entry: All enemy zombies get -3 Atk until end of turn"},
	"118": {faction: "Item",rank:"Item",name:"Item #118",count:0,cost:-1,type:"Item",attack:0,defense:0,cardText:"-1"},
	"119": {faction: "Item",rank:"Item",name:"Item #119",count:0,cost:-1,type:"Item",attack:0,defense:0,cardText:"-1"},
	"154": {faction: "Item",rank:"Item",name:"Boomstick",count:0,cost:2,type:"Item",attack:0,defense:0,cardText:"2 damage to 3 random zombies in play"},
	"155": {faction: "Item",rank:"Item",name:"Tainted Goo",count:0,cost:2,type:"Item",attack:0,defense:0,cardText:"Overflow 3, disables 1 goo vial for next turn"},
	"156": {faction: "Item",rank:"Item",name:"Corrupted Goo",count:0,cost:4,type:"Item",attack:0,defense:0,cardText:"Overflow 6, disables 2 goo vials for next turn"},
	"10": {faction: "Fire",rank:"Minion",name:"Pyromaz",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:"Attack: +1 damage to Life zombies"},
	"11": {faction: "Fire",rank:"Officer",name:"Burrrnn",count:0,cost:3,type:"Feral",attack:2,defense:2,cardText:"Feral"},
	"12": {faction: "Fire",rank:"Officer",name:"Cynderman",count:0,cost:4,type:"Walker",attack:2,defense:3,cardText:"Entry: 2 damage to a zombie"},
	"13": {faction: "Fire",rank:"General",name:"Gargantua",count:0,cost:11,type:"Heavy",attack:6,defense:8,cardText:"Entry: 2 damage to all enemies"},
	"14": {faction: "Fire",rank:"Commander",name:"Fire-Maw",count:0,cost:5,type:"Feral",attack:3,defense:3,cardText:"Feral, Flash"},
	"37": {faction: "Fire",rank:"General",name:"Cerberus",count:0,cost:12,type:"Feral",attack:7,defense:8,cardText:"Attack: Deal damage before receiving damage"},
	"38": {faction: "Fire",rank:"Officer",name:"Werezomb",count:0,cost:3,type:"Walker",attack:1,defense:1,cardText:"Entry: Ally zombie gets Feral"},
	"62": {faction: "Fire",rank:"Minion",name:"BlaZter",count:0,cost:2,type:"Walker",attack:1,defense:1,cardText:"Entry: 1 damage to an enemy zombie"},
	"63": {faction: "Fire",rank:"Minion",name:"Embryo #063",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"64": {faction: "Fire",rank:"Minion",name:"Embryo #064",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"65": {faction: "Fire",rank:"Officer",name:"Zlinger",count:0,cost:3,type:"Feral",attack:4,defense:4,cardText:"Feral, Entry: 2 damage to your Overlord"},
	"66": {faction: "Fire",rank:"Commander",name:"Enrager",count:0,cost:6,type:"Feral",attack:5,defense:4,cardText:"Feral, Entry: If your overlord has 10 or less Def or less this gets +2 Atk"},
	"67": {faction: "Fire",rank:"Commander",name:"Zhampion",count:0,cost:5,type:"Feral",attack:5,defense:2,cardText:"Feral, Entry: Summon two 1/1 enemy Pyromaz zombies"},
	"105": {faction: "Fire",rank:"Minion",name:"Sparky",count:0,cost:1,type:"Feral",attack:2,defense:1,cardText:"Feral, End: 1 damage to this"},
	"106": {faction: "Fire",rank:"Minion",name:"Embryo #106",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"107": {faction: "Fire",rank:"Minion",name:"Firewall",count:0,cost:2,type:"Heavy",attack:2,defense:1,cardText:"Heavy"},
	"108": {faction: "Fire",rank:"Minion",name:"BurZt",count:0,cost:3,type:"Feral",attack:4,defense:1,cardText:"Feral, Entry: Cannot attack the enemy Overlord"},
	"109": {faction: "Fire",rank:"Officer",name:"Rager",count:0,cost:4,type:"Walker",attack:4,defense:4,cardText:"Entry: If this is your only zombie in play, it gets Heavy"},
	"110": {faction: "Fire",rank:"Officer",name:"Alpha",count:0,cost:5,type:"Walker",attack:3,defense:4,cardText:"Entry: All other Ally zombies in play get Feral"},
	"111": {faction: "Fire",rank:"Commander",name:"Volcan",count:0,cost:6,type:"Walker",attack:5,defense:5,cardText:"Cannot Attack, End: 5 damage to a random enemy"},
	"146": {faction: "Fire",rank:"Minion",name:"Quazi",count:0,cost:1,type:"Feral",attack:0,defense:1,cardText:"Feral, Overflow 2, End: 2 damage to this and adjacent zombies"},
	"147": {faction: "Fire",rank:"Officer",name:"Modo",count:0,cost:3,type:"Feral",attack:2,defense:2,cardText:"Feral, Overflow 5, End: 4 damage to this and adjacent zombies"},
	"5": {faction: "Earth",rank:"Minion",name:"Rockky",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:"Attack: +1 damage to Air zombies"},
	"6": {faction: "Earth",rank:"Officer",name:"Golem",count:0,cost:5,type:"Heavy",attack:2,defense:6,cardText:"Heavy"},
	"7": {faction: "Earth",rank:"Minion",name:"Bolderr",count:0,cost:3,type:"Walker",attack:1,defense:2,cardText:"Entry: 1 damage to a zombie"},
	"8": {faction: "Earth",rank:"General",name:"Mountain",count:0,cost:11,type:"Heavy",attack:6,defense:8,cardText:"Heavy, Swing 4"},
	"9": {faction: "Earth",rank:"Officer",name:"Walley",count:0,cost:4,type:"Walker",attack:2,defense:2,cardText:"Entry: Adjacent zombies get Heavy"},
	"35": {faction: "Earth",rank:"Officer",name:"Tiny",count:0,cost:3,type:"Heavy",attack:0,defense:4,cardText:"Heavy"},
	"36": {faction: "Earth",rank:"Commander",name:"Earthshaker",count:0,cost:5,type:"Walker",attack:4,defense:4,cardText:"Entry: Destroy a Heavy zombie"},
	"56": {faction: "Earth",rank:"Minion",name:"Embryo #056",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"57": {faction: "Earth",rank:"Minion",name:"Embryo #057",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"58": {faction: "Earth",rank:"Minion",name:"Embryo #058",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"59": {faction: "Earth",rank:"Officer",name:"Spiker",count:0,cost:3,type:"Heavy",attack:2,defense:3,cardText:"Heavy, Attack: +1 damage to Heavy zombies"},
	"60": {faction: "Earth",rank:"Commander",name:"Defender",count:0,cost:8,type:"Walker",attack:4,defense:6,cardText:"Entry: Give ally Earth zombies that cost 2 or less Heavy"},
	"61": {faction: "Earth",rank:"Commander",name:"IgneouZ",count:0,cost:4,type:"Heavy",attack:3,defense:3,cardText:"Heavy, Entry: If your Overlord has 10 Def or less, this gets +2 Def"},
	"98": {faction: "Earth",rank:"Minion",name:"Blocker",count:0,cost:1,type:"Heavy",attack:0,defense:3,cardText:"Heavy"},
	"99": {faction: "Earth",rank:"Minion",name:"Embryo #099",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"100": {faction: "Earth",rank:"Minion",name:"Hardy",count:0,cost:3,type:"Heavy",attack:3,defense:3,cardText:"Heavy"},
	"101": {faction: "Earth",rank:"Minion",name:"Slab",count:0,cost:3,type:"Walker",attack:3,defense:4,cardText:""},
	"102": {faction: "Earth",rank:"Officer",name:"Groundy",count:0,cost:5,type:"Walker",attack:5,defense:5,cardText:"Entry: If this is your only zombie in play, it gets Heavy"},
	"103": {faction: "Earth",rank:"Commander",name:"Pyrite",count:0,cost:5,type:"Heavy",attack:0,defense:8,cardText:"Heavy, Delayed 2: This loses Heavy but gains +4 Atk"},
	"104": {faction: "Earth",rank:"General",name:"Gaea",count:0,cost:11,type:"Walker",attack:4,defense:7,cardText:"Entry: All ally Earth zombies in play get +1 Atk"},
	"144": {faction: "Earth",rank:"Minion",name:"Pit",count:0,cost:1,type:"Heavy",attack:0,defense:2,cardText:"Heavy, Entry: Add a Tainted Goo to your hand"},
	"145": {faction: "Earth",rank:"Officer",name:"Crater",count:0,cost:3,type:"Heavy",attack:1,defense:4,cardText:"Heavy, Entry: Add a Corruputed Goo to your hand"},
	"1": {faction: "Air",rank:"Minion",name:"Whizpar",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:"Attack: +1 damage to Water zombies"},
	"2": {faction: "Air",rank:"Officer",name:"Pushhh",count:0,cost:3,type:"Walker",attack:3,defense:3,cardText:"Entry: Return a zombie to its owner’s hand"},
	"3": {faction: "Air",rank:"Officer",name:"Ztormmcaller",count:0,cost:5,type:"Walker",attack:3,defense:3,cardText:"Entry: 1 damage to a zombie, Swing 1"},
	"4": {faction: "Air",rank:"General",name:"ZeuZ",count:0,cost:11,type:"Walker",attack:5,defense:6,cardText:"Entry: 3 damage to all enemies"},
	"32": {faction: "Air",rank:"Officer",name:"Bouncer",count:0,cost:4,type:"Heavy",attack:2,defense:3,cardText:"Heavy"},
	"33": {faction: "Air",rank:"General",name:"Mind Flayer",count:0,cost:7,type:"Walker",attack:5,defense:5,cardText:"Entry: Take control of an enemy zombie"},
	"34": {faction: "Air",rank:"Minion",name:"Wheezy",count:0,cost:2,type:"Walker",attack:1,defense:2,cardText:"Entry: A random card in your hand gets -1 cost"},
	"50": {faction: "Air",rank:"Minion",name:"Soothsayer",count:0,cost:2,type:"Walker",attack:1,defense:1,cardText:"Entry: Draw a card"},
	"51": {faction: "Air",rank:"Minion",name:"Buffer",count:0,cost:2,type:"Walker",attack:1,defense:1,cardText:"Death: Give an ally zombie +1 Atk"},
	"52": {faction: "Air",rank:"Minion",name:"Embryo #052",count:0,cost:-1,type:"Embryo",attack:-1,defense:-1,cardText:"-1"},
	"53": {faction: "Air",rank:"Officer",name:"Dragger",count:0,cost:3,type:"Walker",attack:1,defense:2,cardText:"Entry: Summon a zombie from your Hand that costs 2 or less"},
	"54": {faction: "Air",rank:"Officer",name:"Zephyr",count:0,cost:4,type:"Walker",attack:3,defense:3,cardText:"Costs 1 less for each Air zombie you have in play"},
	"55": {faction: "Air",rank:"Officer",name:"Zyclone",count:0,cost:5,type:"Walker",attack:2,defense:3,cardText:"Entry: Return all zombies that cost 3 or less to their owner’s hands"},
	"91": {faction: "Air",rank:"Minion",name:"Breezee",count:0,cost:1,type:"Walker",attack:1,defense:1,cardText:""},
	"92": {faction: "Air",rank:"Minion",name:"Banshee",count:0,cost:2,type:"Feral",attack:2,defense:1,cardText:"Feral"},
	"93": {faction: "Air",rank:"Minion",name:"Zhocker",count:0,cost:1,type:"Walker",attack:0,defense:2,cardText:"Dealyed 1: +2 Attack"},
	"94": {faction: "Air",rank:"Commander",name:"Ztorm Shield",count:0,cost:6,type:"Walker",attack:4,defense:4,cardText:"Guard, Entry: Give adjacent zombies guard"},
	"95": {faction: "Air",rank:"Commander",name:"Zquall",count:0,cost:6,type:"Walker",attack:4,defense:6,cardText:"Entry: Put 2 Air zombies that cost 2 goo from your Hand to play."},
	"96": {faction: "Air",rank:"Commander",name:"Draft",count:0,cost:5,type:"Walker",attack:4,defense:5,cardText:"Entry: Draw a card from enemy deck"},
	"97": {faction: "Air",rank:"Commander",name:"MonZoon",count:0,cost:9,type:"Walker",attack:6,defense:6,cardText:"Costs 1 less for each Air zombie in your hand"},
	"142": {faction: "Air",rank:"Minion",name:"Fumez",count:0,cost:2,type:"Walker",attack:1,defense:1,cardText:"Entry: Add a Tainted Goo to your hand"},
	"143": {faction: "Air",rank:"Officer",name:"Gaz",count:0,cost:4,type:"Walker",attack:2,defense:2,cardText:"Guard, add a Corrupted Goo to your hand"}
};

let currentDeck = {};
const MAX_CARDS = 30;


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

function emptyDeck()
{
	currentDeck = {};
	populateDeck();
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
		let cardWrapper = $('<div class="card"/>');
		let cardImage = $('<img class="cardImage"/>');
		cardImage.attr('src', "https://loom.games/img/cards/" + formatId(key) + ".png");
		
		let cardAmount = $('<h3 />', {
			text: "x"+currentDeck[key]
		});

		cardWrapper.append(cardImage);
		cardWrapper.append(cardAmount);
			
		$("#deck").append(cardWrapper);
	});
	
	updateCardAmount();
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

function checkTotalCards(list)
{
	let size = 0;
	$.each( list, function(key,value){
		size += value;
	});
	
	return size;
}

function updateCardAmount()
{
	$("#cardCount").text("Cards: " + checkTotalCards(currentDeck) + "/" + MAX_CARDS);
	
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

function updateGraph()
{
	let graphData = [0,0,0,0,0,0,0,0,0,0,0,0];
	$.each( currentDeck, function(key,value){
		graphData[(cardList[key].cost)] += value;
	});
	
	chartData.datasets[0].data = graphData;
	window.chart.update();
}

$(document).ready(function(){
	
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
	
	let loadedDeck = getParams(window.location.href);
	
	if (!Object.keys(loadedDeck)[0] == "")
	{
		//Convert string values into numbers
		$.each( loadedDeck, function(key,value)
		{
			loadedDeck[key] = Number(value);
		});
		currentDeck = loadedDeck;
		populateDeck();
	}
	
	
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 10) {
		 $('#header').addClass('changeColor');
	  }
	  if ($(this).scrollTop() < 10) {
		 $('#header').removeClass('changeColor');
	  }
	});
	
	
});
