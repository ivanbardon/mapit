var lat, lon, vel, vec, map, posicion;
var markers = [];
var iterator = 0;

$(document).on('ready',inicio);
function inicio(){
	initialize();
};

// function geolocalizar(){
// 	navigator.geolocation.getCurrentPosition(mostrar,fallo);
// };

// function fallo(fallo){
// 	alert('Tendrás que habilitar el GPS de tu navegador');
// 	console.log(fallo);

// };

// function mostrar(geo){

// 	lat = geo.coords.latitude;
// 	lon = geo.coords.longitude;
// 	// vel = geo.coords.speed;
// 	// vec = geo.coords.heading;




// 	console.log(lat);
// 	console.log(lon);
// 	// console.log(vel);
// 	// console.log(vec);
// 	initialize();



// };

function initialize() {
	var mapOptions = {
	  zoom: 13,
	  center: new google.maps.LatLng(40.596961199999996 ,0.44992750000000004),
	  minZoom: 12,
	  maxZoom: 21,
	  disableDefaultUI: true,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  mapTypeControl: false,
	  streetViewControl: true
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);	


};

// function grupoMarcadores1(){

// 	var casa = new google.maps.Marker({
// 	  position:new google.maps.LatLng(40.598007, 0.450070),
// 	  title: 'vamos a ver como leches aparece este texto!!!',
// 	  animation: google.maps.Animation.DROP,
// 	  map: map
// 	});
// 	var otro = new google.maps.Marker({
// 	  position:new google.maps.LatLng(40.599111, 0.446342),
// 	  title: 'Este es otro, claramente',
// 	  map: map
// 	});
// 	var otro2 = new google.maps.Marker({
// 	  position:new google.maps.LatLng(40.597013, 0.443406),
// 	  title: 'Este es otro, claramente',
// 	  map: map
// 	});
// 	var otro3 = new google.maps.Marker({
// 	  position:new google.maps.LatLng(40.595995, 0.446282),
// 	  title: 'Este es otro, claramente',
// 	  map: map
// 	});
// 	var otro4 = new google.maps.Marker({
// 	  position:new google.maps.LatLng(40.596410, 0.449415),
// 	  title: 'Este es otro, claramente',
// 	  map: map
// 	});
// 	var otro5 = new google.maps.Marker({
// 	  position:new google.maps.LatLng(40.598145, 0.446056),
// 	  title: 'Este es otro, claramente',
// 	  map: map
// 	});
	

// };

var restaurantes=[

	  
	  new google.maps.LatLng(40.598007, 0.45007),
	  
	  new google.maps.LatLng(40.599111, 0.446342),
	  
	  new google.maps.LatLng(40.597013, 0.443406),
	  
	  new google.maps.LatLng(40.595995, 0.446282),
	  
	  new google.maps.LatLng(40.596410, 0.449415),
	  
	  new google.maps.LatLng(40.598145, 0.446056),
];


var mosset = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">EL MOSSET</h1>'+
	'<div id="bodyContent">'+
	'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
	'sandstone rock formation in the southern part of the '+
	'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
	'south west of the nearest large town, Alice Springs; 450&#160;km '+
	'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
	'features of the Uluru - Kata Tjuta National Park. Uluru is '+
	'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
	'Aboriginal people of the area. It has many springs, waterholes, '+
	'rock caves and ancient paintings. Uluru is listed as a World '+
	'Heritage Site.</p>'+
	'<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
	'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
	'(last visited June 22, 2009).</p>'+
	'</div>'+
	'</div>';

var mossetMarker = new google.maps.Marker({
	position: new google.maps.LatLng(40.59737437738112, 0.44412755828148853),
	map: map,
	title: 'EL MOSSET'
});

var mossetWindow = new google.maps.InfoWindow({
	content: mosset
});

google.maps.event.addListener(mossetMarker, 'click', function() {

	mossetWindow.open(map);

});

function drop() {
  for (var i = 0; i < restaurantes.length; i++) {
    setTimeout(function() {
      addMarker();
    }, i * 200);
  }
};

function addMarker() {
  markers.push(new google.maps.Marker({
    position: restaurantes[iterator],
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  }));
  iterator++;
};


		

