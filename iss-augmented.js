// augmented iss application

Number.prototype.toRadians = function() {
return this * Math.PI / 180;
  }
  
var request = require('request');  
var prompt = require('prompt');

prompt.start();

prompt.get(['location'], function(err, result){
    if(err) {
        console.log('invalid location', err);
    } else {
        console.log('location: ' + result.location)
        
        var geoLocUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location;

        request(geoLocUrl, function(err, response){
            if(err) {
                console.log('incorrect input', err)
            } else {
                var coordinate = JSON.parse(response.body)
                var lat = parseFloat(coordinate.results[0].geometry.location.lat)
                var long = parseFloat(coordinate.results[0].geometry.location.lng)
                
        
        var url = "http://api.open-notify.org/iss-now.json";

        request(url, function(err, response) {
            if(err) {
                console.log('incorrect input', err);
            } else {
            var searchResults = JSON.parse(response.body)
            var long2 = parseFloat(searchResults.iss_position.longitude)
            var lat2 = parseFloat(searchResults.iss_position.latitude)

            
            var R = 6371e3; // metres
            var φ1 = lat.toRadians();
            var φ2 = lat2.toRadians();
            var Δφ = (lat2-lat).toRadians();
            var Δλ = (long2-long).toRadians();
            
            var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ/2) * Math.sin(Δλ/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            
            var d = R * c;
             }
             console.log("Your distance from ISS is " + d.toFixed(0) + " metres ");
        })
            }
        })
    }
})

