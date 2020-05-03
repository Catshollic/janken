


var Challenger = {
    name:' ',
    isDecision:{
        stone:"stone",
        paper:"paper",
        scissor:"scissor"
            }//dictionary select
};

var NPC = Challenger;
NPC.name = "Champ";
NPC.isDecision = [0];//"stone","paper","scissor"  random  to select

function setUserName(){  
    //set challenger name
    Challenger.name = document.getElementById("PlayerName").value;

    if(document.getElementById("PlayerName").value ==""){
        Challenger.name = "ゲスト";
        return document.getElementById('helloGuest').innerHTML 
        = (Challenger.name + "さん、こんにちは。手を選んでください。");
    }else{
        return document.getElementById('helloGuest').innerHTML 
        = (Challenger.name + "さん、こんにちは。手を選んでください。");
    }
};

function enemyRandom(){
    var DecisionList = new Array(
        "stone.JPG",
        "scissors.JPG",
        "paper.JPG");
    //function displayDesicion(){
    var selectNum = Math.floor(Math.random()*DecisionList.length);
    var display = "<img src=" + DecisionList[selectNum] + ">";
    document.getElementById('enemyDecision').innerHTML = display;
    //document.write(display);
    //};
       
};

function janken(){
    if(Challenger.isDecision == NPC.isDecison){
        document.write("DRAW")
    }else{
        document.write("WINNER:oo");
    }
};


