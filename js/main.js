var token = "pk.eyJ1IjoiYmFyZG9uIiwiYSI6Ildqa244YmsifQ.l9SDZtn80obOkqlXzBEP7Q";
var map;
var mapaNormal = L.tileLayer('http://api.tiles.mapbox.com/v4/bardon.ipgdabm2/{z}/{x}/{y}.png?access_token='+token);
var mapaSat = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png');
var mapaGris = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png');
var mapaTopo =  L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png');

$(document).on('ready',function (){



	map = L.map('mapa', {
	    center: [46.316584, 2.416992],
	    minZoom: 1,
	    maxZoom:18,
	    zoom: 4,
	    scrollWheelZoom: true,
	    zoomControl: false
	});

	map.addLayer(mapaTopo);

	$('#mapa').hide();

	$('#modalStart img').click(function(){
		$('#modalStart').fadeOut(300,function(){
			$('#mapa').fadeIn(300)
		})
	});

	lc = L.control.locate({
		follow: true
	}).addTo(map);

	map
		.on('startfollowing', function() {
		    map.on('dragstart', lc.stopFollowing);
		})
		.on('stopfollowing', function() {
		    map.off('dragstart', lc.stopFollowing);
		})
	$('#btnCerrar').on('click', function(){
		$('#modalNotas').fadeToggle();
		$('.btnMain').fadeIn();
	});
})




