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
}


// toString-metod. En strängpresentation av objektet.
Message.prototype.toString = function() {
    return this.getText()+" ("+this.getDate()+")";
};

// Hämtar texten med \n utbytt mot <br/>.
Message.prototype.getHTMLText = function() {
    return this.getText().replace(/[\n]/g, "<br />");
};


Message.prototype.getDateText = function() {
    var time = this.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    // Fixar till klockan.
    if (hours < 10) {
        hours = "0"+hours;
    }
    if (minutes < 10) {
        minutes = "0"+minutes;
    }
    if (seconds < 10) {
        seconds = "0"+seconds;
    }
    
    var getDateText = hours+":"+minutes+":"+seconds;
    return getDateText;
};

Message.prototype.getFullDate = function() {
	var time = this.getDate();
	var year = time.getFullYear();
	var month = time.getMonth();
	var day = time.getDate();
        // Fixar till månaderna så de visar rätt.
		if (month == 0) {
			month = "Januari";
		}
		if (month == 1) {
			month = "Februari";
		}
		if (month == 2) {
			month = "Mars";
		}
		if (month == 3) {
			month = "April";
		}
		if (month == 4) {
			month = "Maj";
		}
		if (month == 5) {
			month = "Juni";
		}
		if (month == 6) {
			month = "Juli";
		}
		if (month == 7) {
			month = "Augusti";
		}
		if (month == 8) {
			month = "September";
		}
		if (month == 9) {
			month = "Oktober";
		}
		if (month == 10) {
			month = "November";
		}
		if (month == 11) {
			month = "December";
		}
		
	// Fixar till klockan.
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
		if (hours < 10) {
			hours = "0"+hours;
		}
		if (minutes < 10) {
			minutes = "0"+minutes;
		}
		if (seconds < 10) {
			seconds = "0"+seconds;
		}
		var getFullDate = "Inlägget skapades den "+day+" "+month+" "+year+" klockan "+hours+":"+minutes+":"+seconds;
	return getFullDate;
};