var map;
var mapaNormal = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var mapaSat = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png');
var mapaGris = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png');
var mapaTopo =  L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png');

$(document).on('ready',function (){
	map = L.map('mapa', {
	    center: [46.195042, 4.833984],
	    minZoom: 1,
	    maxZoom:18,
	    zoom: 3,
	    scrollWheelZoom: true,
	    zoomControl: false
	})

	map.addLayer(mapaTopo);

	lc = L.control.locate({
		follow: true
	}).addTo(map);

	map.on('startfollowing', function() {
	    map.on('dragstart', lc.stopFollowing);
	}).on('stopfollowing', function() {
	    map.off('dragstart', lc.stopFollowing);
	})
	$('#btnCerrar').on('click', function(){
		$('#menuNotas').fadeToggle();
	})
})





