var languageSetting = 1

//Dictionary for images.
var cardChoices = [["pink.png","pink_1.png"],["brown.png","brown_1.png"],["purple.png","purple_1.png"],["blue.png","blue_1.png"],["green.png","green_1.png"],["yellow.png","yellow_1.png"],["orange.png","orange_1.png"],["red.png","red_1.png"],["grey.png","grey_1.png"],["black.png","black_1.png"],["white.png","white_1.png"],["rectangle_pink.png","rectangle_pink_1.png"],["rectangle_brown.png","rectangle_brown_1.png"],["rectangle_purple.png","rectangle_purple_1.png"],["rectangle_blue.png","rectangle_blue_1.png"],["rectangle_green.png","rectangle_green_1.png"],["rectangle_yellow.png","rectangle_yellow_1.png"],["rectangle_orange.png","rectangle_orange_1.png"],["rectangle_red.png","rectangle_red_1.png"],["rectangle_grey.png","rectangle_grey_1.png"],["rectangle_black.png","rectangle_black_1.png"],["rectangle_white.png","rectangle_white_1.png"],["arrow_pink.png","arrow_pink_1.png"],["arrow_brown.png","arrow_brown_1.png"],["arrow_purple.png","arrow_purple_1.png"],["arrow_blue.png","arrow_blue_1.png"],["arrow_green.png","arrow_green_1.png"],["arrow_yellow.png","arrow_yellow_1.png"],["arrow_orange.png","arrow_orange_1.png"],["arrow_red.png","arrow_red_1.png"],["arrow_grey.png","arrow_grey_1.png"],["arrow_black.png","arrow_black_1.png"],["arrow_white.png","arrow_white_1.png"],["star_pink.png","star_pink_1.png"],["star_brown.png","star_brown_1.png"],["star_purple.png","star_purple_1.png"],["star_blue.png","star_blue_1.png"],["star_green.png","star_green_1.png"],["star_yellow.png","star_yellow_1.png"],["star_orange.png","star_orange_1.png"],["star_red.png","star_red_1.png"],["star_grey.png","star_grey_1.png"],["star_black.png","star_black_1.png"],["star_white.png","star_white_1.png"],["triangle_pink.png","triangle_pink_1.png"],["triangle_brown.png","triangle_brown_1.png"],["triangle_purple.png","triangle_purple_1.png"],["triangle_blue.png","triangle_blue_1.png"],["triangle_green.png","triangle_green_1.png"],["triangle_yellow.png","triangle_yellow_1.png"],["triangle_orange.png","triangle_orange_1.png"],["triangle_red.png","triangle_red_1.png"],["triangle_grey.png","triangle_grey_1.png"],["triangle_black.png","triangle_black_1.png"],["triangle_white.png","triangle_white_1.png"],["circle_pink.png","circle_pink_1.png"],["circle_brown.png","circle_brown_1.png"],["circle_purple.png","circle_purple_1.png"],["circle_blue.png","circle_blue_1.png"],["circle_green.png","circle_green_1.png"],["circle_yellow.png","circle_yellow_1.png"],["circle_orange.png","circle_orange_1.png"],["circle_red.png","circle_red_1.png"],["circle_grey.png","circle_grey_1.png"],["circle_black.png","circle_black_1.png"],["circle_white.png","circle_white_1.png"],["square_pink.png","square_pink_1.png"],["square_brown.png","square_brown_1.png"],["square_purple.png","square_purple_1.png"],["square_blue.png","square_blue_1.png"],["square_green.png","square_green_1.png"],["square_yellow.png","square_yellow_1.png"],["square_orange.png","square_orange_1.png"],["square_red.png","square_red_1.png"],["square_grey.png","square_grey_1.png"],["square_black.png","square_black_1.png"],["square_white.png","square_white_1.png"]];

//Variable to allow random selection of dictionary images.
var cardLength = cardChoices.length;
console.log(cardLength);

//Variables to select random cards from dictionary images.
var cardOption1 = (Math.floor(Math.random() * cardLength));
console.log(cardOption1);
var cardSelected1a = cardChoices[cardOption1][0];
console.log(cardSelected1a);
var cardSelected1b = cardChoices[cardOption1][languageSetting];
console.log(cardSelected1b);

var cardOption2 = (Math.floor(Math.random() * cardLength));
console.log(cardOption2);
while (cardOption2 === cardOption1) {
cardOption2 = (Math.floor(Math.random() * cardLength));}
var cardSelected2a = cardChoices[cardOption2][0];
console.log(cardSelected2a);
var cardSelected2b = cardChoices[cardOption2][languageSetting];
console.log(cardSelected2b);

var cardOption3 = (Math.floor(Math.random() * cardLength));
console.log(cardOption3);
while (cardOption3 === cardOption1 || cardOption3 === cardOption2) {
cardOption3 = (Math.floor(Math.random() * cardLength));}
var cardSelected3a = cardChoices[cardOption3][0];
console.log(cardSelected3a);
var cardSelected3b = cardChoices[cardOption3][languageSetting];
console.log(cardSelected3b);

var cardOption4 = (Math.floor(Math.random() * cardLength));
console.log(cardOption4);
while (cardOption4 === cardOption1 || cardOption4 === cardOption2 || cardOption4 === cardOption3) {
cardOption4 = (Math.floor(Math.random() * cardLength));}
var cardSelected4a = cardChoices[cardOption4][0];
console.log(cardSelected4a);
var cardSelected4b = cardChoices[cardOption4][languageSetting];
console.log(cardSelected4b);

var cardOption5 = (Math.floor(Math.random() * cardLength));
console.log(cardOption5);
while (cardOption5 === cardOption1 || cardOption5 === cardOption2 || cardOption5 === cardOption3 || cardOption5 === cardOption4) {
cardOption5 = (Math.floor(Math.random() * cardLength));}
var cardSelected5a = cardChoices[cardOption5][0];
console.log(cardSelected5a);
var cardSelected5b = cardChoices[cardOption5][languageSetting];
console.log(cardSelected5b);

var cardOption6 = (Math.floor(Math.random() * cardLength));
console.log(cardOption6);
while (cardOption6 === cardOption1 || cardOption6 === cardOption2 || cardOption6 === cardOption3 || cardOption6 === cardOption4 || cardOption6 === cardOption5) {
cardOption6 = (Math.floor(Math.random() * cardLength));
}
var cardSelected6a = cardChoices[cardOption6][0];
console.log(cardSelected6a);
var cardSelected6b = cardChoices[cardOption6][languageSetting];
console.log(cardSelected6b);

var cardOption7 = (Math.floor(Math.random() * cardLength));
console.log(cardOption7);
while (cardOption7 === cardOption1 || cardOption7 === cardOption2 || cardOption7 === cardOption3 || cardOption7 === cardOption4 || cardOption7 === cardOption5 || cardOption7 === cardOption6) {
cardOption7 = (Math.floor(Math.random() * cardLength));
}
var cardSelected7a = cardChoices[cardOption7][0];
console.log(cardSelected7a);
var cardSelected7b = cardChoices[cardOption7][languageSetting];
console.log(cardSelected7b);

var cardOption8 = (Math.floor(Math.random() * cardLength));
console.log(cardOption8);
while (cardOption8 === cardOption1 || cardOption8 === cardOption2 || cardOption8 === cardOption3 || cardOption8 === cardOption4 || cardOption8 === cardOption5 || cardOption8 === cardOption6 || cardOption8 === cardOption7) {
cardOption8 = (Math.floor(Math.random() * cardLength));
}
var cardSelected8a = cardChoices[cardOption8][0];
console.log(cardSelected8a);
var cardSelected8b = cardChoices[cardOption8][languageSetting];
console.log(cardSelected8b);

var cardOption9 = (Math.floor(Math.random() * cardLength));
console.log(cardOption9);
while (cardOption9 === cardOption1 || cardOption9 === cardOption2 || cardOption9 === cardOption3 || cardOption9 === cardOption4 || cardOption9 === cardOption5 || cardOption9 === cardOption6 || cardOption9 === cardOption7 || cardOption9 === cardOption8) {
cardOption9 = (Math.floor(Math.random() * cardLength));
}
var cardSelected9a = cardChoices[cardOption9][0];
console.log(cardSelected9a);
var cardSelected9b = cardChoices[cardOption9][languageSetting];
console.log(cardSelected9b);

var cardOption10 = (Math.floor(Math.random() * cardLength));
console.log(cardOption10);
while (cardOption10 === cardOption1 || cardOption10 === cardOption2 || cardOption10 === cardOption3 || cardOption10 === cardOption4 || cardOption10 === cardOption5 || cardOption10 === cardOption6 || cardOption10 === cardOption7 || cardOption10 === cardOption8 || cardOption10 === cardOption9) {
cardOption10 = (Math.floor(Math.random() * cardLength));
}
var cardSelected10a = cardChoices[cardOption10][0];
console.log(cardSelected10a);
var cardSelected10b = cardChoices[cardOption10][languageSetting];
console.log(cardSelected10b);

//Array to take selected cards for shuffling.
var shuffleArray = [cardSelected1a, cardSelected1b, cardSelected2a, cardSelected2b, cardSelected3a, cardSelected3b, cardSelected4a, cardSelected4b, cardSelected5a, cardSelected5b, cardSelected6a, cardSelected6b, cardSelected7a, cardSelected7b, cardSelected8a, cardSelected8b, cardSelected9a, cardSelected9b, cardSelected10a, cardSelected10b];
var shuffleLength = shuffleArray.length;
console.log(shuffleLength);

//Variables to shuffle cards on the game board.
var shuffle1 = (Math.floor(Math.random() * shuffleLength));
var cardShuffle1 = shuffleArray[shuffle1];
console.log(cardShuffle1);

var shuffle2 = (Math.floor(Math.random() * shuffleLength));
while (shuffle2 === shuffle1) {
	shuffle2 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle2 = shuffleArray[shuffle2];
console.log(cardShuffle2);

var shuffle3 = (Math.floor(Math.random() * shuffleLength));
while (shuffle3 === shuffle1 || shuffle3 === shuffle2) {
	shuffle3 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle3 = shuffleArray[shuffle3];
console.log(cardShuffle3);

var shuffle4 = (Math.floor(Math.random() * shuffleLength));
while (shuffle4 === shuffle1 || shuffle4 === shuffle2 || shuffle4 === shuffle3) {
	shuffle4 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle4 = shuffleArray[shuffle4];
console.log(cardShuffle4);

var shuffle5 = (Math.floor(Math.random() * shuffleLength));
while (shuffle5 === shuffle1 || shuffle5 === shuffle2 || shuffle5 === shuffle3 || shuffle5 === shuffle4) {
	shuffle5 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle5 = shuffleArray[shuffle5];
console.log(cardShuffle5);

var shuffle6 = (Math.floor(Math.random() * shuffleLength));
while (shuffle6 === shuffle1 || shuffle6 === shuffle2 || shuffle6 === shuffle3 || shuffle6 === shuffle4 || shuffle6 === shuffle5) {
	shuffle6 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle6 = shuffleArray[shuffle6];
console.log(cardShuffle6);

var shuffle7 = (Math.floor(Math.random() * shuffleLength));
while (shuffle7 === shuffle1 || shuffle7 === shuffle2 || shuffle7 === shuffle3 || shuffle7 === shuffle4 || shuffle7 === shuffle5 || shuffle7 === shuffle6) {
	shuffle7 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle7 = shuffleArray[shuffle7];
console.log(cardShuffle7);

var shuffle8 = (Math.floor(Math.random() * shuffleLength));
while (shuffle8 === shuffle1 || shuffle8 === shuffle2 || shuffle8 === shuffle3 || shuffle8 === shuffle4 || shuffle8 === shuffle5 || shuffle8 === shuffle6 || shuffle8 === shuffle7) {
	shuffle8 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle8 = shuffleArray[shuffle8];
console.log(cardShuffle8);

var shuffle9 = (Math.floor(Math.random() * shuffleLength));
while (shuffle9 === shuffle1 || shuffle9 === shuffle2 || shuffle9 === shuffle3 || shuffle9 === shuffle4 || shuffle9 === shuffle5 || shuffle9 === shuffle6 || shuffle9 === shuffle7 || shuffle9 === shuffle8) {
	shuffle9 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle9 = shuffleArray[shuffle9];
console.log(cardShuffle9);

var shuffle10 = (Math.floor(Math.random() * shuffleLength));
while (shuffle10 === shuffle1 || shuffle10 === shuffle2 || shuffle10 === shuffle3 || shuffle10 === shuffle4 || shuffle10 === shuffle5 || shuffle10 === shuffle6 || shuffle10 === shuffle7 || shuffle10 === shuffle8 || shuffle10 === shuffle9) {
	shuffle10 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle10 = shuffleArray[shuffle10];
console.log(cardShuffle10);

var shuffle11 = (Math.floor(Math.random() * shuffleLength));
while (shuffle11 === shuffle1 || shuffle11 === shuffle2 || shuffle11 === shuffle3 || shuffle11 === shuffle4 || shuffle11 === shuffle5 || shuffle11 === shuffle6 || shuffle11 === shuffle7 || shuffle11 === shuffle8 || shuffle11 === shuffle9 || shuffle11 === shuffle10) {
	shuffle11 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle11 = shuffleArray[shuffle11];

var shuffle12 = (Math.floor(Math.random() * shuffleLength));
while (shuffle12 === shuffle1 || shuffle12 === shuffle2 || shuffle12 === shuffle3 || shuffle12 === shuffle4 || shuffle12 === shuffle5 || shuffle12 === shuffle6 || shuffle12 === shuffle7 || shuffle12 === shuffle8 || shuffle12 === shuffle9 || shuffle12 === shuffle10 || shuffle12 === shuffle11) {
	shuffle12 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle12 = shuffleArray[shuffle12];

var shuffle13 = (Math.floor(Math.random() * shuffleLength));
while (shuffle13 === shuffle1 || shuffle13 === shuffle2 || shuffle13 === shuffle3 || shuffle13 === shuffle4 || shuffle13 === shuffle5 || shuffle13 === shuffle6 || shuffle13 === shuffle7 || shuffle13 === shuffle8 || shuffle13 === shuffle9 || shuffle13 === shuffle10 || shuffle13 === shuffle11 || shuffle13 === shuffle12) {
	shuffle13 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle13 = shuffleArray[shuffle13];

var shuffle14 = (Math.floor(Math.random() * shuffleLength));
while (shuffle14 === shuffle1 || shuffle14 === shuffle2 || shuffle14 === shuffle3 || shuffle14 === shuffle4 || shuffle14 === shuffle5 || shuffle14 === shuffle6 || shuffle14 === shuffle7 || shuffle14 === shuffle8 || shuffle14 === shuffle9 || shuffle14 === shuffle10 || shuffle14 === shuffle11 || shuffle14 === shuffle12 || shuffle14 === shuffle13) {
	shuffle14 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle14 = shuffleArray[shuffle14];

var shuffle15 = (Math.floor(Math.random() * shuffleLength));
while (shuffle15 === shuffle1 || shuffle15 === shuffle2 || shuffle15 === shuffle3 || shuffle15 === shuffle4 || shuffle15 === shuffle5 || shuffle15 === shuffle6 || shuffle15 === shuffle7 || shuffle15 === shuffle8 || shuffle15 === shuffle9 || shuffle15 === shuffle10 || shuffle15 === shuffle11 || shuffle15 === shuffle12 || shuffle15 === shuffle13 || shuffle15 === shuffle14) {
	shuffle15 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle15 = shuffleArray[shuffle15];

var shuffle16 = (Math.floor(Math.random() * shuffleLength));
while (shuffle16 === shuffle1 || shuffle16 === shuffle2 || shuffle16 === shuffle3 || shuffle16 === shuffle4 || shuffle16 === shuffle5 || shuffle16 === shuffle6 || shuffle16 === shuffle7 || shuffle16 === shuffle8 || shuffle16 === shuffle9 || shuffle16 === shuffle10 || shuffle16 === shuffle11 || shuffle16 === shuffle12 || shuffle16 === shuffle13 || shuffle16 === shuffle14 || shuffle16 === shuffle15) {
	shuffle16 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle16 = shuffleArray[shuffle16];

var shuffle17 = (Math.floor(Math.random() * shuffleLength));
while (shuffle17 === shuffle1 || shuffle17 === shuffle2 || shuffle17 === shuffle3 || shuffle17 === shuffle4 || shuffle17 === shuffle5 || shuffle17 === shuffle6 || shuffle17 === shuffle7 || shuffle17 === shuffle8 || shuffle17 === shuffle9 || shuffle17 === shuffle10 || shuffle17 === shuffle11 || shuffle17 === shuffle12 || shuffle17 === shuffle13 || shuffle17 === shuffle14 || shuffle17 === shuffle15 || shuffle17 === shuffle16) {
	shuffle17 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle17 = shuffleArray[shuffle17];

var shuffle18 = (Math.floor(Math.random() * shuffleLength));
while (shuffle18 === shuffle1 || shuffle18 === shuffle2 || shuffle18 === shuffle3 || shuffle18 === shuffle4 || shuffle18 === shuffle5 || shuffle18 === shuffle6 || shuffle18 === shuffle7 || shuffle18 === shuffle8 || shuffle18 === shuffle9 || shuffle18 === shuffle10 || shuffle18 === shuffle11 || shuffle18 === shuffle12 || shuffle18 === shuffle13 || shuffle18 === shuffle14 || shuffle18 === shuffle15 || shuffle18 === shuffle16 || shuffle18 === shuffle17) {
	shuffle18 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle18 = shuffleArray[shuffle18];

var shuffle19 = (Math.floor(Math.random() * shuffleLength));
while (shuffle19 === shuffle1 || shuffle19 === shuffle2 || shuffle19 === shuffle3 || shuffle19 === shuffle4 || shuffle19 === shuffle5 || shuffle19 === shuffle6 || shuffle19 === shuffle7 || shuffle19 === shuffle8 || shuffle19 === shuffle9 || shuffle19 === shuffle10 || shuffle19 === shuffle11 || shuffle19 === shuffle12 || shuffle19 === shuffle13 || shuffle19 === shuffle14 || shuffle19 === shuffle15 || shuffle19 === shuffle16 || shuffle19 === shuffle17 || shuffle19 === shuffle18) {
	shuffle19 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle19 = shuffleArray[shuffle19];

var shuffle20 = (Math.floor(Math.random() * shuffleLength));
while (shuffle20 === shuffle1 || shuffle20 === shuffle2 || shuffle20 === shuffle3 || shuffle20 === shuffle4 || shuffle20 === shuffle5 || shuffle20 === shuffle6 || shuffle20 === shuffle7 || shuffle20 === shuffle8 || shuffle20 === shuffle9 || shuffle20 === shuffle10 || shuffle20 === shuffle11 || shuffle20 === shuffle12 || shuffle20 === shuffle13 || shuffle20 === shuffle14 || shuffle20 === shuffle15 || shuffle20 === shuffle16 || shuffle20 === shuffle17 || shuffle20 === shuffle18 || shuffle20 === shuffle19) {
	shuffle20 = (Math.floor(Math.random() * shuffleLength));
}
var cardShuffle20 = shuffleArray[shuffle20];

//Variables to activate card onclick functions.
var clickArray = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// var click1 = 1;
// var click2 = 1;
// var click3 = 1;
// var click4 = 1;
// var click5 = 1;
// var click6 = 1;
// var click7 = 1;
// var click8 = 1;
// var click9 = 1;
// var click10 = 1;
// var click11 = 1;
// var click12 = 1;
// var click13 = 1;
// var click14 = 1;
// var click15 = 1;
// var click16 = 1;
// var click17 = 1;
// var click18 = 1;
// var click19 = 1;
// var click20 = 1;

//Variables to handle card swapping and comparing.
var puzzle = "plain_card.png";
var solved = "correct_card.png";
var firstCard = "unclicked";
var firstCardPosition = "unknown";
var secondCard = "unclicked";
var secondCardPosition = "unknown";
var thirdCard = "unclicked";
var thirdCardPosition = "unknown";

function resetFirst(){
	firstCard = "unclicked";
	firstCardPosition = "unknown";}

function resetSecond(){
	secondCard = "unclicked";
	secondCardPosition = "unknown";}

function resetThird(){
	firstCard = thirdCard;
	firstCardPosition = thirdCardPosition;
	thirdCard = "unclicked";
	thirdCardPosition = "unknown";
	firstCardPosition.src = firstCard;
}

function noMatch(click){//Resetting click values from previous incorrect guess.
	if (click === 2){
		click = 1;
		console.log("Card 1 now equals " + click1);
	}
	// if (click2 === 2){
	// 	click2 = 1;
	// 	console.log("Card 2 now equals " + click2);
	// }
	// if (click3 === 2){
	// 	click3 = 1;
	// 	console.log("Card 3 now equals " + click3);
	// }
	// if (click4 === 2){
	// 	click4 = 1;
	// 	console.log("Card 4 now equals " + click4);
	// }
	// if (click5 === 2){
	// 	click5 = 1;
	// 	console.log("Card 5 now equals " + click5);
	// }
	// if (click6 === 2){
	// 	click6 = 1;
	// 	console.log("Card 6 now equals " + click6);
	// }
	// if (click7 === 2){
	// 	click7 = 1;
	// 	console.log("Card 7 now equals " + click7);
	// }
	// if (click8 === 2){
	// 	click8 = 1;
	// 	console.log("Card 8 now equals " + click8);
	// }
	// if (click9 === 2){
	// 	click9 = 1;
	// 	console.log("Card 9 now equals " + click9);
	// }
	// if (click10 === 2){
	// 	click10 = 1;
	// 	console.log("Card 10 now equals " + click10);
	// }
	// if (click11 === 2){
	// 	click11 = 1;
	// 	console.log("Card 11 now equals " + click11);
	// }
	// if (click12 === 2){
	// 	click12 = 1;
	// 	console.log("Card 12 now equals " + click12);
	// }
	// if (click13 === 2){
	// 	click13 = 1;
	// 	console.log("Card 13 now equals " + click13);
	// }
	// if (click14 === 2){
	// 	click14 = 1;
	// 	console.log("Card 14 now equals " + click14);
	// }
	// if (click15 === 2){
	// 	click15 = 1;
	// 	console.log("Card 15 now equals " + click15);
	// }
	// if (click16 === 2){
	// 	click16 = 1;
	// 	console.log("Card 16 now equals " + click16);
	// }
	// if (click17 === 2){
	// 	click17 = 1;
	// 	console.log("Card 17 now equals " + click17);
	// }
	// if (click18 === 2){
	// 	click18 = 1;
	// 	console.log("Card 18 now equals " + click18);
	// }
	// if (click19 === 2){
	// 	click19 = 1;
	// 	console.log("Card 19 now equals " + click19);
	// }
	// if (click20 === 2){
	// 	click20 = 1;
	// 	console.log("Card 20 now equals " + click20);
	// }
}

function theyMatch(click){
	console.log("theyMatch runs");
	if (click === 2){
		click = 3;
		console.log("Card 1 now equals " + click1);
	}
	// if (click2 === 2){
	// 	click2 = 3;
	// 	console.log("Card 2 now equals " + click2);
	// }
	// if (click3 === 2){
	// 	click3 = 3;
	// 	console.log("Card 3 now equals " + click3);
	// }
	// if (click4 === 2){
	// 	click4 = 3;
	// 	console.log("Card 4 now equals " + click4);
	// }
	// if (click5 === 2){
	// 	click5 = 3;
	// 	console.log("Card 5 now equals " + click5);
	// }
	// if (click6 === 2){
	// 	click6 = 3;
	// 	console.log("Card 6 now equals " + click6);
	// }
	// if (click7 === 2){
	// 	click7 = 3;
	// 	console.log("Card 7 now equals " + click7);
	// }
	// if (click8 === 2){
	// 	click8 = 3;
	// 	console.log("Card 8 now equals " + click8);
	// }
	// if (click9 === 2){
	// 	click9 = 3;
	// 	console.log("Card 9 now equals " + click9);
	// }
	// if (click10 === 2){
	// 	click10 = 3;
	// 	console.log("Card 10 now equals " + click10);
	// }
	// if (click11 === 2){
	// 	click11 = 3;
	// 	console.log("Card 11 now equals " + click11);
	// }
	// if (click12 === 2){
	// 	click12 = 3;
	// 	console.log("Card 12 now equals " + click12);
	// }
	// if (click13 === 2){
	// 	click13 = 3;
	// 	console.log("Card 13 now equals " + click13);
	// }
	// if (click14 === 2){
	// 	click14 = 3;
	// 	console.log("Card 14 now equals " + click14);
	// }
	// if (click15 === 2){
	// 	click15 = 3;
	// 	console.log("Card 15 now equals " + click15);
	// }
	// if (click16 === 2){
	// 	click16 = 3;
	// 	console.log("Card 16 now equals " + click16);
	// }
	// if (click17 === 2){
	// 	click17 = 3;
	// 	console.log("Card 17 now equals " + click17);
	// }
	// if (click18 === 2){
	// 	click18 = 3;
	// 	console.log("Card 18 now equals " + click18);
	// }
	// if (click19 === 2){
	// 	click19 = 3;
	// 	console.log("Card 19 now equals " + click19);
	// }
	// if (click20 === 2){
	// 	click20 = 3;
	// 	console.log("Card 20 now equals " + click20);
	// }
	//Replace puzzle card with solved image.
	firstCardPosition.src = solved;
	secondCardPosition.src = solved;
	resetFirst();
	resetSecond();
	winningMemory();
}

function winningMemory(){
	console.log("Winning function runs.");
	// if (clickArray[0] === 3 && click2 === 3 && click3 === 3 && click4 === 3 && click5 === 3 && click6 === 3 && click7 === 3 && click8 === 3 && click9 === 3 && click10 === 3 && click11 === 3 && click12 === 3 && click13 === 3 && click14 === 3 && click15 === 3 && click16 === 3 && click17 === 3 && click18 === 3 && click19 === 3 && click20 === 3){
	// 	alert("You win!");
	// }
	var win = true
	clickArray.forEach(function(click) {
		if (click !== '3') { win = false }
	})

	if (win) { alert('You win!'); }
}

function checkMatch(){
	console.log("checkMatch runs");
	if(firstCard === cardSelected1a || firstCard === cardSelected1b){
		if(secondCard === cardSelected1a || secondCard === cardSelected1b){
			theyMatch(clickArray[0]);
		}
		else {
			noMatch(clickArray[0]);
		}
	}
	if(firstCard === cardSelected2a || firstCard === cardSelected2b){
		if(secondCard === cardSelected2a || secondCard === cardSelected2b){
			theyMatch(clickArray[1]);
		}
		else {
			noMatch(clickArray[1]);
		}
	}
	if(firstCard === cardSelected3a || firstCard === cardSelected3b){
		if(secondCard === cardSelected3a || secondCard === cardSelected3b){
			theyMatch(clickArray[2]);
		}
		else {
			noMatch(clickArray[2]);
		}
	}
	if(firstCard === cardSelected4a || firstCard === cardSelected4b){
		if(secondCard === cardSelected4a || secondCard === cardSelected4b){
			theyMatch(clickArray[3]);
		}
		else {
			noMatch(clickArray[3]);
		}
	}
	if(firstCard === cardSelected5a || firstCard === cardSelected5b){
		if(secondCard === cardSelected5a || secondCard === cardSelected5b){
			theyMatch(clickArray[4]);
		}
		else {
			noMatch(clickArray[4]);
		}
	}
	if(firstCard === cardSelected6a || firstCard === cardSelected6b){
		if(secondCard === cardSelected6a || secondCard === cardSelected6b){
			theyMatch(clickArray[5]);
		}
		else {
			noMatch(clickArray[5]);
		}
	}
	if(firstCard === cardSelected7a || firstCard === cardSelected7b){
		if(secondCard === cardSelected7a || secondCard === cardSelected7b){
			theyMatch(clickArray[6]);
		}
		else {
			noMatch(clickArray[6]);
		}
	}
	if(firstCard === cardSelected8a || firstCard === cardSelected8b){
		if(secondCard === cardSelected8a || secondCard === cardSelected8b){
			theyMatch(clickArray[7]);
		}
		else {
			noMatch(clickArray[7]);
		}
	}
	if(firstCard === cardSelected9a || firstCard === cardSelected9b){
		if(secondCard === cardSelected9a || secondCard === cardSelected9b){
			theyMatch(clickArray[8]);
		}
		else {
			noMatch(clickArray[8]);
		}
	}
	if(firstCard === cardSelected10a || firstCard === cardSelected10b){
		if(secondCard === cardSelected10a || secondCard === cardSelected10b){
			theyMatch(clickArray[9]);
		}
		else {
			noMatch(clickArray[9]);
		}
	}
}

function checkPair (){ //Function to check if the cards are pairs or not.
	console.log("checkPair function loads.");
	//If thirdCard is clicked then a new attempt has begun. This is listed before the second card check so that the card values remain correct.
	if (thirdCard !== "unclicked"){
		console.log("Third card check successful.");
		//Replace cards from previous guess with puzzle image.
		firstCardPosition.src = puzzle;
		secondCardPosition.src = puzzle;
		//Reset other cards in checker.
		resetSecond();
		resetThird();
	}
	//If secondCard remains clicked after thirdCard check has finished then the checkMatch function will run to compare the two revealed cards.
	if (secondCard !== "unclicked"){
		console.log("Second card check successful.");
		checkMatch();
	}
}

function clickCard(click, event) {
	// console.log("Card 2 clicked");
	var position2 = event.target;
	console.log(position2);
	if (click === 1) {
		// console.log("Card 2 equals 1");
		position2.src = cardShuffle2;
		click = 2;
		if (firstCard === "unclicked"){
			firstCard = cardShuffle2;
			firstCardPosition = position2;}
		else if (secondCard === "unclicked"){
			secondCard = cardShuffle2;
			secondCardPosition = position2;
			}
		else if (thirdCard === "unclicked"){
			thirdCard = cardShuffle2;
			thirdCardPosition = position2;
		}
		checkPair();
	}
}

var clickCard1Select = document.querySelector('#card1');
var clickCard2Select = document.querySelector('#card2');
var clickCard3Select = document.querySelector('#card3');
var clickCard4Select = document.querySelector('#card4');
var clickCard5Select = document.querySelector('#card5');
var clickCard6Select = document.querySelector('#card6');
var clickCard7Select = document.querySelector('#card7');
var clickCard8Select = document.querySelector('#card8');
var clickCard9Select = document.querySelector('#card9');
var clickCard10Select = document.querySelector('#card10');
var clickCard11Select = document.querySelector('#card11');
var clickCard12Select = document.querySelector('#card12');
var clickCard13Select = document.querySelector('#card13');
var clickCard14Select = document.querySelector('#card14');
var clickCard15Select = document.querySelector('#card15');
var clickCard16Select = document.querySelector('#card16');
var clickCard17Select = document.querySelector('#card17');
var clickCard18Select = document.querySelector('#card18');
var clickCard19Select = document.querySelector('#card19');
var clickCard20Select = document.querySelector('#card20');

clickCard1Select.addEventListener('click', (event) => clickCard(clickArray[0], event)) 
clickCard2Select.addEventListener('click', (event) => clickCard(clickArray[1], event)) 
clickCard3Select.addEventListener('click', (event) => clickCard(clickArray[2], event)) 
clickCard4Select.addEventListener('click', (event) => clickCard(clickArray[3], event)) 
clickCard5Select.addEventListener('click', (event) => clickCard(clickArray[4], event)) 
clickCard6Select.addEventListener('click', (event) => clickCard(clickArray[5], event)) 
clickCard7Select.addEventListener('click', (event) => clickCard(clickArray[6], event)) 
clickCard8Select.addEventListener('click', (event) => clickCard(clickArray[7], event)) 
clickCard9Select.addEventListener('click', (event) => clickCard(clickArray[8], event)) 
clickCard10Select.addEventListener('click', (event) => clickCard(clickArray[9], event))
clickCard11Select.addEventListener('click', (event) => clickCard(clickArray[10], event))
clickCard12Select.addEventListener('click', (event) => clickCard(clickArray[11], event))
clickCard13Select.addEventListener('click', (event) => clickCard(clickArray[12], event))
clickCard14Select.addEventListener('click', (event) => clickCard(clickArray[13], event))
clickCard15Select.addEventListener('click', (event) => clickCard(clickArray[14], event))
clickCard16Select.addEventListener('click', (event) => clickCard(clickArray[15], event))
clickCard17Select.addEventListener('click', (event) => clickCard(clickArray[16], event))
clickCard18Select.addEventListener('click', (event) => clickCard(clickArray[17], event))
clickCard19Select.addEventListener('click', (event) => clickCard(clickArray[18], event))
clickCard20Select.addEventListener('click', (event) => clickCard(clickArray[19], event))

//Onclick functions from HTML file.
// function clickCard1() {
// 	console.log("Card 1 clicked");
// 	//Variable to link to the correct HTML elements.
// 	var position1 = document.getElementById("card1");
// 	//If the card has not been selected then it will be set to 1. If the card has been clicked on then it will be set to 2. If the card has been solved then it will be set to 3. The if statement prevents players from removing cards from the board by double clicking on them.
// 	if (click1 === 1){
// 		console.log("Card 1 equals 1");
// 		//Displays the image for this card.
// 		position1.src = cardShuffle1;
// 		//Updates the card value to show that the image is visible.
// 		click1 = 2;
// 		//Else if statement to update the matching variables.
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle1;
// 			firstCardPosition = position1;
// 			console.log("first card updated");}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle1;
// 			secondCardPosition = position1;
// 			console.log("second card updated");
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle1;
// 			thirdCardPosition = position1;
// 			console.log("third card updated");
// 		}
// 		//Run the matching functions.
// 		checkPair();}
// 	//Else statement for debugging purposes.
// 	else {
// 	console.log("else statement active.");}
//   }

// function clickCard2() {
// 	console.log("Card 2 clicked");
// 	var position2 = document.getElementById("card2");
// 	if (click2 === 1){
// 		console.log("Card 2 equals 1");
// 		position2.src = cardShuffle2;
// 		click2 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle2;
// 			firstCardPosition = position2;}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle2;
// 			secondCardPosition = position2;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle2;
// 			thirdCardPosition = position2;
// 		}
// 		checkPair();}
// }

// function clickCard3() {
// 	console.log("Card 3 clicked");
// 	var position3 = document.getElementById("card3");
// 	if (click3 === 1){
// 		console.log("Card 3 equals 1");
// 		position3.src = cardShuffle3;
// 		click3 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle3;
// 			firstCardPosition = position3;}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle3;
// 			secondCardPosition = position3;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle3;
// 			thirdCardPosition = position3;
// 		}
// 		checkPair();}
// }

// function clickCard4() {
// 	console.log("Card 4 clicked");
// 	var position4 = document.getElementById("card4");
// 	if (click4 === 1){
// 		console.log("Card 4 equals 1");
// 		position4.src = cardShuffle4;
// 		click4 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle4;
// 			firstCardPosition = position4;}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle4;
// 			secondCardPosition = position4;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle4;
// 			thirdCardPosition = position4;
// 		}
// 		checkPair();}
// }

// function clickCard5() {
// 	console.log("Card 5 clicked");
// 	var position5 = document.getElementById("card5");
// 	if (click5 === 1){
// 		console.log("Card 5 equals 1");
// 		position5.src = cardShuffle5;
// 		click5 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle5;
// 			firstCardPosition = position5;
// 			console.log(firstCardPosition);}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle5;
// 			secondCardPosition = position5;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle5;
// 			thirdCardPosition = position5;
// 		}
// 		checkPair();}
// }

// function clickCard6() {
// 	console.log("Card 6 clicked");
// 	var position6 = document.getElementById("card6");
// 	if (click6 === 1){
// 		console.log("Card 6 equals 1");
// 		position6.src = cardShuffle6;
// 		click6 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle6;
// 			firstCardPosition = position6;
// 			console.log(firstCardPosition);}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle6;
// 			secondCardPosition = position6;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle6;
// 			thirdCardPosition = position6;
// 		}
// 		checkPair();}
// }

// function clickCard7() {
// 	console.log("Card 7 clicked");
// 	var position7 = document.getElementById("card7");
// 	if (click7 === 1){
// 		console.log("Card 7 equals 1");
// 		position7.src = cardShuffle7;
// 		click7 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle7;
// 			firstCardPosition = position7;
// 			console.log(firstCardPosition);}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle7;
// 			secondCardPosition = position7;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle7;
// 			thirdCardPosition = position7;
// 		}
// 		checkPair();}
// }

// function clickCard8() {
// 	console.log("Card 8 clicked");
// 	var position8 = document.getElementById("card8");
// 	if (click8 === 1){
// 		console.log("Card 8 equals 1");
// 		position8.src = cardShuffle8;
// 		click8 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle8;
// 			firstCardPosition = position8;
// 			console.log(firstCardPosition);}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle8;
// 			secondCardPosition = position8;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle8;
// 			thirdCardPosition = position8;
// 		}
// 		checkPair();}
// }

// function clickCard9() {
// 	console.log("Card 9 clicked");
// 	var position9 = document.getElementById("card9");
// 	if (click9 === 1){
// 		console.log("Card 9 equals 1");
// 		position9.src = cardShuffle9;
// 		click9 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle9;
// 			firstCardPosition = position9;
// 			console.log(firstCardPosition);}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle9;
// 			secondCardPosition = position9;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle9;
// 			thirdCardPosition = position9;
// 		}
// 		checkPair();}
// }

// function clickCard10() {
// 	console.log("Card 10 clicked");
// 	var position10 = document.getElementById("card10");
// 	if (click10 === 1){
// 		console.log("Card 10 equals 1");
// 		position10.src = cardShuffle10;
// 		click10 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle10;
// 			firstCardPosition = position10;}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle10;
// 			secondCardPosition = position10;
// 			}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle10;
// 			thirdCardPosition = position10;
// 		}
// 		checkPair();}
// }

// function clickCard11() {
// 	var position11 = document.getElementById("card11");
// 	if (click11 === 1){
// 		position11.src = cardShuffle11;
// 		click11 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle11;
// 			firstCardPosition = position11;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle11;
// 			secondCardPosition = position11;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle11;
// 			thirdCardPosition = position11;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard12() {
// 	var position12 = document.getElementById("card12");
// 	if (click12 === 1){
// 		position12.src = cardShuffle12;
// 		click12 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle12;
// 			firstCardPosition = position12;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle12;
// 			secondCardPosition = position12;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle12;
// 			thirdCardPosition = position12;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard13() {
// 	var position13 = document.getElementById("card13");
// 	if (click13 === 1){
// 		position13.src = cardShuffle13;
// 		click13 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle13;
// 			firstCardPosition = position13;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle13;
// 			secondCardPosition = position13;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle13;
// 			thirdCardPosition = position13;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard14() {
// 	var position14 = document.getElementById("card14");
// 	if (click14 === 1){
// 		position14.src = cardShuffle14;
// 		click14 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle14;
// 			firstCardPosition = position14;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle14;
// 			secondCardPosition = position14;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle14;
// 			thirdCardPosition = position14;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard15() {
// 	var position15 = document.getElementById("card15");
// 	if (click15 === 1){
// 		position15.src = cardShuffle15;
// 		click15 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle15;
// 			firstCardPosition = position15;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle15;
// 			secondCardPosition = position15;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle15;
// 			thirdCardPosition = position15;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard16() {
// 	var position16 = document.getElementById("card16");
// 	if (click16 === 1){
// 		position16.src = cardShuffle16;
// 		click16 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle16;
// 			firstCardPosition = position16;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle16;
// 			secondCardPosition = position16;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle16;
// 			thirdCardPosition = position16;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard17() {
// 	var position17 = document.getElementById("card17");
// 	if (click17 === 1){
// 		position17.src = cardShuffle17;
// 		click17 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle17;
// 			firstCardPosition = position17;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle17;
// 			secondCardPosition = position17;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle17;
// 			thirdCardPosition = position17;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard18() {
// 	var position18 = document.getElementById("card18");
// 	if (click18 === 1){
// 		position18.src = cardShuffle18;
// 		click18 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle18;
// 			firstCardPosition = position18;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle18;
// 			secondCardPosition = position18;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle18;
// 			thirdCardPosition = position18;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard19() {
// 	var position19 = document.getElementById("card19");
// 	if (click19 === 1){
// 		position19.src = cardShuffle19;
// 		click19 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle19;
// 			firstCardPosition = position19;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle19;
// 			secondCardPosition = position19;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle19;
// 			thirdCardPosition = position19;
// 		}
// 		checkPair();
// 	}
// }

// function clickCard20() {
// 	var position20 = document.getElementById("card20");
// 	if (click20 === 1){
// 		position20.src = cardShuffle20;
// 		click20 = 2;
// 		if (firstCard === "unclicked"){
// 			firstCard = cardShuffle20;
// 			firstCardPosition = position20;
// 		}
// 		else if (secondCard === "unclicked"){
// 			secondCard = cardShuffle20;
// 			secondCardPosition = position20;
// 		}
// 		else if (thirdCard === "unclicked"){
// 			thirdCard = cardShuffle20;
// 			thirdCardPosition = position20;
// 		}
// 		checkPair();
// 	}
// }
