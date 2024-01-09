let apiQuotes = [];

const quoteContainer = document.getElementById("quote-container");
const quoteTextEl = document.getElementById("quote");
const authorTextEl = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loaderEl = document.getElementById("loader");

// Show loader when loading
function loading() {
  loaderEl.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loader when complete loading
function complete() {
  loaderEl.hidden = true;
  quoteContainer.hidden = false;
}

// Show new quote
function newQuote() {
  loading();
  const randomIndex = Math.floor(Math.random() * apiQuotes.length);
  const randomQuote = apiQuotes[randomIndex];

  // Add 'Unknown' author if author not exist
  !randomQuote.author
    ? (authorTextEl.textContent = "Unknown")
    : (authorTextEl.textContent = randomQuote.author);

  // check quote length
  randomQuote.text.length > 50
    ? quoteTextEl.classList.add("long-quote")
    : quoteTextEl.classList.remove("long-quote");

  quoteTextEl.textContent = randomQuote.text;
  complete();
}

// Get quote from API
async function fetchQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
}

// Add event listeners
newQuoteBtn.addEventListener("click", fetchQuotes);

fetchQuotes();
