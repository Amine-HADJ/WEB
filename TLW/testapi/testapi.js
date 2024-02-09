// function getTemperature() {
//     let contenu_json = {}

//     let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1IjoibW9oYW1tZWQtYW1pbmUiLCJhIjoiY2w5Z3JmZzF0MDZsbjN2cGJremZvOXMzayJ9.d3-zn13N6FSbXggarlMh-A"

//     fetch(url)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(json){
//         console.log(contenu_json)
//         console.log(a)
//     })
// }

// const mapboxSdk = require("mapbox")

// let mapbox = new mapboxSdk(process.env.MAPBOX_TOKEN)

// coordA = {lat : 33.968123, long: -118.419454}

// coordB = {lat : 33.997223, long: -117.929145}

// const distance = await mapbox.getDistance(coordA, coordB)

// console.log(distance)

mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1tZWQtYW1pbmUiLCJhIjoiY2w5Z3JmZzF0MDZsbjN2cGJremZvOXMzayJ9.d3-zn13N6FSbXggarlMh-A';
    


      var to = [4.8470882, 45.7540207] //lng, lat
      var from = [2.3522219, 48.856614] //lng, lat (Paris)

     

      var options = {
        units: 'kilometers'
      }; // units can be degrees, radians, miles, or kilometers, just be sure to change the units in the text box to match. 

      var distance = turf.distance(to, from, options);

      var value = document.getElementById('map-overlay')
      value.innerHTML = "Distance: " + distance.toFixed([2]) + "kilometers" 

