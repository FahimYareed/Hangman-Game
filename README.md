# Simple Hangman Game

Hangman is a classic word-guessing game in which the player must guess a hidden word, one letter at a time. The game's interface includes a Hangman figure, a display for the hidden word, sections for displaying wrong letters, and game status.

## **Game Features:**

* Random Word Selection: The game randomly selects a word from a predefined list of words, grouped into various categories such as "City", "Fruit", "Country", and "Color". The selected category is displayed as a hint to the player.
  
* Hidden Word Display: The hidden word is displayed as a series of underscores, each representing a letter in the word. As the player correctly guesses letters, they are revealed in the appropriate positions.
  
* Letter Input: The player can input letters using their keyboard. If the letter is part of the hidden word, it is revealed in the corresponding position(s). If the letter is not in the word, it is added to the "Wrong Letters" display, and a part of the Hangman figure is drawn.
  
* Hangman Figure: The Hangman figure is gradually drawn as the player makes incorrect guesses. If the complete figure is drawn, the player loses the game.
  
* Win/Loss Conditions: If the player correctly guesses all the letters in the hidden word, they win the game. A congratulatory message is displayed in a popup. If the player exhausts all their incorrect guesses, they lose the game, and the correct word is revealed.

* Notification System: If the player enters a letter they have already guessed, a notification is displayed to inform them that they have already used that letter.
  
* Restart Functionality: The player can restart the game by clicking the "Play Again" button, which resets the game state and selects a new random word.

## **To run the Hangman game, follow these steps:**

* Clone the repository or download the files.
* Open the index.html file in a web browser.
* Enjoy playing the game!

## **Technologies Used**

* HTML
* CSS
* JavaScript

> [!NOTE]
> The code is not made responsive.
