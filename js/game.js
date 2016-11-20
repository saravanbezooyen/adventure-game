// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Start';
document.getElementById('level_title').innerHTML = 'Start';

// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M

function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'links';
	opt1.setAttribute("onClick", "javascript:Level2l();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'rechts';
	opt3.setAttribute("onClick", "javascript:Level2r();");
	var opt2 = document.getElementById('option2');
		opt2.onclick = function(){
			alert('Je kon het niet laten om te klikken he');
		}

	document.getElementById('level_title').innerHTML = 'Level 1';
	document.getElementById('level_image').src = 'paden.jpg';

	//var del = document.getElementById("?");
	//del.parentNode.removeChild(del);


	// only allow option 2 if user has a key in his inventory

	/*var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'rechts';
	opt2.onclick = function(){
		if(HasKey){
			Level2();
		} else {
			alert('U dont haz key dumbass');
		}
	}

	var opt3 = document.getElementById('option3');

	opt3.onclick = function(){
		HasKey = true;
	}*/
}

function Level2l() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Het bos in';
	opt1.setAttribute("onClick", "javascript:Level3l();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Blijf op het pad';
	opt3.setAttribute("onClick", "javascript:Fail1();");

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'pad.jpg';
} 

function Level2r() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Het bos in';
	opt1.setAttribute("onClick", "javascript:Level3r();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Blijf op het pad';
	opt3.setAttribute("onClick", "javascript:Fail1();");

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'pad.jpg';
} 

function Level3l() { //links
	console.log("Level3l()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speeltuin';
	opt1.setAttribute("onClick", "javascript:Speeltuin();");;
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ga terug naar het pad';
	opt2.setAttribute("onClick", "javascript:Level2();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Begraafplaats';
	opt3.setAttribute("onClick", "javascript:Graveyard();");

	document.getElementById('level_title').innerHTML = 'Level 3';
	document.getElementById('level_image').src = 'pad.jpg';
}

function Level3r() { //rechts
	console.log("Level3l()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Meer';
	opt1.setAttribute("onClick", "javascript:Level4c();");;
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ga terug naar het pad';
	opt2.setAttribute("onClick", "javascript:Level2();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Boom';
	opt3.setAttribute("onClick", "javascript:Level4d();");

	document.getElementById('level_title').innerHTML = 'Level 3';
	document.getElementById('level_image').src = 'pad.jpg';
} 

function Fail1() {
	// faal door gewoon het pad te volgen.
	console.log("Fail1()");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Try again?';
	opt2.setAttribute("onClick", "javascript:Level1();");

	document.getElementById('level_title').innerHTML = 'Faaaaal';
	document.getElementById('img').src = 'fail.png';
}

function Level4a() {	//Speeltuin
	console.log("Level4a()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speeltuin';
	opt1.setAttribute("onClick", "javascript:Speeltuin();");;
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ga terug';
	opt2.setAttribute("onClick", "javascript:Level2();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Begraafplaats';
	opt3.setAttribute("onClick", "javascript:Graveyard();");

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'pad.jpg';
} 

function Level4b() {	//Begraafplaats
	console.log("Level4b()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speeltuin';
	opt1.setAttribute("onClick", "javascript:Speeltuin();");;
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ga terug';
	opt2.setAttribute("onClick", "javascript:Level2();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Begraafplaats';
	opt3.setAttribute("onClick", "javascript:Graveyard();");

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'pad.jpg';
} 

function Level4c() {	//Lake
	console.log("Level4c()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speeltuin';
	opt1.setAttribute("onClick", "javascript:Speeltuin();");;
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ga terug';
	opt2.setAttribute("onClick", "javascript:Level2();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Begraafplaats';
	opt3.setAttribute("onClick", "javascript:Graveyard();");

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'pad.jpg';
} 

function Level4d() {	// Boom
	console.log("Level4d()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speeltuin';
	opt1.setAttribute("onClick", "javascript:Speeltuin();");;
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ga terug';
	opt2.setAttribute("onClick", "javascript:Level2();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Begraafplaats';
	opt3.setAttribute("onClick", "javascript:Graveyard();");

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'pad.jpg';
} 

function Level5() {	 //Finale?
	console.log("Level5()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Speeltuin';
	opt1.setAttribute("onClick", "javascript:Speeltuin();");;
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ga terug';
	opt2.setAttribute("onClick", "javascript:Level2();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Begraafplaats';
	opt3.setAttribute("onClick", "javascript:Graveyard();");

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'pad.jpg';
} 

loadLevel('title, text, image, button, test');

function loadLevel(title, text, image, button, button2) {
	console.log(title + text + image + button + button2);
}