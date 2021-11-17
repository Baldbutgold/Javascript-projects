const litres = document.getElementById('litres')
const miniBottlesContainer = document.getElementById("miniBottlesContainer")
const bigBottleContainer = document.getElementById("bigBottleContainer")
const miniBottle = `<button class="miniButton">
		    <div class="miniBottle waterBottle">
			<p>250ml</p>
		    </div>
	 	    </button>`

const filled = document.getElementById("filled");

miniBottlesContainer.innerHTML += miniBottle.repeat(8) //creating 8 mini bottles

const miniButtons = document.querySelectorAll(".miniButton")
const Bottles = document.querySelectorAll(".miniBottle")

function updateBigContainer(N) {
	if (N == 7) {
	litres.innerHTML = ''
	} else {
		litres.innerHTML = (-1 * (((N + 1)  * 0.25 )-2)) + 'L'//error in this line i need to append not remove or edit the h tag
	}
}

miniButtons.forEach((button, index)=> {
	button.addEventListener("click", () => {
		for (let i = 0; i < index + 1; i++) {
				
			miniButtons[i].classList.add("clicked")
			var percentage = ((i + 1) * 100)/ 8
			filled.style.height = percentage + '%'
        		filled.innerHTML = percentage + '%'   
			updateBigContainer(i)
		}
	})
})


