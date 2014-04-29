var map;
var mapaNegro = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png');
var mapaNormal = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'});
function init(){
	map = L.map('mapa', {
	    center: [32.101189, 13.007812],
	    zoom: 2,
	    scrollWheelZoom: false
	})

	map.addLayer(mapaNegro);
	map.locate({
		watch: true,
		enableHighAccuracy: true,
		setView: true
	})
	map.on('dragstart', function(){
		map.stopLocate();
	})
}

$(document).on('ready',init);