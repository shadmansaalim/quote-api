const getQuote = () => {
  fetch("https://favqs.com/api/qotd")
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = data => {
  console.log(data)
  document.getElementById('main-content').classList.add('bg-white');
  document.getElementById('quotes-icon').classList.remove('d-none');
  document.getElementById("quote-content").innerHTML =
    `
            <h3 id="quote" class="quote">${data?.quote?.body ? data.quote.body : 'Quote Not Available'}</h3>
            <h2 class="author">- <span id="author">${data?.quote?.author ? data.quote.author : 'Author Unknown'}</span></h2>
   `
}
