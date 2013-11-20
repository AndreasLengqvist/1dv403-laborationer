"use strict";

window.onload = function(){




	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
	    
    var convertedtextstring = "";
    
    // Om textfältet är tomt.
        if (str.length === 0){
            throw new Error("FEL. Du måste mata in något i textfältet.");
        }
    
    // for-loop som läser igenom varje bokstav i strängen och sparar ner det till den konventerade strängen.
    for (var i = 0; i < str.length; i += 1) {
    
        // Om det är a eller A.
        if (str.charAt(i) == "a" || str.charAt(i) == "A") {
             convertedtextstring += "#";
             continue;
        }
        
        // Om det är uppercases.
        if (str.charAt(i) == str.charAt(i).toUpperCase()){
            convertedtextstring += str.charAt(i).toLowerCase();
            continue;
        }
        
        // Om det är lowercases.
        if (str.charAt(i) == str.charAt(i).toLowerCase()){
            convertedtextstring += str.charAt(i).toUpperCase();
            continue;
        }

    }
    

    // Returnera den konverterade strängen.
    return convertedtextstring;

	// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	// if (!isNaN(str * 1)){


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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};