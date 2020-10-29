
var Left = false;

var Right = false;

var Up =   false;

var Down = false;



function Movement(){
setInterval(function(){

if(Left){
    Player.style.left =Number(Player.style.left.substring(0,Player.style.left.length-2)) - Number(6) + 'px';
}
if(Up){
    Player.style.top = Number(Player.style.top.substring(0,Player.style.top.length-2)) - Number(6) + 'px';
}
if(Right){

    Player.style.left = Number(Player.style.left.substring(0,Player.style.left.length-2)) + Number(6) + 'px';
}
if(Down){
    Player.style.top = Number(Player.style.top.substring(0,Player.style.top.length-2)) + Number(6) + 'px';}
},10)

document.onkeydown = function(ev){

    var ev = ev || event;

    var keyCode = ev.keyCode;

    switch(keyCode){

       case 65: Left = true;break;

       case 87: Up = true;break;

       case 68: Right = true;break;

       case 83: Down = true;break;

    }
    if(keyCode==76){ // 按 L
                
                
    //  obj.style.top = obj.style.top.match(/^d+/) + 100 + 'px';
    //  obj.style.background = "rgb(0, 255, 149,0.3)";//要做的事情
    
    Player.style.top=Player.style.top.match(/^d+/) + 100 + 'px';
    Player.style.left=Player.style.left.match(/^d+/) + 100 + 'px';
    }
    if(keyCode==82){
    window.location.replace("GameTest.html");
    
    }  
    if(Left||Right||Down||Up){
        Player.style.animation="aRotate 0.1s infinite";
        Player.style.background="rgb(0, 255, 149,0.4)";
    }   
} 

document.onkeyup = function(ev){

    var ev = ev || event;

    var keyCode = ev.keyCode;

    switch(keyCode){

       case 65: Left = false;break;

       case 87: Up = false;break;

       case 68: Right = false;break;

       case 83: Down = false;break;

    }
    if(!(Left||Right||Down||Up)){
        Player.style.animation="aRotate 4s infinite";
        Player.style.background="rgb(0, 255, 149,0.1)";
    }
   

}




}
