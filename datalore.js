const cardList = {
	"Whizpar": {faction: "Air",rank:"Minion",name:"Whizpar",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/001.477fc429.png",cardText:"Attack: +1 damage to Water zombies"},
	"Pushhh": {faction: "Air",rank:"Officer",name:"Pushhh",cost:3,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/002.49b271fc.png",cardText:"Entry: Return a zombie to its owner’s hand"},
	"Ztormmcaller": {faction: "Air",rank:"Officer",name:"Ztormmcaller",cost:5,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/003.14628065.png",cardText:"Entry: 1 damage to a zombie, Swing 1"},
	"Zeuz": {faction: "Air",rank:"General",name:"Zeuz",cost:11,type:"Walker",attack:5,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/004.3a35a747.png",cardText:"Entry: 3 damage to all enemies"},
	"Rockky": {faction: "Earth",rank:"Minion",name:"Rockky",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/005.83e3f5ca.png",cardText:"Attack: +1 damage to Air zombies"},
	"Golem": {faction: "Earth",rank:"Officer",name:"Golem",cost:4,type:"Heavy",attack:2,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/006.ef8a1014.png",cardText:"Heavy"},
	"Bolderr": {faction: "Earth",rank:"Minion",name:"Bolderr",cost:3,type:"Walker",attack:1,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/007.a7d48ecf.png",cardText:"Entry: 1 damage to a zombie"},
	"Mountain": {faction: "Earth",rank:"General",name:"Mountain",cost:11,type:"Heavy",attack:6,defense:8,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/008.6c507586.png",cardText:"Heavy, Swing 4"},
	"Walley": {faction: "Earth",rank:"Officer",name:"Walley",cost:4,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/009.bb978488.png",cardText:"Entry: Adjacent zombies get Heavy"},
	"Pyromaz": {faction: "Fire",rank:"Minion",name:"Pyromaz",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/010.d7b2dc68.png",cardText:"Attack: +1 damage to Life zombies"},
	"Burrrnn": {faction: "Fire",rank:"Officer",name:"Burrrnn",cost:3,type:"Feral",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/011.0f9eb3b9.png",cardText:"Feral"},
	"Cynderman": {faction: "Fire",rank:"Officer",name:"Cynderman",cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/012.d81cf60e.png",cardText:"Entry: 2 damage to a zombie"},
	"Gargantua": {faction: "Fire",rank:"General",name:"Gargantua",cost:11,type:"Heavy",attack:6,defense:8,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/013.3db7d0e3.png",cardText:"Entry: 2 damage to all enemies"},
	"Fire-Maw": {faction: "Fire",rank:"Commander",name:"Fire-Maw",cost:5,type:"Feral",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/014.457223ea.png",cardText:"Feral, Flash"},
	"Stapler": {faction: "Item",rank:"Item",name:"Stapler",cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/015.83178c67.png",cardText:"Restore 4 Def to a zombie"},
	"Nail  Bomb": {faction: "Item",rank:"Item",name:"Nail  Bomb",cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/016.acc1ab1b.png",cardText:"4 damage to a zombie, Swing 4"},
	"Goo Bottles": {faction: "Item",rank:"Item",name:"Goo Bottles",cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/017.79cc9efa.png",cardText:"Get 2 empty goo vials"},
	"Chainsaw": {faction: "Item",rank:"Item",name:"Chainsaw",cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/018.00832a30.png",cardText:"Attack: 1 damage to your Overlord"},
	"Azuraz ": {faction: "Life",rank:"Minion",name:"Azuraz ",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/019.98198c0c.png",cardText:"Attack: +1 damage to Life zombies"},
	"Shroom": {faction: "Life",rank:"Officer",name:"Shroom",cost:4,type:"Walker",attack:4,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/020.cd524c2b.png",cardText:"Entry: 2 damage to a zombie"},
	"Vindrom": {faction: "Life",rank:"Officer",name:"Vindrom",cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/021.e46634a9.png",cardText:"Attack: Freeze zombie"},
	"Shammann": {faction: "Life",rank:"General",name:"Shammann",cost:11,type:"Walker",attack:5,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/022.aa7deffa.png",cardText:"Turn: Summon two 1/1 zombie minions"},
	"Puffer": {faction: "Life",rank:"Officer",name:"Puffer",cost:3,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/023.28f20695.png",cardText:"Entry: +1 attack to all Life Zombies in play"},
	"Poizom": {faction: "Toxic",rank:"Minion",name:"Poizom",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/024.c49130a9.png",cardText:"Attack: +1 damage to Earth zombies"},
	"Ghoul": {faction: "Toxic",rank:"Officer",name:"Ghoul",cost:2,type:"Walker",attack:3,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/025.b2eb2912.png",cardText:"Attack: -1 Attack"},
	"Cherno-bill": {faction: "Toxic",rank:"General",name:"Cherno-bill",cost:11,type:"Heavy",attack:7,defense:9,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/027.4c079764.png",cardText:"Heavy, Death: 3 damage to all zombies"},
	"Izze": {faction: "Water",rank:"Minion",name:"Izze",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/028.4327b5ae.png",cardText:"Attack: Freeze Target"},
	"Jetter": {faction: "Water",rank:"Officer",name:"Jetter",cost:4,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/029.21387fd8.png",cardText:"Entry: 1 damage to a zombie"},
	"Freezzee": {faction: "Water",rank:"Officer",name:"Freezzee",cost:5,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/030.7e517c90.png",cardText:"Entry: Freeze zombie and adjacent zombies, 2 damage If frozen"},
	"Tzunamy": {faction: "Water",rank:"General",name:"Tzunamy",cost:11,type:"Walker",attack:6,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/031.08d214ed.png",cardText:"Entry: 2 damage to all enemies, then freeze them"},
	"Bouncer": {faction: "Air",rank:"Officer",name:"Bouncer",cost:4,type:"Heavy",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/032.423e2493.png",cardText:"Heavy"},
	"Mind Flayer": {faction: "Air",rank:"General",name:"Mind Flayer",cost:7,type:"Walker",attack:5,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/033.497a37d4.png",cardText:"Entry: Take control of an enemy zombie"},
	"Wheezy": {faction: "Air",rank:"Minion",name:"Wheezy",cost:2,type:"Walker",attack:1,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/034.b2c1129b.png",cardText:"Entry: A random card in your hand gets -1 cost"},
	"Tiny": {faction: "Earth",rank:"Officer",name:"Tiny",cost:4,type:"Heavy",attack:0,defense:7,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/035.27d85d06.png",cardText:"Heavy"},
	"Earthshaker": {faction: "Earth",rank:"Commander",name:"Earthshaker",cost:5,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/036.f0b573fb.png",cardText:"Entry: Destroy a Heavy zombie"},
	"Cerberus": {faction: "Fire",rank:"General",name:"Cerberus",cost:12,type:"Feral",attack:7,defense:8,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/037.c5231893.png",cardText:"Attack: Deal damage before receiving damage"},
	"Werezomb": {faction: "Fire",rank:"Officer",name:"Werezomb",cost:3,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/038.92dd6843.png",cardText:"Entry: Ally zombie gets Feral"},
	"Z-Virus": {faction: "Life",rank:"General",name:"Z-Virus",cost:11,type:"Walker",attack:0,defense:0,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/042.26a6159a.png",cardText:"Devour all ally zombies, gain their Atk and Def"},
	"Yggdrazil": {faction: "Life",rank:"General",name:"Yggdrazil",cost:11,type:"Walker",attack:4,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/043.125e56d7.png",cardText:"Entry: Reanimate all Life zombies that died this match"},
	"Sapper": {faction: "Life",rank:"Officer",name:"Sapper",cost:5,type:"Walker",attack:1,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/044.bfbbae0d.png",cardText:"Attack: Restore 1 Def for each damage this deals"},
	"Keeper": {faction: "Life",rank:"Officer",name:"Keeper",cost:3,type:"Walker",attack:1,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/045.37f35f8c.png",cardText:"Entry: Summon a 1/1 Feral zombie minion"},
	"Zpitter": {faction: "Toxic",rank:"Minion",name:"Zpitter",cost:3,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/046.8fbf9ab8.png",cardText:"Entry: 1 damage to a random enemy"},
	"Zhatterer": {faction: "Water",rank:"Minion",name:"Zhatterer",cost:5,type:"Walker",attack:2,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/048.d8f858fa.png",cardText:"Entry: Destroy a frozen zombie"},
	"Znowman": {faction: "Water",rank:"Minion",name:"Znowman",cost:4,type:"Heavy",attack:0,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/049.17161696.png",cardText:"Heavy, enemies that attack this become frozen"},
	"Soothsayer": {faction: "Air",rank:"Minion",name:"Soothsayer",cost:2,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/050.aae4d06d.png",cardText:"Entry: Draw a card"},
	"Zyclone": {faction: "Air",rank:"Officer",name:"Zyclone",cost:5,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/055.9d1dd837.png",cardText:"Entry: Return all zombies that cost 3 or less to their owner’s hands"},
	"Spiker": {faction: "Earth",rank:"Officer",name:"Spiker",cost:3,type:"Heavy",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/059.cf0fac15.png",cardText:"Heavy, Attack: +1 damage to Heavy zombies"},
	"Defender": {faction: "Earth",rank:"Commander",name:"Defender",cost:8,type:"Walker",attack:4,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/060.f87f2c2f.png",cardText:"Entry: Give ally Earth zombies that cost 2 or less Heavy"},
	"IgneouZ": {faction: "Earth",rank:"Commander",name:"IgneouZ",cost:4,type:"Heavy",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/061.4011ef1b.png",cardText:"Heavy, Entry: If your Overlord has 10 Def or less, this gets +2 Def"},
	"Enrager": {faction: "Fire",rank:"Commander",name:"Enrager",cost:6,type:"Feral",attack:5,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/066.bea11a94.png",cardText:"Feral, Entry: If your overlord has 10 or less Def or less this gets +2 Atk"},
	"Zhampion": {faction: "Fire",rank:"Commander",name:"Zhampion",cost:5,type:"Feral",attack:5,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/067.4cdb41ac.png",cardText:"Feral, Entry: Summon two 1/1 enemy Pyromaz zombies"},
	"Goo Beaker": {faction: "Item",rank:"Item",name:"Goo Beaker",cost:2,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/070.b19b5d0e.png",cardText:"Get 1 empty goo vial"},
	"Bloomer": {faction: "Life",rank:"Minion",name:"Bloomer",cost:2,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/075.55501caf.png",cardText:"Entry: Draw a card if you have a Life zombie in play"},
	"Rainz": {faction: "Life",rank:"Commander",name:"Rainz",cost:6,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/078.70f77df4.png",cardText:"Entry: Restore 10 Def randomly split among allies"},
	"RelentleZZ": {faction: "Toxic",rank:"Officer",name:"RelentleZZ",cost:3,type:"Walker",attack:3,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/083.044155cd.png",cardText:"Entry: 2 damage to this zombie"},
	"Polluter": {faction: "Toxic",rank:"Officer",name:"Polluter",cost:4,type:"Walker",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/084.b59d0b6c.png",cardText:"Death: Gain 1 goo"},
	"Zludge": {faction: "Toxic",rank:"Commander",name:"Zludge",cost:5,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/085.57feb6bb.png",cardText:"Rage: +2 attack"},
	"Zub-Zero": {faction: "Water",rank:"Commander",name:"Zub-Zero",cost:7,type:"Walker",attack:4,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/089.c3628541.png",cardText:"Entry: 3 Damage to a Zombie, if it survives Freeze it"},
	"Blizzard": {faction: "Water",rank:"Commander",name:"Blizzard",cost:6,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/090.57a36e96.png",cardText:"Entry: Freeze all enemy zombies"},
	"Breezee": {faction: "Air",rank:"Minion",name:"Breezee",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/091.bdb011c4.png",cardText:""},
	"Banshee": {faction: "Air",rank:"Minion",name:"Banshee",cost:2,type:"Feral",attack:2,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/092.ebe28d3d.png",cardText:"Feral"},
	"Zhocker": {faction: "Air",rank:"Minion",name:"Zhocker",cost:1,type:"Walker",attack:0,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/093.d908c5b4.png",cardText:"Dealyed 1: +2 Attack"},
	"Ztorm Shield": {faction: "Air",rank:"Commander",name:"Ztorm Shield",cost:6,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/094.84b87d98.png",cardText:"Guard, Entry: Give adjacent zombies guard"},
	"Draft": {faction: "Air",rank:"Commander",name:"Draft",cost:5,type:"Walker",attack:4,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/096.cf9e379a.png",cardText:"Entry: Draw a card from enemy deck"},
	"MonZoon": {faction: "Air",rank:"Commander",name:"MonZoon",cost:9,type:"Walker",attack:6,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/097.aeed86de.png",cardText:"Costs 1 less for each Air zombie in your hand"},
	"Blocker": {faction: "Earth",rank:"Minion",name:"Blocker",cost:1,type:"Heavy",attack:0,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/098.4e18a9d0.png",cardText:"Heavy"},
	"Slab": {faction: "Earth",rank:"Minion",name:"Slab",cost:3,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/101.aafc97bf.png",cardText:""},
	"Pyrite": {faction: "Earth",rank:"Commander",name:"Pyrite",cost:5,type:"Heavy",attack:0,defense:8,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/103.61e97a7a.png",cardText:"Heavy, Delayed 2: This loses Heavy but gains +4 Atk"},
	"Gaea ": {faction: "Earth",rank:"General",name:"Gaea ",cost:11,type:"Walker",attack:4,defense:7,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/104.2174495b.png",cardText:"Entry: All ally Earth zombies in play get +1 Atk"},
	"Firewall": {faction: "Fire",rank:"Minion",name:"Firewall",cost:2,type:"Heavy",attack:2,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/107.9b2c74c6.png",cardText:"Heavy"},
	"BurZt": {faction: "Fire",rank:"Minion",name:"BurZt",cost:3,type:"Feral",attack:4,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/108.43a0878f.png",cardText:"Feral, Entry: Cannot attack the enemy Overlord"},
	"Alpha": {faction: "Fire",rank:"Officer",name:"Alpha",cost:5,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/110.9be21af1.png",cardText:"Entry: All other Ally zombies in play get Feral"},
	"Volcan": {faction: "Fire",rank:"Commander",name:"Volcan",cost:6,type:"Walker",attack:5,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/111.42775b95.png",cardText:"Cannot Attack, End: 5 damage to a random enemy"},
	"Fresh Meat": {faction: "Item",rank:"Item",name:"Fresh Meat",cost:5,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/117.f5e4614b.png",cardText:"Entry: All enemy zombies get -3 Atk until end of turn"},
	"Zplitter": {faction: "Life",rank:"Commander",name:"Zplitter",cost:7,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/121.36625512.png",cardText:"Entry: Place another copy of this minion in play"},
	"Zeeder": {faction: "Life",rank:"Commander",name:"Zeeder",cost:5,type:"Walker",attack:2,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/124.2f56ec5c.png",cardText:"End: Summon a 0/2 zombie with Heavy"},
	"Blight": {faction: "Life",rank:"Commander",name:"Blight",cost:6,type:"Walker",attack:0,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/125.cb95dc4c.png",cardText:"Delayed 3: Place two 4/4 copies of this zombie in play then Destroy this"},
	"Germ": {faction: "Toxic",rank:"Minion",name:"Germ",cost:1,type:"Walker",attack:2,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/126.4bb627cd.png",cardText:""},
	"Ectoplasm": {faction: "Toxic",rank:"Minion",name:"Ectoplasm",cost:1,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/127.c7a1de83.png",cardText:"Entry: Lose 1 goo"},
	"Wazte": {faction: "Toxic",rank:"Minion",name:"Wazte",cost:2,type:"Heavy",attack:3,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/128.c0cca82a.png",cardText:"Heavy, Entry: Lose 1 goo bottle"},
	"Zlopper": {faction: "Toxic",rank:"Commander",name:"Zlopper",cost:7,type:"Walker",attack:3,defense:5,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/129.04f938e2.png",cardText:" +1 attack to all ally Toxic zombies"},
	"Boomer": {faction: "Toxic",rank:"Commander",name:"Boomer",cost:9,type:"Walker",attack:6,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/130.4590c6b7.png",cardText:"Death: Adjacent zombies get +2 Atk"},
	"Zteroid": {faction: "Toxic",rank:"Commander",name:"Zteroid",cost:6,type:"Walker",attack:5,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/131.f1ca7a1e.png",cardText:"Death: All ally zombies get +2 Atk until end of turn"},
	"GooZilla": {faction: "Toxic",rank:"General",name:"GooZilla",cost:8,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/132.0ced51c2.png",cardText:"Entry: Return 4 Goo, and use all your goo for 2x Atk/Def"},
	"Vortex": {faction: "Water",rank:"General",name:"Vortex",cost:11,type:"Walker",attack:6,defense:7,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/135.7f21a501.png",cardText:"Entry: replace ally water zombies in play with stronger ones"},
	"Zplash": {faction: "Water",rank:"Commander",name:"Zplash",cost:6,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/137.0259eb4c.png",cardText:"Entry: 1 damage to random enemy for each water zombie in your hand "},
	"Froztbite": {faction: "Water",rank:"Commander",name:"Froztbite",cost:4,type:"Walker",attack:0,defense:6,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/139.c706f320.png",cardText:"Delayed 1: +6 Atk"},
	"Zpring": {faction: "Water",rank:"Commander",name:"Zpring",cost:5,type:"Walker",attack:3,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/140.5660f917.png",cardText:"As long as this is in play you have 1 extra goo"},
	"Fumez": {faction: "Air",rank:"Minion",name:"Fumez",cost:2,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/142.f4a30ac6.png",cardText:"Entry: Add a Tainted Goo to your hand"},
	"Gaz": {faction: "Air",rank:"Officer",name:"Gaz",cost:4,type:"Walker",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/143.cf11e66a.png",cardText:"Guard, add a Corrupted Goo to your hand"},
	"Pit": {faction: "Earth",rank:"Minion",name:"Pit",cost:1,type:"Heavy",attack:0,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/144.1e565b49.png",cardText:"Heavy, Entry: Add a Tainted Goo to your hand"},
	"Crater": {faction: "Earth",rank:"Officer",name:"Crater",cost:3,type:"Heavy",attack:1,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/145.bbfb1fe0.png",cardText:"Heavy, Entry: Add a Corruputed Goo to your hand"},
	"Quazi": {faction: "Fire",rank:"Minion",name:"Quazi",cost:1,type:"Feral",attack:0,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/146.7a39e3bd.png",cardText:"Feral, Overflow 2, End: 2 damage to this and adjacent zombies"},
	"Modo": {faction: "Fire",rank:"Officer",name:"Modo",cost:3,type:"Feral",attack:2,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/147.3c494a50.png",cardText:"Feral, Overflow 5, End: 4 damage to this and adjacent zombies"},
	"Zap": {faction: "Life",rank:"Minion",name:"Zap",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/148.32bf00a6.png",cardText:"Overflow 3: Summon a 1/1 enemy zombie minion"},
	"Cactuz": {faction: "Life",rank:"Officer",name:"Cactuz",cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/149.0b0ad3ce.png",cardText:"Overflow 6, Entry: Summon two 2/2 enemy zombie minions"},
	"Zeptic": {faction: "Toxic",rank:"Minion",name:"Zeptic",cost:1,type:"Walker",attack:1,defense:1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/150.329609ee.png",cardText:"Overflow 2, deal 2 damage to your Overlord"},
	"Hazzard": {faction: "Toxic",rank:"Officer",name:"Hazzard",cost:5,type:"Walker",attack:4,defense:4,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/151.ffcfdd5f.png",cardText:"Overflow 7, deal 4 damage to your Overlord"},
	"Osmoziz": {faction: "Water",rank:"Minion",name:"Osmoziz",cost:2,type:"Walker",attack:1,defense:2,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/152.257b561a.png",cardText:"Entry: Freeze a random ally, add Tainted Goo to your hand"},
	"Geyzer": {faction: "Water",rank:"Officer",name:"Geyzer",cost:4,type:"Walker",attack:2,defense:3,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/153.db6b8359.png",cardText:"Entry: Freeze 2 random allies, add Corrupted Goo to your hand"},
	"Tainted Goo": {faction: "Item",rank:"Item",name:"Tainted Goo",cost:2,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/155.a497772d.png",cardText:"Overflow 3, disables 1 goo vial for next turn"},
	"Corrupted Goo": {faction: "Item",rank:"Item",name:"Corrupted Goo",cost:4,type:"Item",attack:-1,defense:-1,image:"https://d1yfcrdiemhp2q.cloudfront.net/img/156.3409d305.png",cardText:"Overflow 6, disables 2 goo vials for next turn"}
};

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
	
	
	
	$.each( cardList, function(key,value){
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

$(document).ready(function(){
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

