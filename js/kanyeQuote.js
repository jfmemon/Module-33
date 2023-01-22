const loadKanyeQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayKanyeQuotes(data))
}


const displayKanyeQuotes = value => {
    const kanyeQuote = document.getElementById('kanye-quote');
    kanyeQuote.innerText = value.quote;
}




