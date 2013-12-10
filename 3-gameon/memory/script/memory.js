"use strict";

    var Memory = {


        memoryArray: [],
        rows: 4,
        cols: 4,


        init:function () {
            var memory1 = new RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
            Memory.memoryArray = memory1;
            
            Memory.createTable();
        },
        
            
            
        // Skapar en wrapper för att kapsla in memoryspelet.
        createTable: function() {
            var wrapper = document.querySelector("#main");
            var div = document.createElement("div");
            div.className = "memgame";
            wrapper.appendChild(div);
            


            // Skapar en tabell.
            document.querySelector(".memgame");
            var table = document.createElement("table");
            table.className = "memtable";
            div.appendChild(table);


            var MemoryID = 0;

            // Lägger till arrayen (med tillhörande bilder) till tabellen med hjälp av for-loopar.
            for (var r = 0; r < Memory.rows; r += 1) {
                var tr = document.createElement("tr");
                table.appendChild(tr);
                
                for (var c = 0; c < Memory.cols; c += 1) {
                    tr.appendChild(Memory.createMemorybrick(MemoryID));
                    MemoryID += 1;
                }
            }
        },
        
        
        createMemorybrick: function(MemoryID) {
                    var td = document.createElement("td");
                    var link = document.createElement("a");
                    var pic = document.createElement("img");
                    
                    link.setAttribute("href", "#");
                    pic.setAttribute("src", "pics/0.png");
                    pic.setAttribute("id", MemoryID);
                    
                    link.onclick = function() {
                        Memory.memoryClick(MemoryID);
                    };
                    
                    link.appendChild(pic);
                    td.appendChild(link);
                    return td;
        },
        
        
        memoryClick: function (MemoryID) {
        var mempic = document.getElementById(MemoryID);
        mempic.setAttribute("src", "pics/"+this.memoryArray[MemoryID]+".png");
        }
 
};

    // MessageBoard.init anropas när sidan är helt färdigladdad.
    window.onload = Memory.init;