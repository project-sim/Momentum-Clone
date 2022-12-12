const quotes = [
  {
    quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author: " - Estée Lauder",
  },
  {
    quote: "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
    author: " - Barbara Bush",
  },
  {
    quote:
      "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: " - Jim Rohn",
  },
  {
    quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: " - Søren Kierkegaard",
  },
  {
    quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: " - Maxime Lagacé",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: " - Nelson Mandela",
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: " - Maya Angelou",
  },
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: " - Confucius",
  },
  {
    quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author: " - Angelina Jolie",
  },
  {
    quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: " - Michael Jordan",
  },
  {
    quote: "When you go through hardships and decide not to surrender, that is strength.",
    author: " - Arnold Schwarzenegger",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
