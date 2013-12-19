"use strict";

// Konstruktor funktion.
var Game = function(game, rows) {

    this.game = game;
    this.rows = rows;

     this.build = function() {
         
            var that = this;
            // Storleksval
            var main = document.querySelector("main");
            
            var h1 = document.createElement("h1");
            h1.className = this.game;
            h1.innerHTML = "Game OFF";
            main.appendChild(h1);
            
            var opdiv = document.createElement("div");
            var opform = document.createElement("form");
            var oplabel = document.createElement("label");
            var opselect = document.createElement("select");
            var opbutton = document.createElement("input");
            var opt1 = document.createElement("option");
            var opt2 = document.createElement("option");
            var opt3 = document.createElement("option");
            
            opform.className = that.game+"form";
            opdiv.className = that.game+"div";
            oplabel.innerHTML = "Välj storlek:";
            opselect.className = that.game+"op";
            opt1.value = "2";
            opt1.text = "2x4";
            opt2.value = "3";
            opt2.text = "3x4";
            opt3.value = "4";
            opt3.text = "4x4";
            opbutton.type = "button";
            opbutton.value = "Spela";
            
            opform.appendChild(oplabel);
            opform.appendChild(opselect);
            opform.appendChild(opt1);
            opform.appendChild(opt2);
            opform.appendChild(opt3);
            opform.appendChild(opbutton);
            opdiv.appendChild(opform)
            main.appendChild(opdiv);
            
            opselect.appendChild(opt1);
            opselect.appendChild(opt2);
            opselect.appendChild(opt3);
            
                opbutton.onclick = function() {
                    var cols = document.querySelector("."+that.game+"op").value;

                    if(cols > 0){
                        var compareArray = [];
                        var memoryArray = [];
                        
                        buildGame(that.game, cols, rows);
                    }
    
                };
            }

}