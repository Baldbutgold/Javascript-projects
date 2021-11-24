const left = document.getElementById("left")
const right = document.getElementById("right")
const images = ['https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1637703586699-273e18448fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1637712191167-6fd8b27f651d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1637716271380-ac131fc689d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1637689033815-cc4eabd65739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60']
const imagesContainer = document.getElementById('image')

var currentImage = 0

left.addEventListener('click', () => {
	if (currentImage < images.length && currentImage > 0) {
		currentImage--
}
	updateImage()
})
right.addEventListener('click', () => {
	if (currentImage < images.length - 1) {
		currentImage++
}
	updateImage()
})

function updateImage() {
imagesContainer.style.background= `url(${images[currentImage]}) center / contain no-repeat`
}
updateImage()
