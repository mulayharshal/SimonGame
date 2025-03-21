let gmaeSeq=[];
let userSeq=[];
let level=0;
let heighScore=0;

let started=true;

let btns=["one","two","three","four"];

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let body=document.querySelector("body");

//start after key preee 
document.addEventListener("keypress",function(){
    if(started==true){
        started=false;
        // console.log("started");
        h2.innerText=`Level ${level}`;

        levelUp();
    }
   
});

//starting the next level
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let btn=ranBtn();
    blink(btn);

    gmaeSeq.push(btn);
    // console.log(gmaeSeq);
}

//button are blinking
function blink(btn){
    let bt=document.querySelector(`#${btn}`);
    bt.classList.add("blink");
    setTimeout(() => {
        bt.classList.remove("blink");
    }, 250);
    
    
}

//selecting the random button
function ranBtn(){
    let ranIdx=Math.floor(Math.random()*4);
    let btn=btns[ranIdx];
    return btn;
}

//check the user which button press
for(btn of btns){
    let bt=document.querySelector(`.${btn}`);
    bt.addEventListener("click",function(){
        let btn=bt.getAttribute("id");
        blink(btn);
        userSeq.push(btn);
        
        checkAns(userSeq.length-1);
    })
}

//check the user answer
function checkAns(indx){
    if(gmaeSeq.length==0){
        h2.innerText="PLEASE STRAT GAME !    Press any Key to start game";
        h2.style.color="red";
        setTimeout(() => {
            
            h2.style.color="black";
        }, 1000);
    }else if(userSeq[indx]==gmaeSeq[indx]){
        if(indx==gmaeSeq.length-1){
            setTimeout(() => {
                levelUp();
            }, 700);

            userSeq=[];
        }
       
    }else{
        h2.innerText="Gmae Over ! Press any Key to start game";
        body.style.backgroundColor="red";
        setTimeout(()=>{
            body.style.backgroundColor="white";
        },250);
        if(level-1>heighScore){
            heighScore=level-1;
            h3.innerText=`Your High Score ${level}`;
        }
        rest();
    }
}


//after wrong answer rest some value
function rest(){
    userSeq=[];
    gmaeSeq=[];
    level=0;
    started=true;
}