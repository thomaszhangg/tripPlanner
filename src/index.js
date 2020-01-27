console.log('Hello from JavaScript');
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYzNzYXIyMDciLCJhIjoiY2s1d3B6amViMXh5eDNrbWpjZWVqc3NqYSJ9.7vsEQ9O8osBtO9wdggls7Q';

const fullstackCoords = [-74.009, 40.705]; // NY

const map = new mapboxgl.Map({
  container: 'map',
  center: fullstackCoords, // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // can now view green market at our FS location

const marker = buildMarker('activities', fullstackCoords);
marker.addTo(map);
