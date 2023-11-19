const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "It's a tie!";
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function makeChoice(playerChoice) {
    const computer = computerChoice();
    document.getElementById("player-choice").src = `${playerChoice}.png`;
    document.getElementById("computer-choice").src = `${computer}.png`;

    const resultText = determineWinner(playerChoice, computer);
    document.getElementById("result-text").innerText = resultText;
}

