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
	    center: [46.195042, 4.833984],
	    minZoom: 1,
	    maxZoom:18,
	    zoom: 3,
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

	$('#locationBtn').on('click',localitzar)

	$('#menuBtn').on('click',menuBtn)

	$('#menuBtnOff').on('click',menuBtnOff)
	

})
function menuBtnOff(){
	$('#menu').animate({width:'toggle'},'fast');
	$('#menuBtn').fadeIn();
	$('#locationBtn').fadeIn()
}
function menuBtn(){
	$('#menu').animate({width:'toggle'},'fast');
	$('#menuBtn').fadeOut(180);
	$('#locationBtn').fadeOut(180)
}
function localitzar(){
	map.locate({
		enableHighAccuracy: true,
		setView: true,
		watch: true
	})
}





