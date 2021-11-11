const smallContainer = document.querySelector('.small-container')
const container = document.getElementById('container')
const warningContainer = document.getElementById('warning-container')

window.addEventListener('keydown', test)

function test() {
	if (event.key === ' ') {
		container.innerHTML = `<div class=\'small-container\'> Space </div>
			<div class=\"small-container\">${event.keyCode}</div>
			<div class=\"small-container\">${event.code}</div>
			` 
	} else if (event.key === 'Tab') {
		warningContainer.innerHTML = `<h1 class='warning'> Reclick the page, you have tabbed Away </h1>`
		container.innerHTML = `
			<div class=\'small-container\'>${event.key}</div>
			<div class=\'small-container\'>${event.keyCode}</div>
			<div class=\'small-container\'>${event.code}</div>
			`
	}
	else {
	container.innerHTML = `
		<div class=\'small-container\'>${event.key}</div>
		<div class=\'small-container\'>${event.keyCode}</div>
		<div class=\'small-container\'>${event.code}</div>
			`
	}
}
//keypress event listener
