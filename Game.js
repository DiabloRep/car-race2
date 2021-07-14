class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = db.ref('Gamestate');
        gameStateRef.on("value",(data)=>{
            gamestate = data.val();
        })
    }
    update(state){
        db.ref('/').update({
            Gamestate: state
        });
    }
    async start(){
        if(gamestate === 0){
            player = new Player();
            var playerCountRef = await db.ref("PlayerCount").once("value")
            if(playerCountRef.exists()){
                playercount=playerCountRef.val();
                player.getCount();
             
            }
            form = new Form();
            form.display();
            
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        // 0,1,2,3
        cars =[car1,car2,car3,car4]
    }
        play(){
            form.hide_details();
            textSize(30)
            text("Game Start",120,100);
            Player.getPlayerInfo();
            if(allPlayers!== undefined){
                var index=0;
                var y ;
                var x=0;
                for(var plr in allPlayers){
                    //add 1 to index for every loop
                    index = index+1;
                    // position of the car a little away from each other
                    x=x+200;
// using data from database to display y axis;
                    y= displayHeight-allPlayers[plr].Distance;
                    cars[index-1].x=x;
                    cars[index-1].y=y;
                    if(index===player.index){
                        //change the color of active car to red
                        cars[index-1].shapeColor="red";
                        camera.position.x=displayWidth/2;
                        camera.position.y=cars[index-1].y;

                    }

                    /*if(plr === "player"+player.index){
                        fill("red");


                    }
                    else{
                        fill("black");

                    }
                    y+=30
                    textSize(15);
                  
                    text(allPlayers[plr].name+":"+allPlayers[plr].Distance,120,y)*/

                }
            }        
               if(keyIsDown(UP_ARROW)&&player.index!== null){
                   player.distance+=50
                   player.update();

               }
               drawSprites();
        }
}