function createBlocks(x,y, z)
{
	block = new BlockObject(x,y, z); //create object
	Blocks.push(block); //add enemy to update list
	scene.add(block.Mesh); //add mesh of object to scene to be drawn
}

function createSmallBlocks(x, y, z, angleX, angleY, angleZ)
{
	smallblock = new SmallBlockObject(x, y, z, angleX, angleY, angleZ);
	SmallBlocks.push(smallblock); //add enemy to update list
	scene.add(smallblock.Mesh); //add mesh of object to scene to be drawn
}

function createBullet(x, y, z, angleX, angleY, angleZ, speed)
{
	bullet = new BulletObject(x, y, z, angleX, angleY, angleZ, speed);
	Bullets.push(bullet); //add enemy to update list
	scene.add(bullet.Mesh); //add mesh of object to scene to be drawn
}

function createDrone(x, y, z,d,a)
{
	drone = new DroneObject(x, y, z,d,a);
	Drones.push(drone);
	scene.add(drone.Mesh);
}