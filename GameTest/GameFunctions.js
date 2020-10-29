var cnt=0;
var Slo=1;
var LightenFlag=0;
var Buff=false;//BuffAdd  所有buff在这里要变成全局变量  BuffConveyed() BuffTakenCheck() BuffTakenCheck() TerminalCheck()
var Pro=false;
var Dbl=false;
var Lit=false;




var pPoint=1;
var counting=null;
var CheckIfBuff=null;
var BuffConveyed=null;
var Accident=null;
    // document.onkeydown= function (event)
    // {
    //     var e = event || window.event || arguments.callee.caller.arguments[0];
              // if(e && e.keyCode==65){ // 按 Left 
                
                
              //   //  obj.style.left = obj.style.left.match(/^d+/) - 100 + 'px';
              //   //  obj.style.background = "rgb(0, 255, 149,0.3)";//要做的事情
                
              //   MoveLeft(100);
              // }

              // if(e && e.keyCode==87){ // 按 Up
                
              //   //  obj.style.top = obj.style.top.match(/^d+/) - 100 + 'px';
              //   //  obj.style.background = "rgb(0, 255, 149,0.3)";//要做的事情
               
              //   MoveUp(100);
              // }

              // if(e && e.keyCode==68){ // 按Right
               
              //   // obj.style.background = "rgb(149, 255, 0,0.3)"
              //   // obj.style.left = obj.style.left.match(/^d+/) + 100 + 'px';//修改位置向右100px
                
              //   MoveRight(100);
              // }
              
              // if(e && e.keyCode==83){ // 按 Down 
                
                
              //   //  obj.style.top = obj.style.top.match(/^d+/) + 100 + 'px';
              //   //  obj.style.background = "rgb(0, 255, 149,0.3)";//要做的事情

              //   MoveDown(100);
              // }
    //           if(e && e.keyCode==76){ // 按 L
                
                
    //             //  obj.style.top = obj.style.top.match(/^d+/) + 100 + 'px';
    //             //  obj.style.background = "rgb(0, 255, 149,0.3)";//要做的事情
    //             var obj=document.getElementById('Player');
    //             obj.style.top=obj.style.top.match(/^d+/) + 100 + 'px';
    //             obj.style.left=obj.style.left.match(/^d+/) + 100 + 'px';
    //           }
    //           if(e && e.keyCode==82){
    //             window.location.replace("GameTest.html")
    //           }                      
    // }; 
  function MoveLeft(n){
    var obj=document.getElementById('Player');
            
    obj.style.left = Number(obj.style.left.substring(0,obj.style.left.length-2)) - Number(n) + 'px';
    obj.style.background = "rgb(0, 255, 149,0.3)";
  }
  function MoveUp(n){
    var obj=document.getElementById('Player');
            
    obj.style.top = Number(obj.style.top.substring(0,obj.style.top.length-2)) - Number(n) + 'px';
    obj.style.background = "rgb(0, 255, 149,0.3)";
  }
  function MoveRight(n){
    var obj=document.getElementById('Player');
            
    obj.style.left = Number(obj.style.left.substring(0,obj.style.left.length-2)) + Number(n) + 'px';
    obj.style.background = "rgb(0, 255, 149,0.3)";
  }
  function MoveDown(n){
    var obj=document.getElementById('Player');
            
    obj.style.top = Number(obj.style.top.substring(0,obj.style.top.length-2)) + Number(n) + 'px';
    obj.style.background = "rgb(0, 255, 149,0.3)";
  }
    

function Check(a,b){
  setInterval("IfCollision(a,b)", 100);

}

function IfCollision(a, b) {

      var ax = a.offsetLeft;
  
      var ay = a.offsetTop;
  
      var aw = a.offsetWidth;
  
      var ah = a.offsetHeight;
  
      var bx = b.offsetLeft;
  
      var by = b.offsetTop;
  
      var bw = b.offsetWidth;
  
      var bh = b.offsetHeight;
  
      return (ax + aw > bx && ax < bx + bw && ay + ah > by && ay < by + bh);
  
  }
  
  
  function sum (m,n){
    　　var num = Math.floor(Math.random()*(m - n) + n);
    　　alert(num)
    }
    function IfCollision(a, b) {
            
      var ax = a.offsetLeft;
      
      var ay = a.offsetTop;
      
      var aw = a.offsetWidth;
      
      var ah = a.offsetHeight;
      
      var bx = b.offsetLeft;
      
      var by = b.offsetTop;
      
      var bw = b.offsetWidth;
      
      var bh = b.offsetHeight;
      
      return (ax + aw > bx && ax < bx + bw && ay + ah > by && ay < by + bh);
      
      }

//Check计时器检查Buff--成功时清除    BuffCheck（）函数内计时器，将所有buff转换为单一出口判断       counting计时器由Check调用，控制元素表现   
function TimeCounter(TimeUnit){
  var div=document.getElementById('TimeCounter').getElementsByTagName('div');//获取时间单位组
BuffConveyed();  
CheckIfBuff=setInterval(() => {//定时检查增益状态
    TerminalCheck();
  }, 100);//每0.1秒检测一次

      
      function TerminalCheck(){
        if(Buff){//判断增益状态若为存在
          ColorFullfill();//填满时间单位
          
          if(counting)//清除上一个定时器
          {
            clearInterval(counting);
          }
          // for(var time=0; time<div.length; time++)
          time=4;//共五个时间单位0~4
          counting=setInterval(() => {//建立新的定时器
            
            div[time].style.backgroundColor= "rgba(0, 255, 149,0.2)";//由右向左依次熄灭
            
            time--;//随时间递减
            
                                
                                if(time==-1){//时间结束清除buff
                                  Pro=false;//所有buff在这里清除 BuffAdd
                                  Dbl=false;
                                  Lit=false;LightenFlag=0;

                                  
                                  Buff=false;
                                  clearInterval(counting);//清除时间单位计时器
                                  CheckIfBuff=setInterval(() => {//恢复计时器
                                    TerminalCheck();
                                  }, 100);
                                }
          }, TimeUnit); 
          if(Accident)//清除上一个定时器
          {
            clearInterval(Accident);
          }   
         Accident=setInterval(()=>{
            BuffTakenCheck();
         },100)
          
         clearInterval(CheckIfBuff);//暂时清除检查计时器
        }
      }
      
      function AccidentClear(){
        
        
          for(var i=0; i<div.length; i++){
            div[i].style.animation="BuffTaken 3s";
          }
          ColorClear();
         
        }
      function BuffTakenCheck(){
        if(!Buff){
                                  AccidentClear();//增益状态在有效期内消失则熄灭所有时间单位
                                    Pro=false;//所有buff在这里清除 BuffAdd
                                    Dbl=false;
                                    Lit=false;



                                  document.getElementById('BuffName').innerHTML="None";
                                  Buff=false;
                                  clearInterval(Accident);//清除buff突变单位计时器
                                  clearInterval(counting);//清除时间单位计时器
                                  if(CheckIfBuff)//清除上一个定时器
                                  {
                                    clearInterval(CheckIfBuff);
                                  }
                                  CheckIfBuff=setInterval(() => {//恢复检测计时器
                                    TerminalCheck();  
                                  }, 100); 
                                }
      }
    function ColorFullfill(){
        for(var i=0; i<div.length; i++){
          div[i].style.backgroundColor= "rgba(5,260,154,0.7)";
          
        }
        for(var i=0; i<div.length; i++){
            div[i].style.animation="none";
          }
      }
      function ColorClear(){
        for(var i=0; i<div.length; i++){
          div[i].style.backgroundColor= "rgba(0, 255, 149,0.2)";
        }
      }
      function BuffConveyed(){
        BuffConveyed=setInterval(()=>{
          if(Pro||Dbl||Lit){//BuffAdd
            Buff=true;
          }
          else{
            Buff=false;
          }
          if(Pro){
            document.getElementById('BuffName').innerHTML="Protection";
          }
          if(Dbl){
            document.getElementById('BuffName').innerHTML="Double";
          }
          if(Lit){
            document.getElementById('BuffName').innerHTML="Lighten";
          }
        },100);
      }
}