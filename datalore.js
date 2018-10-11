const cardList = {
	"Embryo #026": {faction: "Toxic",rank:"Minion",name:"Embryo #026",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Zeeter": {faction: "Toxic",rank:"Officer",name:"Zeeter",count:-1,cost:5,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/047.53e740d6.png",cardText:"Entry: Devour an ally zombie, get its Atk and Def"},
"Embryo #052": {faction: "Air",rank:"Minion",name:"Embryo #052",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #054": {faction: "Air",rank:"Officer",name:"Embryo #054",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #056": {faction: "Earth",rank:"Minion",name:"Embryo #056",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #057": {faction: "Earth",rank:"Minion",name:"Embryo #057",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #058": {faction: "Earth",rank:"Minion",name:"Embryo #058",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #099": {faction: "Earth",rank:"Minion",name:"Embryo #099",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #062": {faction: "Fire",rank:"Minion",name:"Embryo #062",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #063": {faction: "Fire",rank:"Minion",name:"Embryo #063",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #064": {faction: "Fire",rank:"Minion",name:"Embryo #064",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #065": {faction: "Fire",rank:"Officer",name:"Embryo #065",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #073": {faction: "Life",rank:"Minion",name:"Embryo #073",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #074": {faction: "Life",rank:"Minion",name:"Embryo #074",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #079": {faction: "Toxic",rank:"Minion",name:"Embryo #079",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #080": {faction: "Toxic",rank:"Minion",name:"Embryo #080",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #081": {faction: "Toxic",rank:"Minion",name:"Embryo #081",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #086": {faction: "Water",rank:"Minion",name:"Embryo #086",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #087": {faction: "Water",rank:"Minion",name:"Embryo #087",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #088": {faction: "Water",rank:"Minion",name:"Embryo #088",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #106": {faction: "Fire",rank:"Minion",name:"Embryo #106",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #109": {faction: "Fire",rank:"Officer",name:"Embryo #109",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #120": {faction: "Life",rank:"Minion",name:"Embryo #120",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #122": {faction: "Life",rank:"Minion",name:"Embryo #122",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #123": {faction: "Life",rank:"Minion",name:"Embryo #123",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #133": {faction: "Water",rank:"Minion",name:"Embryo #133",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #134": {faction: "Water",rank:"Minion",name:"Embryo #134",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #136": {faction: "Water",rank:"Officer",name:"Embryo #136",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Embryo #138": {faction: "Water",rank:"Officer",name:"Embryo #138",count:-1,cost:-1,type:"Embryo",attack:-1,defense:-1,image:"",cardText:"?"},
"Burrrnn": {faction: "Fire",rank:"Officer",name:"Burrrnn",count:-1,cost:3,type:"Feral",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/011.0f9eb3b9.png",cardText:"Feral"},
"Fire-Maw": {faction: "Fire",rank:"Commander",name:"Fire-Maw",count:-1,cost:5,type:"Feral",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/014.457223ea.png",cardText:"Feral, Flash"},
"Cerberus": {faction: "Fire",rank:"General",name:"Cerberus",count:-1,cost:12,type:"Feral",attack:7,defense:8,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/037.c5231893.png",cardText:"Attack: Deal damage before receiving damage"},
"Enrager": {faction: "Fire",rank:"Commander",name:"Enrager",count:-1,cost:6,type:"Feral",attack:5,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/066.bea11a94.png",cardText:"Feral, Entry: If your overlord has 10 or less Def or less this gets +2 Atk"},
"Zhampion": {faction: "Fire",rank:"Commander",name:"Zhampion",count:-1,cost:5,type:"Feral",attack:5,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/067.4cdb41ac.png",cardText:"Feral, Entry: Summon two 1/1 enemy Pyromaz zombies"},
"Azzazzin": {faction: "Toxic",rank:"Officer",name:"Azzazzin",count:-1,cost:3,type:"Feral",attack:5,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/082.d6d1787d.png",cardText:"Blitz"},
"Banshee": {faction: "Air",rank:"Minion",name:"Banshee",count:-1,cost:2,type:"Feral",attack:2,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/092.ebe28d3d.png",cardText:"Feral"},
"Sparky": {faction: "Fire",rank:"Minion",name:"Sparky",count:-1,cost:1,type:"Feral",attack:2,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/105.5314502a.png",cardText:"Feral, End: 1 damage to this"},
"BurZt": {faction: "Fire",rank:"Minion",name:"BurZt",count:-1,cost:3,type:"Feral",attack:4,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/108.43a0878f.png",cardText:"Feral, Entry: Cannot attack the enemy Overlord"},
"Quazi": {faction: "Fire",rank:"Minion",name:"Quazi",count:-1,cost:1,type:"Feral",attack:0,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/146.7a39e3bd.png",cardText:"Feral, Overflow 2, End: 2 damage to this and adjacent zombies"},
"Modo": {faction: "Fire",rank:"Officer",name:"Modo",count:-1,cost:3,type:"Feral",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/147.3c494a50.png",cardText:"Feral, Overflow 5, End: 4 damage to this and adjacent zombies"},
"Golem": {faction: "Earth",rank:"Officer",name:"Golem",count:-1,cost:5,type:"Heavy",attack:2,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/006.407ace03.png",cardText:"Heavy"},
"Mountain": {faction: "Earth",rank:"General",name:"Mountain",count:-1,cost:11,type:"Heavy",attack:6,defense:8,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/008.6c507586.png",cardText:"Heavy, Swing 4"},
"Gargantua": {faction: "Fire",rank:"General",name:"Gargantua",count:-1,cost:11,type:"Heavy",attack:6,defense:8,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/013.3db7d0e3.png",cardText:"Entry: 2 damage to all enemies"},
"Cherno-bill": {faction: "Toxic",rank:"General",name:"Cherno-bill",count:-1,cost:11,type:"Heavy",attack:7,defense:9,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/027.4c079764.png",cardText:"Heavy, Death: 3 damage to all zombies"},
"Bouncer": {faction: "Air",rank:"Officer",name:"Bouncer",count:-1,cost:4,type:"Heavy",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/032.423e2493.png",cardText:"Heavy"},
"Tiny": {faction: "Earth",rank:"Officer",name:"Tiny",count:-1,cost:3,type:"Heavy",attack:0,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/035.a23204d1.png",cardText:"Heavy"},
"Znowman": {faction: "Water",rank:"Minion",name:"Znowman",count:-1,cost:3,type:"Heavy",attack:0,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/049.09656e4b.png",cardText:"Heavy, enemies that attack this become frozen"},
"Spiker": {faction: "Earth",rank:"Officer",name:"Spiker",count:-1,cost:3,type:"Heavy",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/059.cf0fac15.png",cardText:"Heavy, Attack: +1 damage to Heavy zombies"},
"IgneouZ": {faction: "Earth",rank:"Commander",name:"IgneouZ",count:-1,cost:4,type:"Heavy",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/061.4011ef1b.png",cardText:"Heavy, Entry: If your Overlord has 10 Def or less, this gets +2 Def"},
"Blocker": {faction: "Earth",rank:"Minion",name:"Blocker",count:-1,cost:1,type:"Heavy",attack:0,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/098.4e18a9d0.png",cardText:"Heavy"},
"Hardy": {faction: "Earth",rank:"Minion",name:"Hardy",count:-1,cost:3,type:"Heavy",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/100.6a003c73.png",cardText:"Heavy"},
"Pyrite": {faction: "Earth",rank:"Commander",name:"Pyrite",count:-1,cost:5,type:"Heavy",attack:0,defense:8,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/103.61e97a7a.png",cardText:"Heavy, Delayed 2: This loses Heavy but gains +4 Atk"},
"Firewall": {faction: "Fire",rank:"Minion",name:"Firewall",count:-1,cost:2,type:"Heavy",attack:2,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/107.9b2c74c6.png",cardText:"Heavy"},
"Wazte": {faction: "Toxic",rank:"Minion",name:"Wazte",count:-1,cost:2,type:"Heavy",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/128.c0cca82a.png",cardText:"Heavy, Entry: Lose 1 goo bottle"},
"Pit": {faction: "Earth",rank:"Minion",name:"Pit",count:-1,cost:1,type:"Heavy",attack:0,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/144.1e565b49.png",cardText:"Heavy, Entry: Add a Tainted Goo to your hand"},
"Crater": {faction: "Earth",rank:"Officer",name:"Crater",count:-1,cost:3,type:"Heavy",attack:1,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/145.bbfb1fe0.png",cardText:"Heavy, Entry: Add a Corruputed Goo to your hand"},
"Stapler": {faction: "Item",rank:"Item",name:"Stapler",count:-1,cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/015.83178c67.png",cardText:"Restore 4 Def to a zombie"},
"Nail Bomb": {faction: "Item",rank:"Item",name:"Nail Bomb",count:-1,cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/016.acc1ab1b.png",cardText:"4 damage to a zombie, Swing 4"},
"Goo Bottles": {faction: "Item",rank:"Item",name:"Goo Bottles",count:-1,cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/017.79cc9efa.png",cardText:"Get 2 empty goo vials"},
"Chainsaw": {faction: "Item",rank:"Item",name:"Chainsaw",count:-1,cost:2,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/018.00832a30.png",cardText:"Attack: 1 damage to your Overlord"},
"Molotov": {faction: "Item",rank:"Item",name:"Molotov",count:-1,cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/039.71d9d4b5.png",cardText:"3 damage to a zombie, Swing 3"},
"Bat": {faction: "Item",rank:"Item",name:"Bat",count:-1,cost:3,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/040.5447577c.png",cardText:"2 damage to a zombie and Distract it"},
"Item #041": {faction: "Item",rank:"Item",name:"Item #041",count:-1,cost:-1,type:"Item",attack:-1,defense:-1,image:"",cardText:"?"},
"Whistle": {faction: "Item",rank:"Item",name:"Whistle",count:-1,cost:0,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/068.d06b9399.png",cardText:"Draw a card"},
"Item #069": {faction: "Item",rank:"Item",name:"Item #069",count:-1,cost:-1,type:"Item",attack:-1,defense:-1,image:"",cardText:"?"},
"Goo Beaker": {faction: "Item",rank:"Item",name:"Goo Beaker",count:-1,cost:2,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/070.b19b5d0e.png",cardText:"Get 1 empty goo vial"},
"Junk Spear": {faction: "Item",rank:"Item",name:"Junk Spear",count:-1,cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/071.4d297bcc.png",cardText:"Damage enemy Overlord equal to the number of items played this game"},
"Item #072": {faction: "Item",rank:"Item",name:"Item #072",count:-1,cost:-1,type:"Item",attack:-1,defense:-1,image:"",cardText:"?"},
"Item #112": {faction: "Item",rank:"Item",name:"Item #112",count:-1,cost:-1,type:"Item",attack:-1,defense:-1,image:"",cardText:"?"},
"Extinguisher": {faction: "Item",rank:"Item",name:"Extinguisher",count:-1,cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/113.6b0ef1c7.png",cardText:"Entry: Freeze all enemy zombies"},
"Lawnmower": {faction: "Item",rank:"Item",name:"Lawnmower",count:-1,cost:6,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/114.e6baeb10.png",cardText:"Entry: 2 damage to all enemy zombies"},
"Item #115": {faction: "Item",rank:"Item",name:"Item #115",count:-1,cost:-1,type:"Item",attack:-1,defense:-1,image:"",cardText:"?"},
"Item #116": {faction: "Item",rank:"Item",name:"Item #116",count:-1,cost:-1,type:"Item",attack:-1,defense:-1,image:"",cardText:"?"},
"Fresh Meat": {faction: "Item",rank:"Item",name:"Fresh Meat",count:-1,cost:5,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/117.f5e4614b.png",cardText:"Entry: All enemy zombies get -3 Atk until end of turn"},
"Item #118": {faction: "Item",rank:"Item",name:"Item #118",count:-1,cost:-1,type:"Item",attack:-1,defense:-1,image:"",cardText:"?"},
"Item #119": {faction: "Item",rank:"Item",name:"Item #119",count:-1,cost:-1,type:"Item",attack:-1,defense:-1,image:"",cardText:"?"},
"Boomstick": {faction: "Item",rank:"Item",name:"Boomstick",count:-1,cost:2,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/154.e2526aa8.png",cardText:"2 damage to 3 random zombies in play"},
"Tainted Goo": {faction: "Item",rank:"Item",name:"Tainted Goo",count:-1,cost:2,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/155.a497772d.png",cardText:"Overflow 3, disables 1 goo vial for next turn"},
"Corrupted Goo": {faction: "Item",rank:"Item",name:"Corrupted Goo",count:-1,cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/156.3409d305.png",cardText:"Overflow 6, disables 2 goo vials for next turn"},
"Whizpar": {faction: "Air",rank:"Minion",name:"Whizpar",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/001.477fc429.png",cardText:"Attack: +1 damage to Water zombies"},
"Pushhh": {faction: "Air",rank:"Officer",name:"Pushhh",count:-1,cost:3,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/002.49b271fc.png",cardText:"Entry: Return a zombie to its owner’s hand"},
"Ztormmcaller": {faction: "Air",rank:"Officer",name:"Ztormmcaller",count:-1,cost:5,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/003.14628065.png",cardText:"Entry: 1 damage to a zombie, Swing 1"},
"ZeuZ": {faction: "Air",rank:"General",name:"ZeuZ",count:-1,cost:11,type:"Walker",attack:5,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/004.3a35a747.png",cardText:"Entry: 3 damage to all enemies"},
"Rockky": {faction: "Earth",rank:"Minion",name:"Rockky",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/005.83e3f5ca.png",cardText:"Attack: +1 damage to Air zombies"},
"Bolderr": {faction: "Earth",rank:"Minion",name:"Bolderr",count:-1,cost:3,type:"Walker",attack:1,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/007.a7d48ecf.png",cardText:"Entry: 1 damage to a zombie"},
"Walley": {faction: "Earth",rank:"Officer",name:"Walley",count:-1,cost:4,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/009.bb978488.png",cardText:"Entry: Adjacent zombies get Heavy"},
"Pyromaz": {faction: "Fire",rank:"Minion",name:"Pyromaz",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/010.d7b2dc68.png",cardText:"Attack: +1 damage to Life zombies"},
"Cynderman": {faction: "Fire",rank:"Officer",name:"Cynderman",count:-1,cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/012.d81cf60e.png",cardText:"Entry: 2 damage to a zombie"},
"Azuraz": {faction: "Life",rank:"Minion",name:"Azuraz",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/019.98198c0c.png",cardText:"Attack: +1 damage to Life zombies"},
"Shroom": {faction: "Life",rank:"Officer",name:"Shroom",count:-1,cost:4,type:"Walker",attack:4,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/020.cd524c2b.png",cardText:"Entry: 2 damage to a zombie"},
"Vindrom": {faction: "Life",rank:"Officer",name:"Vindrom",count:-1,cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/021.e46634a9.png",cardText:"Attack: Freeze zombie"},
"Shammann": {faction: "Life",rank:"General",name:"Shammann",count:-1,cost:11,type:"Walker",attack:5,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/022.aa7deffa.png",cardText:"Turn: Summon two 1/1 zombie minions"},
"Puffer": {faction: "Life",rank:"Officer",name:"Puffer",count:-1,cost:3,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/023.28f20695.png",cardText:"Entry: +1 attack to all Life Zombies in play"},
"Poizom": {faction: "Toxic",rank:"Minion",name:"Poizom",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/024.c49130a9.png",cardText:"Attack: +1 damage to Earth zombies"},
"Ghoul": {faction: "Toxic",rank:"Officer",name:"Ghoul",count:-1,cost:2,type:"Walker",attack:3,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/025.b2eb2912.png",cardText:"Attack: -1 Attack"},
"Izze": {faction: "Water",rank:"Minion",name:"Izze",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/028.4327b5ae.png",cardText:"Attack: Freeze Target"},
"Jetter": {faction: "Water",rank:"Officer",name:"Jetter",count:-1,cost:4,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/029.21387fd8.png",cardText:"Entry: 1 damage to a zombie"},
"Freezzee": {faction: "Water",rank:"Officer",name:"Freezzee",count:-1,cost:5,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/030.7e517c90.png",cardText:"Entry: Freeze zombie and adjacent zombies, 2 damage If frozen"},
"Tzunamy": {faction: "Water",rank:"General",name:"Tzunamy",count:-1,cost:11,type:"Walker",attack:6,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/031.08d214ed.png",cardText:"Entry: 2 damage to all enemies, then freeze them"},
"Mind Flayer": {faction: "Air",rank:"General",name:"Mind Flayer",count:-1,cost:7,type:"Walker",attack:5,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/033.497a37d4.png",cardText:"Entry: Take control of an enemy zombie"},
"Wheezy": {faction: "Air",rank:"Minion",name:"Wheezy",count:-1,cost:2,type:"Walker",attack:1,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/034.b2c1129b.png",cardText:"Entry: A random card in your hand gets -1 cost"},
"Earthshaker": {faction: "Earth",rank:"Commander",name:"Earthshaker",count:-1,cost:5,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/036.f0b573fb.png",cardText:"Entry: Destroy a Heavy zombie"},
"Werezomb": {faction: "Fire",rank:"Officer",name:"Werezomb",count:-1,cost:3,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/038.92dd6843.png",cardText:"Entry: Ally zombie gets Feral"},
"Z-Virus": {faction: "Life",rank:"General",name:"Z-Virus",count:-1,cost:11,type:"Walker",attack:0,defense:0,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/042.26a6159a.png",cardText:"Devour all ally zombies, gain their Atk and Def"},
"Yggdrazil": {faction: "Life",rank:"General",name:"Yggdrazil",count:-1,cost:11,type:"Walker",attack:4,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/043.125e56d7.png",cardText:"Entry: Reanimate all Life zombies that died this match"},
"Sapper": {faction: "Life",rank:"Officer",name:"Sapper",count:-1,cost:5,type:"Walker",attack:1,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/044.bfbbae0d.png",cardText:"Attack: Restore 1 Def for each damage this deals"},
"Keeper": {faction: "Life",rank:"Officer",name:"Keeper",count:-1,cost:3,type:"Walker",attack:1,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/045.37f35f8c.png",cardText:"Entry: Summon a 1/1 Feral zombie minion"},
"Zpitter": {faction: "Toxic",rank:"Minion",name:"Zpitter",count:-1,cost:3,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/046.8fbf9ab8.png",cardText:"Entry: 1 damage to a random enemy"},
"Zhatterer": {faction: "Water",rank:"Minion",name:"Zhatterer",count:-1,cost:5,type:"Walker",attack:2,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/048.d8f858fa.png",cardText:"Entry: Destroy a frozen zombie"},
"Soothsayer": {faction: "Air",rank:"Minion",name:"Soothsayer",count:-1,cost:2,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/050.aae4d06d.png",cardText:"Entry: Draw a card"},
"Buffer": {faction: "Air",rank:"Minion",name:"Buffer",count:-1,cost:2,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/051.9e607986.png",cardText:"Death: Give an ally zombie +1 Atk"},
"Dragger": {faction: "Air",rank:"Officer",name:"Dragger",count:-1,cost:3,type:"Walker",attack:1,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/053.fda0b3de.png",cardText:"Entry: Summon a zombie from your Hand that costs 2 or less"},
"Zyclone": {faction: "Air",rank:"Officer",name:"Zyclone",count:-1,cost:5,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/055.9d1dd837.png",cardText:"Entry: Return all zombies that cost 3 or less to their owner’s hands"},
"Defender": {faction: "Earth",rank:"Commander",name:"Defender",count:-1,cost:8,type:"Walker",attack:4,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/060.f87f2c2f.png",cardText:"Entry: Give ally Earth zombies that cost 2 or less Heavy"},
"Bloomer": {faction: "Life",rank:"Minion",name:"Bloomer",count:-1,cost:2,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/075.55501caf.png",cardText:"Entry: Draw a card if you have a Life zombie in play"},
"EverlaZting": {faction: "Life",rank:"Officer",name:"EverlaZting",count:-1,cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/076.273cf4c0.png",cardText:"Death: Shuffle this card into your deck"},
"Healz": {faction: "Life",rank:"Officer",name:"Healz",count:-1,cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/077.e8941de8.png",cardText:"Entry: Overlord +3 Def. If Overlord 10 Def or less, Overlord +5 Def"},
"Rainz": {faction: "Life",rank:"Commander",name:"Rainz",count:-1,cost:6,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/078.70f77df4.png",cardText:"Entry: Restore 10 Def randomly split among allies"},
"RelentleZZ": {faction: "Toxic",rank:"Officer",name:"RelentleZZ",count:-1,cost:3,type:"Walker",attack:3,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/083.044155cd.png",cardText:"Entry: 2 damage to this zombie"},
"Polluter": {faction: "Toxic",rank:"Officer",name:"Polluter",count:-1,cost:4,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/084.b59d0b6c.png",cardText:"Death: Gain 1 goo"},
"Zludge": {faction: "Toxic",rank:"Commander",name:"Zludge",count:-1,cost:5,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/085.57feb6bb.png",cardText:"Rage: +2 attack"},
"Zub-Zero": {faction: "Water",rank:"Commander",name:"Zub-Zero",count:-1,cost:7,type:"Walker",attack:4,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/089.c3628541.png",cardText:"Entry: 3 Damage to a Zombie, if it survives Freeze it"},
"Blizzard": {faction: "Water",rank:"Commander",name:"Blizzard",count:-1,cost:6,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/090.57a36e96.png",cardText:"Entry: Freeze all enemy zombies"},
"Breezee": {faction: "Air",rank:"Minion",name:"Breezee",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/091.bdb011c4.png",cardText:""},
"Zhocker": {faction: "Air",rank:"Minion",name:"Zhocker",count:-1,cost:1,type:"Walker",attack:0,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/093.d908c5b4.png",cardText:"Dealyed 1: +2 Attack"},
"Ztorm Shield": {faction: "Air",rank:"Commander",name:"Ztorm Shield",count:-1,cost:6,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/094.84b87d98.png",cardText:"Guard, Entry: Give adjacent zombies guard"},
"Zquall": {faction: "Air",rank:"Commander",name:"Zquall",count:-1,cost:6,type:"Walker",attack:4,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/095.6e29ed51.png",cardText:"Entry: Put 2 Air zombies that cost 2 goo from your Hand to play."},
"Draft": {faction: "Air",rank:"Commander",name:"Draft",count:-1,cost:5,type:"Walker",attack:4,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/096.cf9e379a.png",cardText:"Entry: Draw a card from enemy deck"},
"MonZoon": {faction: "Air",rank:"Commander",name:"MonZoon",count:-1,cost:9,type:"Walker",attack:6,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/097.aeed86de.png",cardText:"Costs 1 less for each Air zombie in your hand"},
"Slab": {faction: "Earth",rank:"Minion",name:"Slab",count:-1,cost:3,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/101.aafc97bf.png",cardText:""},
"Groundy": {faction: "Earth",rank:"Officer",name:"Groundy",count:-1,cost:5,type:"Walker",attack:5,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/102.e57b6fbe.png",cardText:"Entry: If this is your only zombie in play, it gets Heavy"},
"Gaea": {faction: "Earth",rank:"General",name:"Gaea",count:-1,cost:11,type:"Walker",attack:4,defense:7,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/104.2174495b.png",cardText:"Entry: All ally Earth zombies in play get +1 Atk"},
"Alpha": {faction: "Fire",rank:"Officer",name:"Alpha",count:-1,cost:5,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/110.9be21af1.png",cardText:"Entry: All other Ally zombies in play get Feral"},
"Volcan": {faction: "Fire",rank:"Commander",name:"Volcan",count:-1,cost:6,type:"Walker",attack:5,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/111.42775b95.png",cardText:"Cannot Attack, End: 5 damage to a random enemy"},
"Zplitter": {faction: "Life",rank:"Commander",name:"Zplitter",count:-1,cost:7,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/121.36625512.png",cardText:"Entry: Place another copy of this minion in play"},
"Zeeder": {faction: "Life",rank:"Commander",name:"Zeeder",count:-1,cost:5,type:"Walker",attack:2,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/124.2f56ec5c.png",cardText:"End: Summon a 0/2 zombie with Heavy"},
"Blight": {faction: "Life",rank:"Commander",name:"Blight",count:-1,cost:6,type:"Walker",attack:0,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/125.cb95dc4c.png",cardText:"Delayed 3: Place two 4/4 copies of this zombie in play then Destroy this"},
"Germ": {faction: "Toxic",rank:"Minion",name:"Germ",count:-1,cost:1,type:"Walker",attack:2,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/126.4bb627cd.png",cardText:""},
"Ectoplasm": {faction: "Toxic",rank:"Minion",name:"Ectoplasm",count:-1,cost:1,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/127.c7a1de83.png",cardText:"Entry: Lose 1 goo"},
"Zlopper": {faction: "Toxic",rank:"Commander",name:"Zlopper",count:-1,cost:7,type:"Walker",attack:3,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/129.04f938e2.png",cardText:" +1 attack to all ally Toxic zombies"},
"Boomer": {faction: "Toxic",rank:"Commander",name:"Boomer",count:-1,cost:9,type:"Walker",attack:6,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/130.4590c6b7.png",cardText:"Death: Adjacent zombies get +2 Atk"},
"Zteroid": {faction: "Toxic",rank:"Commander",name:"Zteroid",count:-1,cost:6,type:"Walker",attack:5,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/131.f1ca7a1e.png",cardText:"Death: All ally zombies get +2 Atk until end of turn"},
"GooZilla": {faction: "Toxic",rank:"General",name:"GooZilla",count:-1,cost:8,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/132.0ced51c2.png",cardText:"Entry: Return 4 Goo, and use all your goo for 2x Atk/Def"},
"Vortex": {faction: "Water",rank:"General",name:"Vortex",count:-1,cost:11,type:"Walker",attack:6,defense:7,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/135.7f21a501.png",cardText:"Entry: replace ally water zombies in play with stronger ones"},
"Zplash": {faction: "Water",rank:"Commander",name:"Zplash",count:-1,cost:6,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/137.0259eb4c.png",cardText:"Entry: 1 damage to random enemy for each water zombie in your hand "},
"Froztbite": {faction: "Water",rank:"Commander",name:"Froztbite",count:-1,cost:4,type:"Walker",attack:0,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/139.c706f320.png",cardText:"Delayed 1: +6 Atk"},
"Zpring": {faction: "Water",rank:"Commander",name:"Zpring",count:-1,cost:5,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/140.5660f917.png",cardText:"As long as this is in play you have 1 extra goo"},
"Maelstrom": {faction: "Water",rank:"Commander",name:"Maelstrom",count:-1,cost:8,type:"Walker",attack:5,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/141.5b3f294f.png",cardText:"Entry: Return all other zombies to their owners' Hands"},
"Fumez": {faction: "Air",rank:"Minion",name:"Fumez",count:-1,cost:2,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/142.f4a30ac6.png",cardText:"Entry: Add a Tainted Goo to your hand"},
"Gaz": {faction: "Air",rank:"Officer",name:"Gaz",count:-1,cost:4,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/143.cf11e66a.png",cardText:"Guard, add a Corrupted Goo to your hand"},
"Zap": {faction: "Life",rank:"Minion",name:"Zap",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/148.32bf00a6.png",cardText:"Overflow 3: Summon a 1/1 enemy zombie minion"},
"Cactuz": {faction: "Life",rank:"Officer",name:"Cactuz",count:-1,cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/149.0b0ad3ce.png",cardText:"Overflow 6, Entry: Summon two 2/2 enemy zombie minions"},
"Zeptic": {faction: "Toxic",rank:"Minion",name:"Zeptic",count:-1,cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/150.329609ee.png",cardText:"Overflow 2, deal 2 damage to your Overlord"},
"Hazzard": {faction: "Toxic",rank:"Officer",name:"Hazzard",count:-1,cost:5,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/151.ffcfdd5f.png",cardText:"Overflow 7, deal 4 damage to your Overlord"},
"Ozmoziz": {faction: "Water",rank:"Minion",name:"Osmoziz",count:-1,cost:2,type:"Walker",attack:1,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/152.257b561a.png",cardText:"Entry: Freeze a random ally, add Tainted Goo to your hand"},
"Geyzer": {faction: "Water",rank:"Officer",name:"Geyzer",count:-1,cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/153.db6b8359.png",cardText:"Entry: Freeze 2 random allies, add Corrupted Goo to your hand"}
};

let currentList = {};

let categoryList = [];
let currentDeck = {};
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
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
	datasets: [{
		label: "Goo Cost Graph",
		backgroundColor: [
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


function testFilter(key)
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
	
	//console.log(key);
	
	if(testCard.name.includes("Embryo"))
		return false;
	
	if (testCard.image == "")
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

function loadCards()
{	
	let sortedArray = [];
	$("#cardList").empty();
	$("#cardList").scrollLeft();
	
	
	
	$.each( currentList, function(key,value){
		if (testFilter(key))
		{
			sortedArray.push(key);
		}
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
		cardImage.attr('src', cardList[key].image);
		cardImage.click(function(){
				addToDeck(key, cardList[key]);
		});
		
		cardWrapper.append(cardImage);
		
		
		$("#cardList").append(cardWrapper);
	});
}


function addToDeck(key, value)
{
	$("#error").text("");
	//Only add if there are less than 30 cards
	if (checkTotalCards() < MAX_CARDS)
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

function checkTotalCards()
{
	let size = 0;
	$.each( currentDeck, function(key,value){
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
		cardImage.attr('src', cardList[key].image);
		cardImage.click(function(){
				removeFromDeck(key);
		});
			
		let cardAmount = $('<h3 />', {
			text: currentDeck[key]
		});
		
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
	$("#cardCount").text("Deck Size: " + checkTotalCards() + "/" + MAX_CARDS);
	
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
	let url = window.location.href.split('?')[0] + "?";
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
		graphData[(cardList[key].cost-1)] += value;
	});
	
	chartData.datasets[0].data = graphData;
	window.chart.update();
}

function copyText()
{
	let textToCopy = $("#deckURL");
	textToCopy.select();
	document.execCommand("copy");	
}

function updateSearch()
{
	let params = $("#searchParams").val();
	
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
				case "text":
					currentFilter["cardText"] = value2;
					break;
			}
		}
	}
	
	if(evaluateFilter() == false)
	{
		currentFilter = previousFilter;
	}
	loadCards();
	
}

function clearSearch()
{
	$("#searchParams").val('');
	resetFilter();
	loadCards();
}

function loadOwnedCards()
{
	//console.log($("#ownedCards").val());
	
	if( $("#ownedCards").val() != '')
		currentList = JSON.parse($("#ownedCards").val());
	
	loadCards();
}

function clearOwnedCards()
{
	currentList = {};
	$.each(cardList, function(key,value){
		currentList[key] = value.count;
	});
	loadCards();
	$("#ownedCards").val("");
}

$(document).ready(function(){
	
	$.each(cardList, function(key,value){
		currentList[key] = value.count;
	});
	
    loadCards();
	populateCategories();
	
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
		//Convert string values into numbers
		$.each( loadedDeck, function(key,value)
		{
			loadedDeck[key] = Number(value);
		});
		currentDeck = loadedDeck;
		populateDeck();
		
	}
	
	$("#searchParams").change(function(){
		updateSearch();
	});
	
});

