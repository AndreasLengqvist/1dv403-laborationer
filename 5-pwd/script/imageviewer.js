"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};
 
 
    // Baskonstruktorn för fönsterkonstruktionen. De olika fönstervarianterna ärver grunden i från denna.
    MYMAK.Imageviewer = function(name, idname, picicon) {
    
        MYMAK.Window.call(this, name, idname, picicon);
    
    
        var that = this;
        
        console.log("Inne och hämtar och bygger i Imageviewer-konstruktorn");
        
    };





window.onload = MYMAK.Imageviewer();