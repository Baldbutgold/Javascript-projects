const image = document.getElementById("image")

const loading = document.getElementById("loading")
let loader = 0
let blurValue = 0
let int = setInterval(()=> {
	loader++;
	blurValue = Math.round((8 * 100)/loader);
	blurValue = "blur(" + blurValue.toString() +"px)"
	image.style.filter = blurValue
	loading.innerHTML = loader.toString() + "%"
	if (loader > 99) {
		loading.style.opacity = "0";
		image.style.filter = "blur(0px)";
		clearInterval(int)	
	}

}, 30)
//		loading.style.opacity = "0"
	//	loading.innerHTML = valueofloader
