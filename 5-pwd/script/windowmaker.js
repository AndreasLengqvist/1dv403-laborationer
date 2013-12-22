"use strict";

var MYMAK = MYMAK || {};


MYMAK.makewindow = function () {
    
    var memorybutton = document.querySelector("#memorylink");
    var imagebutton = document.querySelector("#imagelink");
    var rssbutton = document.querySelector("#rsslink");
    var mn = 0;
    var imn = 0;
    var rn = 0;
    
    // Skapandet av ett Memoryspel.
    memorybutton.onclick = function() {
        
        var memory;
        mn += 1;

        memory = new MYMAK.Memory("Memory "+[mn], "Memory"+[mn], 2, "pics/dockmemoryicon.png");
        
        memory.buildwindow();
        memory.buildGame();
    };
    
    
    // Skapandet av en Image Viewer.
    imagebutton.onclick = function() {
        
        var imageviewer;
        imn += 1;

        imageviewer = new MYMAK.Imageviewer("Imageviewer "+[imn], "Imageviewer"+[imn], "pics/dockimageicon.png");
        
        imageviewer.buildwindow();
    };    
    
    
    // Skapandet av en RSS Feed.
    rssbutton.onclick = function() {
        
        var rssfeed;
        rn += 1;

        rssfeed = new MYMAK.Rssfeed("RSSFeed "+[rn], "RSSFeed"+[rn], "pics/dockrssicon1.png");
        
        rssfeed.buildwindow();
    };
    
    
};









window.onload = MYMAK.makewindow();