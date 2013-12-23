"use strict";

var MYMAK = MYMAK || {};


MYMAK.makewindow = function () {
    var mn = 0;
    
    // Skapandet av en Image Viewer.
    document.querySelector("#memorylink").onclick = function() {
        
        var memory;
        mn += 1;

        memory = new MYMAK.Memory("Memory"+[mn], "pics/dockmemoryicon.png", 1);
        
        memory.buildWindow();
        memory.buildGame();
    };    
    
};









window.onload = MYMAK.makewindow();