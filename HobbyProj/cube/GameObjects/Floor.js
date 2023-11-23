var FloorObject = function (x, y, z, width, height)
{
	this.X = x;
	this.Y = y;
	this.Z = z;
	
	this.ObjectType = "Floor";
	
	this.Width = width;
	this.Height = height;
	
	var geometry = new THREE.PlaneBufferGeometry( this.Width, this.Height, 5, 5);
	var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
	this.Plane = new THREE.Mesh( geometry, material );
	
	this.Plane.position.x = this.X;
	this.Plane.position.y = this.Y;
	this.Plane.position.z = this.Z;
}