const circle = document.querySelectorAll(".circle")
//grab the next element that has the circle class
//apply the active class to that element
var counter = 0
const bar = document.getElementById("progress-bar")
function progressBar() {
	switch(counter) {
		case 0:
			bar.style.width = "0%";
			break;
		case 1:
			bar.style.width = "33.3%";
			break;
		case 2:
			bar.style.width = "66%";
			break;
		case 3:
			bar.style.width = "100%";
			break;
	}
}

function next() {
	if (counter + 1 < circle.length) {
		counter++;
		circle[counter].classList.add("active")
		progressBar()
	}}

function prev() {
	if (counter != 0) {
		var currentcircle = circle[counter]
		currentcircle.classList.remove("active");
		counter--;
		progressBar()
	}
}
