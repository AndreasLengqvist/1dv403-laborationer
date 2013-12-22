"use strict";

var MYMAK = MYMAK || {};


MYMAK.makewindow = function () {
    
    var memorybutton = document.querySelector("#memorylink");
    
    var n = 0;
    
    memorybutton.onclick = function() {
        
        var memory;
        n += 1;

        memory = new MYMAK.Window("Memory "+[n], "Memory"+[n], 4);
        
        memory.buildwindow();
        memory.buildGame();
    };
    
    
};









window.onload = MYMAK.makewindow();