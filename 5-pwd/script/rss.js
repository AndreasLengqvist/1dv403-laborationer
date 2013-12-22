"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};
 
 
    // Baskonstruktorn för fönsterkonstruktionen. De olika fönstervarianterna ärver grunden i från denna.
    MYMAK.Rssfeed = function(name, idname, picicon) {
    
        MYMAK.Window.call(this, name, idname, picicon);
    
    
        var that = this;
        
        console.log("Inne och hämtar och bygger i rssfeed-konstruktorn");
        
    };





window.onload = MYMAK.Rssfeed();