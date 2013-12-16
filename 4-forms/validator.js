"use strict";


var Validator = {

    Firstname: false,
    Lastname: false,
    Zipcode: false,
    Email: false,
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
                var pricetype = document.getElementById("pricetype")



                // Om förnamnet är tomt när det tappar fokus.
                firstname.onblur = function() {
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
                lastname.onblur = function() {
                    
                    // Kollar värdet av inputfältet.
                    var lnvalue = lastname.value;

                    // Om det inte är något värde i input.
                    if(lnvalue === "" && Validator.lncount === 0){
                        var text = " Detta fält får inte lämnas blankt.";
                        Validator.onEmpty(lastname, text);
                        Validator.Lastname = false;
                        return Validator.Lasttname;
                        
                    }
                    // Om det är ett värde i input.
                    if(lnvalue !== "") {
                        Validator.onCorrect(lastname);
                        Validator.Lastname = true;
                        return Validator.Lasttname;
                    }
                };    
                
                
                zipcode.onblur = function () {

                    // Kollar värdet av inputfältet.
                    var zipvalue = zipcode.value;
                    
                    // Om det inte är något värde i input.
                    if(zipvalue === "" && Validator.zipcount === 0){
                        var text = " Ett giltigt postnummer innehåller 5 nummer.";
                        Validator.onEmpty(zipcode, text);
                        Validator.Zipcode = false;
                        return Validator.Zipcode;
                        
                    }
                    // Om det är ett värde i input.
                    if(zipvalue !== "") {
                        Validator.onCorrect(zipcode);
                        Validator.Zipcode = true;
                        return Validator.Zipcode;
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
                        Validator.Email = false;
                        return Validator.Email;
                
                    }
                    // Om det är korrekt skrivet.
                    if(re.test(emailvalue)){
                        Validator.onCorrect(email);
                        Validator.Email = true;
                        return Validator.Email;
                    }
                };
                
                
                
                    

                    // När man klickar på sändknappen. Kolla så alla funktionerna returnar True. Om alla är true. Öppna popupfönstret.
                    send.onclick = function() {
                        console.log(Validator.Firstname, Validator.Lastname, Validator.Zipcode, Validator.Email)
                        //if ((Validator.Firstname && Validator.Lastname && Validator.Zipcode && Validator.Email) === true){
                            
                            Validator.popupWindow(firstname, lastname, zipcode, email, pricetype);
                        //}
                    };
                
    },
    
    
    // Anropas när ett inputfält är tomt.
    onEmpty: function(inputID, text) {
        
            inputID.className = inputID.className = " ";
            inputID.className = inputID.className + " error";
            
            
            // Skapar en span som fungerar som wrapper för att kunna sätta ett felmeddelande.
            var span = document.createElement("span");
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

    },
    
    
    
popupWindow: function(firstname, lastname, zipcode, email, pricetype) {
    console.log("POPUPIT")
    
            // Skapar de olika elementen som representerar popupfönstret.
            var main = document.querySelector("main");
            var divpopup = document.createElement("div");
            var text = "Vänligen bekräfta ditt köp";
            var h2 = document.createElement("h2");
            divpopup.id = "popup";
            
            
            divpopup.appendChild(h2);
            
    
            h2.appendChild(document.createTextNode(text));
            
            
            var fnname = document.createElement("p");
            var lnname = document.createElement("p");
            var zipname = document.createElement("p");
            var emailname = document.createElement("p");
            var pricetypename = document.createElement("p");
            
            var fnvalue = document.createElement("label");
            var lnvalue = document.createElement("label");
            var zipvalue = document.createElement("label");
            var emailvalue = document.createElement("label");
            var pricetypevalue = document.createElement("label");
            
            fnname.appendChild(document.createTextNode(firstname.name));
            lnname.appendChild(document.createTextNode(lastname.name));
            zipname.appendChild(document.createTextNode(zipcode.name));
            emailname.appendChild(document.createTextNode(email.name));
            pricetypename.appendChild(document.createTextNode(pricetype.name));
            fnname.className = "lname";
            lnname.className = "lname";
            zipname.className = "lname";
            emailname.className = "lname";
            pricetypename.className = "lname";

            fnvalue.appendChild(document.createTextNode(firstname.value));
            lnvalue.appendChild(document.createTextNode(lastname.value));
            zipvalue.appendChild(document.createTextNode(zipcode.value));
            emailvalue.appendChild(document.createTextNode(email.value));
            pricetypevalue.appendChild(document.createTextNode(pricetype.value));
            fnvalue.className = "lvalue";
            lnvalue.className = "lvalue";
            zipvalue.className = "lvalue";
            emailvalue.className = "lvalue";
            pricetypevalue.className = "lvalue";
            
            divpopup.appendChild(fnname);
            divpopup.appendChild(fnvalue);

            divpopup.appendChild(lnname);
            divpopup.appendChild(lnvalue);

            
            divpopup.appendChild(zipname);
            divpopup.appendChild(zipvalue);

            divpopup.appendChild(emailname);
            divpopup.appendChild(emailvalue);

            divpopup.appendChild(pricetypename);
            divpopup.appendChild(pricetypevalue);


            // Slänger in textnoden efter förälder input.
            main.parentNode.insertBefore(divpopup, main.nextSibling);

}
    


};

window.onload = Validator.init;