var BulletObject = function(x,y,z,anglex,angley,anglez, speed)
{
	this.Size = 20;
	this.Speed = speed;
	
	this.X = x;
	this.Y = y; //place it on the ground (ground's y = 0)
	this.Z = z;
	
	this.ObjectType = "Bullet";
	
	this.AngleX = anglex;
	this.AngleY = angley;
	this.AngleZ = anglez;
	
	this.Height = this.Size;
	this.WidthX = this.Size;
	this.WidthZ = this.Size;
	
	this.Destroyed = false;
	this.DMG = 1;
	
	this.CurrentLifeSpan = 0;
	this.LifeSpan = 100;
	
	this.Texture = new THREE.TextureLoader().load( 'crate2.gif' );
	this.Geometry = new THREE.BoxBufferGeometry( this.WidthX, this.Height, this.WidthZ);
	this.Material = new THREE.MeshBasicMaterial( {map: this.Texture} );
	this.Mesh = new THREE.Mesh( this.Geometry, this.Material); //controls all the movement and is what get renders
	
	this.RigidBody = new RigidBody3D(this.Height, this.WidthX,this.WidthZ, x, y, z, this.AngleX, this.AngleY, this.AngleZ);
	this.RigidBody.IsKinematic = true;
	
	this.update = function()
	{
		this.UpdateMovement();
	
		this.UpdateOnCollision();
	
		this.CurrentLifeSpan += 1;
	
		ApplyBasicPhysics(this);
		
		UpdateRigidBodies(this);
		
		this.UpdateMeshes();
	}
	
	this.UpdateOnCollision = function() //example of what bullets can do
	{
		if (this.RigidBody.Collided == true && this.RigidBody.CollidedWith.ObjectType == "Drone")
		{
			this.RigidBody.CollidedWith.Hp -= this.DMG;
			this.RigidBody.CollidedWith.Hit = true;
			this.Destroyed = true;
		}
	}
	
	this.UpdateMovement = function ()
	{
		VectorXYZ = GetVector3D(this.RigidBody.AngleY, this.RigidBody.AngleX, 20);
		
		//check every 20 pixels (1/5 of speed) whether bullet has collided 
		for (var i = 0; i<this.Speed/20; i++)
		{
			this.RigidBody.X += VectorXYZ[0];
			this.RigidBody.Z += VectorXYZ[1];
			this.RigidBody.Y += VectorXYZ[2];
			
			ApplyCollisions(this);
			this.UpdateOnCollision();
		}
		//this gets the bullet to travel the same distance but checks for collisions inbetween jumps
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
	}
	
	this.UpdateMeshes();
}