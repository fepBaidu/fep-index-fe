var container;
var camera, scene, renderer;
var group;
var mouseX = 0, mouseY = 0;

var windowHalfX;
var windowHalfY;

function init(w, h, imgSrc) {

	windowHalfX = w / 2;
	windowHalfY = h / 2;

	container = document.getElementById( 'sphere-container' );

	camera = new THREE.PerspectiveCamera( 60, w / h, 1, 2000 );
	camera.position.z = 500;

	scene = new THREE.Scene();

	group = new THREE.Group();
	scene.add( group );

	// earth

	var loader = new THREE.TextureLoader();
	loader.load( imgSrc, function ( texture ) {

		var geometry = new THREE.SphereGeometry( 200, 20, 20 );

		var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
		var mesh = new THREE.Mesh( geometry, material );
		group.add( mesh );

	} );

	// shadow

	var canvas = document.createElement( 'canvas' );
	canvas.width = 128;
	canvas.height = 128;

	var context = canvas.getContext( '2d' );
	var gradient = context.createRadialGradient(
		canvas.width / 2,
		canvas.height / 2,
		0,
		canvas.width / 2,
		canvas.height / 2,
		canvas.width / 2
	);
	gradient.addColorStop( 0.1, 'rgba(210,210,210,1)' );
	gradient.addColorStop( 1, 'rgba(255,255,255,1)' );

	context.fillStyle = gradient;
	context.fillRect( 0, 0, canvas.width, canvas.height );

	var texture = new THREE.CanvasTexture( canvas );

	var geometry = new THREE.PlaneBufferGeometry( 300, 300, 3, 3 );
	var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.y = - 250;
	mesh.rotation.x = - Math.PI / 2;
	group.add( mesh );

	renderer = new THREE.CanvasRenderer();
	renderer.setClearColor( 0xffffff );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize(w, h);
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	//

	window.addEventListener( 'resize', function(e){onWindowResize(e, w, h)}, false );

}

function onWindowResize(e, w, h) {

	windowHalfX = w / 2;
	windowHalfY = h / 2;

	camera.aspect = w / h;
	camera.updateProjectionMatrix();

	renderer.setSize(w, h);

}

function onDocumentMouseMove( event ) {
	if(event.clientX >= container.offsetLeft && event.clientX <= (container.offsetLeft + 200) && event.clientY >= 0 && event.clientY <= 100){
		mouseX = ( event.clientX - windowHalfX );
		mouseY = ( event.clientY - windowHalfY );
	}

}

//

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	camera.position.x += ( mouseX - camera.position.x ) * 1;
	camera.position.y += ( - mouseY - camera.position.y ) * 1;

	camera.lookAt( scene.position );

	group.rotation.y -= 0.005;

	renderer.render( scene, camera );

}

module.exports = {
	init : init,
	animate : animate
}