const closingButton = document.querySelectorAll(".close")
const list = document.querySelectorAll(".list-item")
const buttonsContainer = document.getElementById("buttonsContainer")
const navContainer = document.getElementById("nav")

closingButton.forEach(button => {
	button.addEventListener('click', ()=> {
		list.forEach(element => {
			element.classList.toggle('list-toggle')
		})
		buttonsContainer.classList.toggle('move-div')
		navContainer.classList.toggle('chg-width')
	})
})
