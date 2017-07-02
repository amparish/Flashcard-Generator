function ClozeCard(text, cloze){
	this.fullText = text,
	this.cloze = cloze,
	this.partial = text.replace(cloze, "...")

	if (this.fullText.indexOf(this.cloze) === -1){
			console.log("Incorrect cloze text.")
	}
}

var clozeCards = [
	new ClozeCard("George Washington was the first president of the United States.", "George Washington"),
	new ClozeCard("Thomas Jefferson was the third president of the United States.", "Thomas Jefferson")
];


// "George Washington"
console.log("Cloze: " + clozeCards[0].cloze); 

// " ... was the first president of the United States."
console.log("Partial text: " + clozeCards[0].partial);

// "George Washington was the first president of the United States."
console.log("Full text: " + clozeCards[0].fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;