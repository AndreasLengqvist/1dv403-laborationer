"use strict";

var Validator = {

    Firstname: false,
    Lastname: false,
    Zipcode: false,
    Email: false,
    lncount: 0,
    fncount: 0,
    zipcount: 0,
    emailcount: 0,

    init: function() {

            
                // Hämtning av alla inputs id:n och deras values i formuläret.
                var firstname = document.getElementById('fn');
                var lastname = document.getElementById('ln');
                var zipcode = document.getElementById('zip');
                var email = document.getElementById('email');
                var pricetype = document.getElementById("pricetype")



                // Om förnamnet är tomt när det tappar fokus.
                firstname.onblur = function() {
                    // Hämtar värdet av inputfältet.
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
                    
                    // Hämtar värdet av inputfältet.
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

                    // Hämtar värdet av inputfältet.
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

                    // Hämtar värdet av inputfältet.
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
                    
                // När man klickar på "Genom för köp"-knappen. Kolla så alla funktionerna returnar True. Om alla är true. Öppna popupfönstret.
                document.getElementById("confirm").onclick = function() {
    
                    if ((Validator.Firstname && Validator.Lastname && Validator.Zipcode && Validator.Email) === true){
                        
                        Validator.popupWindow(firstname, lastname, zipcode, email, pricetype);
                    }
                    else{
                        if(Validator.Firstname === false){
                            firstname.focus();
                        }
                        if(Validator.Lastname === false){
                            lastname.focus();
                        }
                        if(Validator.Zipcode === false){
                            zipcode.focus();
                        }
                        if(Validator.Email === false){
                            email.focus();
                        }
                    }
                };
                
    },
    
    
    // Anropas när ett inputfält är tomt.
    onEmpty: function(inputID, text) {
        
            inputID.className = inputID.className = " ";
            inputID.className = inputID.className + " error";
            
            
            // Skapar en span som fungerar som wrapper för att kunna sätta ett felmeddelande.
            var span = document.createElement("span");
            span.id = inputID.id+"span";
            span.className = "errorspan";
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
    
    
    
    popupWindow: function (firstname, lastname, zipcode, email, pricetype) {
            

            // Skapar de olika elementen som representerar popupfönstret.
            var main = document.querySelector("main");
            var modalpop = document.createElement("div");
            var divpopup = document.createElement("div");
            var h2 = document.createElement("h2");
            divpopup.id = "popup";
            modalpop.id = "modalpop";
            
            
            var fnname = document.createElement("span");
            var lnname = document.createElement("span");
            var zipname = document.createElement("span");
            var emailname = document.createElement("span");
            var pricetypename = document.createElement("span");
            
            var fnvalue = document.createElement("span");
            var lnvalue = document.createElement("span");
            var zipvalue = document.createElement("span");
            var emailvalue = document.createElement("span");
            var pricetypevalue = document.createElement("span");
            
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            
            main.appendChild(modalpop);
            
            divpopup.appendChild(h2);
            
    
            h2.appendChild(document.createTextNode("Vänligen bekräfta ditt köp"));
            
            // Skapar noder för varje
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
            
            div1.appendChild(fnname);
            div1.appendChild(lnname);
            div1.appendChild(zipname);
            div1.appendChild(emailname);
            div1.appendChild(pricetypename);
            divpopup.appendChild(div1);

            div2.appendChild(fnvalue);
            div2.appendChild(lnvalue);
            div2.appendChild(zipvalue);
            div2.appendChild(emailvalue);
            div2.appendChild(pricetypevalue);
            divpopup.appendChild(div2);


            // Skapar en Bekräfta och Avbryt-knapp.
            var submit = document.createElement("button");
            var close = document.createElement("button");

            submit.appendChild(document.createTextNode("Bekräfta"));
            close.appendChild(document.createTextNode("Avbryt"));

            divpopup.appendChild(submit);
            divpopup.appendChild(close);

            
            // Slänger in textnoden efter förälder input.
            main.parentNode.insertBefore(divpopup, main.nextSibling);
            
            
            submit.onclick = function() {
                document.getElementById("myform").submit();
            };
            
            close.onclick = function() {
                divpopup.remove();
                modalpop.remove();
            };
    }
};

window.onload = Validator.init;