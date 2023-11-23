var SmallBlockObject = function(x,y,z,anglex,angley,anglez)
{
	this.Size = 20;
	
	this.X = x;
	this.Y = z; //place it on the ground (ground's y = 0)
	this.Z = y;
	
	this.ObjectType = "Block";
	
	this.AngleX = anglex;
	this.AngleY = angley;
	this.AngleZ = anglez;
	
	this.Height = this.Size;
	this.WidthX = this.Size;
	this.WidthZ = this.Size;
	
	this.Texture = new THREE.TextureLoader().load( 'crate3.gif' );
	this.Geometry = new THREE.BoxBufferGeometry( this.WidthX, this.Height, this.WidthZ);
	this.Material = new THREE.MeshBasicMaterial( {map: this.Texture} );
	this.Mesh = new THREE.Mesh( this.Geometry, this.Material); //controls all the movement and is what get renders
	
	this.RigidBody = new RigidBody3D(this.Height,this.WidthX,this.WidthZ, this.X, this.Y, this.Z, this.AngleX, this.AngleY, this.AngleZ);
	this.RigidBody.IsKinematic = true;
	
	this.update = function()
	{
		//ApplyBasicPhysics(this);
		ApplyCollisions(this);
		
		UpdateRigidBodies(this);
		
		this.UpdateMeshes();
	}
	
	this.UpdateMeshes = function()
	{
		this.Mesh.position.y = this.RigidBody.Y;
		this.Mesh.position.x = this.RigidBody.X;
		this.Mesh.position.z = this.RigidBody.Z;
		
		this.Mesh.rotation.x = this.RigidBody.AngleX;
		this.Mesh.rotation.y = this.RigidBody.AngleY;
		this.Mesh.rotation.z = this.RigidBody.AngleZ;
	}
	
	this.UpdateMeshes();
}