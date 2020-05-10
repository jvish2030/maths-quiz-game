var playing=false;
var score;
var action;
var timeremain;
var correctAns; 
// if we are click on start reset button
document.getElementById("startreset").onclick=function(){
    //if we are playing
    if(playing == true){
         //relod page
        location.reload();
    }//if we are not playingelse
    else{
        //change mode to playing
        playing=true;
        
        //set score to zero
        score=0; document.getElementById("scorevalue").innerHTML=score;
       
        //showing countdownbox
        show("time");
        // start countdown
         timeremain=60;
            document.getElementById("timeremain").innerHTML=timeremain;
         startcountdown();
        
        //hide game over box
        hide("gameover");
        
        //change button to reset
        document.getElementById("startreset").innerHTML= "Reset Game";
        
        //genrate new question and multiple answers
         genratequeandans();
    }
    
}
for(var i=1;i<5;i++){
        //if we click on answer box
document.getElementById("b"+i).onclick=function(){
    //if we are playing
    if(playing==true){
         //if answer is correct
        if(this.innerHTML == correctAns){
             //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML=score;
           //hide wrong box
            hide("wrong");
            //show correct box for 1 sec
            show("correct");
            setInterval(function(){hide("correct")},1000);
            //genrate new que & ans
              genratequeandans();
        }
        else{ //if answer is wrong
             //no action
            show("wrong");
            hide("correct");
             //show try again box for 1 sec    
            setInterval(function(){hide("wrong")},1000);
        }
    }
}
}       
           
       
           


function startcountdown(){
    //reduce time by 1 sec in loop
            //time left
                //yes-continue
                //no-gameover
    action=setInterval(function(){
        timeremain-=1;
    document.getElementById("timeremain").innerHTML=timeremain;
        if(timeremain==0){//game over 
            stopcountdown();         
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>game over!</p><p>your score is "+score+".</p>";
            hide("time");
            hide("correct");
            hide("wrong");
            playing=false;//non playing
            document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000);
}
function stopcountdown(){
      clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}
function  genratequeandans(){
   
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
    correctAns = x*y;
    document.getElementById('que').innerHTML=x + "*" + y;
    //to choose random position
    var randompos = Math.round(Math.random()*3)+1;
    document.getElementById("b"+randompos).innerHTML = correctAns;
    //now fill remmaining boxes
    var answer =[correctAns];
    for(var i=1;i<5;i++){
        if(i != randompos){
            var wrongans ;
            do{
                 wrongans = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            }while(answer.indexOf(wrongans)>-1);
            document.getElementById("b"+i).innerHTML=wrongans;
            answer.push(wrongans);
        }
    }
    
}