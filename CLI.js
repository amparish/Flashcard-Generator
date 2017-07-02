var fs = require("fs");
var inquirer = require("inquirer");
var basic = require("./BasicCard");
var cloze = require("./ClozeCard");
//var basicCards = [];
//var clozeCards = [];

function start(){
	inquirer.prompt([
		{
			type: "list",
			message: "Create card or review?",
			choices: ["New Card", "Review Cards"],
			name: "startOption"
		}
	]).then(function(user){
		if (user.startOption == "New Card"){
			inquirer.prompt([
				{
					type: "list",
					message: "Basic or cloze-deleted flashcard?",
					choices: ["Basic", "Cloze"],
					name: "cardType"
				}
			]).then(function(user){
				if (user.cardType == "Basic"){
					inquirer.prompt([
						{
							type: "input",
							message: "Basic Card question:",
							name: "question"
						},
						{
							type: "input",
							message: "Basic Card answer:",
							name: "answer"
						}
					]).then(function(makeBasicCard){
						var newBasicCard = new BasicCard(user.question, user.answer);
							// error BasicCard not defined
						basicCards.push(basicCard);

						fs.appendFile("basiccards.txt", basicCards, function(err){
							if (err) {
								return console.log(err);
							}
						});

						start();
					});
				} else {
					inquirer.prompt([
						{
							type: "input",
							message: "Cloze Card text:",
							name: "fullText"
						},
						{
							type: "input",
							message: "Cloze Card removed text - MUST MATCH PART OF FULL TEXT:",
							name: "cloze"
						}
					]).then(function(makeClozeCard){
						var newClozeCard = new ClozeCard(makeClozeCard.fullText, makeClozeCard.cloze);
							// error ClozeCard not defined
						clozeCards.push(ClozeCard);

						fs.appendFile("clozecards.txt", clozeCards, function(err){
							if (err) {
								return console.log(err);
							}
						});

						start();
					});
				}
			});
		} else {
			inquirer.prompt([
				{
					type: "list",
					message: "Basic or cloze-deleted flashcards?",
					choices: ["Basic", "Cloze"],
					name: "cardType"
				}
			]).then(function(user){
				if (user.cardType == "Basic"){
					for (var i=0; i>basicCards.length; i++){
						console.log(basicCards[i].question);
						inquirer.prompt([
							{
								type: "confirm",
								message: "Display answer?",
								name: "confirm",
								default: "true"
							}
						]).then(function(user){
							console.log(basicCards[i].answer[i]);
						});
					}
				} else {
					for (var i=0; i>clozeCards.length; i++){
						console.log(clozeCards[i].partial);
						inquirer.prompt([
							{
								type: "confirm",
								message: "Display full text?",
								name: "confirm",
								default: "true"
							}
						]).then(function(user){
							console.log(clozeCards[i].fullText);
						});
					}
				}
			});
		}
	});
}

start();