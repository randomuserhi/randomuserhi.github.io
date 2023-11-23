//create a prototype
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function common_load_file_using_iframe (filename, transfer, callback)
{
	function random_integer(min, max) 
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var id_name = "iframe_loader_" + random_integer(0,1000).toString() + "_id";
	
	//check if the id already exists
	while (document.getElementById(id_name)!=null)
	{
		id_name = "iframe_loader_" + random_integer(0,1000).toString() + "_id";
	}
	
	//Create the iframe
	var iframe = document.createElement("iframe");
	iframe.style.display = "none";
	iframe.id = id_name;
	iframe.src = filename;
	iframe.transfer = transfer;
	//chain the callback
	iframe.onload = function ()
	{				
		//execute the callback with the contents
		callback(this.contentWindow.document.body.innerHTML, this.transfer);
		this.parentNode.removeChild(this); //remove the created iframe
	}
	//create the iframe
	document.body.appendChild(iframe);
}

function common_clean_pre(data)
{
	//remove the <pre xxx> and </pre>
	data = data.slice(data.indexOf(">")+1);
	data = data.replace("</pre>","");
	return data;
}

function LoadDatabase()
{
	common_load_file_using_iframe("PlaqueImgs.txt",null,function(raw_data, transfer)
	{
		var clean_data = common_clean_pre(raw_data);
		
		var stuff = clean_data.split("|");
		
		UnloadDatabaseImages(stuff);
	});
	
	common_load_file_using_iframe("PlaquePages.txt",null,function(raw_data, transfer)
	{
		var clean_data = common_clean_pre(raw_data);
		
		var stuff = clean_data.split("|asdAs|");
		
		UnloadDatabase(stuff);
	});
	
	common_load_file_using_iframe("PlaquePositions.txt",null,function(raw_data, transfer)
	{
		var clean_data = common_clean_pre(raw_data);
		
		var stuff = clean_data.split("|");
		
		UnloadDatabasePosition(stuff);
	});
	
	common_load_file_using_iframe("WikipediaSites.txt",null,function(raw_data, transfer)
	{
		var clean_data = common_clean_pre(raw_data);
		
		var stuff = clean_data.split("|");
		
		UnloadDatabaseSites(stuff);
	});
}

var Unloaded1 = false;
var Unloaded2 = false;
var Unloaded3 = false;
var Unloaded4 = false;

function UnloadDatabaseSites(stuff)
{
	plaquesSites = stuff;
	Unloaded4 = true;
}

function UnloadDatabasePosition(stuff)
{
	plaquesLatLng = stuff;
	Unloaded1 = true;
}

function UnloadDatabase(input)
{
	plaques = input;
	Unloaded2 = true;
}	

function UnloadDatabaseImages(input)
{
	plaquesImages = input;
	Unloaded3 = true;
}		

function LoadList()
{
	if (done == false)
	{
		for (var i = 0;i < plaques.length;i++)
		{
			if (done == false)
			{
				var html = "<div class='Plaques' id='" + "plaque" + i + "' onclick='PlaquePageUpdate(" + i + ");'>";
			
				var TitleAndDescriptionAndSub = plaques[i].split("|asdf2D|");
				
				console.log(TitleAndDescriptionAndSub.length);
			
				var TitleAndDescription = TitleAndDescriptionAndSub[1].split("|*|");
				
				html += "<button id='PlaqueButton2' onclick='PlaquePageUpdateButton2(" + i + "); whichplaqueon =" + i + ";' class='PlaqueButton'><i class = 'icon icon ion-chevron-right'></i></button>";
				
				if (i < plaquesImages.length && plaquesImages[i] != " ")
				{
					var asimg = plaquesImages[i].split("~");
				
					html += "<div class='ImageHolder' onclick='ViewBigImageOpen(" + i + ")' style='background-image: url(images/100x100/" + asimg[0] + "_small.jpg);' title='" + asimg[3] + "'></div>";
				}
				
				html += "<div id='1stTitle' class='PlaquesTitle'><u>" + TitleAndDescription[0].toString() + "</u><br /></div>" + "<div id='1stDescription' class='PlaquesDescription'>";
				
				var d1 = TitleAndDescriptionAndSub[0].toString();
				if (d1 != " ")
				{
					var Description = d1.replace(/ED5s2Dd/g, "<br/>")
					
					if (Description.length > CharLimit)
					{
						Description = Description.replaceAt(CharLimit, "|ASDasd2|")
					
						Description = Description.substring(0, Description.indexOf("|ASDasd2|"));
						
						Description += "...";
					}
					
					html += Description + "<br /><br /></div></div>";
				}
				else
				{
					html += "</div></div>";
				}
				
				document.getElementById("PlaqueList").innerHTML += html;
				document.getElementById("loaders").hidden = true;
			}
		}
		
		document.getElementById("loaders").hidden = true;
	}
}

function PlaquePageUpdate(whichplaque)
{
	LoadPage(whichplaque);
	PlaqueListButtonClose();
	
	if (whichplaque < plaquesLatLng.length)
	{	
		LatLng = plaquesLatLng[whichplaque].split("~");
		
		console.log(LatLng);
		
		DrawMap(LatLng[0].toString(), LatLng[1].toString(), whichplaque);
	}
	else
	{
		document.getElementById("Map").style.height = "0%";
	}
}

function PlaquePageUpdateButton2(whichplaque)
{
	LoadPage(whichplaque);
	PlaqueListButtonClose();
	
	if (whichplaque < plaquesLatLng.length)
	{	
		LatLng = plaquesLatLng[whichplaque].split("~");
		
		console.log(LatLng);
		
		DrawMap(LatLng[0].toString(), LatLng[1].toString(), whichplaque);
	}
	else
	{
		document.getElementById("Map").style.height = "0%";
	}
}

function LoadPage(whichplaque)
{
	var TitleAndDescriptionAndSub = plaques[whichplaque].split("|asdf2D|");

	var TitleAndDescription = TitleAndDescriptionAndSub[1].split("|*|");
		
	var Title = TitleAndDescription[0].toString();
	
	var d1 = TitleAndDescription[1].toString();
	var Description = d1.replace(/ED5s2Dd/g, "<br/>")
	
	if (whichplaque < plaquesSites.length)
	{
		var Sites = plaquesSites[whichplaque].split("~");
		var SiteHtml = "<iframe id='frame' src='https://" + Sites[1] + "' frameborder='0' style='height:100%; width:100%; overflow:auto;'/>";
		console.log(Sites[0]);
		if (Sites[0] == 0)
		{
			document.getElementById("WikipediaPage").innerHTML = SiteHtml;
		}
	}
	
	document.getElementById("TitlePage").innerHTML = "<b><u>" + Title + "</u></b>";
	
	document.getElementById("DescriptionPage").innerHTML = Description;
}