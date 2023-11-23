function PlaqueListButton()
{
	clearMap();
	
	var List = document.getElementById("PlaqueList");
	Resize();
	
	if (List.style.left == "-100%")
	{
		List.style.left = "0%";
	}
	else
	{
		List.style.left = "-100%";
	}
}

function PlaqueListButtonClose()
{
	clearMap();
	
	var List = document.getElementById("PlaqueList");
	Resize();
	NextPageClose();
	
	if (List.style.left != "-100%")
	{
		List.style.left = "-100%";
	
		document.getElementById("SideBar").style.display = "none";
	
		var myDiv = document.getElementById('Page');
		myDiv.scrollTop = 0;
	}
}

function PlaqueListButtonOpen()
{
	clearMap();

	var List = document.getElementById("PlaqueList");
	Resize();
	
	if (List.style.left != "0%")
	{
		List.style.left = "0%";
	}
}

function NextPageClose()
{
	clearMap();
	
	var List = document.getElementById("WikipediaPageHolder");
	var button = document.getElementById("NextPage");
	
	if (List.style.left != "100%")
	{
		List.style.left = "100%";
		button.innerHTML = "<i class = 'icon icon ion-ios-information'></i>";
	}
}

function NextPage()
{
	var List = document.getElementById("WikipediaPageHolder");
	var button = document.getElementById("NextPage");
	
	if (List.style.left == "10%")
	{
		List.style.left = "100%";
		button.innerHTML = "<i class = 'icon icon ion-ios-information'></i>";
	}
	else
	{
		var Sites = plaquesSites[whichplaqueon].split("~");
		if (Sites[0] == 1)
		{
			var HTMLSITE = "http://" + Sites[1];
			console.log(HTMLSITE);
			window.open(HTMLSITE, '_blank');
		}
		else
		{
			List.style.left = "10%";
			button.innerHTML = "<i class = 'icon icon ion-map'></i>";
		}
	}
}

function ViewBigImageOpen(whichplaque)
{
	document.getElementById("BigImg").style.visibility = "visible";
	document.getElementById("BigImgBackground").style.visibility = "visible";
	var ImgScript = plaquesImages[whichplaque].split("~");
	document.getElementById("BigImg").style.backgroundImage = "url(images/1000x1000/" + ImgScript[0] + ".jpg)";
	console.log(ImgScript[0]);
	console.log(document.getElementById("BigImg").style.backgroundImage);
}

function ViewBigImageClose()
{
	document.getElementById("BigImg").style.visibility = "hidden";
	document.getElementById("BigImgBackground").style.visibility = "hidden";
	PlaqueListButtonOpen();
}

function clearMap()
{	
	var uluru = {lat: 10, lng: 10};
	var map = new google.maps.Map(document.getElementById('Map'), {
	  zoom: 22,
	  center: uluru,
	  gestureHandling: 'cooperative'
	});
}