"use strict";


var Validator = {


    init: function() {
        
                    console.log("Inne i Validator")

            var send = document.querySelector("#send");
            send.onclick = function() {
                
                console.log("Inne i getFormInfo")
                
                var firstname = document.getElementById('firstname').value;
                var lastname = document.getElementById('lastname').value;
                var zipcode = document.getElementById('zipcode').value;
                var email = document.getElementById('email').value;
                var pricetype = document.getElementById('pricetype').value;

                console.log(zipcode);
                console.log(email);
                console.log(pricetype);
                
                if(firstname === ""){
                    console.log("Firstname är tom!")
                    document.querySelector("#firstname").focus();
                    document.querySelector("#firstname").style.background = "#FF7878"
                }
                
                if(lastname === ""){
                    console.log("Lastname är tom!")
                    document.querySelector("#lastname").focus();
                    document.querySelector("#lastname").style.background = "#FF7878"
                }
                
                
            }
            
    },
    
    
    getFormInfo: function() {
        
    }


};

window.onload = Validator.init;