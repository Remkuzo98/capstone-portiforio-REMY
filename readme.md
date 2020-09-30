setUp for the capstone project

let googleMapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude}, ${longitude}&zoom=11&size=400x300`;
        const mapImage = document.getElementById('mapImage');
        mapImage.src = googleMapURL;





        getLocation.addEventListener('click', evt=> {
  if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position=>{
         latitude = position.coords.latitude;
        longitude = position.coords.longitude;

       

        console.log(latitude, longitude);
      }, error=>{
          console.log(error.code)
      });
  } 
  else {
      console.log('Not Supported');
  }
});