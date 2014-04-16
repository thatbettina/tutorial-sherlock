var geojson = [
  { "geometry": { "type": "Point", "coordinates": [9.925201, 78.119775] },
    "properties": { "title": "Madurai" } },
  { "geometry": { "type": "Point", "coordinates": [15.3350, 76.4620] },
    "properties": { "title": "Hampi" } },
  { "geometry": { "type": "Point", "coordinates": [1.0000000, 76.9666700] },
    "properties": { "title": "Coimbatore" } },
  { "geometry": { "type": "Point", "coordinates": [2.1491, 118.5299] },
    "properties": { "title": "Kakaban" } },  
  { "geometry": { "type": "Point", "coordinates": [-25.344646, 131.035904] },
    "properties": { "title": "Uluru" } },
];

var tiles = new L.StamenTileLayer("watercolor");

var map = new L.Map("map", {
    center: new L.LatLng(9.925201, 78.119775),
    zoom: 5
});
map.addLayer(tiles);

var markerMadurai = L.marker([9.925201, 78.119775],
  {title:'Madurai'}).addTo(map);

var markerHampi = L.marker([15.3350, 76.4620],
	{title:'Hampi'}).addTo(map);
 
var markerCoimbatore = L.marker([11.0000000, 76.9666700],
	{title:'Coimbatore'}).addTo(map);

var markerKakaban = L.marker([2.1491, 118.5299],
	{title:'Kakaban'}).addTo(map);

var markerUluru = L.marker([-25.344646, 131.035904],
	{title:'Uluru'}).addTo(map);

var markers = {
	Madurai : L.marker([9.925201, 78.119775],
  {title:'Madurai'}),

	Hampi: L.marker([15.3350, 76.4620],
	{title:'Hampi'}),

	Coimbatore: L.marker([11.0000000, 76.9666700],
	{title:'Coimbatore'}),

	Kakaban: L.marker([2.1491, 118.5299],
	{title:'Kakaban'}),

	Uluru: L.marker([-25.344646, 131.035904],
	{title:'Uluru'}),
};