
mapboxgl.accessToken = 'pk.eyJ1IjoibmluamFhLXR1cnRsZXMiLCJhIjoiY204cTRiMnRpMGozeTJqcHM1bzRsMGNkOSJ9.vmRXru11d2mcAlIx7Zvc7Q';

var mapProps = {
    container: 'map',
    center: [-73.97, 40.75],
    zoom: 9,
  
    style: 'mapbox://styles/mapbox/streets-v11'
};

var map = new mapboxgl.Map(mapProps);


map.addControl(new mapboxgl.NavigationControl());


var markerData = [
  { coords: [-73.97, 40.75], title: 'Center', description: 'Map center' },
  { coords: [-73.9851, 40.7589], title: 'Times Square', description: 'Busy square' },
  { coords: [-73.9772, 40.7527], title: 'Grand Central', description: 'Terminal' }
];

markerData.forEach(function(m) {
  var popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML('<strong>' + m.title + '</strong><p>' + m.description + '</p>');

  new mapboxgl.Marker()          
    .setLngLat(m.coords)
    .setPopup(popup)              
    .addTo(map);
});


map.on('click', function(e) {
  var clickedMarker = new mapboxgl.Marker({ color: '#FF0000' })
    .setLngLat(e.lngLat)
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('You clicked here'))
    .addTo(map);
});
