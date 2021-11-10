const edit = document.getElementById('edit');

function quoteGraber(n) {
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   var quoteText = data[n]['text'];
   var quoteAuthor = data[n]['author'];
   var quote = `\"${quoteText}\" \n~ ${quoteAuthor}`
	edit.textContent = quote
  });
}

function generateQuote() {
	let x = Math.floor((Math.random() * 20) + 1);
	quoteGraber(x);
}

generateQuote()
