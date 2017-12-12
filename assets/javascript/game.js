$(document).ready(function() {

var totalScore = 0;
var wins = 0;
var losses = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var targetNumber; 

function computerPickNumber(){
		targetNumber = Math.floor(Math.random()*120) +19;
		console.log(targetNumber);
}

computerPickNumber();

uploadPictures();

function uploadPictures () {

	var imageCrystal6 = $("<img>");
	var imageCrystal7 = $("<img>");
	var imageCrystal8 = $("<img>");
	var imageCrystal9 = $("<img>");

	$(imageCrystal6).addClass("crystal-image");
	$(imageCrystal7).addClass("crystal-image");
	$(imageCrystal8).addClass("crystal-image");
	$(imageCrystal9).addClass("crystal-image");

	imageCrystal6.attr("src", "assets/images/crystal6.png");
	imageCrystal7.attr("src", "assets/images/crystal7.png");
	imageCrystal8.attr("src", "assets/images/crystal8.png");
	imageCrystal9.attr("src", "assets/images/crystal9.png");

	imageCrystal6.attr("data-crystalvalue", numberOptions[Math.floor(Math.random()*numberOptions.length)]);
	imageCrystal7.attr("data-crystalvalue", numberOptions[Math.floor(Math.random()*numberOptions.length)]);
	imageCrystal8.attr("data-crystalvalue", numberOptions[Math.floor(Math.random()*numberOptions.length)]);
	imageCrystal9.attr("data-crystalvalue", numberOptions[Math.floor(Math.random()*numberOptions.length)]);

	$("#crystal-div").append(imageCrystal6);
	$("#crystal-div").append(imageCrystal7);
	$("#crystal-div").append(imageCrystal8);
	$("#crystal-div").append(imageCrystal9);
}

$(".crystal-image").on("click", function() {

	var currentCrystal = $(this).attr("data-crystalvalue");
		currentCrystal = parseInt(currentCrystal);
	    totalScore = totalScore + currentCrystal;
	    console.log("this is the total score: ", totalScore);

			if (totalScore === targetNumber) {
			      wins++;
			      reset();
			    }

			    else if (totalScore >= targetNumber) {
			      losses++;
			      reset();
			    }

$("#targetNumber").html(targetNumber);
$("#wins").html(wins);
$("#losses").html(losses);
$("#totalScore").html(totalScore);

});
	
$("#targetNumber").html(targetNumber);

	function reset(){
		totalScore = 0;
		computerPickNumber();
	}	


});

// var crystalValue2 = $(this).attr("data-crystalvalue");
	// 	crystalValue2 = parseInt(crystalValue2);
	//     totalScore = totalScore + crystalValue2;

	// var crystalValue3 = $(this).attr("data-crystalvalue");
	// 	crystalValue3 = parseInt(crystalValue3);
	//     totalScore = totalScore + crystalValue3;

	// var crystalValue4 = $(this).attr("data-crystalvalue");
	// 	crystalValue4 = parseInt(crystalValue4);
	//     totalScore = totalScore + crystalValue4;
