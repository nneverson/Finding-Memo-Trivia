const button1 = document.getElementById('button1');
const heading = document.getElementById('heading');

button1.addEventListener('click', function () {
	document.body.style.backgroundImage = "url('../Finding Memo frame 1.png')";
	button1.style.display = 'none';
	heading.style.display = 'none';
});
