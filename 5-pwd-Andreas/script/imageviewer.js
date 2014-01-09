"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};



    // Konstruktorn för Image Viewer. Ärver grunden från MYMAK.Window.
    MYMAK.Imageviewer = function(idname, picion, postopcount, posleftcount, width, height) {
    
        MYMAK.Window.call(this, idname, picion, postopcount, posleftcount, width, height);
        
        
        console.log("Inne i Image Viewern");
    };


    MYMAK.Imageviewer.prototype = new MYMAK.Window();
    
    
    
    
            MYMAK.Imageviewer.prototype.XMLHttpRequest = function(){

            var xhr = new XMLHttpRequest();


            };