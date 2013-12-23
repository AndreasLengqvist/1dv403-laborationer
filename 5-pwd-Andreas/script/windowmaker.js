"use strict";

var MYMAK = MYMAK || {};


MYMAK.makewindow = function () {
    
    // Räknare som ger varje enskilt fönster ett unikt ID.
    var mn = 0;
    var imn = 0;
    var rn = 0;
    var poscount = 0;
    
    
    // Skapandet av ett Memoryspel.
    document.querySelector("#memorylink").onclick = function() {
        
        var memory;
        mn += 1;
        poscount += 15;
        memory = new MYMAK.Memory("Memory"+[mn], "pics/dockmemoryicon.png", poscount+"px", 4);
        
        memory.buildWindow();
        memory.buildGame();
    };    
    
    
    // Skapandet av en Image Viewer.
    document.querySelector("#imagelink").onclick = function() {
        
        var imageviewer;
        imn += 1;
        poscount += 15;

        imageviewer = new MYMAK.Imageviewer("ImageViewer"+[imn], "pics/dockimageicon.png", poscount+"px");
        
        imageviewer.buildWindow();
    };    
    
    
    // Skapandet av en RSS Feed.
    document.querySelector("#rsslink").onclick = function() {
        
        var rssfeed;
        rn += 1;
        poscount += 15;

        rssfeed = new MYMAK.Rssfeed("RSSFeed"+[rn], "pics/dockrssicon1.png", poscount+"px");
        
        rssfeed.buildWindow();
    };    
};









window.onload = MYMAK.makewindow();