"use strict";


// Konstruktorfunktion.
var MemoryGame = {
    
    
    // Initialisering av antalet memoryspel.
    init: function () {
            
        var mem1 = new Game("game1", 4);
        var mem2 = new Game("game2", 4);



        mem1.build();
        mem2.build();

        
        
    },
        
        
    
};



window.onload = MemoryGame.init;