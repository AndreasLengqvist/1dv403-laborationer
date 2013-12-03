"use strict";



// Meddelande-konstruktor som tar text och datum som parametrar.
function Message(message, date){
    
    // Hämtar meddelandetexten.
    this.getText = function() {
        return message;
    }

    // Sätter meddelandetexten.
    this.setText = function(_text) {
        message = _text;
    }
    
    // Hämtar datumet.
    this.getDate = function() {
        return date;    
    }
    
    // Sätter datumet.
    this.setDate = function(_date) {
        date = _date;
    }
};


// toString-metod. En strängpresentation av objektet.
Message.prototype.toString = function() {
    return this.getText()+" ("+this.getDate()+")";
}

// Hämtar texten med \n utbytt mot <br/>.
Message.prototype.getHTMLText = function() {
    
}


Message.prototype.getDateText = function() {
    
}