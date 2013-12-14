"use strict";


var Validator = {


    IDcount: 0,
    lncount: 0,

    init: function() {
            
            var send = document.querySelector("#send");         // Sändknappens ID.
            var myform = document.querySelector("#myform");     // forumlärets ID.
                
                
                // Hämtning av alla inputs id:n och deras values i formuläret.
                var firstname = document.getElementById('fn');
                var lastname = document.getElementById('ln');
                var zipcode = document.getElementById('zipcode');
                var zipvalue = zipcode.value;
                var email = document.getElementById('email');
                var emailvalue = email.value;
                var pricetype = document.getElementById('pricetype');
                var ptvalue = pricetype.value;
                
                
                // Om förnamnet är tomt när det tappar fokus.
                firstname.onblur = function() {
                    
                    // Kollar värdet av inputfältet.
                    var fnvalue = firstname.value;
                    var fninput = document.querySelector(".fninput");
                    
                    // Om det inte är något värde i input.
                    if(fnvalue == ""){
                        Validator.onEmpty(fninput);
                    }
                    
                    // Om det är ett värde i input.
                    else {
                        Validator.onCorrect(fninput);
                    }
                };
                
                
                
                // Om efternamnet är tomt när det tappar fokus.
                lastname.onblur = function() {
                    
                    // Kollar värdet av inputfältet.
                    var lnvalue = lastname.value;
                    var lninput = document.querySelector(".lninput");
                    
                    // Om det inte är något värde i input.
                    if(lnvalue === ""){
                        Validator.onEmpty(lninput);
                        
                        }
                    // Om det är ett värde i input.
                    else {
                        Validator.onCorrect(lninput);
                    }
                    
                };
                
                // Skickar iväg formuläret med alla inputs.
                //myform.submit();
                // Om förnamnet är tomt när det tappar fokus.
                

            
            
    },
    
    // Anropas när inputfältet är tomt.
    onEmpty: function(inputID) {
        
                        inputID.style.background = "#FF7878";
                        console.log(Validator.IDcount)
                        
                        if(Validator.IDcount == 0){
                        console.log(Validator.IDcount)
                        // Skapar en span som fungerar som wrapper för att kunna sätta ett felmeddelande.
                        var span = document.createElement("span");
                        span.style.color = "#FF7878";
                        span.id ="fnspan";
                        span.appendChild(document.createTextNode(" Detta fält får inte lämnas blankt."));
                        
                        // Slänger in textnoden efter förälder lninput.
                        inputID.parentNode.insertBefore(span, inputID.nextSibling);
                        
                        Validator.IDcount +=1;

                        }
    },
    
    // Anropas när inputfältet är correct inskrivet eller rättat.
    onCorrect: function(inputID) {
                    Validator.IDcount = 0;
                    
                    if(background !== "#8CCD8C"){
                    document.querySelector("#fnspan").remove();
                    }
                    var background = inputID.style.background = "#8CCD8C";

    }


};

window.onload = Validator.init;