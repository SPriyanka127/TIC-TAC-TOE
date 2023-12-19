let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset"); 
let msg=document.querySelector(".message");

let turn0=true;
let moves=0;
const maxMove=9;
let winner=false;

const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText==""){
            if(turn0==true){
                box.innerText="O";
                box.style.pointerEvents="none";
                turn0=false;
            }
            else{
                box.innerText="X";
                box.style.pointerEvents="none";
                turn0=true;
            }
        }
        moves++;
        console.log(moves);
        checkWinner();
        checkDraw();
    })
})

const boxDisable=()=>{
    for(let box of boxes){
        // box.innerText="";
        box.style.pointerEvents="none";
    }
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val&& pos2val===pos3val){
                msg.innerText=`WINNER IS ${pos1val}`;
                console.log(` ${pos1val} wins`);
                boxDisable();
                winner=true;
            }
        }
    }
}

const checkDraw=()=>{
    if(moves==maxMove && winner!=true){
        msg.innerText="GAME IS DRAWN";
        console.log("draw");
        boxDisable();
    }
}

resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.style.pointerEvents="auto";
        turn0=true;
        winner=false;
        moves=0;
        msg.innerText="";
    })
})