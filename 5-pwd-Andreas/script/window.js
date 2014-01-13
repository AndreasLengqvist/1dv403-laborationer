"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};
 
 
    // Superkonstruktor för fönsterkonstruktionen. De olika fönstervarianterna ärver grunden i från denna.
    MYMAK.Window = function(idname, picicon, postopcount, posleftcount, width, height) {
        
        this.idname = idname;
        this.picicon = picicon;
        this.postopcount = postopcount;
        this.posleftcount = posleftcount;
        this.width = width;
        this.height = height;
    };
        // Skapar grunden till fönstret.
        MYMAK.Window.prototype.buildWindow = function () {
            
            MYMAK.zindex += 1;
            
            var main = document.querySelector("main");
            
            var windowdiv = document.createElement("div");
            var headdiv = document.createElement("div");
            var statusdiv = document.createElement("div");
            var contdiv = document.createElement("div");
            windowdiv.id = this.idname;
            windowdiv.className = "windowdiv2";
            windowdiv.style.zIndex = MYMAK.zindex;
            contdiv.id = "content"+this.idname;
            contdiv.className = "contentdiv";
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
            windowdiv.appendChild(contdiv);
            windowdiv.appendChild(statusdiv);


            // Kod som gör att fönsterna studsar om de kommer utanför de angivna värderna.
            if(this.postopcount+this.height > 835){
            MYMAK.postopcount = 0;
            }

            if(this.posleftcount + this.width > 1645){
            MYMAK.posleftcount = 150;
            }

            // Sätter attribut för varje unikt fönster.
            windowdiv.style.top = this.postopcount+"px";
            windowdiv.style.left = this.posleftcount+"px";
            windowdiv.style.width = this.width+"px";
            windowdiv.style.height = this.height+"px";
            contdiv.style.width = this.width+"px";
            var contentheight = (this.height - 45);
            contdiv.style.height = contentheight+"px";

            
            main.appendChild(windowdiv);
            
            
            setTimeout(function() {
            windowdiv.className = "windowdiv";
            }, 50);
            
            // Hack för att få Stäng-knappen att fungera.
            var that = this;

            var close = document.querySelector("#headclose"+that.idname);
            close.onclick = function () {
            clearInterval(that.intervalID);
            document.querySelector("#"+that.idname).remove();
            };
            

            // Flyttar det fokuserade fönstret till toppen av alla andra.
            windowdiv.onclick = function() {
                    MYMAK.zindex += 1;
                    windowdiv.style.zIndex = MYMAK.zindex;
                
            };
            
    };