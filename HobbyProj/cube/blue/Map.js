function DrawMap(Type, LatLng, index) 
{
	console.log(Type);

	if (Type == 1)
	{
		var latlng = LatLng;
	
		var uluru = {lat: 10, lng: 10};
		var map = new google.maps.Map(document.getElementById('Map'), {
		  zoom: 22,
		  center: uluru,
		  gestureHandling: 'cooperative'
		});
		
		var geocoder = new google.maps.Geocoder();
		var infowindow = new google.maps.InfoWindow;
		
		geocodeLatLng(geocoder, map, infowindow, latlng, index);
	}
	else if (Type == 0)
	{
		alert("Type incorrect");
	}
}

function geocodeLatLng(geocoder, map, infowindow, LatLng, index) {
        var input = LatLng;
        var latlngStr = input.split(',', 2);
        var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              map.setZoom(17);
              var marker = new google.maps.Marker({
                position: latlng,
                map: map
              });
			  map.setCenter(marker.getPosition());
              var infowindow = new google.maps.InfoWindow({
				content: "<div style='font-size: 3vmin; overflow: hidden; cursor: pointer;' onclick='redirect(" + index + "," + latlngStr[1] + ");'>"+results[1].formatted_address+'</div>',
			  });
              infowindow.open(map, marker);
			  marker.addListener('click', function() {
				infowindow.open(map, marker);
			  });
            } else {
            }
          } else {
          }
        });
}

function redirect(index)
{
	var Index = index + 1;

	var String = "http://www.dovaki.com/map/?index=" + Index;
	
	window.open(String, '_blank');
}