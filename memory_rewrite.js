var cardChoices = [["pink.png","pink_1.png"],["brown.png","brown_1.png"],["purple.png","purple_1.png"],["blue.png","blue_1.png"],["green.png","green_1.png"],["yellow.png","yellow_1.png"],["orange.png","orange_1.png"],["red.png","red_1.png"],["grey.png","grey_1.png"],["black.png","black_1.png"],["white.png","white_1.png"],["rectangle_pink.png","rectangle_pink_1.png"],["rectangle_brown.png","rectangle_brown_1.png"],["rectangle_purple.png","rectangle_purple_1.png"],["rectangle_blue.png","rectangle_blue_1.png"],["rectangle_green.png","rectangle_green_1.png"],["rectangle_yellow.png","rectangle_yellow_1.png"],["rectangle_orange.png","rectangle_orange_1.png"],["rectangle_red.png","rectangle_red_1.png"],["rectangle_grey.png","rectangle_grey_1.png"],["rectangle_black.png","rectangle_black_1.png"],["rectangle_white.png","rectangle_white_1.png"],["arrow_pink.png","arrow_pink_1.png"],["arrow_brown.png","arrow_brown_1.png"],["arrow_purple.png","arrow_purple_1.png"],["arrow_blue.png","arrow_blue_1.png"],["arrow_green.png","arrow_green_1.png"],["arrow_yellow.png","arrow_yellow_1.png"],["arrow_orange.png","arrow_orange_1.png"],["arrow_red.png","arrow_red_1.png"],["arrow_grey.png","arrow_grey_1.png"],["arrow_black.png","arrow_black_1.png"],["arrow_white.png","arrow_white_1.png"],["star_pink.png","star_pink_1.png"],["star_brown.png","star_brown_1.png"],["star_purple.png","star_purple_1.png"],["star_blue.png","star_blue_1.png"],["star_green.png","star_green_1.png"],["star_yellow.png","star_yellow_1.png"],["star_orange.png","star_orange_1.png"],["star_red.png","star_red_1.png"],["star_grey.png","star_grey_1.png"],["star_black.png","star_black_1.png"],["star_white.png","star_white_1.png"],["triangle_pink.png","triangle_pink_1.png"],["triangle_brown.png","triangle_brown_1.png"],["triangle_purple.png","triangle_purple_1.png"],["triangle_blue.png","triangle_blue_1.png"],["triangle_green.png","triangle_green_1.png"],["triangle_yellow.png","triangle_yellow_1.png"],["triangle_orange.png","triangle_orange_1.png"],["triangle_red.png","triangle_red_1.png"],["triangle_grey.png","triangle_grey_1.png"],["triangle_black.png","triangle_black_1.png"],["triangle_white.png","triangle_white_1.png"],["circle_pink.png","circle_pink_1.png"],["circle_brown.png","circle_brown_1.png"],["circle_purple.png","circle_purple_1.png"],["circle_blue.png","circle_blue_1.png"],["circle_green.png","circle_green_1.png"],["circle_yellow.png","circle_yellow_1.png"],["circle_orange.png","circle_orange_1.png"],["circle_red.png","circle_red_1.png"],["circle_grey.png","circle_grey_1.png"],["circle_black.png","circle_black_1.png"],["circle_white.png","circle_white_1.png"],["square_pink.png","square_pink_1.png"],["square_brown.png","square_brown_1.png"],["square_purple.png","square_purple_1.png"],["square_blue.png","square_blue_1.png"],["square_green.png","square_green_1.png"],["square_yellow.png","square_yellow_1.png"],["square_orange.png","square_orange_1.png"],["square_red.png","square_red_1.png"],["square_grey.png","square_grey_1.png"],["square_black.png","square_black_1.png"],["square_white.png","square_white_1.png"]];
var cardArray = [];
var gridSize = 20;
var seenCount = 0;
var squareClickable = true;

var clickCardArray = document.querySelectorAll('#memoryCards img');

clickCardArray.forEach(function(card) {
	card.addEventListener('click', clickCard)
})

initialiseGrid();

function initialiseGrid() {
	disperseCards();
}

function clickCard(event) {
	var id = event.target.id.replace(/[A-Za-z]+/, '');
	if (cardArray[id].status === "unseen" && squareClickable) {
		showCard(id);
		checkCards();
	}
}

function randomCardSelection() {
	var cardSelection = [];
	var cardPool = cardChoices;
	for (var card = 0; card < (gridSize / 2); card++) {
		var randomSelection = Math.floor(Math.random() * cardPool.length);
		cardSelection.push(cardPool[randomSelection]);
		cardPool.splice(randomSelection, 1);
	}
	return cardSelection;
}

// random image placement
function disperseCards() {
	var cardChoiceArray = randomCardSelection();
	// flatten array
	var cardChoiceArray = cardChoiceArray.join().split(',');
	while (cardChoiceArray.length > 0) {
		var randomNum = Math.floor(Math.random() * cardChoiceArray.length)
		var randomCardImg = cardChoiceArray[randomNum];
		var cardDetails = { img: randomCardImg, status: "unseen" }
		cardArray.push(cardDetails);
		cardChoiceArray.splice(randomNum, 1);
	}
}

function showCard(cardId) {
	if (seenCount === 0 || seenCount === 1) {
		var cardImg = document.querySelector('#memoryCards #card' + cardId);
		cardImg.src = "images/" + cardArray[cardId].img;
		cardArray[cardId].status = "seen";
		seenCount++;
	}
}

function checkCards() {
	if (seenCount === 2) {
		var cardCheckArray = [];
		cardArray.forEach(function(card) {
			if (card.status === "seen") {
				cardCheckArray.push({ img: card.img, index: cardArray.indexOf(card) });
			}
		});
		if (cardCheckArray.length > 0) {
			var card1 = cardCheckArray[0];
			var card2 = cardCheckArray[1];
			var card1Select = document.querySelector('#memoryCards #card' + card1.index);
			var card2Select = document.querySelector('#memoryCards #card' + card2.index);
			if (card1.img.replace('_1.png', '.png') === card2.img.replace('_1.png', '.png')) {
				cardArray[card1.index].status = "found";
				cardArray[card2.index].status = "found";
				card1Select.src = "images/correct_card.png";
				card2Select.src = "images/correct_card.png";
				checkWinStatus();
			} else {
				squareClickable = false;
				setTimeout(function() {
					card1Select.src = "images/plain_card.png";
					card2Select.src = "images/plain_card.png";
					cardArray[card1.index].status = "unseen";
					cardArray[card2.index].status = "unseen";
					squareClickable = true;
				}, 2000)
			}
		}
		seenCount = 0;
	}
 }

 function checkWinStatus() {
 	var gameWon = true;
 	cardArray.forEach(function(card) {
 		if (card.status !== "found") {
 			gameWon = false;
 		}
 	})

 	if (gameWon) {
 		winMessage = confirm("the game has been won. Restart new game?")
 		if (winMessage) { resetGrid(); }
 	}
 }

function resetGrid() {
	cardArray = [];

	clickCardArray.forEach(function(card) {
		card.src = "images/plain_card.png";
	})

	disperseCards();
}
