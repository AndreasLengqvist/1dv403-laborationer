"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};
 
 
    // Baskonstruktorn för fönsterkonstruktionen. De olika fönstervarianterna ärver grunden i från denna.
    MYMAK.Imageviewer = function(name, idname, picicon) {
    
        MYMAK.Window.call(this, name, idname, picicon);
    
    
        var that = this;
        
    };





window.onload = MYMAK.Imageviewer();