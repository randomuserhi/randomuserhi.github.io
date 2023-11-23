var SettingsObject = function()
{
	this.Gravity = 0.02; //meters per second (0.02)
	this.GroundLevel = 0;
	this.GroundWidth = 1000; //how large the is ground
	this.GroundHeight = 1000; //how large the ground is
	this.TerminalVelocity = 30;
	this.Friction = 2;
}

//-----------------------------PHYSICS------------------------------\\

var RigidBody3D = function (RigidHeight, RigidWidth, RigidWidth2, x, y, z, ax, ay, az)
{
	this.Height = RigidHeight;
	this.WidthX = RigidWidth;
	this.WidthZ = RigidWidth2;
	
	this.Gravity = Settings.Gravity;
	
	this.IsKinematic = true;
	
	this.OriginXYZ = [0,0,0];
	this.Collided = false;
	this.CollidedWith;
	this.CollidedWithFloor = false;
	
	this.X = x;
	this.Y = y;
	this.Z = z;
	
	this.AngleX = ax;
	this.AngleY = ay;
	this.AngleZ = az;
	
	this.VelocityY = 0;
	this.VelocityX = 0;
	this.VelocityZ = 0;
	this.AccY = 0;
}