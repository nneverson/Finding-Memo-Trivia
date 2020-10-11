const button1 = document.getElementById('button1');
const heading = document.getElementById('heading');

button1.addEventListener('click', function () {
	document.body.style.backgroundImage =
		"url('https://i.imgur.com/EVduQKU.jpg')";
	button1.style.display = 'none';
	heading.style.display = 'none';
	document.querySelector('#question1').style.display = 'inline-block';
});


