const mainContainer = document.getElementById("main-container")
const circle = document.getElementById("circle")

function rotatedState() {
	//rotate the content-div -20deg
	//rotate the menu-trigger 45deg
	mainContainer.style.transform = "rotate(-20deg)"
	circle.style.transform = "rotate(-50deg)"		
}

function initialState() {
	//rotate the content-div 0deg
	//rotate the menu-trigger 0deg
	mainContainer.style.transform = "rotate(0deg)"	
	circle.style.transform = "rotate(0deg)"
}
