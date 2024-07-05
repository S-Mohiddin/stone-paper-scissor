let userscore=0;
let computerscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#mymsg");
let userscorepara=document.querySelector("#userscore");
let computerscorepara=document.querySelector("#computerscore");

const drawgame=(userchoice,compchoice)=>{
    msg.innerText=`it was draw! ${userchoice} ${compchoice} same!`;
    msg.style.backgroundColor="blue";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you won!${userchoice} beats  ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        msg.innerText=`you lose it ${compchoice} beats the ${userchoice}`
        msg.style.backgroundColor="red";
    }
}

let gencompchoice=()=>{
    let options=["rock","paper","scissor"];
    let ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

let playgame=(userchoice)=>{
    console.log("userchoice:",userchoice);
    let compchoice=gencompchoice();
    console.log("compchoice:",compchoice);
    if (userchoice===compchoice){
        drawgame(userchoice,compchoice);
    }  else {
            let userwin=true;
            if(userchoice==="paper"){
                userwin=compchoice==="scissor"?false:true;
            }else if(userchoice==="rock"){
                userwin=compchoice==="paper"?false:true;
             } else {
                userwin=compchoice==="rock"?false:true;
            }
            showwinner(userwin,userchoice,compchoice);
        }
    };

choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});