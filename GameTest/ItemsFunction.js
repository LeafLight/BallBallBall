// function RamdonMovement(id,Interval,Criterior){
//     var obj=document.getElementById(id);
//     setInterval(function(){if(cnt>=Criterior){
//         obj.style.left = Math.floor(Math.random()*900)+"px";
//         obj.style.top = Math.floor(Math.random()*700)+"px";}}, Interval);
// }
//1030*710px 60*60px
function Over(){
    var Player=document.getElementById('Player');
    var top=Number(Player.style.top.substring(0,Player.style.top.length-2))
    var left=Number(Player.style.left.substring(0,Player.style.left.length-2))
    if(top<=-65){
        Player.style.top="800px";
    }
    if(top>=800){
        Player.style.top="-65px";
    }
    if(left<=-65){
        Player.style.left="1080px";
    }
    if(left>=1080){
        Player.style.left="-65px";
    }

}
function OverofDeath(){
    var Obj=document.getElementById('Death');
    var top=Number(Obj.style.top.substring(0,Obj.style.top.length-2))
    var left=Number(Obj.style.left.substring(0,Obj.style.left.length-2))
    if(top<=-65){
        Obj.style.top="800px";
    }
    if(top>=800){
        Obj.style.top="-65px";
    }
    if(left<=-65){
        Obj.style.left="1080px";
    }
    if(left>=1080){
        Obj.style.left="-65px";
    }

}
