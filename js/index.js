document.addEventListener("deviceready", function()
{
    var LATITUD     = null;
    var LONGITUD    = null;
    
    //document.addEventListener("backbutton", onBackKeyDown, false);
    
    /*
    var id = 'deviceready';
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id); 
    
    

*/




            browserGeolocationSuccess = function(position) 
            {
                alert(position.coords.latitude);
                alert(position.coords.longitude);
                alert("browserGeolocationSuccess");
                
                var uluru = {lat: osition.coords.latitude, lng: osition.coords.longitude};
                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 4,
                  center: uluru
                });
                var marker = new google.maps.Marker({
                  position: uluru,
                  map: map
                });

            };

            var browserGeolocationFail = function(error) 
            {
                switch (error.code) 
                {
                    case error.TIMEOUT:
                        alert("TIMEOUT");
                    break;
                    case error.PERMISSION_DENIED:
                        if(error.message.indexOf("Only secure origins are allowed") === 0) 
                        {
                            alert("Only secure origins are allowed");
                        }
                    break;
                    case error.POSITION_UNAVAILABLE:
                        alert("POSITION_UNAVAILABLE");

                    break;
                }
            };

            var tryGeolocation = function() 
            {
                if (navigator.geolocation) 
                {
                    navigator.geolocation.getCurrentPosition
                    (
                        browserGeolocationSuccess,
                        browserGeolocationFail,
                        {
                            maximumAge: 60, 
                            timeout: 10000, 
                            enableHighAccuracy: true
                        }
                    );
                }
            };

                
                tryGeolocation();
                
                

    
    
    
    
});


        
    

