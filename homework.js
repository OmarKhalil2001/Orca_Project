var status;
var activityChosen = localStorage.getItem("activityChosen");
var scorePossible = localStorage.getItem("scorePossible");
var StartTime = localStorage.getItem("StartTime");
var date = new Date;
if ( localStorage.getItem("status") == "NaN" || localStorage.getItem("status") == NaN || localStorage.getItem("status") == null){ status = "off"; }
else { status = localStorage.getItem("status");}

if(status == "on" && date.getTime() - StartTime >= 7200000 ){

	$("#haveU").fadeIn(400);
	document.querySelector("#haveUText").textContent = "Have you " + activityChosen + "?";
	document.querySelector("#Yes").addEventListener("click",()=>{

		score += parseInt(scorePossible); 
		localStorage.setItem("score",score);
		scoreHolder.innerHTML = score + " &#128515;"
		$("#haveU").fadeOut(400);
		localStorage.getItem("status","off");		
	});

	document.querySelector("#NotYet").addEventListener("click",()=>{
		
		StartTime = localStorage.setItem("StartTime",date.getTime());
		$("#haveU").fadeOut(400);		
	});
	
	document.querySelector("#IWont").addEventListener("click",()=>{
		
		localStorage.setItem("status","off");
		$("#haveU").fadeOut(400);		
	});
}