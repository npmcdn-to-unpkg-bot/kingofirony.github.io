var NO_MAP = 0;
var MAPZEN_MAP = 1;
var MAPBOX_MAP = 2;
var LEAFLET_MAP= 3;

function getSearchParameters() {
  var prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
  var params = {};
  var prmarr = prmstr.split("&");
  for ( var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}

var params = getSearchParameters();
var key = 'NwHRc_WkIkPHbCAJohIlZA';
var attribution;
var cover;
var direction;
var sequence;
var imgSize;
var renderMode;
var mapType;

if (params.key && params.cover
   && params.attribution && params.direction
    && params.sequence && params.imgSize
    && params.renderMode && params.mapType) {
  key = params.key;
  mapType = params.mapType;
  attribution = params.attribution == "true" ? true : false;
  cover = params.cover == "true" ? true : false;
  direction = params.direction == "true" ? true : false;
  sequence = params.sequence == "true" ? true : false;

  switch(params.imgSize) {
    case 320:
    imgSize = Mapillary.ImageSize.Size320;
    break;
    case 640:
    imgSize = Mapillary.ImageSize.Size640;
    break;
    case 1024:
    imgSize = Mapillary.ImageSize.Size1024;
    break;
    case 2048:
    imgSize = Mapillary.ImageSize.Size2048;
    break;
    default:
    imgSize = Mapillary.ImageSize.Size2048;
  }

  switch(params.renderMode) {
    case 1:
    renderMode = Mapillary.RenderMode.Fill
    break;
    case 2:
    renderMode = Mapillary.RenderMode.LetterBox;
    break;
    default:
    renderMode = Mapillary.RenderMode.Fill;
  }
}

  var options = {
    "cover": cover,
    "attribution": attribution,
    "direction":direction,
    "sequence": sequence,
    "baseImageSize": imgSize,
    "renderMode": renderMode,
  };

  var mly = new Mapillary.Viewer(
    'mly',
    'cjJ1SUtVOEMtdy11b21JM0tyYTZIQTo2ZmVjNTQ3YWQ0OWI2Yjgx',
     key, options);

var nodeChangedFunction;
  mly.on('nodechanged', function (node) {
    //nodeChangedFunction();
  });


  if(mapType == NO_MAP) {
    document.getElementsById(map).style.width = "100%";
    document.getElementsByClassName("mapillary-js")[0].style.width = "100%";
  }


          // var map = L.map('map').setView([0, 0], 10)
          //
          //              var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          //          var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          //          var osm = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib})
          //              map.addLayer(osm)
          //
          //
          //              var mlyVectorLayerConfig = {
          //                  url: 'https://d2munx5tg0hw47.cloudfront.net/tiles/{z}/{x}/{y}.mapbox',
          //                  maxZoom: 18,
          //                  style: function (feature) {
          //                      var style = {}
          //                      style.color = 'rgba(0, 255, 0, 0.7)'
          //                      style.size = 3
          //
          //                      return style
          //                  }
          //              }
          //
          //          var mvtSource = new L.TileLayer.MVTSource(mlyVectorLayerConfig)
          //              map.addLayer(mvtSource)
          //
          //              var marker
          //
          //          var latLon = [48.917849435781356, 2.3513791020523804]
          //          map.setView(latLon, 15)
          //              marker = L.marker({
          //                  lat: latLon[0],
          //                  lon: latLon[1]
          //              })
          //              marker.addTo(map)
          //
          //                                     mly.on('nodechanged', function (node) {
          //                                         var latLon = [node.latLon.lat, node.latLon.lon]
          //                                         map.setView(latLon, 15)
          //
          //                                             if (!marker) {
          //                                                 marker = L.marker(node.latLon).addTo(map)
          //                                             } else {
          //                                                 marker.setLatLng(node.latLon)
          //                                             }
          //                                     })


          ///TANGRAM
         //
        //   var map = L.map('map')
        //  var layer = Tangram.leafletLayer({
        //      scene: 'scene.yaml',
        //      attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
        //  })
         //
        //      layer.addTo(map)
         //
        //      var mlyVectorLayerConfig = {
        //          url: 'https://d2munx5tg0hw47.cloudfront.net/tiles/{z}/{x}/{y}.mapbox',
        //          maxZoom: 18,
        //          style: function (feature) {
        //              var style = {}
        //              style.color = 'rgba(255, 0, 0, 0.7)'
        //              style.size = 3
         //
        //              return style
        //          }
        //      }
         //
        //  var mvtSource = new L.TileLayer.MVTSource(mlyVectorLayerConfig)
        //      map.addLayer(mvtSource)
         //
        //      var marker
         //
        //  var latLon = [48.917849435781356, 2.3513791020523804]
        //  map.setView(latLon, 15)
        //      marker = L.marker({
        //          lat: latLon[0],
        //          lon: latLon[1]
        //      })
        //      marker.addTo(map)



        //Mapbox gl
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFwaWxsYXJ5IiwiYSI6ImNpanB0NmN1bDAwOTF2dG03enM3ZHRocDcifQ.Z6wgtnyRBO0TuY3Ak1tVLQ';
         var map = new mapboxgl.Map({
             container: 'map', // container id
             style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
             center: [2.3513791020523804, 48.917849435781356], // starting position
             zoom: 12 // starting zoom
         })

             var markerSource = {
                 type: 'geojson',
                 data: {
                     type: 'Feature',
                     geometry: {
                         type: 'Point',
                         coordinates: [2.3513791020523804, 48.917849435781356]
                     },
                     properties: {
                         title: 'You\'re here!',
                         'marker-symbol': 'marker'
                     }
                 }
             }

         var mapillarySource = {
             type: 'vector',
             tiles: ['https://d2munx5tg0hw47.cloudfront.net/tiles/{z}/{x}/{y}.mapbox'],
             minzoom: 0,
             maxzoom: 16
         }

         map.on('style.load', function () {
             map.addSource('markers', markerSource)

                 map.addLayer({
                     id: 'markers',
                     type: 'symbol',
                     source: 'markers',
                     layout: {
                         'icon-image': '{marker-symbol}-15',
                         'text-field': '{title}',
                         'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                         'text-offset': [0, 0.6],
                         'text-anchor': 'top'
                     },
                     paint: {
                         'text-size': 12
                     }
                 })

                 map.addSource('mapillary', mapillarySource)
                 map.addLayer({
                     'id': 'mapillary',
                     'type': 'line',
                     'source': 'mapillary',
                     'source-layer': 'mapillary-sequences',
                     'layout': {
                         'line-cap': 'round',
                         'line-join': 'round'
                     },
                     'paint': {
                         'line-opacity': 0.6,
                         'line-color': 'rgb(53, 175, 109)',
                         'line-width':   2
                     }
                 }, 'markers')

         })
