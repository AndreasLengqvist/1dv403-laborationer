"use strict";

// Toppnivå namespace
var MYMAK = MYMAK || {};

// Loginobjekt som har hand om inloggningen av användaren.
MYMAK.login = function() {
    
    // Skapar ett modalpopup-fönster som är själva inloggningfönstret.
        var modalwindow = document.createElement("div");
        var loginwindow = document.createElement("div");
        var loginhead = document.createElement("label");
        var logininput = document.createElement("input");
        var loginbutton = document.createElement("button");
        
        modalwindow.id = "modalwindow2";
        var main = document.querySelector("main");
        main.appendChild(modalwindow);
        loginbutton.appendChild(document.createTextNode("Logga in"));
        
        loginwindow.id = "loginwindow2";
        loginhead.id = "loginhead";
        logininput.id = "logininput";
        loginbutton.id = "loginbutton";
        
        loginhead.appendChild(document.createTextNode("Vänligen, välj ett användarnamn:"));

        
        loginwindow.appendChild(loginhead);
        loginwindow.appendChild(logininput);
        loginwindow.appendChild(loginbutton);
        modalwindow.appendChild(loginwindow);
        
        
        main.parentNode.insertBefore(loginwindow, modalwindow.nextSibling);
                        
        logininput.focus();
        var checkinputvalue = logininput.value.trim(checkinputvalue).length;

        // Funktion som gör det möjligt att istället för att trycka på Logga in-knappen, istället trycka enter.
        logininput.onkeypress = function(e){
                if (!e) {
                    e = window.event;
                }
            
            var checkinputvalue = logininput.value.trim(checkinputvalue).length;

            if (e.keyCode == 13 &! e.shiftKey) {
                if(checkinputvalue !== 0){
                    logininput.className = logininput.className = " ";
                    logininput.className = logininput.className + " correct";
                    document.querySelector("#loginstatus").innerHTML = "Inloggad som "+logininput.value;
                    modalwindow.id = "modalwindow";
                    loginwindow.id = "loginwindow";
                }
                else {
                    logininput.className = logininput.className = " ";
                    logininput.className = logininput.className + " error";
                }
            }
        };
        
        loginbutton.onclick = function() {
            
            var checkinputvalue = logininput.value.trim(checkinputvalue).length;

            if(checkinputvalue !== 0){
                logininput.className = logininput.className = " ";
                logininput.className = logininput.className + " correct";
                document.querySelector("#loginstatus").innerHTML = "Inloggad som "+logininput.value;
                modalwindow.id = "modalwindow";
                loginwindow.id = "loginwindow";
            }
            else {
                logininput.className = logininput.className = " ";
                logininput.className = logininput.className + " error";
            }
        };
        
        var changelogin = document.querySelector("#loginlink");
        
        // Funktion som tar om kör när en användare vill byta inloggningsnamn.
        changelogin.onclick = function() {
            modalwindow.id = "modalwindow2";
            loginwindow.id = "loginwindow2";
        };
    };


window.onload = MYMAK.login();