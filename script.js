const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
];

//random quote

//new quote button
let counter = 0;
let randomNum = 0;
document.querySelector("#new-btn").addEventListener("click", function () {
  randomNum = Number(Math.trunc(Math.random() * 10));
  document.querySelector("#quote-text").textContent = quotes[randomNum].text;
  document.querySelector("#quote-author").textContent =
    quotes[randomNum].author;
  counter++;
  document.querySelector("#counter").textContent =
    "Quote " + counter + " of 10";
});

document.querySelector("#copy-btn").addEventListener("click", function () {
  navigator.clipboard.writeText(quotes[randomNum].text);

  document.querySelector("#copied-msg").classList.remove("hidden");

  setTimeout(function () {
    document.querySelector("#copied-msg").classList.add("hidden");
  }, 2000);
});
