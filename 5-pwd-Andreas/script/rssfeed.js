"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};



    // Konstruktorn för RSS Feed. Ärver grunden från MYMAK.Window.
    MYMAK.Rssfeed = function(idname, picion, postopcount, posleftcount, width, height) {
    
        MYMAK.Window.call(this, idname, picion, postopcount, posleftcount, width, height);
        
        
        console.log("Inne i RSSen");
    };


    MYMAK.Rssfeed.prototype = new MYMAK.Window();