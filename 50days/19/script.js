const changeModeElement = document.getElementById('mode');
const dateElement = document.getElementById("date")
const secondsArrow = document.getElementById("seconds")
const minutesArrow = document.getElementById("minutes")
const hoursArrow = document.getElementById("hours")

function changeMode() {
	changeModeElement.classList.toggle("white")
	document.body.classList.toggle('dark')
	secondsArrow.classList.toggle("white-arrow")
	minutesArrow.classList.toggle("white-arrow")
}



setInterval(()=> { 
	var today = new Date().toString();
	today = today.split(' ')
	var todayDate = today.slice(0, 3)
	dateElement.innerHTML = todayDate
	var time = today[4].split(":")
	var hours = time[0]
	var minutes = time[1]
	var seconds = time[2]
	console.log(hours)
	secondsArrow.style.transform = "rotate("+ ((seconds * 180) /30 -90) +"deg)"
	minutesArrow.style.transform = "rotate("+ ((minutes * 180)/30 -90) +"deg)"
	hoursArrow.style.transform = "rotate("+ ((hours * 180)/ 6 - 90) + "deg)"
}, 1000)
