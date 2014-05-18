var map;
var user;
var nickname;
var mapaNormal = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var mapaSat = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png');
var mapaGris = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}');
var mapaTopo =  L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png');

$(document).on('ready',function (){
	//nickname = window.prompt('Posa´t nom');
	map = L.map('mapa', {
	    center: [32.101189, 13.007812],
	    minZoom: 1,
	    maxZoom:18,
	    zoom: 2,
	    scrollWheelZoom: false,
	    zoomControl: false
	})

	map.addLayer(mapaTopo);
	// map.locate({
	// 	enableHighAccuracy: true,
	// 	setView: true
	// })
	map.on('locationfound', onLocationFound);

	function onLocationFound(data){
		console.log(data);
		var position = data.latlng;
		user = L.circleMarker([position.lat,position.lng]);
		user.bindPopup('@ '+nickname);
		map.addLayer(user);
		map.on('dragstart', function(){
			map.stopLocate();
			map.removeLayer(user);
			console.log('locate is off')
		})
	}

	$('#posicio').on('click',function(){
		map.locate({
			enableHighAccuracy: true,
			setView: true,
			watch: true
		})
	})
	$('#joc').on('click',function(){
		map.addLayer(mapaGris);
		map.removeLayer(mapaSat);
		map.removeLayer(mapaTopo)
	})
	$('#mapaSat').on('click',function(){
		map.addLayer(mapaSat)
		map.removeLayer(mapaGris);
		map.removeLayer(mapaTopo)
	})

})







