document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The main game 'loop', called when the script is first loaded and 
 * aftwer the users answer has been processed
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() {

}


function calculateCorrectAnswer() {

}


function incrementScore() {

}


function incrementWrongAnwer() {

}


function displayAdditionQuestion() {

}


function displaySubtractQuestion() {

}


function displayMultiplyQuestion() {

}

