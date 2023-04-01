let mi_runs=0;
let csk_runs=0;
let mi_wic = 0;
let csk_wic = 0;
let mi_over = 0;
// let csk_over = 0;

function onerun(a){
    if(a==1){
        mi_runs=mi_runs+1;
        document.getElementById("runs").innerHTML=mi_runs;
    }
    else{
        csk_runs=csk_runs+1;
        document.getElementById("runs1").innerHTML=csk_runs;
    }
}
function tworun(a){
    if(a==1){
        mi_runs=mi_runs+2;
        document.getElementById("runs").innerHTML=mi_runs;
    }
    else{
        csk_runs=csk_runs+2;
        document.getElementById("runs1").innerHTML=csk_runs;
    }
}
function threerun(a){
    if(a==1){
        mi_runs=mi_runs+3;
        document.getElementById("runs").innerHTML=mi_runs;
    }
    else{
        csk_runs=csk_runs+3;
        document.getElementById("runs1").innerHTML=csk_runs;
    }
}
function fourrun(a){
    if(a==1){
        mi_runs=mi_runs+4;
        document.getElementById("runs").innerHTML=mi_runs;
        let audio= new Audio("audio/mi.mp3");
        audio.play();
    
    }
    else{
        csk_runs=csk_runs+4;
        document.getElementById("runs1").innerHTML=csk_runs;
        let audio= new Audio("audio/csk.mp3");
        audio.play();

    }
}
function sixrun(a){
    if(a==1){
        mi_runs=mi_runs+6;
        document.getElementById("runs").innerHTML=mi_runs;
        let audio= new Audio("audio/mi.mp3");
        audio.play();
        
    }

    else{
        csk_runs=csk_runs+6;
        document.getElementById("runs1").innerHTML=csk_runs;
        let audio= new Audio("audio/csk.mp3");
        audio.play();
        
    }
}


function wicket(a){
    if(a==3){
        mi_wic=mi_wic+1;
        document.getElementById("wick").innerHTML=mi_wic;
        
    }
    else{
        csk_wic=csk_wic+1;
        document.getElementById("wick1").innerHTML=csk_wic;
        
    }
    
}

function noball(a){
    if(a==1){
        mi_runs=mi_runs+1;
        document.getElementById("runs").innerHTML=mi_runs;
        
    }
    else{
        csk_runs=csk_runs+1;
        document.getElementById("runs1").innerHTML=csk_runs;
        
    }
    
}


// function overOne(a){
//     if(a==6){
//         mi_over=mi_over+1;
//         document.getElementById("over").innerHTML=mi_over;
        
//     }
//     else{
//         csk_over=csk_over+1;
//         document.getElementById("over1").innerHTML=csk_over;
        
//     }
// }
let balls = []
function abc(e){
  let ballsArrayLength =  balls.push(e.target.value)
  if(ballsArrayLength === 6){
    document.getElementById("over").innerHTML= mi_over+1
  }
   console.log(balls);
}




// function deduct(a){
//     if(a==1){
//         mi_runs=mi_runs-1;
//         document.getElementById("runs").innerHTML=mi_runs;
//     }
//     else{
//         csk_runs=csk_runs-1;
//         document.getElementById("runs1").innerHTML=csk_runs;
//     }
// }