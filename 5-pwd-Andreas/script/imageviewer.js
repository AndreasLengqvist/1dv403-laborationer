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
            
            var contentdiv = document.querySelector("#content"+that.idname);
            var loader = document.createElement("img");
            loader.className = "loader";
            
            loader.setAttribute("src", "pics/loader.gif");

            contentdiv.appendChild(loader);

            
            
            xhr.onreadystatechange = function(){
                
                if (xhr.readyState == 4 && xhr.status == 200) {
                    ajaxobj = JSON.parse(xhr.responseText);
                    loader.remove();
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

                var contentdiv = document.querySelector("#content"+name);
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
                contentdiv.appendChild(imagediv);
                
                
                imagediv.style.width = maxwidth+"px";
                imagediv.style.height = maxheight+"px";
                
                imagelink.onclick = function() {

                MYMAK.bigimgn += 1;
                MYMAK.bigimgposleft += 10;
                MYMAK.bigimgpostop += 10;
                
                
                    var bigimage = new MYMAK.Imageviewer("Förstoring"+MYMAK.bigimgn, "pics/dockimageicon.png", MYMAK.bigimgpostop, MYMAK.bigimgposleft);
                    bigimage.buildWindow();
                    var bigimgdiv = document.querySelector("#Förstoring"+MYMAK.bigimgn);
                    bigimgdiv.style.zIndex = "2147483647";
                    bigimgdiv.className = "imagewrapper";
                    
                    var bigimg = document.createElement("img");
            
                    // Sätter bildens attribut.
                    bigimg.setAttribute("src", pictures[i].URL);
                    bigimg.setAttribute("height", pictures[i].Height);
                    bigimg.setAttribute("width", pictures[i].Width);
                    
                    bigimgdiv.appendChild(bigimg);
                    
                };            
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