var db;
var form,player,game,allPlayers;
var gamestate=0 ;
var playercount;
var distance=0;
var car1,car2,car3,car4,cars;
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playercount===4){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();
    }
    drawSprites();
}

