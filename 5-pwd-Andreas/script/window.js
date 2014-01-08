"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};
 
 
    // Superkonstruktor för fönsterkonstruktionen. De olika fönstervarianterna ärver grunden i från denna.
    MYMAK.Window = function(idname, picicon, poscount) {
        
        this.idname = idname;
        this.picicon = picicon;
        this.poscount = poscount;
    };
        // Skapar grunden till fönstret.
        MYMAK.Window.prototype.buildWindow = function () {

            var main = document.querySelector("main");
            
            var windowdiv = document.createElement("div");
            var headdiv = document.createElement("div");
            var statusdiv = document.createElement("div");
            windowdiv.id = this.idname;
            windowdiv.className = "windowdiv2";
            headdiv.className = "headdiv";
            headdiv.id = "headdiv"+this.idname;
            statusdiv.className = "statusdiv";
            statusdiv.id = "statusdiv"+this.idname;

            // Headdivens konstruktion.
            var headlabel = document.createElement("label");
            var headimg = document.createElement("img");
            var headclose = document.createElement("input");
            var headminim = document.createElement("input");
            headimg.className = "headimg";
            headimg.id = "headimg"+this.idname;
            headimg.src = this.picicon;
            headlabel.className = "headlabel";
            headlabel.id = "headlabel"+this.idname;
            headlabel.appendChild(document.createTextNode(this.idname));
            headclose.type = "button";
            headclose.className = "headclose";
            headclose.id = "headclose"+this.idname;
            headminim.type = "button";
            headminim.className = "headminim";
            headminim.id = "headminim"+this.idname;

            headdiv.appendChild(headclose);
            headdiv.appendChild(headminim);            
            headdiv.appendChild(headlabel);
            headdiv.appendChild(headimg);

            windowdiv.appendChild(headdiv);
            windowdiv.appendChild(statusdiv);

            windowdiv.style.top = this.poscount;
             windowdiv.style.left = this.poscount;
            
            main.appendChild(windowdiv);
            
            
            setTimeout(function() {
            windowdiv.className = "windowdiv";
            }, 50);
            
            // Hack för att få Stäng-knappen att fungera.
            var that = this;

            var close = document.querySelector("#headclose"+that.idname);
            close.onclick = function () {
                
            document.querySelector("#"+that.idname).remove();
            };
            
            
                        // Flyttar det fokuserade fönstret till toppen av alla andra.
            windowdiv.onclick = function() {
                var focusZIndex = 1;
                var nodes = document.querySelectorAll(".windowdiv");
                
                
                for (var i = 0; i < nodes.length; i += 1) {
                nodes[i].style.zIndex = "1";
                }
                focusZIndex += 1;
                windowdiv.style.zIndex = focusZIndex;
            };
            
    };