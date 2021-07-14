class Form{
constructor(){
     this.input = createInput("Name");
     this.button = createButton("Play");
     this.greeting = createElement('h3');
}
hide_details(){
    this.button.hide();
    this.greeting.hide();
    this.input.hide();
}
display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,0);
//this.title.style('color', 'blue');
    
   
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
//arrow function helps to bind/join 'this' to the class not to the object
   this.button.mousePressed(()=>{
       this.input.hide();
       this.button.hide();
        player.name = this.input.value();

       playercount +=1;
       player.index=playercount;
       
       player.updateCount(playercount);
       player.update();
    
       
      
       this.greeting.html("Hello " + player.name);
       this.greeting.position(displayWidth/2-70,displayHeight/4);
   });
}
}