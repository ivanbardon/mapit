var map;
var user;
var mapaNormal = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var mapaNegro = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png');
var mapaGris = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}');
var mapaTopo =  L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png');

$(document).on('ready',function (){
	map = L.map('mapa', {
	    center: [32.101189, 13.007812],
	    minZoom: 1,
	    maxZoom:18,
	    zoom: 2,
	    scrollWheelZoom: false
	})

	map.addLayer(mapaTopo);
	map.locate({
		watch:true,
		enableHighAccuracy: true,
		setView: true
	})
	map.on('locationfound', onLocationFound);

	function onLocationFound(data){
		console.log(data);
		var position = data.latlng;
		user = L.marker([position.lat,position.lng]);
		map.addLayer(user);
		map.on('dragstart', function(){
			map.stopLocate();
			map.removeLayer(user);
			console.log('locate is off')
		})
	}

	function refreshLocation(){
		map.removeLayer(user);
		map.locate({
			enableHighAccuracy: true,
			setView: true
		})
	}
	$('#elmas').on('click',function(){
		map.addLayer(mapaGris);
		map.removeLayer(mapaTopo)
	})
})
function getPosition(){
	map.locate({
		enableHighAccuracy: true,
		setView: true
	})
}








