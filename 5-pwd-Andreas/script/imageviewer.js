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
            
            
            // Steg 2. Splitfunktion som loopar igenom objekten och splittar upp dem.
            MYMAK.Imageviewer.prototype.objectSplitter = function(name, objects){
                
                var widthArray = [];
                var heightArray = [];
                var pictures = [];
                pictures = objects;
                
                
                for (var i = 0; i < pictures.length; i += 1) {
                    
                    widthArray.push(pictures[i].thumbWidth)
                    heightArray.push(pictures[i].thumbHeight)
                }
                
                MYMAK.Imageviewer.prototype.adjustMaker(heightArray, widthArray, name, objects, pictures, i);
                
            };
            
            
            // Steg 3. Bildredigerarfunktion som redigerar och visar upp bilden i applikationen. (Ligger i innersluten i loopen från funktionen objectsSplitter)
            MYMAK.Imageviewer.prototype.pictureMaker = function(maxheight, maxwidth, name, objects, pictures, i){

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
                
                
                console.log(imagediv)
                console.log(maxheight)
                console.log(maxwidth)
                
                imagediv.style.width = maxwidth+"px";
                imagediv.style.height = maxheight+"px";
            
            };


            // Steg 2. Sparar ner alla bredder och höjder på bilderna, jämför och sätter sedan den bredaste och högsta som alla andra bilders wrappers tar efter, skickar sedan vidare till imageMakern.
            MYMAK.Imageviewer.prototype.adjustMaker = function(heightArray, widthArray, name, objects, pictures){
                


                var maxheight = Math.max.apply(Math, heightArray);
                var maxwidth = Math.max.apply(Math, widthArray);


                for (var i = 0; i < pictures.length; i += 1) {
                    MYMAK.Imageviewer.prototype.pictureMaker(maxheight, maxwidth, name, objects, pictures, i);
                }
                    

            };
            
            // XHR-requestfunktion.
            MYMAK.Imageviewer.prototype.getXHR = function(){
                var xhr = null;
                
                    xhr = new XMLHttpRequest();
                    
                    
                return xhr;
            }