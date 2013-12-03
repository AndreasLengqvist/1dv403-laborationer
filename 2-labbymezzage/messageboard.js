"use strict";

    var MessageBoard = {


        message: [],

        init:function () {
            
            
            
            var sendmessage = document.getElementById("send");
            sendmessage.onclick = MessageBoard.addMessage;
            
            
            
            
            var mess = new Message("Testmeddelande", new Date());
            alert(mess);
            
        }
};


window.onload = MessageBoard.init;