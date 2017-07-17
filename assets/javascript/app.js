//lets store our trivia questions in an object
var trivia = {
	question: "Who is the career leader in assists in the NBA?"
	, answers: ["Mark Jackson", "John Stockton", "Jason Kidd", "Steve Nash"]
	, correctAnswer: 1
}, {
	question: "Who is the all-time points leader in the NBA?"
	, answers: ["Kareem Abdul-Jabbar", "Karl Malone", "Michael Jordan", "Kobe Bryant"]
	, correctAnswer: 0
} , {
	question: "Who has the most championships in NBA history?"
	, answers: ["John Havlicek", "Kareem Abdul-Jabbar", "Michael Jordan", "Bill Russell"]
	, correctAnswer: 3
}, {
	question: "When did the Jazz move from New Orleans to Salt Lake City?"
	, answers: ["1973", "1982", "1979", "They never were in New Orleans"]
	, correctAnswer: 2
}, {
	question: "Who is the owner of the Utah Jazz?"
	, answers: ["Larry Miller", "Gail Miller", "Miller Family's Legacy Trust", "Paul Allen"]
	, correctAnswer: 2
};
console.log(trivia.question);
console.log(trivia.answers);

// Array to collect user answers
var answers = [];

//onclick for start button
	$("#startButton").on('click', function populate() {
		var testDiv = document.createElement("div");
		testDiv.innerHTML = trivia.question + trivia.answers;
		var questionsDiv = document.getElementById("questions");
		questionsDiv.appendChild(testDiv);
		});

// Radio buttons for answers
function answerRadios(index) {
	
}

