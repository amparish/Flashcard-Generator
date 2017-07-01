function ClozeCard(text, cloze){
	this.fullText = text,
	this.cloze = cloze,
	this.partial = text.replace(cloze, "...")

	if (this.fullText.indexOf(this.cloze) === -1){
			console.log("Incorrect cloze text.")
	}
}

var firstPresidentCloze = new ClozeCard(
	"George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log("Cloze: " + firstPresidentCloze.cloze); 

// " ... was the first president of the United States."
console.log("Partial text: " + firstPresidentCloze.partial);

// "George Washington was the first president of the United States."
console.log("Full text: " + firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;