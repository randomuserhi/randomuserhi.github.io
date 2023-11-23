var DroneObject = function(x,y,z,d,interval)
{
	this.X = x;
	this.Y = y; //place it on the ground (ground's y = 0)
	this.Z = z;
	
	this.OrX = x;
	this.OrY = y;
	this.OrZ = z;
	
	this.Hp = 10;
	this.Sight = 10000;
	this.ExtendedSight = 20000;
	this.See = false;
	this.Hit = false;
	this.Hit_interval = 500;
	this.Hit_cu_interval = 0;
	
	this.DesiredHeight = d;
	this.Thrust = 0.03;
	this.MaxSpeed = 0.07;
	this.Speed = 3;
	this.Reset = false;
	
	this.movementInterval = 0;
	this.movementIntervalMax = interval;
	this.moveX = 0;
	this.moveY = 0;
	
	this.ObjectType = "Drone";
	
	this.AngleX = 0;
	this.AngleY = 0;
	this.AngleZ = 0;
	
	this.Height = 30;
	this.WidthX = 60;
	this.WidthZ = 60;
	
	this.Texture = new THREE.TextureLoader().load( 'crate2.gif' );
	this.Geometry = new THREE.BoxBufferGeometry( this.WidthX, this.Height, this.WidthZ);
	this.Material = new THREE.MeshBasicMaterial( {map: this.Texture} );
	this.Mesh = new THREE.Mesh( this.Geometry, this.Material); //controls all the movement and is what get renders
	
	this.RigidBody = new RigidBody3D(this.Height, this.WidthX, this.WidthZ, this.X, this.Y, this.Z, this.AngleX, this.AngleY, this.AngleZ);
	this.RigidBody.IsKinematic = true;
	
	this.update = function()
	{
		this.CheckSight();
		this.FlightAI();

		ApplyBasicPhysics(this);
		
		UpdateRigidBodies(this);
		
		this.UpdateMeshes();
	}
	
	this.CheckSight = function()
	{
		if ((this.Hit == true))
		{
			this.Sight = this.ExtendedSight;
			this.Hit_cu_interval ++;
			if ((this.Hit_cu_interval > this.Hit_interval))
			{
				this.Hit = false;
				this.Hit_cu_interval = 0;
			}
			else
			{
				this.Hit = true;
			}
		}
		else
		{
			this.Sight = 1000;
		}
	
		var RigidCollisionObject = this;
			
		var RigidObject = Player;
		
		var x = RigidObject.RigidBody.X;
		var y = RigidObject.RigidBody.Y;
		var z = RigidObject.RigidBody.Z;
		
		var Height = RigidObject.RigidBody.Height;
		var Width = RigidObject.RigidBody.WidthX;
		var Widthz = RigidObject.RigidBody.WidthZ;
			
		var x2 = RigidCollisionObject.RigidBody.X;
		var y2 = RigidCollisionObject.RigidBody.Y;
		var z2 = RigidCollisionObject.RigidBody.Z;
		
		var Height2 = RigidCollisionObject.RigidBody.Height + this.Sight;
		var Width2 = RigidCollisionObject.RigidBody.WidthX + this.Sight;
		var Width3 = RigidCollisionObject.RigidBody.WidthZ + this.Sight;
	
		if((Math.abs(x - x2) < Width/2 + Width2/2) && (Math.abs(y - y2) < Height/2 + Height2/2) && (Math.abs(z - z2) < Widthz/2 + Width3/2))
		{
			this.See = true;
		}
		else
		{
			this.See = false;
		}
	}
	
	this.FlightAI = function()
	{	
		//get to height
		if (this.RigidBody.Y < this.DesiredHeight)
		{
			if (this.Reset == false)
			{
				this.RigidBody.AccY = 0;
				this.RigidBody.VelocityY = 1.5;
				this.Reset = true;
			}
			this.RigidBody.AccY += -this.Thrust;
			if (this.RigidBody.AccY < -this.MaxSpeed)
			{
				this.RigidBody.AccY = -this.MaxSpeed;
			}
		}
		else
		{
			if (this.Reset == true)
			{
				this.RigidBody.AccY = 0;
				this.RigidBody.VelocityY = -1.5;
				this.Reset = false;
			}
		}
		
		//follow player
		if (this.See == true)
		{
			this.DesiredHeight = Player.RigidBody.Y;
		
			var XVector = this.RigidBody.X - Player.RigidBody.X;
			var YVector = this.RigidBody.Z - Player.RigidBody.Z;
			
			if (YVector <= 0)
			{
				var angle = Math.atan(XVector/YVector) + Math.PI;
			}
			else if (YVector > 0)
			{
				var angle = Math.atan(XVector/YVector);
			}
			
			if (angle < 0)
			{
				angle += Math.PI*2;
			}
			
			var difference1 = this.RigidBody.AngleY - angle;
			
			if (difference1 >= 4 || difference1 <= -4)
			{
				this.RigidBody.AngleY = angle;
			}
			
			if (this.RigidBody.AngleY > angle)
			{
				this.RigidBody.AngleY -= 0.05;
			}
			else if (this.RigidBody.AngleY < angle)
			{
				this.RigidBody.AngleY += 0.05;
			}
			
			var Vector2d = GetVector2D(this.AngleY, this.Speed);
			this.RigidBody.X += Vector2d[0];
			this.RigidBody.Z += Vector2d[1];
		}
		else
		{
			//move interval
			if (this.movementInterval < this.movementIntervalMax)
			{
				this.movementInterval ++;
			}
			else
			{
				this.movementInterval = 0;
				this.moveX = Math.floor(Math.random() * (100 - -100) + -100);
				this.moveY = Math.floor(Math.random() * (100 - -100) + -100);
				this.DesiredHeight = Math.floor(Math.random() * (500 - 1) + 1);
			}
			
			if (this.moveX > 0)
			{
				this.moveX -= 1;
				this.RigidBody.X -= this.Speed;
			}
			else if (this.moveX < 0)
			{
				this.moveX += 1;
				this.RigidBody.X += this.Speed;
			}
			
			if (this.moveY > 0)
			{
				this.moveY -= 1;
				this.RigidBody.Z -= this.Speed;
			}
			else if (this.moveY < 0)
			{
				this.moveY += 1;
				this.RigidBody.Z += this.Speed;
			}
		}
	}
	
	this.ResetPos = function () //reset positions to original
	{
		this.RigidBody.X = this.OrX;
		this.RigidBody.Y = this.OrY;
		this.RigidBody.Z = this.OrZ;
		
		console.log(this.RigidBody.X + "|" + this.RigidBody.Y + "|" + this.RigidBody.Z)
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