"use strict";


var Dock = {
    
    docktext: function(){
        
        var loginicon = document.querySelector("#loginicon");
        var rssicon = document.querySelector("#rssicon");
        var memoryicon = document.querySelector("#memoryicon");

            document.querySelector("#loginlink").onmouseover = function(){
                loginicon.id = "loginicon2";
            };
            document.querySelector("#rsslink").onmouseover = function(){    
                rssicon.id = "rssicon2";
            };
                
            document.querySelector("#memorylink").onmouseover = function(){    
                memoryicon.id = "memoryicon2";
            };
            
            
            document.querySelector("#loginlink").onmouseout = function(){
                loginicon.id = "loginicon";
            };
            document.querySelector("#rsslink").onmouseout = function(){    
                rssicon.id = "rssicon";
            };
                
            document.querySelector("#memorylink").onmouseout = function(){    
                memoryicon.id = "memoryicon";
            };
    }
};


window.onload = Dock.docktext();