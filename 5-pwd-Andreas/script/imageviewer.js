"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};



    // Konstruktorn för Image Viewer. Ärver grunden från MYMAK.Window.
    MYMAK.Imageviewer = function(idname, picion, postopcount, posleftcount, width, height) {
    
        MYMAK.Window.call(this, idname, picion, postopcount, posleftcount, width, height);
        
    };


    MYMAK.Imageviewer.prototype = new MYMAK.Window();
    
    
    // Huvudfunktion som kontaktar servern där bilerna ligger med hjälp av AJAX.
            MYMAK.Imageviewer.prototype.AjaxCon = function(){
            
            var xhr = this.getXHR();        // XHR-requestfunktion.
            var ajaxobj = [];              // Bildarray där bilderna (eller egentligen hela objektet sparas ner.)
            
            var that = this;
            xhr.onreadystatechange = function(){
                
                if (xhr.readyState == 4 && xhr.status == 200) {
                    ajaxobj = JSON.parse(xhr.responseText);
                    console.log("Ajax-loaded");
                    console.log(ajaxobj);
                    // Här ska loadern stoppas!
                    MYMAK.Imageviewer.prototype.objectSplitter(that.idname, ajaxobj);
                }
            };
                
                xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/" , true);
                
                xhr.send(null);
            };
            
            
            // Splitfunktion som loopar igenom objekten och splittar upp dem.
            MYMAK.Imageviewer.prototype.objectSplitter = function(name, objects){
                
                var pictures = [];
                pictures = objects;
                
                for (var i = 0; i < pictures.length; i += 1) {
                    MYMAK.Imageviewer.prototype.pictureMaker(name, objects, pictures, i);
                }
            };
            
            
            // Bildredigerarfunktion som redigerar och visar upp bilderna i applikationen.
            MYMAK.Imageviewer.prototype.pictureMaker = function(name, objects, pictures, i){
                console.log("inne i tredje steget");

                var windowdiv = document.querySelector("#"+name);
                var imagediv = document.createElement("div");
                imagediv.id = "Imageviewer";
                
                
                console.log(name)
                
                windowdiv.appendChild(imagediv);
                
            };

            
            // XHR-requestfunktion.
            MYMAK.Imageviewer.prototype.getXHR = function(){
                var xhr = null;
                
                    xhr = new XMLHttpRequest();
                    
                    
                return xhr;
            }