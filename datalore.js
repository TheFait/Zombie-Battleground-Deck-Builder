const cardList = {
	"Banshee": {faction: "Air",rank:"Minion",name:"Banshee",cost:2,type:"Feral",attack:2,defense:1},
"Bouncer": {faction: "Air",rank:"Officer",name:"Bouncer",cost:4,type:"Heavy",attack:2,defense:3},
"Breezee": {faction: "Air",rank:"Minion",name:"Breezee",cost:1,type:"Walker",attack:1,defense:1},
"Draft": {faction: "Air",rank:"Commander",name:"Draft",cost:5,type:"Walker",attack:4,defense:5},
"Embryo #051": {faction: "Air",rank:"Minion",name:"Embryo #051",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #052": {faction: "Air",rank:"Minion",name:"Embryo #052",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #053": {faction: "Air",rank:"Officer",name:"Embryo #053",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #054": {faction: "Air",rank:"Officer",name:"Embryo #054",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #095": {faction: "Air",rank:"Commander",name:"Embryo #095",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Fumez": {faction: "Air",rank:"Minion",name:"Fumez",cost:2,type:"Walker",attack:1,defense:1},
"Gaz": {faction: "Air",rank:"Officer",name:"Gaz",cost:4,type:"Walker",attack:2,defense:2},
"Mind Flayer": {faction: "Air",rank:"General",name:"Mind Flayer",cost:7,type:"Walker",attack:5,defense:5},
"MonZoon": {faction: "Air",rank:"Commander",name:"MonZoon",cost:9,type:"Walker",attack:6,defense:6},
"Pushhh": {faction: "Air",rank:"Officer",name:"Pushhh",cost:3,type:"Walker",attack:3,defense:3},
"Soothsayer": {faction: "Air",rank:"Minion",name:"Soothsayer",cost:2,type:"Walker",attack:1,defense:1},
"Wheezy": {faction: "Air",rank:"Minion",name:"Wheezy",cost:2,type:"Walker",attack:1,defense:2},
"Whizpar": {faction: "Air",rank:"Minion",name:"Whizpar",cost:1,type:"Walker",attack:1,defense:1},
"Zeuz": {faction: "Air",rank:"General",name:"Zeuz",cost:11,type:"Walker",attack:5,defense:6},
"Zhocker": {faction: "Air",rank:"Minion",name:"Zhocker",cost:1,type:"Walker",attack:0,defense:2},
"Ztorm Shield": {faction: "Air",rank:"Commander",name:"Ztorm Shield",cost:6,type:"Walker",attack:4,defense:4},
"Ztormmcaller": {faction: "Air",rank:"Officer",name:"Ztormmcaller",cost:5,type:"Walker",attack:3,defense:3},
"Zyclone": {faction: "Air",rank:"Officer",name:"Zyclone",cost:5,type:"Walker",attack:2,defense:3},
"Blocker": {faction: "Earth",rank:"Minion",name:"Blocker",cost:1,type:"Heavy",attack:0,defense:3},
"Bolderr": {faction: "Earth",rank:"Minion",name:"Bolderr",cost:3,type:"Walker",attack:1,defense:2},
"Crater": {faction: "Earth",rank:"Officer",name:"Crater",cost:3,type:"Heavy",attack:1,defense:4},
"Defender": {faction: "Earth",rank:"Commander",name:"Defender",cost:8,type:"Walker",attack:4,defense:6},
"Earthshaker": {faction: "Earth",rank:"Commander",name:"Earthshaker",cost:5,type:"Walker",attack:4,defense:4},
"Embryo #056": {faction: "Earth",rank:"Minion",name:"Embryo #056",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #057": {faction: "Earth",rank:"Minion",name:"Embryo #057",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #058": {faction: "Earth",rank:"Minion",name:"Embryo #058",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #099": {faction: "Earth",rank:"Minion",name:"Embryo #099",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #100": {faction: "Earth",rank:"Minion",name:"Embryo #100",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #102": {faction: "Earth",rank:"Officer",name:"Embryo #102",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Gaea": {faction: "Earth",rank:"General",name:"Gaea",cost:11,type:"Walker",attack:4,defense:7},
"Golem": {faction: "Earth",rank:"Minion",name:"Golem",cost:4,type:"Heavy",attack:2,defense:6},
"IgneouZ": {faction: "Earth",rank:"Commander",name:"IgneouZ",cost:4,type:"Heavy",attack:3,defense:3},
"Mountain": {faction: "Earth",rank:"General",name:"Mountain",cost:11,type:"Heavy",attack:6,defense:8},
"Pit": {faction: "Earth",rank:"Minion",name:"Pit",cost:1,type:"Heavy",attack:0,defense:2},
"Pyrite": {faction: "Earth",rank:"Commander",name:"Pyrite",cost:5,type:"Heavy",attack:0,defense:8},
"Rockky": {faction: "Earth",rank:"Minion",name:"Rockky",cost:1,type:"Walker",attack:1,defense:1},
"Slab": {faction: "Earth",rank:"Minion",name:"Slab",cost:3,type:"Walker",attack:3,defense:4},
"Spiker": {faction: "Earth",rank:"Officer",name:"Spiker",cost:3,type:"Heavy",attack:2,defense:3},
"Tiny": {faction: "Earth",rank:"Officer",name:"Tiny",cost:4,type:"Heavy",attack:0,defense:7},
"Walley": {faction: "Earth",rank:"Officer",name:"Walley",cost:4,type:"Walker",attack:2,defense:2},
"Alpha": {faction: "Fire",rank:"Officer",name:"Alpha",cost:5,type:"Walker",attack:3,defense:4},
"Burrrnn": {faction: "Fire",rank:"Officer",name:"Burrrnn",cost:3,type:"Feral",attack:2,defense:2},
"BurZt": {faction: "Fire",rank:"Minion",name:"BurZt",cost:3,type:"Feral",attack:4,defense:1},
"Cerberus": {faction: "Fire",rank:"General",name:"Cerberus",cost:12,type:"Feral",attack:7,defense:8},
"Cynderman": {faction: "Fire",rank:"Officer",name:"Cynderman",cost:4,type:"Walker",attack:2,defense:3},
"Embryo #062": {faction: "Fire",rank:"Minion",name:"Embryo #062",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #063": {faction: "Fire",rank:"Minion",name:"Embryo #063",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #064": {faction: "Fire",rank:"Minion",name:"Embryo #064",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #065": {faction: "Fire",rank:"Officer",name:"Embryo #065",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #105": {faction: "Fire",rank:"Minion",name:"Embryo #105",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #106": {faction: "Fire",rank:"Minion",name:"Embryo #106",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #109": {faction: "Fire",rank:"Officer",name:"Embryo #109",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Enrager": {faction: "Fire",rank:"Commander",name:"Enrager",cost:6,type:"Feral",attack:5,defense:4},
"Fire-Maw": {faction: "Fire",rank:"Commander",name:"Fire-Maw",cost:5,type:"Feral",attack:3,defense:3},
"Firewall": {faction: "Fire",rank:"Minion",name:"Firewall",cost:2,type:"Heavy",attack:2,defense:1},
"Gargantua": {faction: "Fire",rank:"General",name:"Gargantua",cost:11,type:"Heavy",attack:6,defense:8},
"Modo": {faction: "Fire",rank:"Officer",name:"Modo",cost:3,type:"Feral",attack:2,defense:2},
"Pyromaz": {faction: "Fire",rank:"Minion",name:"Pyromaz",cost:1,type:"Walker",attack:1,defense:1},
"Quazi": {faction: "Fire",rank:"Minion",name:"Quazi",cost:1,type:"Feral",attack:0,defense:1},
"Volcan": {faction: "Fire",rank:"Commander",name:"Volcan",cost:6,type:"Walker",attack:5,defense:5},
"Werezomb": {faction: "Fire",rank:"Officer",name:"Werezomb",cost:3,type:"Walker",attack:1,defense:1},
"Zhampion": {faction: "Fire",rank:"Commander",name:"Zhampion",cost:5,type:"Feral",attack:5,defense:2},
"Chainsaw": {faction: "Item",rank:"Item",name:"Chainsaw",cost:2,type:"Item",attack:0,defense:0},
"Corrupted Goo": {faction: "Item",rank:"Item",name:"Corrupted Goo",cost:4,type:"Item",attack:0,defense:0},
"Fresh Meat": {faction: "Item",rank:"Item",name:"Fresh Meat",cost:5,type:"Item",attack:0,defense:0},
"Goo Beaker": {faction: "Item",rank:"Item",name:"Goo Beaker",cost:2,type:"Item",attack:0,defense:0},
"Goo Bottles": {faction: "Item",rank:"Item",name:"Goo Bottles",cost:4,type:"Item",attack:0,defense:0},
"Item #039": {faction: "Item",rank:"Item",name:"Item #039",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #040": {faction: "Item",rank:"Item",name:"Item #040",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #041": {faction: "Item",rank:"Item",name:"Item #041",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #068": {faction: "Item",rank:"Item",name:"Item #068",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #069": {faction: "Item",rank:"Item",name:"Item #069",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #071": {faction: "Item",rank:"Item",name:"Item #071",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #072": {faction: "Item",rank:"Item",name:"Item #072",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #112": {faction: "Item",rank:"Item",name:"Item #112",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #113": {faction: "Item",rank:"Item",name:"Item #113",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #114": {faction: "Item",rank:"Item",name:"Item #114",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #115": {faction: "Item",rank:"Item",name:"Item #115",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #116": {faction: "Item",rank:"Item",name:"Item #116",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #118": {faction: "Item",rank:"Item",name:"Item #118",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #119": {faction: "Item",rank:"Item",name:"Item #119",cost:-1,type:"Item",attack:-1,defense:-1},
"Item #154": {faction: "Item",rank:"Item",name:"Item #154",cost:-1,type:"Item",attack:-1,defense:-1},
"Nail Bomb": {faction: "Item",rank:"Item",name:"Nail Bomb",cost:4,type:"Item",attack:0,defense:0},
"Stapler": {faction: "Item",rank:"Item",name:"Stapler",cost:4,type:"Item",attack:0,defense:0},
"Tainted Goo": {faction: "Item",rank:"Item",name:"Tainted Goo",cost:2,type:"Item",attack:0,defense:0},
"Azuraz": {faction: "Life",rank:"Minion",name:"Azuraz",cost:1,type:"Walker",attack:1,defense:1},
"Blight": {faction: "Life",rank:"Commander",name:"Blight",cost:6,type:"Walker",attack:0,defense:6},
"Bloomer": {faction: "Life",rank:"Minion",name:"Bloomer",cost:2,type:"Walker",attack:1,defense:1},
"Cactuz": {faction: "Life",rank:"Officer",name:"Cactuz",cost:4,type:"Walker",attack:2,defense:3},
"Embryo #073": {faction: "Life",rank:"Minion",name:"Embryo #073",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #074": {faction: "Life",rank:"Minion",name:"Embryo #074",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #076": {faction: "Life",rank:"Officer",name:"Embryo #076",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #077": {faction: "Life",rank:"Officer",name:"Embryo #077",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #120": {faction: "Life",rank:"Minion",name:"Embryo #120",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #122": {faction: "Life",rank:"Minion",name:"Embryo #122",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #123": {faction: "Life",rank:"Minion",name:"Embryo #123",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Keeper": {faction: "Life",rank:"Officer",name:"Keeper",cost:3,type:"Walker",attack:1,defense:3},
"Puffer": {faction: "Life",rank:"Officer",name:"Puffer",cost:3,type:"Walker",attack:2,defense:2},
"Rainz": {faction: "Life",rank:"Commander",name:"Rainz",cost:6,type:"Walker",attack:3,defense:4},
"Sapper": {faction: "Life",rank:"Officer",name:"Sapper",cost:5,type:"Walker",attack:1,defense:4},
"Shammann": {faction: "Life",rank:"General",name:"Shammann",cost:11,type:"Walker",attack:5,defense:6},
"Shroom": {faction: "Life",rank:"Officer",name:"Shroom",cost:4,type:"Walker",attack:4,defense:2},
"Vindrom": {faction: "Life",rank:"Officer",name:"Vindrom",cost:4,type:"Walker",attack:2,defense:3},
"Yggdrazil": {faction: "Life",rank:"General",name:"Yggdrazil",cost:11,type:"Walker",attack:4,defense:5},
"Z-Virus": {faction: "Life",rank:"General",name:"Z-Virus",cost:11,type:"Walker",attack:0,defense:0},
"Zap": {faction: "Life",rank:"Minion",name:"Zap",cost:1,type:"Walker",attack:1,defense:1},
"Zeeder": {faction: "Life",rank:"Commander",name:"Zeeder",cost:5,type:"Walker",attack:2,defense:5},
"Zplitter": {faction: "Life",rank:"Commander",name:"Zplitter",cost:7,type:"Walker",attack:3,defense:4},
"Boomer": {faction: "Toxic",rank:"Commander",name:"Boomer",cost:9,type:"Walker",attack:6,defense:6},
"Cherno-bill": {faction: "Toxic",rank:"General",name:"Cherno-bill",cost:11,type:"Heavy",attack:7,defense:9},
"Ectoplasm": {faction: "Toxic",rank:"Minion",name:"Ectoplasm",cost:1,type:"Walker",attack:2,defense:2},
"Embryo #026": {faction: "Toxic",rank:"Minion",name:"Embryo #026",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #047": {faction: "Toxic",rank:"Officer",name:"Embryo #047",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #079": {faction: "Toxic",rank:"Minion",name:"Embryo #079",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #080": {faction: "Toxic",rank:"Minion",name:"Embryo #080",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #081": {faction: "Toxic",rank:"Minion",name:"Embryo #081",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #082": {faction: "Toxic",rank:"Officer",name:"Embryo #082",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Germ": {faction: "Toxic",rank:"Minion",name:"Germ",cost:1,type:"Walker",attack:2,defense:1},
"Ghoul": {faction: "Toxic",rank:"Officer",name:"Ghoul",cost:2,type:"Walker",attack:3,defense:2},
"GooZilla": {faction: "Toxic",rank:"General",name:"GooZilla",cost:8,type:"Walker",attack:1,defense:1},
"Hazzard": {faction: "Toxic",rank:"Officer",name:"Hazzard",cost:5,type:"Walker",attack:4,defense:4},
"Poizom": {faction: "Toxic",rank:"Minion",name:"Poizom",cost:1,type:"Walker",attack:1,defense:1},
"Polluter": {faction: "Toxic",rank:"Officer",name:"Polluter",cost:4,type:"Walker",attack:3,defense:3},
"RelentleZZ": {faction: "Toxic",rank:"Officer",name:"RelentleZZ",cost:3,type:"Walker",attack:3,defense:6},
"Wazte": {faction: "Toxic",rank:"Minion",name:"Wazte",cost:2,type:"Heavy",attack:3,defense:3},
"Zeptic": {faction: "Toxic",rank:"Minion",name:"Zeptic",cost:1,type:"Walker",attack:1,defense:1},
"Zlopper": {faction: "Toxic",rank:"Commander",name:"Zlopper",cost:7,type:"Walker",attack:3,defense:5},
"Zludge": {faction: "Toxic",rank:"Commander",name:"Zludge",cost:5,type:"Walker",attack:4,defense:4},
"Zpitter": {faction: "Toxic",rank:"Minion",name:"Zpitter",cost:3,type:"Walker",attack:2,defense:2},
"Zteroid": {faction: "Toxic",rank:"Commander",name:"Zteroid",cost:6,type:"Walker",attack:5,defense:4},
"Blizzard": {faction: "Water",rank:"Commander",name:"Blizzard",cost:6,type:"Walker",attack:3,defense:4},
"Embryo #086": {faction: "Water",rank:"Minion",name:"Embryo #086",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #087": {faction: "Water",rank:"Minion",name:"Embryo #087",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #088": {faction: "Water",rank:"Minion",name:"Embryo #088",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #133": {faction: "Water",rank:"Minion",name:"Embryo #133",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #134": {faction: "Water",rank:"Minion",name:"Embryo #134",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #136": {faction: "Water",rank:"Officer",name:"Embryo #136",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #138": {faction: "Water",rank:"Officer",name:"Embryo #138",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Embryo #141": {faction: "Water",rank:"Commander",name:"Embryo #141",cost:-1,type:"Embryo",attack:-1,defense:-1},
"Freezzee": {faction: "Water",rank:"Officer",name:"Freezzee",cost:5,type:"Walker",attack:3,defense:3},
"Froztbite": {faction: "Water",rank:"Commander",name:"Froztbite",cost:4,type:"Walker",attack:0,defense:6},
"Geyzer": {faction: "Water",rank:"Officer",name:"Geyzer",cost:4,type:"Walker",attack:2,defense:3},
"Izze": {faction: "Water",rank:"Minion",name:"Izze",cost:1,type:"Walker",attack:1,defense:1},
"Jetter": {faction: "Water",rank:"Officer",name:"Jetter",cost:4,type:"Walker",attack:3,defense:3},
"Osmoziz": {faction: "Water",rank:"Minion",name:"Osmoziz",cost:2,type:"Walker",attack:1,defense:2},
"Tzunamy": {faction: "Water",rank:"General",name:"Tzunamy",cost:11,type:"Walker",attack:6,defense:6},
"Vortex": {faction: "Water",rank:"General",name:"Vortex",cost:11,type:"Walker",attack:6,defense:7},
"Zhatterer": {faction: "Water",rank:"Minion",name:"Zhatterer",cost:5,type:"Walker",attack:2,defense:4},
"Znowman": {faction: "Water",rank:"Minion",name:"Znowman",cost:4,type:"Heavy",attack:0,defense:5},
"Zplash": {faction: "Water",rank:"Commander",name:"Zplash",cost:6,type:"Walker",attack:4,defense:4},
"Zpring": {faction: "Water",rank:"Commander",name:"Zpring",cost:5,type:"Walker",attack:3,defense:4},
"Zub-Zero": {faction: "Water",rank:"Commander",name:"Zub-Zero",cost:7,type:"Walker",attack:4,defense:5}
};

let categoryList = [];
let currentDeck = {};

let chartData = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
	datasets: [{
		label: "Goo Cost Graph",
		backgroundColor: [
			'rgba(150, 150, 150, 0.4)',
			'rgba(180, 180, 255, 0.4)',
			'rgba(0, 0, 255, 0.4)',
			'rgba(150, 150, 150, 0.4)',
			'rgba(180, 180, 255, 0.4)',
			'rgba(0, 0, 255, 0.4)',
			'rgba(150, 150, 150, 0.4)',
			'rgba(180, 180, 255, 0.4)',
			'rgba(0, 0, 255, 0.4)',
			'rgba(150, 150, 150, 0.4)',
			'rgba(180, 180, 255, 0.4)',
			'rgba(0, 0, 255, 0.4)'
		],
		borderColor: [
			'rgba(150, 150, 150, 1)',
			'rgba(180, 180, 255, 1)',
			'rgba(0, 0, 255, 1)',
			'rgba(150, 150, 150, 1)',
			'rgba(180, 180, 255, 1)',
			'rgba(0, 0, 255, 1)',
			'rgba(150, 150, 150, 1)',
			'rgba(180, 180, 255, 1)',
			'rgba(0, 0, 255, 1)',
			'rgba(150, 150, 150, 1)',
			'rgba(180, 180, 255, 1)',
			'rgba(0, 0, 255, 1)'
		],
		borderWidth: 1,
		data: [0,0,0,0,0,0,0,0,0,0,0,0],
	}]
};


function loadFaction(faction)
{
	$("#cardList").empty();
	$.each( cardList, function(key,value){
		if (value.faction == faction)
		{
			let name = key;
			let cost = "Cost: " + value.cost;
			let att = "Attack: " + value.attack;
			let def = "Defense: " + value.defense;
			let buttonTest = $('<button/>',{
				text: name,
				click: function(){
					addToDeck(key);
				}
			});
			buttonTest.css({"width":"100px", "height":"50px"});
			$("#cardList").append(buttonTest);
		}
	});
}


function addToDeck(key)
{
	//Only add if there are less than 30 cards
	if (checkTotalCards() < 30)
	{
		if(currentDeck[key] !== undefined)
		{
			//increment counter by 1 as long as there's less than 4
			if(currentDeck[key] < 4)
				currentDeck[key] += 1;
			else
				alert("You cannot have more than 4 of a card in a deck");
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
		alert("You can only have 30 cards in your deck!");
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
	$.each( cardList, function(key,value){
		let toTest = value.faction;
		if(!categoryList.includes(toTest))
		{
			categoryList.push(toTest);
			console.log("Added: " + toTest);
			
			let buttonTest = $('<button/>',{
				text: toTest,
				click: function(){loadFaction(toTest);}
			});
			buttonTest.css({"width":"100px", "height":"50px"});
			$("#filter").append(buttonTest);
		}
	});
}

function populateDeck()
{
	$("#deck").empty();
	$.each( currentDeck, function(key,value){
		let buttonTest = $('<button/>',{
			text: key + ": " + value,
			click: function(){
				removeFromDeck(key);
			}
		});
		buttonTest.css({"width":"100px", "height":"50px"});
		$("#deck").append(buttonTest);
	});
	
	updateGraph();
}

function updateGraph()
{
	let graphData = [0,0,0,0,0,0,0,0,0,0,0,0];
	$.each( currentDeck, function(key,value){
		graphData[(cardList[key].cost-1)] += value;
		//console.log(cardList[key].cost);
	});
	
	chartData.datasets[0].data = graphData;
	window.chart.update();
}

$(document).ready(function(){
    loadFaction("Air");
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
					}
				}]
			}
		}
	});
});

