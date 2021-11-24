const movieContainer = document.getElementById("movies-container")
console.log(movieContainer)
const API_KEY = "12a4ee2c0b62be60b243237a8e2fa784"
const queryMovies = ''
var popularMovies = ''
const imagesQuery = 'https://image.tmdb.org/t/p/w500/'

fetch()
	.then(response => response.text()) 
	.then(data => {
		console.log(data)
	})

function showMovieCard() {
}
