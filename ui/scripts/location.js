var getLocation = document.getElementById('getlocation');
let latitude;
let longitude;
navigator.geolocation.getCurrentPosition(position=>{
 latitude = position.coords.latitude;
 longitude = position.coords.longitude;



 console.log(latitude, longitude);
}, error=>{
   console.log(error.code)
});


 function initMap(){
    var options = {
       zoom: 13,
       center: {lat:latitude, lng:longitude}
    }
    var map = new 
    google.maps.Map(document.getElementById('map'),options);

    var marker = new 
    google.maps.Marker ({
      position : {lat: latitude, lng: longitude},
      map:map

    });
 }