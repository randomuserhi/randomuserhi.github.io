var PlayerObject = function()
{
	//Stats
	this.Speed = 5;
	this.SprintSpeed = 7;
	this.IsSprinting = false;
	this.JumpHeight = -7; //-7
	
	this.ObjectType = "Player";
	
	this.Zoom = 80;
	
	//FOV EFFECTS
	this.FOVValue = 100;
	this.FOV = this.FOVValue;
	this.GradualEffect = 0;
	this.GradualEffectMax = 20;
	
	//Geometry and Math
	this.Height = 200;
	this.WidthX =70;
	this.WidthZ = 70;
	this.RenderDistance = 1700;
	
	//keyboard controls
	this.left = false;
	this.right = false;
	this.up = false;
	this.down = false;
	this.click = false;
	this.jump = false;
	this.isJumping = true;
	this.ismoveing = false;
	
	this.X = 0;
	this.Y = 0;
	this.Z = 0;
	
	this.AngleX = 0;
	this.AngleY = 0;
	this.AngleZ = 0;

	this.Camera = new THREE.PerspectiveCamera( this.FOV, window.innerWidth / window.innerHeight, 1, this.RenderDistance);
	this.Camera.rotation.order = "YXZ";
	
	this.RigidBody = new RigidBody3D(this.Height, this.WidthX,this.WidthZ, this.X, this.Y, this.Z, this.AngleX, this.AngleY, this.AngleZ);
	this.RigidBody.IsKinematic = true;
	
	this.Cooldown = 10;
	this.CurrentCoolDown = 0;
	
	this.update = function()
	{	
		this.KeyboardControls(); //update controls
		
		ApplyBasicPhysics(this); //update Physics
		this.CollisionUpdate(); //update collisions
		UpdateRigidBodies(this); //update this Rigid body
		
		this.ShootUpdate(); //update shooting
		
		this.CameraFovUpdate(); //update camera FOV
		this.UpdateMeshes(); //update Meshes
		this.Camera.updateProjectionMatrix(); //update camera
	}
	
	this.ShootUpdate = function()
	{
		if (this.click == true)
		{
			if (this.Cooldown <= this.CurrentCoolDown)
			{
				createBullet(this.RigidBody.X,this.RigidBody.Y,this.RigidBody.Z,this.RigidBody.AngleX,this.RigidBody.AngleY,this.RigidBody.AngleZ,100);
				this.CurrentCoolDown = 0;
			}
		}
		this.CurrentCoolDown +=  1;
	}
	
	this.CollisionUpdate = function()
	{	
		//Check if Collided with a block
		if (this.RigidBody.Collided == true && this.RigidBody.CollidedWith.ObjectType == "Block")
		{
			//Check if Player is standing on block
			if ((this.RigidBody.Y-this.RigidBody.Height/2) >= (this.RigidBody.CollidedWith.RigidBody.Y - 15))
			{
				this.isJumping = true;
				this.RigidBody.Y = this.RigidBody.CollidedWith.RigidBody.Y + this.RigidBody.CollidedWith.RigidBody.Height/2 + this.RigidBody.Height/2;
				this.RigidBody.VelocityY = 0;
				this.RigidBody.AccY = 0;
			}
		}
		else if (this.RigidBody.CollidedWithFloor == true && this.RigidBody.CollidedWith.ObjectType == "Floor") //Check for win
		{
			if (this.RigidBody.CollidedWith.Z >= 8000)
			{
				alert("WIN")
				this.RigidBody.Z = 0;
			}
		}
	}
	
	this.KeyboardControls = function()
	{
		if (this.left == true || this.right == true || this.down == true || this.up == true)
		{
			this.ismoveing = true;
			//friction
			if (this.RigidBody.VelocityX > 0)
			{
				this.RigidBody.VelocityX -= this.Speed/4;
				if (this.RigidBody.VelocityX > 0 && this.RigidBody.VelocityX < 10)
				{
					this.RigidBody.VelocityX = 0;
				}
			}
			else if (this.RigidBody.VelocityX < 0)
			{
				this.RigidBody.VelocityX += this.Speed/4;
				if (this.RigidBody.VelocityX < 0 && this.RigidBody.VelocityX > -10)
				{
					this.RigidBody.VelocityX = 0;
				}
			}
			
			if (this.RigidBody.VelocityZ > 0)
			{
				this.RigidBody.VelocityZ -= this.Speed/4;
				if (this.RigidBody.VelocityZ > 0 && this.RigidBody.VelocityZ < 10)
				{
					this.RigidBody.VelocityZ = 0;
				}
			}
			else if (this.RigidBody.VelocityZ < 0)
			{
				this.RigidBody.VelocityZ += this.Speed/4;
				if (this.RigidBody.VelocityZ < 0 && this.RigidBody.VelocityZ > 10)
				{
					this.RigidBody.VelocityZ = 0;
				}
			}
		}
		else
		{
			this.ismoveing = false;
		}
	
		if (this.left == true)
		{
			var Vector2d = GetVector2D(this.AngleY + (Math.PI/2), this.Speed); //pretend facing left
			this.RigidBody.X += Vector2d[0];
			this.RigidBody.Z += Vector2d[1];
		}
		else if (this.right == true)
		{
			var Vector2d = GetVector2D(this.AngleY - (Math.PI/2), this.Speed); //pretend facing right
			this.RigidBody.X += Vector2d[0];
			this.RigidBody.Z += Vector2d[1];
		}
		
		if (this.jump == true && this.isJumping == true)
		{
			this.RigidBody.VelocityY = this.JumpHeight;
			if (this.up == true)
			{
				if (this.RigidBody.Collided == true)
				{
					var Vector2d = GetVector2D(this.AngleY, 0);
				}
				else
				{
					var Vector2d = GetVector2D(this.AngleY, 10);
				}
				this.RigidBody.X += Vector2d[0];
				this.RigidBody.Z += Vector2d[1];
			}
			this.isJumping = false;
		}
		
		if (this.up == true)
		{
			if (this.IsSprinting == false)
			{
				var Vector2d = GetVector2D(this.AngleY, this.Speed);
			}
			else
			{
				var Vector2d = GetVector2D(this.AngleY, this.SprintSpeed);
			}
			this.RigidBody.X += Vector2d[0];
			this.RigidBody.Z += Vector2d[1];
		}
		else if (this.down == true)
		{
			var Vector2d = GetVector2D(this.AngleY, this.Speed);
			this.RigidBody.X -= Vector2d[0];
			this.RigidBody.Z -= Vector2d[1];
		}
	}
	
	this.UpdateMeshes = function()
	{
		//check AngleY
		if (this.RigidBody.AngleY < 0)
		{
			this.RigidBody.AngleY = Math.PI*2;
		}
		else if (this.AngleY > (Math.PI*2))
		{
			this.RigidBody.AngleY = 0;
		}
	
		this.Camera.position.x = this.RigidBody.X;
		this.Camera.position.z = this.RigidBody.Z;
		this.Camera.position.y = this.RigidBody.Y;
		
		this.Camera.rotation.x = this.RigidBody.AngleX;
		this.Camera.rotation.y = this.RigidBody.AngleY;
		this.Camera.rotation.z = this.RigidBody.AngleZ;
	}
	
	this.CameraFovUpdate = function ()
	{
		if (this.ismoveing == true)
		{
			if (this.IsSprinting == true)
			{
				if (this.GradualEffect < this.GradualEffectMax)
				{
					this.GradualEffect += 2;
				}
				this.Camera.fov = this.FOV + this.GradualEffect; //add run effect
			}
			else
			{
				if (this.GradualEffect > 0)
				{
					this.GradualEffect -= 2;
				}
				this.Camera.fov = this.FOV + this.GradualEffect; //add run effect
			}
		}
		else
		{
			if (this.GradualEffect > 0)
			{
				this.GradualEffect -= 2;
			}
			this.Camera.fov = this.FOV + this.GradualEffect; //add run effect
		}
	}
	
	this.UpdateMeshes();
}