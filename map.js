var geojson = [
  { "geometry": { "type": "Point", "coordinates": [9.925201, 78.119775] },
    "properties": { "title": "Madurai" } },
  { "geometry": { "type": "Point", "coordinates": [1.0000000, 76.9666700] },
    "properties": { "title": "Coimbatore" } },
];

var tiles = new L.StamenTileLayer("watercolor");

var map = new L.Map("map", {
    center: new L.LatLng(9.925201, 78.119775),
    zoom: 5
});
map.addLayer(tiles);

var markerMadurai = L.marker([9.925201, 78.119775],
  {title:'Madurai'}).addTo(map);
 
var markerCoimbatore = L.marker([11.0000000, 76.9666700],
	{title:'Coimbatore'}).addTo(map);

var markers = {
	Madurai : L.marker([9.925201, 78.119775],
  {title:'Madurai'}),

	Coimbatore: L.marker([11.0000000, 76.9666700],
	{title:'Coimbatore'})
}