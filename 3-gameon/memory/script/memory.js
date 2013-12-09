"use strict";

    var Memory = {


        memory: [],

        init:function () {
            var mem1 = new RandomGenerator.getPictureArray(4,4);
            Memory.createTable();
            console.log(mem1);
        },
        
        createTable: function() {
            var wrapper = document.querySelector("#main");
            var div = document.createElement("div");
            wrapper.appendChild(div);
            div.className = "memgame";


            // Skapar en tabell.
            document.querySelector(".memgame");
            var table = document.createElement("table");
            table.className = "memtable";
            div.appendChild(table);

            // Lägger till arrayen (med tillhörande bilder) till tabellen med hjälp av for-loopar.
            for (var rows = 0; rows < 4; rows += 1) {
                var tr = document.createElement("tr");
                table.appendChild(tr);
                
                for (var cols = 0; cols < 4; cols += 1) {
                    var td = document.createElement("td");
                    tr.appendChild(td);
                    
                    var pic = document.createElement("img");
                    pic.setAttribute("src", "/../pics/0.png");
                    td.appendChild(pic);
                }
            
            }
        },
        
        start: function() {
            
            
            
            
        }
            
};

    // MessageBoard.init anropas när sidan är helt färdigladdad.
    window.onload = Memory.init;