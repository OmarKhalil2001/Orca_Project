/*		TEST		*/
var date = new Date;


if ( localStorage.getItem("level") == "NaN" || localStorage.getItem("level") == "undefined" ||  localStorage.getItem("level") == NaN || localStorage.getItem("level") == null){ localStorage.setItem("level", 0 );  level = "0"; }
else { level = parseInt(localStorage.getItem("level"));}

/*
//controls background
var bg = ["url('img/background.jpg')","url('img/background2.jpg')","url('img/background3.jpg')","url('img/background4.jpg')","url('img/background5.jpg')", "url('img/background6.jpg')", "url('img/background7.jpg')", "url('img/background8.jpg')", "url('img/background9.jpg')", "url('img/background10.jpg')", "url('img/background11.jpg')", "url('img/background12.jpg')"];
var bgSelect = bg[Math.floor(Math.random() * bg.length)];
document.querySelector("#background").style.backgroundImage = bgSelect;

//Make the background load smoothly

$("#background").load(bgSelect, function(e){
	$("#all").fadeIn(1000);
});
*/

//controls Menu
var menuButton = document.getElementById("menu_button");
var cancelMenu = document.getElementById("cancel-menu");
var cancelAbout = document.getElementById("cancel-about");
var menu = document.getElementById("menu");
var cancelContact = document.getElementById("cancel-contact");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var cookieConsent = document.getElementById("Ok");
var aboutOnOff = 0;
var contactOnOff = 0;
var cancelContact2;
var menuOnOff = 0;

menuButton.addEventListener("click", () => {
	if(menuOnOff == 0){
		$( "#menu" ).animate({ "left": "-=82%" }, {duration : 200});	
		menuOnOff = 1;
	}
});

cancelMenu.addEventListener("click", () => {
	if(menuOnOff == 1){
		$( "#menu" ).animate({ "left": "+=82%" }, {duration : 200});	
		menuOnOff = 0;
	}		
});

about.addEventListener("click", () =>{
	if(aboutOnOff == 0){
				$( "#menu" ).animate({ "left": "+=82%" }, {duration : 200});
				menuOnOff = 0;
				$( "#aboutText" ).fadeIn(400);
				aboutOnOff = 1;}
				
});

cancelAbout.addEventListener("click", () => {

	if(aboutOnOff == 1){
		$( "#aboutText" ).fadeOut(400);
		aboutOnOff = 0;}

});

cancelContact.addEventListener("click", () => {

	if(contactOnOff == 1){
		$( "#contact-form" ).fadeOut(400);
		contactOnOff = 0;
		}

});


contact.addEventListener("click", () =>{

		if(contactOnOff == 0){
				$( "#menu" ).animate({ "left": "+=82%" }, {duration : 200});	
				$( "#contact-form" ).fadeIn(400);
				contactOnOff = 	1;
				menuOnOff = 0;}
});

cookieConsent.addEventListener("click", ()=>{

	

		$( "#contact-form" ).fadeOut(100);
		document.querySelector("#contact-form").innerHTML = '<iframe src="https://orcatheapp.blogspot.com/?m=1" width="100%" height="100%" id="contact-frame"></iframe><button id="cancel-contact2">X</button>';
		document.querySelector("#contact-form").style.height = "90%";
		document.querySelector("#contact-form").style.top = "5%";
		cancelContact2 = document.getElementById("cancel-contact2");
		cancelContact2.addEventListener("click", () => {

			if(contactOnOff == 1){
				$( "#contact-form" ).fadeOut(400);
				contactOnOff = 0;
				menuOnOff = 0;}

});		

		$( "#contact-form" ).fadeIn(100);
		menuOnOff = 0;

});



//------------------------------------------------------------------

//Pick Button + Main Function
var PickButton = document.getElementById("pick-button");
var MainRest = document.getElementById("main-rest");
var InApp = document.getElementById("InApp");
var ButtonsOnOff = 0;

var activities = [["Visit a Natural Site", "Visit the beach, a nearby mountain, or the woods."], ["Plan a Mini-Vacation", "Visit a friend in another city for a couple of days."], ["Plan to visit a New City in your Country", "Go explore your own land."], ["Try some a new Sport", "Try playing a new sport you find interesting."], ["Play with a Pet", "Helps for protection or to get rid of boredom."], ["Volunteer", "Volunteer in something that helps the community,like: Cleaning a nearby street."], ["Call your Relatives and check on them", "Call a sick relative or one that lives alone"], ["Plant a Tree", "Plant a tree in a nearby forest or in your own garden."], ["Start a Garden Project", "Decorate your garden with a collection of flowers or a bird fountain."], ["Help a Person in Need","Help a person in need by donating money, food, or clothes."], ["Do some Workout", "Go to a nearby gym to lose weight or to gain muscles."], ["Start Reading a Book", "Read a book about that either entertains you or educates you."], ["Start learning a New Skill", "Like: programming, cooking, drawing, etc."], ["Cook a Delicious Meal", "Try a Recipe for something you wanted to cook."], ["Call an Old Friend", "Call a friend you haven't talked to in a long time."], ["Try Board Games", "Play chess, checkers, Uno, etc."], ["Make Someone Smile", "Help a homeless person, a child, or a suffering friend."], ["Spend Quality Time with Family", "Take a break from electronics and talk with your family about something."], ["Try to make your own Music","Either by using an application or an instrument you have."], ["Go for a Walk","Go take a walk in a nearby park."], ["Start Meditating","Go to a silent place and ponder about life."], ["Go cycling","Ride a bike around the neighborhood or park."], ["Do some Puzzles","Whether it was physical(Jigsaw), or virtual(online games)."], ["Start a DIY Project","Do a DIY project you saw online."], ["Try to do Photography","Grab your camera and take pictures of bugs, flowers, etc."], ["Take a Step to Stop a Bad Habit","Punish yourself each time you attempt to do a bad habit."],["Give a Gift","Give a gift for a friend or your parents."], ["Visit a Museum","Learn about your country's history by visiting a museum."], ["Vist an Aquarium","Learn about aquamarine life by visiting an aquarium."], ["Change your Room's Decorations","Add some posters or flags."], ["Start Learning a New Language","Learn a language that might benefit you."], ["Take a Break From Electronics","Leave your phone or computer for a while."], ["Write a Message to your Future Self","Remind your future self not to give up."], ["Write about your feelings and let them out","Write about things that frustrate or excite you."], ["Go Fishing","Try catching fish and cooking them."], ["Start listening to an audio book","Listen to something beneficial."], ["Learn about your family history","Check your great-great-grandfather's nationality."], ["Change your style","Change your hairstyle or the things you wear."], ["Rearrange your house's furniture","Change your house's look for the better."], ["Get a part-time job","Work at a nearby supermarket or cafe."], ["Try building a mini tower out of sticks","Try creating the Eiffel Tower."], ["Some coffee, eh?","Energize yourself after a tiring day."], ["organize your schedule","Assign times for your work/activites."], ["Prepare for a camp","Ask your friends if they want to come."], ["Face a fear","Allow yourself to sit with your fear for 2-3 minutes at a time."], ["Try freelancing","Try freelancing in web development."], ["Balance your diet","Eat in a consistent way."], ["Vlog for yourself","Grab a camera and venture into the world of vlogging."], ["Try a new kind of food","Try Greek food, Turkish food, or a famous dish of another culture."], ["Do some drawing","you might be the next Davinci"], ["play Truth or Dare with some friends","Invite some friends to play."], ['Start  "No social media for a week" challenge',"Take a break from all the internet gossip."], ["Try fixing something broken in your house","Fix a vase, door handle, or device."], ["Write a song","Write about a relatable/relevant topic."], ["Start Learning Scratch","A good introduction for aspiring programmers."], ["Play some ping pong with a friend","Invite a friend to a nearby ping pong hall."], ["Start learning Quantum Physics","Grab a book and learn something new."], ["Look at your old pictures","Reminisce about your past."], ["Do some mental exercises","Will help you concentrate better, be better with math, and is much fun."], ["Learn how to do first aid","You might save someone's life."], ["Try graphic design","Learn photoshopping, video editing, or animating."], ["Donate some stuff you don't need","Donate undersized clothes or unwanted childhood toys."], ["Surprise someone you love","Buy flowers, chocolate, or something they like."], ["Take an IQ test","Test your intellect."], ["Make your own bucket list","Like: skydiving or visiting a country."], ["Go swimming","Visit a nearby beach/club and refresh a bit."], ["Make a scrap book","Record drawings, pictures, etc."], ["Visit a retirement house","Talk to and help elders."], ["Record yourself making a trickshot","Test your luck with a difficult trick."], ["Go for a 3 miles run","Run near the coast or in your neighbourhood."], ["Try solving some riddles","A great mental exercize and is much fun."]];

var activitiesScore = [20,50,50,15,20,15,5,30,45,20,15,10,25,25,5,10,5,5,40,15,10,20,10,25,30,40,20,10,10,10,50,20,5,5,30,10,10,25,35,50,15,5,25,25,40,30,30,35,5,10,5,40,20,35,40,10,50,5,35,25,30,20,10,10,5,15,15,40,15,15];

var randm;

if ( localStorage.getItem("randm") == "NaN" || localStorage.getItem("randm") == NaN || localStorage.getItem("randm") == null){ randm = -1; }
else { randm = parseInt(localStorage.getItem("randm"));}

PickButton.addEventListener("click", () => {

	// Zeyad, Main Function Goes Here...

	randm += 1;
	localStorage.setItem("randm", randm);   
	var anotherAct = activities[randm];
	var x = anotherAct;
	document.querySelectorAll("#activity")[0].innerHTML = x[0];
	var y = document.getElementById("description").innerHTML;
	document.getElementById("description").innerHTML = x[1];




	
	if (ButtonsOnOff == 0){
		$( "#pick-button" ).animate({ "top": "-=80%" }, {duration : 400});
		$( "#score-holder" ).animate({ "bottom": "-=80%" }, {duration : 400});
		$("#InApp").delay(400).fadeIn(400);
		ButtonsOnOff = 1;
				}

});

//------------------------------------------------------------------

//score
var score;
var scoreHolder =  document.getElementById("score");

if ( localStorage.getItem("score") == "NaN" || localStorage.getItem("score") == NaN || localStorage.getItem("score") == null){ score = 0; }
else { score = parseInt(localStorage.getItem("score"));}
scoreHolder.innerHTML = score + " &#128515;"

//------------------------------------------------------------------

//InApp Controls (I'M IN, ELSE, HOME buttons control)
var HomeButton = document.getElementById("home"); 
var ElseButton = document.getElementById("else"); 
var ImInButton = document.getElementById("ok");
var Great = document.getElementById("Great");
var ResetButton = document.getElementById("reset");

HomeButton.addEventListener("click", () => {


	if(ButtonsOnOff == 1){
		$("#InApp").fadeOut(500);
		$( "#pick-button" ).show().animate({ "top": "+=80%" }, {duration : 500});
		$( "#score-holder" ).show().animate({ "bottom": "+=80%" }, {duration : 500});
		ButtonsOnOff  = 0;
				}

});


ElseButton.addEventListener("click", () => {

	//Zeyad, when a user clicks this button, anothoer activity should appear

	randm += 1;
	localStorage.setItem("randm", randm); 
	var anotherAct = activities[randm];
	var x = anotherAct;
	document.querySelectorAll("#activity")[0].innerHTML = x[0];
	var y = document.getElementById("description").innerHTML;
	document.getElementById("description").innerHTML = x[1];




});


ImInButton.addEventListener("click", () => {
	
	if(ButtonsOnOff == 1){
		$("#InApp").fadeOut(500);
		$( "#pick-button" ).show().animate({ "top": "+=80%" }, {duration : 500});
		$( "#score-holder" ).show().animate({ "bottom": "+=80%" }, {duration : 500});
		ButtonsOnOff  = 0;
		if(status == "off"){
		score += 5; 
		localStorage.setItem("score",score);
		scoreHolder.innerHTML = score + " &#128515;"}
		localStorage.setItem("activityChosen", activities[randm][0]);
		localStorage.setItem("StartTime",date.getTime());
		localStorage.setItem("scorePossible", activitiesScore[randm]);
		localStorage.setItem("status", "on");
		status = localStorage.getItem("status");
		doneButton.style.display = "block";
		document.querySelector("#kaboom").style.display = "block";		
		document.querySelector("#UhaveText").textContent = 'You have 24 hours to complete the mission. If you\'re done before the 24 hours, click the "Done" button in the menu. You get 5 points for picking a mission and ' + activitiesScore[randm] + ' for getting it done...';
		activityChosen = localStorage.getItem("activityChosen");
		scorePossible = localStorage.getItem("scorePossible");
		StartTime = localStorage.getItem("StartTime");
		$("#Uhave").fadeIn(500);
		}


});

//----------------------------------------------------
Great.addEventListener("click", () =>{

	$("#Uhave").fadeOut(500);
});

//checks if the User did his or her homework
var status;
var activityChosen = localStorage.getItem("activityChosen");
var scorePossible = localStorage.getItem("scorePossible");
var StartTime = localStorage.getItem("StartTime");
var date = new Date;
if ( localStorage.getItem("status") == "NaN" || localStorage.getItem("status") == NaN || localStorage.getItem("status") == null){ status = "off"; }
else { status = localStorage.getItem("status");}

if(status == "on" && date.getTime() - StartTime >= 7200000 * 12){

	$("#haveU").fadeIn(400);
	document.querySelector("#haveUText").textContent = "Did you " + activityChosen + "?";
	document.querySelector("#Yes").addEventListener("click",()=>{

		score += parseInt(scorePossible); 
		localStorage.setItem("score",score);
		scoreHolder.innerHTML = score + " &#128515;"
		$("#haveU").fadeOut(400);
		doneButton.style.display = "none";
		document.querySelector("#kaboom").style.display = "none";
		scorePossible = 0;
		localStorage.setItem("status","off");	
		status = localStorage.getItem("status");	
	});

	document.querySelector("#NotYet").addEventListener("click",()=>{
		
		StartTime = localStorage.setItem("StartTime",date.getTime());
		$("#haveU").fadeOut(400);		
	});
	
	document.querySelector("#IWont").addEventListener("click",()=>{
		doneButton.style.display = "none";
		document.querySelector("#kaboom").style.display = "none";
		localStorage.setItem("status","off");
		$("#haveU").fadeOut(400);		
	});
}


var okNextButt = document.getElementById("ThankUNext");
var didIt = 0;
var doneButton = document.getElementById("Done");

if( status == "on" ){

	doneButton.style.display = "block";
	document.querySelector("#kaboom").style.display = "block";
}

doneButton.addEventListener("click", () => {

		score += parseInt(scorePossible); 
		localStorage.setItem("score", score);
		scoreHolder.innerHTML = score + " &#128515;"
		localStorage.setItem("status","off");
		status = localStorage.getItem("status");
		document.querySelector("#kaboom").style.display = "none";
		doneButton.style.display = "none";
		scorePossible = 0;
		$( "#menu" ).animate({ "left": "+=82%" }, {duration : 200});
		menuOnOff = 0;

});

//-------------------------------
okNextButt.addEventListener("touchstart", function(){

	didIt = 1; 	

		});

//Reset_Score function
ResetButton.addEventListener("click", function() {
	
    	localStorage.setItem("score",score = 0);  
	localStorage.setItem("level",0);
	level = parseInt(localStorage.getItem("level"));
	menuOnOff = 0;
    	scoreHolder.innerHTML = score + " &#128515;";
	$( "#menu" ).animate({ "left": "+=82%" }, {duration : 200});
    
});

