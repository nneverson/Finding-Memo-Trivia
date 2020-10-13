const oepnModal = document.getElementById('openModal');
const button1 = document.getElementById('button1');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const q6 = document.getElementById('q6');
const q7 = document.getElementById('q7');
const q8 = document.getElementById('q8');
const q9 = document.getElementById('q9');
const q10 = document.getElementById('q10');
const heading = document.getElementById('heading');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');
const question6 = document.getElementById('question6');
const question7 = document.getElementById('question7');
const question8 = document.getElementById('question8');
const question9 = document.getElementById('question9');
const question10 = document.getElementById('question10');
const answers = document.querySelectorAll("[name='choice']");
let score = 100;
const scoreDiv = document.getElementById('user-score');
const scorelabel = document.getElementById('score-label');

oepnModal.addEventListener('click', function () {
	document.querySelector('#modal').style.display = 'flex';
	scorelabel.style.display = 'flex';
});

button1.addEventListener('click', function () {
	document.body.style.backgroundImage =
		"url('https://i.imgur.com/EVduQKU.jpg')";
	button1.style.display = 'none';
	heading.style.display = 'none';
	openModal.style.display = 'none';
	document.querySelector('#question1').style.display = 'flex';
	document.querySelector('#modal').style.display = 'none';
	scorelabel.style.display = 'flex';
});
answers.forEach((answer) => {
	answer.addEventListener('click', function (event) {
		const selected = event.target.value;
		if (selected === 'incorrect') {
			score = score - 10;
			scoreDiv.innerHTML = score;
		} else {
			console.log('answer was correct');
		}
		//add code that bring up modal when points equal 0
	});
});

q1.addEventListener('click', function () {
	document.body.style.backgroundImage =
		"url('https://i.imgur.com/pl3hAI3.jpg')";
	document.querySelector('#question1').style.display = 'none';
	document.querySelector('#question2').style.display = 'flex';
});

q2.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/FahCLkm')";
	document.querySelector('#question2').style.display = 'none';
	document.querySelector('#question3').style.display = 'flex';
});

q3.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/FahCLkm')";
	document.querySelector('#question3').style.display = 'none';
	document.querySelector('#question4').style.display = 'flex';
});
q4.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/FahCLkm')";
	document.querySelector('#question4').style.display = 'none';
	document.querySelector('#question5').style.display = 'flex';
});

q5.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/WHbLnGk')";
	document.querySelector('#question5').style.display = 'none';
	document.querySelector('#question6').style.display = 'flex';
});

q6.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/dHaE716')";
	document.querySelector('#question6').style.display = 'none';
	document.querySelector('#question7').style.display = 'flex';
});
q7.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/b45DChh')";
	document.querySelector('#question7').style.display = 'none';
	document.querySelector('#question8').style.display = 'flex';
});
q8.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/vetPWD8')";
	document.querySelector('#question8').style.display = 'none';
	document.querySelector('#question9').style.display = 'flex';
});
q9.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/9YQOz8F')";
	document.querySelector('#question9').style.display = 'none';
	document.querySelector('#question10').style.display = 'flex';
});
q10.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('https://imgur.com/FbNVYAp')";
	document.querySelector('#question9').style.display = 'none';
	document.querySelector('#question10').style.display = 'flex';
	alert('YOU WIN!');
});
