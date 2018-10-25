let wishlist = {};

function loadWishlistCards()
{	
	let sortedArray = [];
	$("#wishlistCardList").empty();
	$("#wishlistCardList").scrollLeft();
	
	$.each( cardList, function(key,value){
		if (testFilter(key, false))
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
				addToWishlist(key);
		});
				
		cardWrapper.append(cardImage);		
		
		$("#wishlistCardList").append(cardWrapper);
	});
}

function populateWishlistCategories()
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
					loadWishlistCards();
					}
			});

			$("#wishlistFilter").append(buttonTest);
	});
}

function emptyWishlist()
{
	wishlist = {};
	populateWishlist();
}

function populateWishlist()
{
	$("#list").empty();
	
	let sortedArray = [];	
	$.each( wishlist, function(key,value){
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
				removeFromWishlist(key);
		});
		
		let cardAmount = $('<h3 />', {
			text: wishlist[key]
		});

		cardWrapper.append(cardImage);
		cardWrapper.append(cardAmount);
			
		$("#list").append(cardWrapper);
	});
	
	updateCardAmount();
	$("#wishlistCount").text("Cards " + checkTotalCards(wishlist));
	updateWishlistURL();
	
}

function updateWishlistURL()
{
	let url = window.location.href.split('?')[0] + "?page=" + currentPage + "&";
	$.each( wishlist, function(key,value){
		url += key + "=" + value + "&";
	});
	url = url.slice(0, -1);
	
	url = encodeURI(url);
	
	$("#wishlistURL").val(url);
}

function removeFromWishlist(key)
{
	if(wishlist[key] == 1)
	{
		//remove from deck
		delete wishlist[key];
	}
	else
	{
		//decrement counter by 1
		wishlist[key] -= 1;
	}
	populateWishlist();
}

function addToWishlist(key)
{
	if(wishlist[key] !== undefined)
	{
		wishlist[key] += 1;
	}
	else
	{
		wishlist[key] = 1;
	}
	populateWishlist();
}

function clearFilter()
{
	$("#filterParams").val('');
	resetFilter();
	loadWishlistCards();
}