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
                    // Här ska loadern stoppas!
                    MYMAK.Imageviewer.prototype.objectSplitter(that.idname, ajaxobj);
                }
            };
                
                xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/" , true);
                
                xhr.send(null);
            };
            
            
            // Splitfunktion som loopar igenom objekten och splittar upp dem.
            MYMAK.Imageviewer.prototype.objectSplitter = function(name, objects){
                
                var widthArray = [];
                var heightArray = [];
                var pictures = [];
                pictures = objects;
                
                for (var i = 0; i < pictures.length; i += 1) {
                                    
                    widthArray.push(pictures[i].thumbWidth)
                    heightArray.push(pictures[i].thumbHeight)
                    console.log(pictures[i].thumbHeight)
                    
                    MYMAK.Imageviewer.prototype.adjustMaker(heightArray, widthArray);
                    MYMAK.Imageviewer.prototype.pictureMaker(name, objects, pictures, i);
                }
            };
            
            
            // Bildredigerarfunktion som redigerar och visar upp bilden i applikationen. (Ligger i innersluten i loopen från funktionen objectsSplitter)
            MYMAK.Imageviewer.prototype.pictureMaker = function(name, objects, pictures, i){

                var windowdiv = document.querySelector("#"+name);
                var imagediv = document.createElement("div");
                var imagelink = document.createElement("a");
                var image = document.createElement("img");
                
                
                
                imagediv.className = "imagewrapper";
                imagelink.className = "imagelink";
                
                    // Sätter tumnagelbildsattributen.
                    image.setAttribute("src", pictures[i].thumbURL);
                    image.setAttribute("height", pictures[i].thumbHeight);
                    image.setAttribute("width", pictures[i].thumbWidth);
                    
                imagelink.appendChild(image);
                imagediv.appendChild(imagelink);
                windowdiv.appendChild(imagediv);
                
                
                
                
                
                
            };


            // Sparar ner alla bredder och höjder på bilderna, jämför och sätter sedan den bredaste som alla andra bilders wrappers tar efter.
            MYMAK.Imageviewer.prototype.adjustMaker = function(heightArray, widthArray){
                
                
                var maxwidth = Math.max(widthArray);
                var maxheight = Math.max(heightArray);
                
                console.log(maxheight)
                console.log(maxwidth)
                

            };
            
            // XHR-requestfunktion.
            MYMAK.Imageviewer.prototype.getXHR = function(){
                var xhr = null;
                
                    xhr = new XMLHttpRequest();
                    
                    
                return xhr;
            }