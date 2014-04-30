var map;
var mapaNormal = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}');
var mapaNegro = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png');
var mapaGris = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roadsg/x={x}&y={y}&z={z}');
var mapaTopo =  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}');

function init(){
	map = L.map('mapa', {
	    center: [32.101189, 13.007812],
	    minZoom: 2,
	    maxZoom:11,
	    zoom: 11,
	    scrollWheelZoom: false
	})

	map.addLayer(mapaNormal);
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