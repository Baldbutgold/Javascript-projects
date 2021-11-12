const expand = document.querySelectorAll(".expand")
const pTags = document.querySelectorAll(".pTag")
expand.forEach((toggle , index) => {
	toggle.addEventListener('click', () => {
		var ptag = pTags[index]
		pTags[index].classList.toggle("non-active")
	})
})
