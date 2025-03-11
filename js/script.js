const nameInput = document.querySelector(".nameInput");
const startButton = document.querySelector(".startButton");
const box1Err = document.querySelector(".box1Err");
const box1 = document.querySelector(".box1");

const playerOneBox = document.querySelector(".playerOneBox");
playerOneBox.style.display = "none";
const playerOneName = document.querySelector(".playerOneName");
const playerOneInput = document.querySelector(".playerOneInput");
const playerOneButton = document.querySelector(".playerOneButton");
const playerOneErr = document.querySelector(".playerOneErr");

startButton.addEventListener("click", function () {
  if (nameInput.value == "") {
    box1Err.innerHTML = "Please Give Your Name";
  } else {
    box1.style.display = "none";
    playerOneBox.style.display = "block";
    playerOneName.innerHTML = nameInput.value;
  }
});

const playerTwoBox = document.querySelector(".playerTwoBox");
playerTwoBox.style.display = "none";
const playerTwoButton = document.querySelector(".playerTwoButton")
const playerTwoInput = document.querySelector(".playerTwoInput");

playerOneButton.addEventListener("click", function () {
  if (playerOneErr.value == "") {
    playerOneErr.innerHTML = "Please Give A Number";
    playerOneErr.style.color = "red";
  }else{
    playerTwoBox.style.display = "block";
    playerOneBox.style.display = "none";
  }
});


playerTwoButton.addEventListener("click", function () {
    if (playerTwoInput.value == "") {
      let pTag = document.createElement("p");
      pTag.innerHTML = "Give the Guessing Number";
      playerTwoBox.append(pTag);
    }else{
        if(playerOneInput.value == playerTwoInput.value){
            console.log("Player Two win ");

        }else{
            console.log("Player One Win");
            
    }
        
    }
})