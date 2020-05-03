var ChallengerName= 'ゲスト';    
var ChallengerIsDecision = {stone:0,scissors:1,paper:2};

var NPCName = "Champ";
var NPCIsDecision = {stone:0,scissors:1,paper:2};

var TIMER="50"; //スライド切替時間(1秒=1000)
var TIMER_ID="-1"; //タイマーID(スライド停止:TIMER_ID=-1)
var TOTAL="3"; //画像の枚数*/
count=0; //最初の画像名(0から)



function setUserName(){  
    //set challenger name
    ChallengerName = document.getElementById("PlayerName").value;
    StartSlide()
    if(document.getElementById("PlayerName").value ==""){
        ChallengerName = "ゲスト";
        return document.getElementById('helloGuest').innerHTML 
        = (ChallengerName + "さん、こんにちは。手を選んでください。");
    }else{
        return document.getElementById('helloGuest').innerHTML 
        = (ChallengerName + "さん、こんにちは。手を選んでください。");
    }
};




function StartSlide() {
　　if ( TIMER_ID == -1 ) {
　　　　TIMER_ID = setInterval('ChangeImg()',TIMER); //停止中の場合に実行
    }　　
}

function ChangeImg() {
　　count++;
　　count %= TOTAL;
　　document.IMAGE.src=count + ".JPG";　//画像を表示
}


function selectStone(){
    ChallengerIsDecision = 0;
    StopSlide();
};

function selectScissors(){
    ChallengerIsDecision = 1;
    StopSlide();
};
function selectPaper(){
    ChallengerIsDecision = 2;
    StopSlide();
};
function StopSlide() {
　　if ( TIMER_ID != -1 ) {
　　　　clearInterval(TIMER_ID);
　　　　TIMER_ID="-1" //スライド停止中
    };
    NPCIsDecision = count;
    //document.msg.getElementById('msg').innerHTML = NPC.isDecision;
    janken();
};

function janken(){
    if(ChallengerIsDecision == NPCIsDecision){
    document.getElementById('resultMsg').innerHTML = "DRAW";
    }else if((ChallengerIsDecision ==[0] && NPCIsDecision ==[1]) || (ChallengerIsDecision ==[1] && NPCIsDecision ==[2]) ||(ChallengerIsDecision ==[2] && NPCIsDecision ==[0])){
        document.getElementById('resultMsg').innerHTML = "WINNER:"+ChallengerName;
    }else{
         document.getElementById('resultMsg').innerHTML = "WINNER:"+NPCName;
    };
};


function reset(){
    var ChallengerName= 'ゲスト';    
    var ChallengerIsDecision = {stone:0,scissors:1,paper:2};
    
    var NPCName = "Champ";
    var NPCIsDecision = {stone:0,scissors:1,paper:2};
    document.getElementById('resultMsg').innerHTML = "どちらが勝つのか・・・？"

    StartSlide()
};
