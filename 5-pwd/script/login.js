"use strict";

var Login = {
    
    buildLogin: function(){
        
        
        var modalwindow = document.createElement("div");
        var loginwindow = document.createElement("div");
        var loginhead = document.createElement("label");
        var logininput = document.createElement("input");
        var loginbutton = document.createElement("button");
        
        modalwindow.id = "modalwindow";
        var main = document.querySelector("main");
        main.appendChild(modalwindow);
        loginbutton.appendChild(document.createTextNode("Logga in"));
        
        loginwindow.id = "loginwindow";
        loginhead.id = "loginhead";
        logininput.id = "logininput";
        loginbutton.id = "loginbutton";
        
        loginhead.appendChild(document.createTextNode("Vänligen, logga in med ett användarnamn:"));

        
        loginwindow.appendChild(loginhead);
        loginwindow.appendChild(logininput);
        loginwindow.appendChild(loginbutton);
        modalwindow.appendChild(loginwindow);
        
        
        main.parentNode.insertBefore(loginwindow, main.nextSibling);

        
        var checklogin = document.querySelector("#logininput");
        
        loginbutton.onclick = function() {
            if(checklogin.value == 0){
                logininput.className = logininput.className = " ";
                logininput.className = logininput.className + " error";
            }
            else {
                document.querySelector("h1").innerHTML = "Hej "+logininput.value;
                modalwindow.remove();
                loginwindow.remove();
            }
        };
    }
};


window.onload = Login.buildLogin();