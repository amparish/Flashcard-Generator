function BasicCard(front, back){
	this.front = front,
	this.back = back
}

var firstPresident = new BasicCard(
	"Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log("Front: " + firstPresident.front); 

// "George Washington"
console.log("Back: " + firstPresident.back); 

module.exports = BasicCard;