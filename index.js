
//capitalizing all constants
var JS_FLAKES = 100,
    MIN_V = 1,
    MAX_V = 2,
    MIN_SIZE = 3,
    MAX_SIZE = 6,
    WIND = 0.4;
var snow = [];
for(var i=0;i<JS_FLAKES;i++){//because while loops are stupid
    snow[i] = {x:random(500),
               y:random(600),
               Vy:random(MIN_V,MAX_V),
               size:random(MIN_SIZE,MAX_SIZE)
    };
}
var  draw = function(){//because I'm not hosting this
    var f,i;
    // no-outlines
    noStroke();
    
    //text
    textSize(50);
    fill(255, 0, 0);
    text("Jake Sylvestre", 200, 50, 10, 10);
    
    
    // sky
    background(2, 22, 25);
    
    // ground (because it's snowing)
    fill(232, 235, 237);
    rect(0, 329, 400, 71);
    //draw  flakes
    stroke(255);
    for(i=0;i<JS_FLAKES;i+=2){
        f = snow[i];
        f.x = (f.x + WIND)%400;
        f.y = (f.y + f.Vy)%329;
        strokeWeight(f.size);
        point(f.x,f.y);
    }
    noStroke();
    // set the size of the biggest snowball
    var snowballSize = 160;
    // set x coordinate of the snowman
    var snowmanX = 200;
    
    // bottom snowball
    fill(255, 255, 255);
    ellipse(snowmanX, 309, snowballSize, snowballSize);
    
    // middle snowball shadow
    fill(240, 240, 240);
    ellipse(snowmanX, 218, 0.8 * snowballSize, 0.7 * snowballSize);//Using variables improves performance
    
    // middle snowball (non-rect)
    fill(255, 255, 255);
    ellipse(snowmanX, 212, 0.82454 * snowballSize, 0.8234 * snowballSize);
    
    // top snowball shadow 
    /*
    Testing because vim is not working
    */
    fill(240, 240, 240);
    ellipse(snowmanX, 128, 0.6 * snowballSize, 0.6 *snowballSize);
    
    // top snowball
    //TODO fix fill
    fill(255, 255, 255);
    ellipse(snowmanX, 123, 0.6 * snowballSize, 0.6 *snowballSize);
    
    // buttons
    fill(0, 0, 0);//black or red?
    ellipse(snowmanX, 194, 10, 10);
    ellipse(snowmanX, 222, 10, 10);
    
    //nose
    fill(255, 100, 0);//bright orange
    triangle(snowmanX, 136, snowmanX, 147, snowmanX + 25, 151);
    
    // set color for eyes, hat, and arms
    fill(43, 38, 38);
    
    // eyes
    var eyeSize = 11;
    var distanceFromCenter = 20;
    ellipse(snowmanX - distanceFromCenter, 129, eyeSize, eyeSize);
    ellipse(snowmanX + distanceFromCenter, 129, eyeSize, eyeSize);
    
    // pink hat
    fill(255, 105, 180);
    rect(snowmanX - 63, 92, 126, 5);
    fill(255, 105, 180);
    rect(snowmanX - 39, 37, 76, 60);
    
    
    stroke(139, 125, 107);
    strokeWeight(2);
    
    // left arm
    line(snowmanX - 127, 140, snowmanX - 58, 187);
    line(snowmanX - 109, 117, snowmanX - 101, 157);
    line(snowmanX - 132, 171, snowmanX - 91, 165);
    
    
    //boots
    
    
    
    // right arm
    line(snowmanX + 61, 192, snowmanX + 135, 144);
    line(snowmanX + 104, 165, snowmanX + 142, 169);
    line(snowmanX + 86, 176, snowmanX + 113, 125);
    stroke(245);
    for(i=1;i<JS_FLAKES;i+=2){
        f = snow[i];
        f.x = (f.x + WIND)%400;
        f.y = (f.y + f.Vy)%400;
        strokeWeight(f.size*2);
        point(f.x,f.y);
    }
    noStroke();    
    
        //my name
    textSize(20);
    fill(0, 0, 0);
    text("\t\t                           \n\n\n\n                        Jake Sylvestre",0,300);
    
    //mouth
ellipse(snowmanX , 160, 20, 20);
fill(255, 0, 0);
noStroke();
//ellipse(snowmanX, 170, 14, -25);

//moon

fill(84, 84, 84);
ellipse(39, 39, 60, 60);
//ellipse.glow({color: "#FFF", width: 100};
fill(255, 255, 255);
};

