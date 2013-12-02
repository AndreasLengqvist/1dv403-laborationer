"use strict";

    var MessageBoard = {


        init:function (Message) {
            
            var mess = new Message("Testmeddelande", new Date());
            alert(mess);
            
        }
};


window.onload = MessageBoard.init;