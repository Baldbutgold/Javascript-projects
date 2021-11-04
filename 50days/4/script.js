const field = document.getElementById("search-field")
//const fieldStyles= window.getComputedStyle(field) 
//const fieldWidth = fieldStyles.width
var tracker = 0

function search() {
	if (tracker == 1) {
		field.style.width = "0px"
		tracker = 0
	} else {
		field.style.width = "400px" 
		tracker = 1
	}
}
