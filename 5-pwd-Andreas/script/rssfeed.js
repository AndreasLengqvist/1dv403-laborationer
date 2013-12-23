"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};



    // Konstruktorn för RSS Feed. Ärver grunden från MYMAK.Window.
    MYMAK.Rssfeed = function(idname, picion, poscount) {
    
        MYMAK.Window.call(this, idname, picion, poscount);
        
        
        console.log("Inne i RSSen");
    };


    MYMAK.Rssfeed.prototype = new MYMAK.Window();