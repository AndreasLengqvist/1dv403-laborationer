"use strict";


var Validator = {

    Firstname: false,
    IDcount: 0,
    lncount: 0,
    fncount: 0,
    zipcount: 0,
    emailcount: 0,

    init: function() {
            
            var send = document.querySelector("#send");         // Sändknappens ID.

            
                // Hämtning av alla inputs id:n och deras values i formuläret.
                var firstname = document.getElementById('fn');
                var lastname = document.getElementById('ln');
                var zipcode = document.getElementById('zip');
                var email = document.getElementById('email');



                // Om förnamnet är tomt när det tappar fokus.
                firstname.onblur = function () {
                    // Kollar värdet av inputfältet.
                    var fnvalue = firstname.value;

                    // Om det inte är något värde i input.
                    if(fnvalue === "" && Validator.fncount === 0){
                        var text = " Detta fält får inte lämnas blankt.";
                        Validator.onEmpty(firstname, text);
                        Validator.Firstname = false;
                        return Validator.Firstname;
                    }
                    
                    // Om det är ett värde i input.
                    if(fnvalue !== "") {
                        Validator.onCorrect(firstname);
                        Validator.Firstname = true;
                        return Validator.Firstname;
                    }
                };
                

                
                // Om efternamnet är tomt när det tappar fokus.
                lastname.onblur = function Lastname() {
                    
                    // Kollar värdet av inputfältet.
                    var lnvalue = lastname.value;

                    // Om det inte är något värde i input.
                    if(lnvalue === "" && Validator.lncount === 0){
                        var text = " Detta fält får inte lämnas blankt.";
                        Validator.onEmpty(lastname, text);
                        return false;
                        
                    }
                    // Om det är ett värde i input.
                    if(lnvalue !== "") {
                        Validator.onCorrect(lastname);
                        return true;
                    }
                };    
                
                
                zipcode.onblur = function () {

                    // Kollar värdet av inputfältet.
                    var zipvalue = zipcode.value;
                    
                    // Om det inte är något värde i input.
                    if(zipvalue === "" && Validator.zipcount === 0){
                        var text = " Ett giltigt postnummer innehåller 5 nummer.";
                        Validator.onEmpty(zipcode, text);
                        return false;
                        
                    }
                    // Om det är ett värde i input.
                    if(zipvalue !== "") {
                        Validator.onCorrect(zipcode);
                        return true;
                    }
                };
                
                email.onblur = function () {

                    // Kollar värdet av inputfältet.
                    var emailvalue = email.value;
                    var re = /\S+@\S+\.\S+/;
                    
                    // Om värdet i E-post inte är korrekt skrivet.
                    if(!re.test(emailvalue) && Validator.emailcount === 0){
                        var text = " E-postadressen måste vara korrekt skriven. Exempel: hej@gmail.com";
                        Validator.onEmpty(email, text);
                        return false;
                
                    }
                    // Om det är korrekt skrivet.
                    if(re.test(emailvalue)){
                        Validator.onCorrect(email);
                        return true;
                    }
                };
                
                
                
                

                    // När man klickar på sändknappen. Kolla så alla funktionerna returnar True. 
                    send.onclick = function() {
                        if (Validator.Firstname === true){
                            console.log("POOP  UUUUUP")
                        }
                    };
                
    },
    
    
    // Anropas när ett inputfält är tomt.
    onEmpty: function(inputID, text) {
        
            inputID.className = inputID.className = " ";
            inputID.className = inputID.className + " error";
            
            
            // Skapar en span som fungerar som wrapper för att kunna sätta ett felmeddelande.
            var span = document.createElement("span");
            span.style.color = "#FF7878";
            span.id = inputID.id+"span";
            span.appendChild(document.createTextNode(text));
            
            // Slänger in textnoden efter förälder input.
            inputID.parentNode.insertBefore(span, inputID.nextSibling);

            if(inputID.id == "fn"){
                Validator.fncount += 1;
            }
                        
            if(inputID.id == "ln"){
                Validator.lncount += 1;
            }

            if(inputID.id == "zip"){
                Validator.zipcount += 1;
            }
            
            if(inputID.id == "email"){
                Validator.emailcount += 1;
            }
        
    },
    
    
    // Anropas när inputfältet är korrekt inskrivet eller rättat.
    onCorrect: function(inputID) {


        // Nollställning av räknare.
        if(inputID.id == "fn"){
            Validator.fncount = 0;
        }       
        
        if(inputID.id == "ln"){
            Validator.lncount = 0;
        }       
        
        if(inputID.id == "zip"){
            Validator.zipcount = 0;
        }               
        
        if(inputID.id == "email"){
            Validator.emailcount = 0;
        }       
        
        // Återställer klasserna.
        inputID.className = inputID.className = " ";
        inputID.className = inputID.className = " correct";  
        
        var span = document.getElementById(inputID.id+"span");
        
        // Om det finns en span, ta bort den.
        if (span !== null){
            span.remove();
        }

    }


};

window.onload = Validator.init;