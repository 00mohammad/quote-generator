const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const quotes = [
  {
    content:
      "The greatest glory in life is not in never falling, but in getting up every time we fall.",
    author: "Nelson Mandela",
  },
  {
    content: "The way to start is to stop talking and start doing.",
    author: "Walt Disney",
  },
  {
    content:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    content:
      "If life were predictable, it would no longer be life and would be boring.",
    author: "Eleanor Roosevelt",
  },
  {
    content:
      "If you look at what you have in life, you will always have more. If you look at what you don't have, you will never have enough.",
    author: "Oprah Winfrey",
  },
  {
    content:
      "If you set your goals too high and fail, you will fail more than others will succeed.",
    author: "James Cameron",
  },
  {
    content: "Life is what happens while you're planning other things..",
    author: "John Lennon",
  },
  {
    content:
      "Spread love wherever you go. Let no one leave you without being happy.",
    author: "Mother Teresa",
  },
  {
    content:
      "Don't judge each day by the harvest you reap, but by the seeds you sow.",
    author: "Robert Louis Stevenson",
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
];

function showRandomQuote() {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const mainQuote = quotes[randomQuoteIndex];

  quote.innerHTML = mainQuote.content;
  author.innerHTML = mainQuote.author;
}
