   size(window.innerWidth, window.innerHeight); 
     frameRate(60);

var x= 200;
var yt= 200;
var r2 = random(30,197);
var g2 = random(30,194);
var b2 = random(30,191);
var degr = 1;
var degg = 1;
var degb = 1;

var y1 = height;
var x1 = width/7;

var y2 = height;
var x2 = 2*width/7;

var y3 = height;
var x3 = 3*width/7;

var y4 = height;
var x4 = 4*width/7;

var y5 = height;
var x5 = 5*width/7;

var y6 = height;
var x6 = 6*width/7;

var y7 = height;
var x7 = width/7;

var y8 = height;
var x8 = 2*width/7;

var y9 = height;
var x9 = 3*width/7;

var y10 = height;
var x10 = 4*width/7;

var y11 = height;
var x11 = 5*width/7;

var y12 = height;
var x12 = 6*width/7;

var level = 0;
var score2 = localStorage.getItem("score");

if ( localStorage.getItem("level") == "NaN" || localStorage.getItem("level") == NaN || localStorage.getItem("level") == null){ level = 0; }
else { level = parseInt(localStorage.getItem("level"));}

var y = height+500;

var oba = 0;
var time = 0;


var levelUP= function(message,nxtLevel){
    
  
   rectMode(CENTER);
    fill(16, 117, 0);
    stroke(16,117,0);
    strokeWeight("1");
   
    rect(x1,y1,8,30,5);
    triangle(x1-8,y1-10,x1,y1-25,x1+8,y1-10);
   
    rect(x2,y2,8,30,5);
    triangle(x2-8,y2-10,x2,y2-25,x2+8,y2-10);
   
    rect(x3,y3,8,30,5);
    triangle(x3-8,y3-10,x3,y3-25,x3+8,y3-10);
    
     rect(x4,y4,8,30,5);
    triangle(x4-8,y4-10,x4,y4-25,x4+8,y4-10);
    
     rect(x5,y5,8,30,5);
    triangle(x5-8,y5-10,x5,y5-25,x5+8,y5-10);
    
     rect(x6,y6,8,30,5);
    triangle(x6-8,y6-10,x6,y6-25,x6+8,y6-10);
    
    rect(x7,y7,8,30,5);
    triangle(x7-8,y7-10,x7,y7-25,x7+8,y7-10);
   
    rect(x8,y8,8,30,5);
    triangle(x8-8,y8-10,x8,y8-25,x8+8,y8-10);
   
    rect(x9,y9,8,30,5);
    triangle(x9-8,y9-10,x9,y9-25,x9+8,y9-10);
    
     rect(x10,y10,8,30,5);
    triangle(x10-8,y10-10,x10,y10-25,x10+8,y10-10);
    
     rect(x11,y11,8,30,5);
    triangle(x11-8,y11-10,x11,y11-25,x11+8,y11-10);
    
     rect(x12,y12,8,30,5);
    triangle(x12-8,y12-10,x12,y12-25,x12+8,y12-10);
    
    if (time < 60){

    fill(224, 0, 0);
    stroke(224, 0, 0);
    rect(width/2,y,8*10,30*10,5);
    triangle(width/2-80,y-100,width/2,y-250,width/2+80,y-100);
    y-=20;
    if(time === 59){ y = height;}    
    }else if(time <200){
        
        for (var a = 0 ; a < 10; a++){
        
        if ( a === 9 ) {
            textAlign(CENTER,CENTER);
            textSize(50);
            fill(255, 255, 255);
            text("You Leveled Up",x,y);
        }else {
            textAlign(CENTER,CENTER);
            textSize(50);
            fill(r2, g2, b2);
            text("You Leveled Up",x-a,y+a);
            
    r2+= degr;
    g2+= degg;
    b2+= degb;
            
    if ( r2 >= 200 ){degr = -0.3;}
    else if( r2 <= 44 ){ degr = 0.3; }
    if ( g2 >= 200 ){degg = -0.3;}
    else if( g2 <= 43 ){ degg = 0.3; }
    if ( b2 >= 200 ){degb = -0.3;}
    else if( b2 <= 43 ){ degb = 0.3; }
            
            
        }
        
    }
        
       y-=7; 
           if(time === 199){ y = height;}
        
    }
    
    else{
       
           fill(0, 115, 100,oba);
    strokeWeight("5");
    stroke(13, 89, 0,oba);
    ellipse(width/2,y, 300, 300);

    fill(255, 255, 255);
    textSize("30");
    textAlign(CENTER, CENTER);
    text(message,width/2,y); 
    y-=6; 
    if(y < height/2){y+=6;}
        
    }
    

    
    y1-=20;
    y2-=17;
    y3-=11;
    y4-=19;
    y5-=13;
    y6-=15;
    y7-=6;
    y8-=8;
    y9-=18;
    y10-=7;
    y11-=10;
    y12-=6;
    oba+=7.5;
    time++;
    
if(y1 <= 0){ 
    y1 = height-10; 
    }
    
if(y2 <= 0){ 
    y2 = height-10; 
    }
    
if(y3 <= 0){ 
    y3 = height-10; 
    }
if(y4 <= 0){ 
    y4 = height-10; 
    }
if(y5 <= 0){ 
    y5 = height-10; 
    }
    
if(y6 <= 0){ 
    y6 = height-10; 
    } 
    
    
if(y7 <= 0){ 
    y7 = height-10; 
    }
    
if(y8 <= 0){ 
    y8 = height-10; 
    }
    
if(y9 <= 0){ 
    y9 = height-10; 
    }
if(y10 <= 0){ 
    y10 = height-10; 
    }
if(y11 <= 0){ 
    y11 = height-10; 
    }
    
if(y12 <= 0){ 
    y12 = height-10; 
    } 

localStorage.setItem("level", nxtLevel );    
}

draw = function() {

    background(0, 0, 0,100);	
//println(score2);
println(level);    
    if(score2 >= 40 && level === 0){
        levelUP("Congrates..! ?\nYou are now\n a Small Orca.. ", 1);
    }if(score2 >= 140 && level == 1){
        levelUP("You made it!! \nYou are now\n a Teenage Orca.. ", 2);
    }if(score2 >= "500" && level == 2){
        levelUP("Welcome to the big boys..\nYou are now\n an Adult Orca.. ", 3);
    }if(score2 >= 750 && level == 3){
        levelUP("congratulations!\nYou are now\n a Parent Orca.. ", 4);
    }if(score2 >= 1200 && level == 4){
        levelUP("Awesome.. \nYou are now\n a Hunter Orca.. ", 5);
    }if(score2 >= 2000 && level == 5){
        levelUP("You Rule... \nYou are now\n a Leader Orca.. ", 6);
    }if(score2 >= 3000 && level == 6){
        levelUP("Amazing! \nYou are now\n a Conquerer Orca.. ", 7);
    }if(score2 >= 5000 && level == 7){
        levelUP("Your Highness \nYou are now\n the King Of\n The Ocean Orca", 8);
    }}