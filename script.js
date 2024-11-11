const wordE1 = document.getElementById("word");
const wrongLettersE1 = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const categoryHintE1 = document.getElementById("category-hint");
const categoryNameE1 = document.getElementById("category-name");

const figureParts = document.querySelectorAll(".figure-part");

const words = {
  city: [
    "dhaka",
    "london",
    "comilla",
    "barishal",
    "sylhet",
    "chittagong",
    "paris",
    "tokyo",
    "berlin",
    "mumbai",
  ],
  fruit: [
    "apple",
    "banana",
    "watermelon",
    "grape",
    "mango",
    "pineapple",
    "guava",
    "coconut",
    "orange",
  ],
  country: [
    "bangladesh",
    "india",
    "pakistan",
    "china",
    "america",
    "italy",
    "canada",
    "france",
    "russia",
    "australia",
  ],
  color: ["red", "blue", "green", "yellow", "purple", "orange"],
};

let selectedWord = "";
let selectedCategory = "";
let correctLetters = [];
let wrongLetters = [];
let isGameOver = false;

// Select a random word from a category
function selectRandomWord() {
  const categories = Object.keys(words);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const wordList = words[randomCategory];
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  selectedCategory = randomCategory; // Set the category of the word
  correctLetters = [];
  wrongLetters = [];
  isGameOver = false;
  displayCategoryHint();
  displayWord();
  categoryHintE1.style.display = "block"; // Show category hint
}

// Display category as a hint
function displayCategoryHint() {
  categoryNameE1.textContent =
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
}

// Show hidden word (display underscores for unguessed letters)
function displayWord() {
  wordE1.innerHTML = selectedWord
    .split("")
    .map(
      (letter) =>
        `<span class="letter">${
          correctLetters.includes(letter) ? letter : "_"
        }</span>`
    )
    .join("");

  const innerWord = wordE1.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = `Congratulations! You won! The word was: ${selectedWord}`;
    popup.style.display = "flex";
    isGameOver = true;
    categoryHintE1.style.display = "none"; // Hide category hint after game ends
  }
}

// Update wrong letters and figure parts
function updateWrongLetterE1() {
  wrongLettersE1.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong Letters</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`).join("")}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    part.style.display = index < errors ? "block" : "none";
  });

  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = `Unfortunately, you lost. The word was: ${selectedWord}`;
    popup.style.display = "flex";
    isGameOver = true;
    categoryHintE1.style.display = "none"; // Hide category hint after game ends
  }
}

// Show notification for duplicate guesses
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

// Handle key press events
window.addEventListener("keydown", (e) => {
  if (isGameOver) return;

  const letter = e.key.toLowerCase();

  if (letter >= "a" && letter <= "z") {
    if (selectedWord.includes(letter)) {
      // Correct guess
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      // Incorrect guess
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLetterE1();
      } else {
        showNotification();
      }
    }
  }
});

// Restart game when "Play Again" button is clicked
playAgainBtn.addEventListener("click", () => {
  correctLetters = [];
  wrongLetters = [];
  wrongLettersE1.innerHTML = "";
  figureParts.forEach((part) => (part.style.display = "none"));
  selectRandomWord();
  popup.style.display = "none";
  categoryHintE1.style.display = "block";
});

// Start the game with a random word
selectRandomWord();
