# **Rock, Paper, Scissors Game**

This is a simple implementation of the classic "Rock, Paper, Scissors" game in JavaScript. You can play against the computer, and the game keeps track of scores for both the player and the computer.

---

## **How the Game Works**

1. You choose between "Rock," "Paper," or "Scissors."
2. The computer randomly picks one of the three options.
3. The winner is determined by the rules:
   - Rock beats Scissors.
   - Scissors beats Paper.
   - Paper beats Rock.
4. The game announces the winner of each round and keeps track of scores.

---

## **Features**

- Play multiple rounds against the computer.
- Tracks scores for both the player and the computer.
- Handles invalid inputs gracefully.

---

## **How to Run the Game**

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a browser.
3. Open the browser's developer console (usually by pressing `F12` or `Ctrl + Shift + I`).
4. The game will run in the console, and you can follow the instructions to play.

---

## **Code Overview**

### **`playGame` Function**
- The main function that manages the game.
- Initializes player and computer scores.
- Defines the logic for running multiple rounds.

### **`playRound` Function**
- Determines the winner of a single round.
- Compares the player’s choice with the computer’s choice.
- Updates and displays the scores after each round.

### **`getComputerChoice` Function**
- Randomly selects "Rock," "Paper," or "Scissors" for the computer.

---

## **Example Game Output**

```
You win! Rock beats Scissors
Scores: Human - 1, Computer - 0

You lose! Paper beats Rock
Scores: Human - 1, Computer - 1

Final Scores: Human - 1, Computer - 2
```

---

## **Future Enhancements**

- Add a graphical user interface (GUI) for better interactivity.
- Allow players to input their choice via buttons instead of the console.
- Implement a best-of-5 or best-of-10 game mode.

---

## **License**

This project is free to use and modify. No license restrictions apply.
