const nameInput = document.querySelector(".nameInput");
const startButton = document.querySelector(".startButton");
const box1Err = document.querySelector(".box1Err");
const box1 = document.querySelector(".box1");

const playerOneBox = document.querySelector(".playerOneBox");
playerOneBox.style.display = "none";



startButton.addEventListener("click" ,function(){
    if(nameInput.value == "" ){
        box1Err.innerHTML=("Please Give Your Name");
    }else{
        box1.style.display ="none";
        playerOneBox.style.display = "block";
    }
       
        
})