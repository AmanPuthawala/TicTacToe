let boxes = document.querySelectorAll(".box");
let resetBTN = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let trun0 = true;
let trunX = false;

let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trun0) {
            box.innerHTML = "0";
            trun0 = false;
        }
        else {
            box.innerHTML = "X";
            trun0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
});


const diableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    diableBoxes();
}

const checkWinner = () => {
    for (let pattern of win) {
        
        let ps1 = boxes[pattern[0]].innerText;
        let ps2 = boxes[pattern[1]].innerText;
        let ps3 = boxes[pattern[2]].innerText;
        
        if(ps1 != "" && ps2 != "" && ps3 != ""){
            if(ps1 === ps2 && ps2 === ps3){
                // console.log("winner" , ps1);
                showWinner(ps1);
            }
        } 

    }
}

const resetGame = () =>{
    trun0 = true;
    enableBoxes();
   msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBTN.addEventListener("click", resetGame);