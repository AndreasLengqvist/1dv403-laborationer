"use strict";


var Validator = {


    fncount: 0,
    lncount: 0,

    init: function() {
        
                    console.log("Inne i Validator")
            
            
            var send = document.querySelector("#send");         // Sändknappens ID.
            var myform = document.querySelector("#myform");     // forumlärets ID.
                
                console.log("Inne i getFormInfo")
                
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
                    
                    // Om det inte är något värde i input.
                    if(fnvalue == ""){
                        

                        var fninput = document.querySelector(".fninput");
                        fninput.style.background = "#FF7878";
                        
                        if(Validator.fncount == 0){
                        
                        // Skapar en span som fungerar som wrapper för att kunna sätta ett felmeddelande.
                        var span = document.createElement("span");
                        span.style.color = "#FF7878";
                        span.id ="fnspan";
                        span.appendChild(document.createTextNode(" Detta fält får inte lämnas blankt."));
                        
                        // Slänger in textnoden efter förälder lninput.
                        fninput.parentNode.insertBefore(span, fninput.nextSibling);
                        
                        Validator.fncount +=1;
                        console.log(Validator.fncount)

                        }
                    }
                    
                    // Om det är ett värde i input.
                    else {
                        Validator.fncount = 0;
                        document.querySelector(".fninput").style.background = "#8CCD8C";
                        document.querySelector("#fnspan").remove();
                    }
                };
                
                
                
                // Om efternamnet är tomt när det tappar fokus.
                lastname.onblur = function() {
                    
                    // Kollar värdet av inputfältet.
                    var lnvalue = lastname.value;
                    
                    // Om det inte är något värde i input.
                    if(lnvalue === ""){
                        var lninput = document.querySelector(".lninput");
                        lninput.style.background = "#FF7878";
                        
                        
                        if(Validator.lncount == 0){
                        // Skapar en span som fungerar som wrapper för att kunna sätta ett felmeddelande.
                        var span = document.createElement("span");
                        span.id = "lnspan";
                        span.style.color = "#FF7878";
                        span.appendChild(document.createTextNode(" Detta fält får inte lämnas blankt."));
                        
                        // Slänger in textnoden efter förälder fninput.
                        lninput.parentNode.insertBefore(span, lninput.nextSibling);
                        
                        Validator.lncount += 1;
                        }
                    }
                    
                    // Om det är ett värde i input.
                    else {
                        Validator.lncount = 0;
                        document.querySelector(".lninput").style.background = "#8CCD8C";
                        document.querySelector("#lnspan").remove(document.querySelector("#lnspan"));
                        
                        return false;
                    }
                };
                
                // Skickar iväg formuläret med alla inputs.
                //myform.submit();
                
            
            
    },
    
    
    getFormInfo: function() {
        
    }


};

window.onload = Validator.init;