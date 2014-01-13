"use strict";

// Toppnivån av namespace
var MYMAK = MYMAK || {};



    // Konstruktorn för RSS Feed. Ärver grunden från MYMAK.Window.
    MYMAK.Rssfeed = function(idname, picion, postopcount, posleftcount, width, height) {
    
        MYMAK.Window.call(this, idname, picion, postopcount, posleftcount, width, height);
        
        
        console.log("Inne i RSSen");
    };


    MYMAK.Rssfeed.prototype = new MYMAK.Window();
    
    
    
     // Huvudfunktion som kontaktar servern där bilerna ligger med hjälp av AJAX.
            MYMAK.Rssfeed.prototype.RSSCon = function(){
            
            var xhr = this.getXHR();        // XHR-requestfunktion.
            var rssdata;              // Variabel där RSS-datan sparas ner.
            
            var that = this;
            
            var contentdiv = document.querySelector("#content"+that.idname);
            var loader = document.createElement("img");
            loader.className = "loader";
            
            loader.setAttribute("src", "pics/loader.gif");

            contentdiv.appendChild(loader);

            
            
            xhr.onreadystatechange = function(){
                
                if (xhr.readyState == 4 && xhr.status == 200) {
                    rssdata = xhr.responseText;
                    loader.remove();
                    MYMAK.Rssfeed.prototype.rssMaker(that.idname, rssdata);
                }
            };
                
                xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.moviezine.se/rss/recensioner") , true);
                xhr.send(null);
                
                MYMAK.intervalID = setInterval(function(){
                    
                    MYMAK.Rssfeed.prototype.updateRSS(xhr, loader, that, contentdiv, rssdata);
                
                },5000);
            };
            
            
            
            // Funktion som skriver ut den hämtade datan till en RSS-Feed som läggs i contentdiven.
            MYMAK.Rssfeed.prototype.rssMaker = function(name, rssdata){

                var contentdiv = document.querySelector("#content"+name);
                contentdiv.innerHTML = rssdata;
            }
            
            // XHR-requestfunktion.
            MYMAK.Rssfeed.prototype.getXHR = function(){
                var xhr = null;
                
                    xhr = new XMLHttpRequest();
                    
                    
                return xhr;
            }
            
            
            MYMAK.Rssfeed.prototype.updateRSS = function(xhr, loader, that, contentdiv, rssdata){
                
                contentdiv.innerHTML = "";
                contentdiv.appendChild(loader);
                
                xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.moviezine.se/rss/recensioner") , true);
                xhr.send(null);

                xhr.onreadystatechange = function(){
                
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        rssdata = xhr.responseText;
                        loader.remove();
                        MYMAK.Rssfeed.prototype.rssMaker(that.idname, rssdata);
                    }
                };
                
            }
