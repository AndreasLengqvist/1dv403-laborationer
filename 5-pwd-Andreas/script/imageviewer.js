"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};



    // Konstruktorn för Image Viewer. Ärver grunden från MYMAK.Window.
    MYMAK.Imageviewer = function(idname, picion, poscount) {
    
        MYMAK.Window.call(this, idname, picion, poscount);
        
        
        console.log("Inne i Image Viewern");
    };


    MYMAK.Imageviewer.prototype = new MYMAK.Window();