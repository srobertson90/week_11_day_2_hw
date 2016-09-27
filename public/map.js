var contentString = '<p>I work here!</p>';
var infoWindow = new google.maps.InfoWindow({
          content: contentString
        });

var Map = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  this.centerAt = function(destLat, destLng){
    this.googleMap.setCenter({lat:destLat, lng:destLng});
  }

  this.addMarker = function(coord, contentString){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
  }

}