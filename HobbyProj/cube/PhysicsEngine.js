var RigidBodies = [];

function CheckRigidBodies()
{
	RigidBodies = [];
	RigidBodies.push(Player);
	for (var i = 0;i<Blocks.length;i++)
	{
		RigidBodies.push(Blocks[i]);
	}
	for (var i = 0; i < SmallBlocks.length; i++)
	{
		RigidBodies.push(SmallBlocks[i]);
	}
	for (var i = 0; i<Bullets.length;i++)
	{
		RigidBodies.push(Bullets[i]);
	}
	
	RigidBodies.sort(function(a,b){return (a.RigidBody.Y + a.RigidBody.Height/2)-(b.RigidBody.Y + b.RigidBody.Height/2)});
	
	for (var i = 0; i<Drones.length; i++)
	{
		RigidBodies.push(Drones[i]);
	}
}

function UpdateRigidBodies(object)
{
	object.X = object.RigidBody.X;
	object.Y = object.RigidBody.Y;
	object.X = object.RigidBody.Z;
	
	object.AngleX = object.RigidBody.AngleX;
	object.AngleY = object.RigidBody.AngleY;
	object.AngleZ = object.RigidBody.AngleZ;
}

function GetVector2D(Angle, Speed) //returns 2d Vector to go forwards
{	
	var speedVel = 0;
	var xvelocity = -Math.sin(Angle)*Speed; //treat vector as 2d
	var yvelocity = -Math.cos(Angle)*Speed; //treat vector as 2d
	var xy = [xvelocity, yvelocity];	
	return xy;
}

function GetVector3D(AngleY, AngleX, Speed) //TODO: calculate Vector 3d properly (velocityY is correct, XZ are wrong)
{
	var velocityXZ = GetVector2D(AngleY, Speed);
	
	var HypoteneuseXZ = Math.sqrt(velocityXZ[0]*velocityXZ[0] + velocityXZ[1]*velocityXZ[1]);
	
	var velocityY = Math.sin(AngleX)*HypoteneuseXZ;
	
	var velocityXYZ = [velocityXZ[0],velocityXZ[1],velocityY]
	
	return velocityXYZ;
}

function ApplyGravity(object)
{	
	//Gravity
	object.RigidBody.CollidedWithFloor = false;
	object.RigidBody.AccY += object.RigidBody.Gravity;
	if (object.RigidBody.AccY > Settings.TerminalVelocity)
	{
		object.RigidBody.AccY = Settings.TerminalVelocity;
	}
	object.RigidBody.VelocityY += object.RigidBody.AccY;
	try
	{	
		if (object.RigidBody.Collided == false)
		{
			object.isJumping = false;
		}
	}
	catch (err)
	{
	}
	
	object.RigidBody.Y -= object.RigidBody.VelocityY;
	
	//check for floor
	for (var i = 0; i < Floor.length; i++)
	{
		if ((object.RigidBody.Y <= Floor[i].Y + object.RigidBody.Height/2 && object.RigidBody.Y >= Floor[i].Y - 15) && object.RigidBody.X > Floor[i].X - Floor[i].Width/2 && object.RigidBody.X < Floor[i].X + Floor[i].Width/2 && object.RigidBody.Z < Floor[i].Z + Floor[i].Height/2 && object.RigidBody.Z > Floor[i].Z + -Floor[i].Height/2)
		{
			object.RigidBody.CollidedWithFloor = true;
			object.RigidBody.CollidedWith = Floor[i];
			if (object.RigidBody.IsKinematic == true)
			{
				object.RigidBody.Y = Floor[i].Y + object.RigidBody.Height/2;
				object.RigidBody.VelocityY = 0;
				object.RigidBody.AccY = 0;
				try
				{	
					object.isJumping = true;
				}
				catch (err)
				{
					
				}
			}
			else
			{
				object.RigidBody.Y = Floor[i].Y + object.RigidBody.Height/2;
				object.RigidBody.VelocityY = 0;
				object.RigidBody.AccY = 0;
				try
				{	
					object.isJumping = true;
				}
				catch (err)
				{
					
				}
			}
			
			i = Floor.length;
		}
	}
}

function ApplyCollisions(object)
{
	var RigidObject = object;
	var x = RigidObject.RigidBody.X;
	var y = RigidObject.RigidBody.Y;
	var z = RigidObject.RigidBody.Z;
	
	var Height = RigidObject.RigidBody.Height;
	var Width = RigidObject.RigidBody.WidthX;
	var Widthz = RigidObject.RigidBody.WidthZ;
	
	for (var q = 0; q < RigidBodies.length; q++)
	{
		if (object != RigidBodies[q])
		{
			var RigidCollisionObject = RigidBodies[q];
			
			var x2 = RigidCollisionObject.RigidBody.X;
			var y2 = RigidCollisionObject.RigidBody.Y;
			var z2 = RigidCollisionObject.RigidBody.Z;
			
			var Height2 = RigidCollisionObject.RigidBody.Height;
			var Width2 = RigidCollisionObject.RigidBody.WidthX;
			var Width3 = RigidCollisionObject.RigidBody.WidthZ;
			
			if((Math.abs(x - x2) < Width/2 + Width2/2) && (Math.abs(y - y2) < Height/2 + Height2/2) && (Math.abs(z - z2) < Widthz/2 + Width3/2))
			{
				if (object.RigidBody.IsKinematic == true)
				{	
					q = RigidBodies.length;
				}
				if (RigidCollisionObject.ObjectType == "Drone")
				{
					q = RigidBodies.length;
				}
				object.RigidBody.Collided = true;
				object.RigidBody.CollidedWith = RigidCollisionObject;
			}
			else if ((Math.abs(x - x2) < Width/2 + Width2/2) && (Math.abs(y - y2) < Height/2 + Height2/2) && (Math.abs(z - z2) < Widthz/2 + Width3/2))
			{
				//TODO: ADD SIDE COLLISIONS RELATIVE TO WALL
			}
			else
			{
				object.RigidBody.Collided = false;
				object.RigidBody.OriginXYZ = [object.X, object.Y, object.Z]
			}
		}
	}
}

function ApplyForcesXZ(object)
{
	object.RigidBody.X += object.RigidBody.VelocityX;
	object.RigidBody.Z += object.RigidBody.VelocityZ;
	
	//friction
	if (object.RigidBody.Collided == false)
	{
		if (object.RigidBody.VelocityX > 0)
		{
			object.RigidBody.VelocityX -= Settings.Friction;
			if (object.RigidBody.VelocityX > 0 && object.RigidBody.VelocityX < 10)
			{
				object.RigidBody.VelocityX = 0;
			}
		}
		else if (object.RigidBody.VelocityX < 0)
		{
			object.RigidBody.VelocityX += Settings.Friction;
			if (object.RigidBody.VelocityX < 0 && object.RigidBody.VelocityX > -10)
			{
				object.RigidBody.VelocityX = 0;
			}
		}
		
		if (object.RigidBody.VelocityZ > 0)
		{
			object.RigidBody.VelocityZ -= Settings.Friction;
			if (object.RigidBody.VelocityZ > 0 && object.RigidBody.VelocityZ < 10)
			{
				object.RigidBody.VelocityZ = 0;
			}
		}
		else if (object.RigidBody.VelocityZ < 0)
		{
			object.RigidBody.VelocityZ += Settings.Friction;
			if (object.RigidBody.VelocityZ < 0 && object.RigidBody.VelocityZ > -10)
			{
				object.RigidBody.VelocityZ = 0;
			}
		}
	}
	else
	{
		if (object.RigidBody.VelocityX > 0)
		{
			object.RigidBody.VelocityX -= Settings.Friction*2;
			if (object.RigidBody.VelocityX > 0 && object.RigidBody.VelocityX < 10)
			{
				object.RigidBody.VelocityX = 0;
			}
		}
		else if (object.RigidBody.VelocityX < 0)
		{
			object.RigidBody.VelocityX += Settings.Friction*2;
			if (object.RigidBody.VelocityX < 0 && object.RigidBody.VelocityX > -10)
			{
				object.RigidBody.VelocityX = 0;
			}
		}
		
		if (object.RigidBody.VelocityZ > 0)
		{
			object.RigidBody.VelocityZ -= Settings.Friction*2;
			if (object.RigidBody.VelocityZ > 0 && object.RigidBody.VelocityZ < 10)
			{
				object.RigidBody.VelocityZ = 0;
			}
		}
		else if (object.RigidBody.VelocityZ < 0)
		{
			object.RigidBody.VelocityZ += Settings.Friction*2;
			if (object.RigidBody.VelocityZ < 0 && object.RigidBody.VelocityZ > -10)
			{
				object.RigidBody.VelocityZ = 0;
			}
		}
	}
}

function ApplyBasicPhysics(object)
{
	ApplyGravity(object);
	ApplyCollisions(object);
	ApplyForcesXZ(object);
}