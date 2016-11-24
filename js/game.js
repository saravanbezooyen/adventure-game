document.getElementById('option1').innerHTML = 'Start';
document.getElementById('level_title').innerHTML = '';

var basket = false;

var x;
x = true;

	function help() {
	var help = document.getElementById('help');
	    if (x) {
	    	help.style.visibility = "visible";
	    	x = false;
	    	console.log(x);
	    } else {
	    	help.style.visibility = "hidden";
	    	x = true;
	    	console.log(x);
	    }
	}

function Level1() {
	console.log("Level1()");

	var help = document.getElementById('help');
		help.style.visibility = "hidden";

	var intro = document.getElementById("text");
		intro.style.visibility = "visible";
		intro.innerHTML = "Zeg, Roodkapje waar ga je heen en zo alleen? ";

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Blijf op het pad';
		opt1.setAttribute("onClick", "javascript:Level2a();");

	var opt2 = document.getElementById('option2');
		opt2.innerHTML = 'Ga het bos in';
		opt2.setAttribute("onClick", "javascript:Level2b();");

	document.getElementById('level_image').src = 'pad.png';

}

function Level2a() { // blijf op het pad
	console.log("Level2()");

	var element = document.getElementById("option2");
		element.parentNode.removeChild(element);

	var text = document.getElementById("text");
		text.innerHTML = "Je volgt het pad zoals afgesproken en na een tijdje zie je in de verte grootmoeder's huis.";

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Verder';
		opt1.setAttribute("onClick", "javascript:Fail1();");
	
	document.getElementById('level_image').src = 'pad2.png';
} 

function Level2b() { //ga het bos in
	console.log("Level2()");

	var text = document.getElementById("text");
		text.innerHTML = "Wanneer je het bos in gaat merk je al snel dat het een stuk donkerder is geworden. Of komt dat door de bomen die de zon niet doorlaten? Opeens hoor je een geluid. Klinkt als een wolf. Van schrik stap je naar achter en struikel je naar beneden. Terwijl je valt verlies je je mandje. Vindt deze eerst voordat je verder gaat.";

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga verder';
	opt1.onclick = function(){
		if(basket){
			Level2c();
		} else {
			alert('Vindt eerst het mandje');
		}
	}

	var mandje = document.getElementById('basket')
	mandje.onclick = function(){
		basket = true;
		mandje.style.display = "none";
	}

	mandje.style.visibility = "visible";

	var hidden = document.getElementById("option2");
		hidden.style.visibility = "hidden";

	document.getElementById('level_image').src = 'pad2.png';
} 

function Level2c() { //wanneer je alles gevonden heb

	var text = document.getElementById("text");
		text.innerHTML = "Wanneer je het pad probeert terug te vinden kom je uit op een splitsing, je hebt een keuze: links of rechts."

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'links';
		opt1.setAttribute("onClick", "javascript:Level3l();");

	var opt2 = document.getElementById('option2');
		opt2.style.visibility = "visible";
		opt2.innerHTML = 'rechts';
		opt2.setAttribute("onClick", "javascript:Level3r();");

	document.getElementById('level_image').src = 'paden.png';
}

function Level3l() { //links
	console.log("Level3l()");

	var text = document.getElementById("text");
		text.innerHTML = "Op een gegeven moment zie je wat in de verte, iets dat wel verdacht veel lijkt op het verlaten speeltuin, ga je er naartoe of probeer je toch verder het pad te vinden?"

	var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Verlaten speeltuin';
		opt1.setAttribute("onClick", "javascript:Level4a();");;
	var opt2 = document.getElementById('option2');
		opt2.innerHTML = 'Ga terug';
		opt2.setAttribute("onClick", "javascript:Level4b();");

	document.getElementById('level_image').src = 'boss.png';
}

function Level3r() { //rechts
	console.log("Level3l()");

	var text = document.getElementById("text");
	text.innerHTML = "Terwijl je het pad probeert terug te vinden kom je uit op een mistig meer. Probeer je je weg terug te vinden of waag je een poging om om het meer heen te lopen?"

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Mistige Meer';
	opt1.setAttribute("onClick", "javascript:Level4c();");;
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ga terug';
	opt2.setAttribute("onClick", "javascript:Level4b();");

	document.getElementById('level_image').src = 'lake.png';
} 

	function Level4a() {	// Verlaten Speeltuin
		console.log("Level4a()");

		var hidden = document.getElementById("option2");
			hidden.style.visibility = "hidden";
				
		var text = document.getElementById('text');
			text.innerHTML = "Je komt aan bij de verlaten speeltuin en komt daar een vreemdeling tegen. Hij bied je wat aan en je gaat ermee akkoord. ";
		var opt1 = document.getElementById('option1');
			opt1.innerHTML = 'Verder';
			opt1.setAttribute("onClick", "javascript:win();");;

			document.getElementById('level_image').src = 'speeltuin.gif';
	}

	function Level4b() {	// Oude Begraafplaats - ga terug 
		console.log("Level4b()");

		var text = document.getElementById('text');
			text.innerHTML = "Na voor je gevoel uren gelopen te hebben geef je het op om het pad terug te vinden. Je bent echt verdwaald. Maar dan in de verte zie je iets dat lijkt op een oude begraafplaats."

		var opt1 = document.getElementById('option1');
			opt1.innerHTML = 'Oude Begraafplaats';
			opt1.setAttribute("onClick", "javascript:Level5b();");;
		var opt2 = document.getElementById('option2');
			opt2.innerHTML = 'Ga terug';
			opt2.setAttribute("onClick", "javascript:Fail2();");

		document.getElementById('level_image').src = 'boss.png';		
	} 

			function Level5b() {
		 		console.log("Level5()");

		 		var hidden = document.getElementById("option2");
					hidden.style.visibility = "hidden";
				
				var text = document.getElementById('text');
					text.innerHTML = "Je komt aan bij de begraafplaats en ziet daar ook daadwerkelijk een wolf. Uit nieuwschierigheid neem je wat stappen dichterbij, om het wat beter te kunnen zien. Maar wanneer de wolf je ziet, schrik je en van schrik val je naar achteren in een leeg graf. "

				var opt1 = document.getElementById('option1');
					opt1.innerHTML = 'Verder';
					opt1.setAttribute("onClick", "javascript:win();");;

					document.getElementById('level_image').src = 'begraafplaats.jpg';
		 	}

	function Level4c() {	// Mistige Meer
		console.log("Level4c()");

		var hidden = document.getElementById("option2");
			hidden.style.visibility = "hidden";
				
		var text = document.getElementById('text');
			text.innerHTML = "Na een tijdje zie je een bootje in het water. Je besluit om zo het meer over te steken. Door de mist zie je alles slecht. Langzaam begint de mist op te klaren, maar er blijft een wolk hangen. Het lijkt net alsof de wolk steeds dichterbij komt ook al ben je gestopt met roeien."

		var opt1 = document.getElementById('option1');
			opt1.innerHTML = 'Verder';
			opt1.setAttribute("onClick", "javascript:win();");;

			document.getElementById('level_image').src = 'boat.png';
	}

loadLevel('title, text, image, button, test');

function loadLevel(title, text, image, button, button2) {
	console.log(title + text + image + button + button2);
}

// EINDES  

	function Fail1() {
		// faal door gewoon het pad te volgen.
		console.log("Fail()");	
		document.getElementById('level_image').src = 'oma2.png';

		var Fail1 = document.getElementById('text');
		Fail1.innerHTML = "Je bent aangekomen bij grootmoeder's huis en je hebt geen wolf gezien..."

		var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Try again?';
		opt1.setAttribute("onClick","location.reload();");

		var element = document.getElementById("option2");
		element.parentNode.removeChild(element);
	}

	function Fail2() {
		//Faal door de weg kwijt te raken
		console.log("Fail()");
		document.getElementById('level_image').src = 'oma1.png';

		var Fail2 = document.getElementById('text');
		Fail2.innerHTML = "Je raakt zo verdwaald dat de weg terug onvindbaar is geworden. Je komt nooit aan bij grootmoeder's huis en dat zonder de wolf tegen gekomen te zijn."

		var opt1 = document.getElementById('option1');
		opt1.innerHTML = 'Try again?';
		opt1.setAttribute("onClick","location.reload();");

		var element = document.getElementById("option2");
		element.parentNode.removeChild(element);

		
	}

	function win() {
		//win
		console.log("Win()");
			var bg = document.body;
				bg.style.background = "black";

			var win = document.getElementById('text');
			win.style.visibility = "hidden";


		setTimeout(function(){
				win.innerHTML = "Je bent aangekomen bij grootmoeder's huis en bent je wolf tegen gekomen";
				win.style.visibility = "visible";
		}, 2000); 

		var element = document.getElementById("level_image");
		element.parentNode.removeChild(element);

		var button = document.getElementById("option1");
		button.parentNode.removeChild(button);
	}