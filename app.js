function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    let randomChoice;
    if(computerChoice === 1){
        randomChoice = "Rock";
    } else if(computerChoice == 2) {
        randomChoice = "Paper";
    }else{
        randomChoice = "Scissors"
    }
    return randomChoice
}

function getHumanChoice(){
    const humanChoice = prompt("Rock, Paper, Scissors NB: the fist letter must be capital thank you")
    if(humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors")
        return humanChoice
}






function playGame(){
        function playRound(playerSelection, computerSelection) {
        let humanScore = 0;
        let computerScore = 0;
        // Convert both choices to lowercase for case-insensitive comparison
        const player = playerSelection.toLowerCase();
        const computer = computerSelection.toLowerCase();

        // Determine the winner based on the game rules
        if (player === computer) {
            console.log("It's a tie! Both chose " + playerSelection);
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock")
        ) {
            humanScore++
            console.log("You win! " + playerSelection + " beats " + computerSelection);
        } else {
            computerScore++
            console.log("You lose! " + computerSelection + " beats " + playerSelection);
        }
        console.log("Your Score is " + humanScore + " and computer score is " + computerScore)
        if(humanScore > computerScore){
            console.log("You won")
        }else{
            console.log("You lost")
        }
    }
    const humanSelection = getHumanChoice();
const aiSelection = getComputerChoice();

playRound(humanSelection, aiSelection)
}

playGame()
playGame()
playGame()
playGame()
playGame()