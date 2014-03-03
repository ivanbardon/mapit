var map;
var restaurantes = [];
var iterador = 0;

$(document).on('ready',inicio);
function inicio(){
	initialize();
};

function initialize() {
	var mapOptions = {
	  zoom: 15,
	  center: new google.maps.LatLng(40.594679 ,0.445592),
	  minZoom: 12,
	  maxZoom: 21,
	  disableDefaultUI: true,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  mapTypeControl: false,
	  streetViewControl: true
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);	


};


var casa = new google.maps.Marker({
	position:new google.maps.LatLng(40.598007, 0.450070),
	title: 'vamos a ver como leches aparece este texto!!!',
	animation: google.maps.Animation.DROP,
	icon: 'images/icon_fork.png',
	map: map
});
var otro = new google.maps.Marker({
	position:new google.maps.LatLng(40.599111, 0.446342),
	title: 'Este es otro, claramente',
	animation: google.maps.Animation.DROP,
	icon: 'images/icon_fork.png',
	map: map
});
var otro2 = new google.maps.Marker({
	position:new google.maps.LatLng(40.597013, 0.443406),
	title: 'Este es otro, claramente',
	animation: google.maps.Animation.DROP,
	icon: 'images/icon_fork.png',
	map: map
});
var otro3 = new google.maps.Marker({
	position:new google.maps.LatLng(40.595995, 0.446282),
	title: 'Este es otro, claramente',
	animation: google.maps.Animation.DROP,
	icon: 'images/icon_fork.png',
	map: map
});
var otro4 = new google.maps.Marker({
	position:new google.maps.LatLng(40.596410, 0.449415),
	title: 'Este es otro, claramente',
	animation: google.maps.Animation.DROP,
	icon: 'images/icon_fork.png',
	map: map
});
var otro5 = new google.maps.Marker({
	position:new google.maps.LatLng(40.598145, 0.446056),
	title: 'Este es otro, claramente',
	animation: google.maps.Animation.DROP,
	icon: 'images/icon_fork.png',
	map: map
});
var mosset = new google.maps.Marker({
	position: new google.maps.LatLng(40.59737437738112, 0.44412755828148853),
	animation: google.maps.Animation.DROP,
	map: map,
	icon: 'images/icon_fork.png',
	title: 'EL MOSSET'
});


restaurantes.push(mosset);
restaurantes.push(casa);
restaurantes.push(otro);
restaurantes.push(otro2);
restaurantes.push(otro3);
restaurantes.push(otro4);
restaurantes.push(otro5);


function mostrarRest() {

  if (restaurantes) {
    for (i in restaurantes) {
      restaurantes[i].setMap(map);
    }
  }
};


function limpiarRest() {
  if (restaurantes) {
    for (i in restaurantes) {
      restaurantes[i].setMap(null);
    }
  }
};

// function dropRest() {
//   for (var i =0; i < restaurantes.length; i++) {
//     setTimeout(function() {
//       mostrarRest();
//     }, i * 200);
//   }
// };


var mossetInfo = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">EL MOSSET</h1>'+
	'<div id="bodyContent">'+
	'<iframe width="200" height="100" src="//www.youtube.com/embed/mfjqLmD6Li8?list=PL5M61thZGgm2T7Cqe2FMj1m329b_wGvct" frameborder="0" allowfullscreen></iframe>'+
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

var casaInfo = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Casa</h1>'+
	'<div id="bodyContent">'+
	'<iframe width="200" height="100" src="//www.youtube.com/embed/mfjqLmD6Li8?list=PL5M61thZGgm2T7Cqe2FMj1m329b_wGvct" frameborder="0" allowfullscreen></iframe>'+
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

var otroInfo = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Otro</h1>'+
	'<div id="bodyContent">'+
	'<iframe width="200" height="100" src="//www.youtube.com/embed/mfjqLmD6Li8?list=PL5M61thZGgm2T7Cqe2FMj1m329b_wGvct" frameborder="0" allowfullscreen></iframe>'+
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

var otro2Info = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Otro2</h1>'+
	'<div id="bodyContent">'+
	'<iframe width="200" height="100" src="//www.youtube.com/embed/mfjqLmD6Li8?list=PL5M61thZGgm2T7Cqe2FMj1m329b_wGvct" frameborder="0" allowfullscreen></iframe>'+
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

var otro3Info = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Otro3</h1>'+
	'<div id="bodyContent">'+
	'<iframe width="200" height="100" src="//www.youtube.com/embed/mfjqLmD6Li8?list=PL5M61thZGgm2T7Cqe2FMj1m329b_wGvct" frameborder="0" allowfullscreen></iframe>'+
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

var otro4Info = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Otro4</h1>'+
	'<div id="bodyContent">'+
	'<iframe width="200" height="100" src="//www.youtube.com/embed/mfjqLmD6Li8?list=PL5M61thZGgm2T7Cqe2FMj1m329b_wGvct" frameborder="0" allowfullscreen></iframe>'+
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

var otro5Info = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Otro5</h1>'+
	'<div id="bodyContent">'+
	'<iframe width="200" height="100" src="//www.youtube.com/embed/mfjqLmD6Li8?list=PL5M61thZGgm2T7Cqe2FMj1m329b_wGvct" frameborder="0" allowfullscreen></iframe>'+
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

var mossetWindow = new google.maps.InfoWindow({
	content: mossetInfo,
	maxWidth:220
});
var casaWindow = new google.maps.InfoWindow({
	content: casaInfo,
	maxWidth:220
});
var otroWindow = new google.maps.InfoWindow({
	content: otroInfo,
	maxWidth:220
});
var otro2Window = new google.maps.InfoWindow({
	content: otro2Info,
	maxWidth:220
});
var otro3Window = new google.maps.InfoWindow({
	content: otro3Info,
	maxWidth:220
});
var otro4Window = new google.maps.InfoWindow({
	content: otro4Info,
	maxWidth:220
});
var otro5Window = new google.maps.InfoWindow({
	content: otro5Info,
	maxWidth:220
});

google.maps.event.addListener(mosset, 'click', function() {

	mossetWindow.open(map,mosset);

});
google.maps.event.addListener(casa, 'click', function() {

	casaWindow.open(map,casa);

});
google.maps.event.addListener(otro, 'click', function() {

	otroWindow.open(map,otro);

});
google.maps.event.addListener(otro2, 'click', function() {

	otro2Window.open(map,otro2);

});
google.maps.event.addListener(otro3, 'click', function() {

	otro3Window.open(map,otro3);

});
google.maps.event.addListener(otro4, 'click', function() {

	otro4Window.open(map,otro4);

});
google.maps.event.addListener(otro5, 'click', function() {

	otro5Window.open(map,otro5);

});


		

