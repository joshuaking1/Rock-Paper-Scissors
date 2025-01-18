// 1. Initial Setup - Variables we need throughout the game
let playerScore = 0;
let computerScore = 0;

const emojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

// 2. Core Game Logic - First function that runs when player clicks
function play(playerChoice) {
    // Generate computer's choice
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Show both choices on screen
    displayChoices(playerChoice, computerChoice);
    
    // Figure out who won
    const result = determineWinner(playerChoice, computerChoice);
    
    // Update everything
    updateScore(result);
    displayResult(result);
}

// 3. Game Rules - Checks who wins
function determineWinner(player, computer) {
    // Check for tie first
    if (player === computer) {
        return 'tie';
    }
    
    // Check all winning combinations
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    
    // If not tie and not win, must be loss
    return 'lose';
}

// 4. Display Functions - Show the game state on screen
function displayChoices(player, computer) {
    const battle = document.getElementById('battle');
    
    // Update emoji displays
    document.getElementById('playerChoice').textContent = emojis[player];
    document.getElementById('computerChoice').textContent = emojis[computer];
    
    // Reset animation
    battle.classList.remove('show');
    void battle.offsetWidth; // Force animation reset
    battle.classList.add('show');
}

// 5. Score Management
function updateScore(result) {
    // Update scores
    if (result === 'win') {
        playerScore++;
    }
    if (result === 'lose') {
        computerScore++;
    }
    
    // Update score display
    document.getElementById('score').textContent = 
        `Score: ${playerScore} - ${computerScore}`;
}

// 6. Result Display
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    
    // Add proper styling class
    resultDiv.className = 'result ' + result;
    
    // Show appropriate message
    if (result === 'win') {
        resultDiv.textContent = 'You win! 🎉';
    } else if (result === 'lose') {
        resultDiv.textContent = 'Computer wins! 😔';
    } else {
        resultDiv.textContent = "It's a tie! 🤝";
    }
}