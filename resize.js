//resizing
var act = document.querySelectorAll("#activity");
var title = document.querySelector("#main_title");
var menuB = document.querySelector("#menu_text");
var scoreBox = document.querySelector("#score-holder");
var scoreText = document.querySelector("#score");
var cancelMenBut = document.querySelector("#cancel-menu");
var cancelAbtBut = document.querySelector("#cancel-about");
var cancelConBut = document.querySelector("#cancel-contact");

if(window.innerWidth < 365){

	act[0].style.fontSize = "45px";
	document.querySelector("#inApp-main").style.marginTop = "20%";
	title.style.fontSize = "25px";
	menuB.style.fontSize = "22px";
}
if(window.innerHeight > 790){


	title.style.fontSize = "33px";
	menuB.style.fontSize = "30px";
	document.querySelector("#inApp-main").style.marginTop = "30%";
	document.querySelector("#YouBecame").style.fontSize = "65px";
	document.querySelector("#youBecameHolder").style.height = "50%";



}
if(window.innerWidth < 321){

	act[0].style.fontSize = "36px";
	document.querySelector("#urRank").style.fontSize = "15px";
	document.querySelector("#Rank").style.fontSize = "30px";
	title.style.fontSize = "25px";
	menuB.style.fontSize = "22px";
	document.querySelector("#inApp-main").style.marginTop = "22%";
	document.querySelector("#description").style.fontSize = "17px";
	document.querySelectorAll("button")[6].style.fontSize = "25px";	
	document.querySelectorAll("p")[3].style.fontSize = "50px";
	document.querySelector("#YouBecame").style.fontSize = "55px";
	document.querySelectorAll("button")[8].style.fontSize = "25px";
	document.querySelector("#notice").style.marginBottom = "30%";
	document.querySelector("#reset").style.fontSize = "25px";

	
} 

if(window.innerWidth > 400){

	document.querySelector("#youBecameHolder").style.height = "50%";
}

if(window.innerWidth > 599){
	
	act[0].style.fontSize = "70px";
	title.style.fontSize = "45px";
	menuB.style.fontSize = "40px";
	scoreBox.style.height = "60px";
	scoreText.style.fontSize = "35px";
	cancelMenBut.style.width = "50px";
	cancelMenBut.style.height = "50px";
	cancelConBut.style.width = "50px";
	cancelConBut.style.height = "50px";
	cancelAbtBut.style.width = "50px";
	cancelAbtBut.style.height = "50px";
	cancelMenBut.style.fontSize = "40px";	
	cancelAbtBut.style.fontSize = "40px";
	cancelConBut.style.fontSize = "40px";
	document.querySelectorAll("button.choiceButton")[0].style.width = "18%";
	document.querySelectorAll("button.choiceButton")[1].style.width = "18%";
	document.querySelectorAll("button.choiceButton")[2].style.width = "18%";
	document.querySelector("#ok").style.left = "10%"; 
	document.querySelector("#else").style.left = "41%"; 
	document.querySelector("#home").style.right = "10%"; 
	document.querySelector("#description").style.fontSize = "32px";
	document.querySelectorAll("button")[8].style.fontSize = "50px";	
	document.querySelectorAll("p")[3].style.fontSize = "100px";
	document.querySelectorAll("p")[4].style.fontSize = "25px";
	document.querySelectorAll("button")[6].style.fontSize = "50px";
	document.querySelector("#reset").style.fontSize= "50px"
	document.querySelector("h2").style.fontSize ="40px";
	document.querySelector("#YouBecame").style.fontSize = "90px";	
	document.querySelector("#urRank").style.fontSize = "30px";

	document.querySelector("#TI6").style.fontSize ="100PX";
	document.querySelector("#TI5").style.fontSize ="60PX";
	document.querySelector("#TI4").style.fontSize ="60PX";
	document.querySelector("#TI3").style.fontSize ="60PX";
	document.querySelector("#TI2").style.fontSize ="60PX";
	document.querySelector("#TI1").style.fontSize ="80PX";

} 

if(window.innerWidth > 750){
	document.querySelector("#YouBecame").style.fontSize = "105px";
	document.querySelector("#youBecameHolder").style.height = "55%";
}
if(window.innerWidth > 799){
	
	act[0].style.fontSize = "80px";
	title.style.fontSize = "50px";
	menuB.style.fontSize = "45px";
	scoreBox.style.height = "60px";
	scoreText.style.fontSize = "35px";
	cancelMenBut.style.width = "50px";
	cancelMenBut.style.height = "50px";
	cancelMenBut.style.fontSize = "40px";
	document.querySelectorAll("button.choiceButton")[0].style.width = "18%";
	document.querySelectorAll("button.choiceButton")[1].style.width = "18%";
	document.querySelectorAll("button.choiceButton")[2].style.width = "18%";
	document.querySelector("#ok").style.left = "10%"; 
	document.querySelector("#else").style.left = "41%"; 
	document.querySelector("#home").style.right = "10%"; 
	document.querySelector("#description").style.fontSize = "40px";
	document.querySelectorAll("button")[6].style.fontSize = "50px";	
	document.querySelectorAll("p")[3].style.fontSize = "100px";
	document.querySelectorAll("p")[4].style.fontSize = "30px";
	document.querySelectorAll("button")[7].style.fontSize = "50px";	
	document.querySelector("#reset").style.fontSize= "50px";
	document.querySelector("h2").style.fontSize ="50px";	
	cancelAbtBut.style.width = "60px";
	cancelAbtBut.style.height = "60px";
	cancelAbtBut.style.fontSize = "45px";
	document.querySelector("#YouBecame").style.fontSize = "140px";
	document.querySelector("#youBecameHolder").style.height = "60%";
	document.querySelector("#YouBecame").style.marginRight = "10%";
	document.querySelector("#YouBecame").style.testAlign = "center";


	document.querySelector("#TI6").style.fontSize ="140PX";
	document.querySelector("#TI5").style.fontSize ="80PX";
	document.querySelector("#TI4").style.fontSize ="80PX";
	document.querySelector("#TI3").style.fontSize ="80PX";
	document.querySelector("#TI2").style.fontSize ="80PX";
	document.querySelector("#TI1").style.fontSize ="100PX";

} 