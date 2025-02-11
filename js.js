let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const para = document.getElementById("para");
const userScorepara = document.getElementById("user-score");
const compScorepara = document.getElementById("comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        para.innerText = `You win! (${userChoice} beats ${compChoice})`;
        para.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        para.innerText = `You lose! (${compChoice} beats ${userChoice})`;
        para.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    
    // Generate computer choice
    const compChoice = gencompChoice();
    console.log("compChoice = ", compChoice);

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const draw = () => {
    para.innerText = "Game Draw! Play again!";
    para.style.backgroundColor = "black";
}

const gencompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return option[rand];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
