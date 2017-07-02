function BasicCard(front, back){
	this.front = front,
	this.back = back
}

var basicCards = [
	new BasicCard("Who was the first president of the United States?", "George Washington"),
	new BasicCard("Who was the third president of the United States?", "Thomas Jefferson")
];


// "Who was the first president of the United States?"
console.log("Front: " + basicCards[0].front); 

// "George Washington"
console.log("Back: " + basicCards[0].back); 

module.exports = BasicCard;