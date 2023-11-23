var BlockObject = function(x,y,z) //holder for external variables of a mesh
{
	this.Size = 60;
	
	this.X = x;
	this.Y = z; //place it on the ground (ground's y = 0)
	this.Z = y;
	
	this.AngleX = 0;
	this.AngleY = 0;
	this.AngleZ = 0;
	
	this.ObjectType = "Block";
	
	this.Height = this.Size;
	this.WidthX = this.Size;
	this.WidthZ = this.Size;
	
	this.Texture = new THREE.TextureLoader().load( 'crate.gif' );
	this.Geometry = new THREE.BoxBufferGeometry( this.WidthX, this.Height, this.WidthZ);
	this.Material = new THREE.MeshBasicMaterial( {map: this.Texture} );
	this.Mesh = new THREE.Mesh( this.Geometry, this.Material); //controls all the movement and is what get renders
	
	this.RigidBody = new RigidBody3D(this.Height, this.WidthX,this.WidthZ, this.X, this.Y, this.Z, this.AngleX, this.AngleY, this.AngleZ);
	this.RigidBody.IsKinematic = false;
	
	this.update = function()
	{
		//ApplyBasicPhysics(this);
		ApplyCollisions(this);
		
		UpdateRigidBodies(this);
		
		this.UpdateMeshes();
	}
	
	this.UpdateMeshes = function()
	{
		if (this.RigidBody.AngleY > Math.PI*2)
		{
			this.RigidBody.AngleY = 0;
		}
		else if (this.RigidBody.AngleY < 0)
		{
			this.RigidBody.AngleY = Math.PI*2;
		}
	
		this.Mesh.position.y = this.RigidBody.Y;
		this.Mesh.position.x = this.RigidBody.X;
		this.Mesh.position.z = this.RigidBody.Z;
		
		this.Mesh.rotation.x = this.RigidBody.AngleX;
		this.Mesh.rotation.y = this.RigidBody.AngleY;
		this.Mesh.rotation.z = this.RigidBody.AngleZ;
	}
	
	this.UpdateMeshes();
}