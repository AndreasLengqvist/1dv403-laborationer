"use strict";


var Dock = {
    
    docktext: function(){
        
        var loginicon = document.querySelector("#loginicon");
        var rssicon = document.querySelector("#rssicon");
        var memoryicon = document.querySelector("#memoryicon");
        var imageicon = document.querySelector("#imageicon");
        var chaticon = document.querySelector("#chaticon");

            document.querySelector("#loginlink").onmouseover = function(){
                loginicon.id = "loginicon2";
            };
            document.querySelector("#rsslink").onmouseover = function(){    
                rssicon.id = "rssicon2";
            };
                
            document.querySelector("#memorylink").onmouseover = function(){    
                memoryicon.id = "memoryicon2";
            };
            
            document.querySelector("#chatlink").onmouseover = function(){    
                chaticon.id = "chaticon2";
            };
            
            document.querySelector("#imagelink").onmouseover = function(){    
                imageicon.id = "imageicon2";
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
            
            document.querySelector("#chatlink").onmouseout = function(){    
                chaticon.id = "chaticon";
            };
            
            document.querySelector("#imagelink").onmouseout = function(){    
                imageicon.id = "imageicon";
            };
    }
};


window.onload = Dock.docktext();