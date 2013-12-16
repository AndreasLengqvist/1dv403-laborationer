"use strict";


var Validator = {


    IDcount: 0,
    lncount: 0,
    fncount: 0,

    init: function() {
            
            var send = document.querySelector("#send");         // Sändknappens ID.
            var myform = document.querySelector("#myform");     // forumlärets ID.
                
            
                // Hämtning av alla inputs id:n och deras values i formuläret.
                var firstname = document.getElementById('fn');
                var lastname = document.getElementById('ln');
                var zipcode = document.getElementById('zipcode');
                var email = document.getElementById('email');
                var pricetype = document.getElementById('pricetype');
                var ptvalue = pricetype.value;
                var emailvalue = email.value;


                
                // Om förnamnet är tomt när det tappar fokus.
                firstname.onblur = function() {
                    
                    // Kollar värdet av inputfältet.
                    var fnvalue = firstname.value;

                    // Om det inte är något värde i input.
                    if(fnvalue == "" && Validator.fncount == 0){
                        Validator.onEmpty(firstname);
                    }
                    
                    // Om det är ett värde i input.
                    if(fnvalue !== "") {
                        Validator.onCorrect(firstname);
                    }
                };
                
                
                
                // Om efternamnet är tomt när det tappar fokus.
                lastname.onblur = function() {
                    
                    // Kollar värdet av inputfältet.
                    var lnvalue = lastname.value;
                    var span = document.querySelector(".lnspan");

                    // Om det inte är något värde i input.
                    if(lnvalue === "" && Validator.lncount == 0){
                        Validator.onEmpty(lastname);
                        
                    }
                    // Om det är ett värde i input.
                    if(lnvalue !== "") {

                        lastname.className = lastname.className = " ";
                        lastname.className = lastname.className = " correct";       
                        
                        if(Validator.lncount === 0){
                        document.getElementById(lastname.id+"span").remove();     
                        
                        Validator.lncount += 1;
                        }
                    }
                };    
    },
    
    // Anropas när ett inputfält är tomt.
    onEmpty: function(inputID) {
        
            inputID.className = inputID.className = " ";
            inputID.className = inputID.className + " error";
            
            
            // Skapar en span som fungerar som wrapper för att kunna sätta ett felmeddelande.
            var span = document.createElement("span");
            span.style.color = "#FF7878";
            span.id = inputID.id+"span";
            span.appendChild(document.createTextNode(" Detta fält får inte lämnas blankt."));
            
            // Slänger in textnoden efter förälder input.
            inputID.parentNode.insertBefore(span, inputID.nextSibling);

            if(inputID.id == "fn"){
                Validator.fncount += 1;
            }
                        
            if(inputID.id == "ln"){
                Validator.lncount += 1;
            }
            
            
        
    },
    
    
    // Anropas när inputfältet är korrekt inskrivet eller rättat.
    onCorrect: function(inputID) {

        if(inputID.id == "fn"){
            Validator.fncount = 0;
        }       
        
        if(inputID.id == "ln"){
            Validator.lncount = 0;
        }       
        
        inputID.className = inputID.className = " ";
        inputID.className = inputID.className = " correct";       
        
        
        document.getElementById(inputID.id+"span").remove();
        
    }


};

window.onload = Validator.init;



Validator.emailcount = 0;
                        
                        email.className = email.className = " ";
                        email.className = email.className = " correct";       
        
                        document.getElementById("emailspan").remove();
                        
                        
                        
                                                    document.getElementById("myform").submit();

                        