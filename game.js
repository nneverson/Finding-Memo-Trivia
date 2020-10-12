const oepnModal = document.getElementById('openModal');
const button1 = document.getElementById('button1')
const heading = document.getElementById('heading');
const question1 = document.getElementById("question1")
const question2 = document.getElementById("question2")
const question3 = document.getElementById("question3")
const question4 = document.getElementById("question4")
const question5 = document.getElementById("question5")
const question6 = document.getElementById("question6")
const question7 = document.getElementById("question7")
const question8 = document.getElementById("question8")
const question9 = document.getElementById("question9")
const question10 = document.getElementById("question10")

let score = 100;
const scoreDiv = document.getElementById("user-score")

oepnModal.addEventListener('click', function () {
	document.querySelector('#modal').style.display = 'flex';
});

button1.addEventListener('click', function () {
document.body.style.backgroundImage =
		"url('https://i.imgur.com/EVduQKU.jpg')";
button1.style.display = 'none';
heading.style.display = 'none';
openModal.style.display = 'none';
document.querySelector('#question1').style.display = 'flex';
document.querySelector('#modal').style.display = 'none';
});
 
let rightChoices = [
	'Sea anemones',
	'Fish are friends not food',
	'Mucus on Marlon, protected him',
	'False',
	'A School',
	'Mother Cichild fish',
	'Royal Blue Tang',
	'Bioluminescent bacteria',
	'False',
	'All of the above',
];

function correctAnswer (question1){
	if (rightchoices) {
		rightChoices[0] != question1.vaule.in
	} else {
		
	}
}
