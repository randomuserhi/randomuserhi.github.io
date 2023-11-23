//movement and key bindings folder
window.addEventListener("keydown", move, false);
window.addEventListener("keyup", still, false);

function move(e)
{
	switch (e.keyCode)
	{
		// player 1
		case 65:	Player.left = true;
					Player.right = false;
					break;
					
		case 68:	Player.right = true;
					Player.left = false;
					break;
					
		case 87:	Player.up = true;
					Player.down = false;
					break;
					
		case 83:	Player.up = false;
					Player.down = true;
					break;
					
		case 16:	Player.IsSprinting = true;
					break;
					
		case 32:    Player.jump = true;
					break;
					
		case 82:	Player.RigidBody.X = 0;
					Player.RigidBody.Y = 100;
					Player.RigidBody.Z = 0;
					Player.RigidBody.VelocityZ = 0;
					Player.RigidBody.VelocityX = 0;
					
					Player.RigidBody.AccY = 0;
					Player.RigidBody.VelocityY = 0;
					
					var currentlength = Drones.length;
					
					for (var i = 0; i < currentlength; i++)
					{
						RemoveObject(Drones[0]);
						Drones.splice(0, 1);
					}
					
					for (var i = 0; i < numDrones; i++)
					{
						x = Math.floor(Math.random() * (500 - -500) + -500);
						z = Math.floor(Math.random() * (8000 - 500) + 500);
						y = Math.floor(Math.random() * (500 - 1) + 1);
						d = Math.floor(Math.random() * (500 - 1) + 1);
						a = Math.floor(Math.random() * (1200 - 400) + 400);
						
						createDrone(x,y,z,d,a);
					}
					break;
	}
	
}

function still (e)
{
	switch (e.keyCode)
	{				
		case 65:	if (Player.right == false)
					{
						Player.left = false;
						Player.right = false;
					}
					break;
					
		case 68:	if (Player.left == false)
					{
						Player.right = false;
						Player.left = false;
						Player.is_moving = false;
					}
					break;
					
		case 87:	if (Player.down == false)
					{
						Player.up = false;
						Player.down = false;
					}
					break;
					
		case 83:	if (Player.up == false)
					{
						Player.up = false;
						Player.down = false;
					}
					break;
					
		case 16:	Player.IsSprinting = false;
					break;
					
		case 32:	Player.jump = false;
					break;
	}
}