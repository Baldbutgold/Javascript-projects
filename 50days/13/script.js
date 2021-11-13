const audio = new Audio('spin.mp3')
const text = document.getElementById('text')
const container = document.getElementById('inner-container')

window.addEventListener('keydown', () => {
		var textArray = text.value.split(',');
		container.innerHTML = ''
		textArray.forEach((text ,index) => {
			const elements = `<p class="cards">${text}</p>`
			container.innerHTML += elements
		})
	if (event.keyCode == 13) {
		event.preventDefault() //not allowing enter to go to new line
		audio.play()
		var counter = 0; //setting up a counter
	
		const cards = document.querySelectorAll(".cards") //grabing all cards
		var isCardsRandom = 0

		var int = setInterval(() => {
			if (isCardsRandom === 1) {
			cards[window.value].classList.remove('highlight')
			} else {isCardsRandom = 1}
			var random = Math.floor(Math.random() * textArray.length)//generate a random number, limited by the length of textArray aka cards
			window.value=random
			counter += 200 //increase counter
			if (counter > 9200) {
				cards[random].classList.add('highlight')
				clearInterval(int) //stopping the loop
			} else {
				//add and remove the highlight class to the specifed card
				cards[random].classList.add('highlight')
			}	
		}, 200);
		//pick a random value based on the number of p tags
	}
})

//clearing the text area on reload
function init() {
text.value = "";
}
window.onload = init
