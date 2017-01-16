// Getting some data


var url = "http://api.open-notify.org/iss-now.json";

var request = require('request');

request(url, function(err, response) {
    if(err) {
        console.log("There is an error", err);
    } else {
    var searchResults = JSON.parse(response.body)
    
    var long = parseFloat(searchResults.iss_position.longitude).toFixed(2)
    var lat = parseFloat(searchResults.iss_position.latitude).toFixed(2)
    
    console.log(searchResults);
    console.log("latitute = " + lat, "longitude = " + long);
    }
})