const emailLetters = document.querySelectorAll('.email-letters')
const pwdLetters = document.querySelectorAll('.password-letters')
const pwdInput = document.getElementById('pwd-input')
const emailInput = document.getElementById('email-input')

pwdInput.addEventListener('onclick', elvate(pwdLetters))

function elvate(elements) {
	console.log('could you please')
elements.forEach(element => {
	element.classList.add("elvate");
})

}
