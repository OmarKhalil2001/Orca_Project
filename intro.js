//controls background

var bg = ["url('img/background.jpg')","url('img/background2.jpg')","url('img/background3.jpg')","url('img/background4.jpg')","url('img/background5.jpg')", "url('img/background6.jpg')", "url('img/background7.jpg')", "url('img/background8.jpg')", "url('img/background9.jpg')", "url('img/background10.jpg')", "url('img/background11.jpg')", "url('img/background12.jpg')"];
var bgSelect = bg[Math.floor(Math.random() * bg.length)];
document.querySelector("#background").style.backgroundImage = bgSelect;

var IntroPhase;
var phase1 = document.querySelector("#intro1");
var phase2 = document.querySelector("#intro2");
var phase3 = document.querySelector("#intro3");
var phase4 = document.querySelector("#intro4");
var phase5 = document.querySelector("#intro5");
var phase6 = document.querySelector("#intro6");
var phaseNext = document.getElementsByClassName("phaseButton");

if ( localStorage.getItem("IntroPhase") == "NaN" || localStorage.getItem("IntroPhase") == NaN || localStorage.getItem("IntroPhase") == null){ IntroPhase = 0; }
else { IntroPhase = parseInt(localStorage.getItem("IntroPhase")); 
	//IntroPhase = 0;
	}

if (IntroPhase == 0 ){
	phase1.style.display = "block";
	$("#TI1").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});
}

if (IntroPhase == 1 ){
	phase2.style.display = "block";
	phase1.style.display = "none";
	$("#TI2").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});
}

if (IntroPhase == 2 ){
	phase3.style.display = "block";
	phase2.style.display = "none";
	$("#TI3").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});
}

if (IntroPhase == 3 ){
	phase4.style.display = "block";
	phase3.style.display = "none";
	$("#TI4").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});
}

if (IntroPhase == 4 ){
	phase5.style.display = "block";
    	localStorage.setItem("score",score = 0);  
	localStorage.setItem("level",0);
	level = parseInt(localStorage.getItem("level"));
    	scoreHolder.innerHTML = score + " &#128515;";
	phase4.style.display = "none";
	$("#TI5").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});	
}
if (IntroPhase == 5 ){
	phase6.style.display = "block";
	phase5.style.display = "none";
	$("#TI6").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});	
}
if (IntroPhase > 5 ){

	$("#intro6").fadeOut(1000);
	$("#all").load(bgSelect, function(e){
	$("#all").fadeIn(1000);});
}

function nextPhase() {

	IntroPhase++;
	localStorage.setItem("IntroPhase", IntroPhase);

if (IntroPhase == 1 ){
	phase2.style.display = "block";
	phase1.style.display = "none";
	$("#TI2").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});
}

if (IntroPhase == 2 ){
	phase3.style.display = "block";
	phase2.style.display = "none";
	$("#TI3").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});
}

if (IntroPhase == 3 ){
	phase4.style.display = "block";
	phase3.style.display = "none";
	$("#TI4").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});
}

if (IntroPhase == 4 ){
	phase5.style.display = "block";
	phase4.style.display = "none";
	$("#TI5").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});	
}
if (IntroPhase == 5 ){
	phase6.style.display = "block";
	phase5.style.display = "none";
	$("#TI6").animate({ "top": "-=10%" }, 1000).fadeIn({queue: false, duration: 1000});	
}
if (IntroPhase > 5 ){

	$("#intro6").fadeOut(1000);
	$("#all").load(bgSelect, function(e){
	$("#all").fadeIn(1000);
});

	
}
}

phaseNext[0].addEventListener("click", nextPhase);
phaseNext[1].addEventListener("click", nextPhase);
phaseNext[2].addEventListener("click", nextPhase);
phaseNext[3].addEventListener("click", nextPhase);
phaseNext[4].addEventListener("click", nextPhase);
phaseNext[5].addEventListener("click", nextPhase);
