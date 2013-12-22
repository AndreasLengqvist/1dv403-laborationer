"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};
 
 
    // Baskonstruktorn för fönsterkonstruktionen. De olika fönstervarianterna ärver grunden i från denna.
    MYMAK.Window = function(name, idname, picicon) {
    
        var that = this;
        this.name = name;
        this.idname = idname;
        this.picicon = picicon;
        
        that.buildwindow = function () {
            var body = document.querySelector("body");
            
            var windowdiv = document.createElement("div");
            var headdiv = document.createElement("div");
            var statusdiv = document.createElement("div");
            windowdiv.className = "windowdiv";
            windowdiv.id = that.idname;
            console.log(that.idname);
            headdiv.className = "headdiv";
            headdiv.id = "headdiv"+that.name;
            statusdiv.className = "statusdiv";
            statusdiv.id = "statusdiv"+that.name;

            // Headdivens konstruktion.
            var headlabel = document.createElement("label");
            var headimg = document.createElement("img");
            var headclose = document.createElement("input");
            var headminim = document.createElement("input");
            headimg.className = "headimg";
            headimg.id = "headimg"+that.name;
            headimg.src = that.picicon;
            headlabel.className = "headlabel";
            headlabel.id = "headlabel"+that.name;
            headlabel.appendChild(document.createTextNode(that.name));
            headclose.type = "button";
            headclose.className = "headclose";
            headclose.id = "headclose"+that.idname;
            headminim.type = "button";
            headminim.className = "headminim";
            headminim.id = "headminim"+that.idname;

            headdiv.appendChild(headclose);
            headdiv.appendChild(headminim);            
            headdiv.appendChild(headlabel);
            headdiv.appendChild(headimg);

            windowdiv.appendChild(headdiv);
            windowdiv.appendChild(statusdiv);
            
            body.appendChild(windowdiv);
            
            var close = document.querySelector("#headclose"+that.idname)
            close.onclick = function () {
                
                console.log(that.idname)
            document.querySelector("#"+that.idname).remove();
            }
    };
};

window.onload = MYMAK.Window();