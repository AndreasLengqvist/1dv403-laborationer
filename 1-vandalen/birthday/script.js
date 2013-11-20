"use strict";

window.onload = function(){

	
	var birthday = function(date){
	
	
	// Sätter rätt dagensdatum och konventerar födelsedatumet till rätt form.
	var birthdate = date.split("-");
	var birthdateconverted = new Date();
	var todaysdate = new Date();
	
	birthdateconverted.setFullYear(birthdate[0]);
	birthdateconverted.setMonth(birthdate[1]-1);
	birthdateconverted.setDate(birthdate[2]);


    // Om man inte matat in något i datum-fältet.
    if (!isNaN(birthdate)){
	    throw new Error("FEL! Du måste mata in ett datum i fältet.");
	}
    
    // Om man redan fyllt år det här året.
    if (birthdateconverted.getTime() < todaysdate.getTime()){
        birthdateconverted.setFullYear(todaysdate.getFullYear()+1);
    }
    
    // Returnerar dagarna till nästa födelsedag.
    return Math.round((birthdateconverted.getTime()/1000/60/60/24) - (todaysdate.getTime()/1000/60/60/24));






	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};