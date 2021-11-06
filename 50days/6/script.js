const cards = document.querySelectorAll(".card")

//if in viewport add .show class
//else remove that class

window.addEventListener('scroll', checkCards)

checkCards()

function checkCards() {
	const trigger = window.innerHeight / 5 * 4
	cards.forEach(card => {
		let	 bounding = card.getBoundingClientRect().top;
			
		function manipulateClass() {
		//check part of the element is in the viewport
			if (bounding < trigger) {
		card.classList.add("show")
	} else {
		card.classList.remove("show")
	}
	}
		manipulateClass()
})
}
