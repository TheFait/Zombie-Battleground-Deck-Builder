let ownedCards={};

let ownedList={};
$.each(cardList, function(key,value){
	ownedList[key] = {standard:0, backer:0, limited:0};
});

function parseText()
{
    let text = $("#textBox").val();

    let test = jQuery.parseHTML(text)[1];
	
	//console.log(test);

    let obj = $(test).find('div.custom-card');
	
	//console.log(obj[2]);
	$("#container").empty();
	ownedCards={};
	
    $.each(obj, function(key, value)
    {
		value = value.childNodes[0];
		let amount = Number(value.childNodes[3].innerText);
		//console.log(value.childNodes[3].innerText);
		let type = "";
		
		let id = value.getAttribute("href");
		id = id.substring(id.indexOf("/",2)+1,id.indexOf("/",7)-1);
		
		console.log(id);
		
		if (value.childNodes[9].innerText !== undefined)
			type = value.childNodes[9].innerText.trim();
		else
			type = "standard";
			
		
		try{
			ownedList[id][type] = amount;
		}
		catch(err)
		{
			console.log("Error in name: " + name);
		}
    });
	
	let table = $('<table />');
	let headRow = $('<tr />');
	headRow.append($('<th />').text("Name"));
	headRow.append($('<th />').text("Rank"));
	headRow.append($('<th />').text("Faction"));
	headRow.append($('<th />').text("Type"));
	headRow.append($('<th />').text("Goo Cost"));
	headRow.append($('<th />').text("Attack"));
	headRow.append($('<th />').text("Defense"));
	headRow.append($('<th />').text("Ability"));
	headRow.append($('<th />').text("Standard"));
	headRow.append($('<th />').text("Backer"));
	headRow.append($('<th />').text("Limited"));
	headRow.append($('<th />').text("Overflow"));
	table.append(headRow);
	
	$.each(ownedList, function(key,value)
	{		
		let row = $('<tr />');
		let keyData = $('<td />').text(cardList[key].name);
		let rank = $('<td />').text(cardList[key].rank);
		let faction = $('<td />').text(cardList[key].faction);
		let type = $('<td />').text(cardList[key].type);
		let cost = $('<td />').text(cardList[key].cost);
		let attack = $('<td />').text(cardList[key].attack);
		let defense = $('<td />').text(cardList[key].defense);
		let cardText = $('<td />').text(cardList[key].cardText);
		let standard = $('<td />').text(value.standard);
		let backer = $('<td />').text(value.backer);
		let limited = $('<td />').text(value.limited);
		
		let totalCards = Number(value.standard) + Number(value.backer) + Number(value.limited);
		let cardRank = cardList[key].rank;
		let overflowAmount = 0;
		
		switch (cardRank)
		{
			case "Item":
				overflowAmount = totalCards - MAX_ITEMS;
				break;
			case "Minion":
				overflowAmount = totalCards - MAX_MINIONS;
				break;
			case "General":
				overflowAmount = totalCards - MAX_GENERALS;
				break;
			case "Commander":
				overflowAmount = totalCards - MAX_COMMANDERS;
				break;
			case "Officer":
				overflowAmount = totalCards - MAX_OFFICERS;
				break;
			default:
				console.log("Error: " + cardRank);
		}
		
		
		let overflow = $('<td />').text(overflowAmount);
		
		row.append(keyData);
		row.append(rank);
		row.append(faction);
		row.append(type);
		row.append(cost);
		row.append(attack);
		row.append(defense);
		row.append(cardText);
		row.append(standard);
		row.append(backer);
		row.append(limited);
		row.append(overflow);
		table.append(row);
		
		ownedCards[key] = totalCards;
	});
	
	$("#container").append(table);
	
}