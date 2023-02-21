var button = document.querySelector("button");

button.onclick = function(evt)
{
	evt.preventDefault();
	
	//Kiolvassuk a beírt adatokat
	var distance = document.getElementById("distance").value;
	var avg = document.getElementById("avg").value;
	var price = document.getElementById("price").value;
	
	//Számmá alakítjuk az adatokat
	distance = parseInt(distance);
	avg = parseFloat(avg);
	price = parseInt(price);
	
	//Kiszámoljuk a mennyiséget
	var amount = distance/100 * avg;
	amount = parseInt(amount * 100) /100; //Csak két tizedesjegy
	
	//Kiszámoljuk az összeget
	var total = parseInt(amount * price);
	
	//Megjelenítjük az eredményeket
	document.querySelector(".amount").innerHTML = amount +" liter";
	document.querySelector(".total").innerHTML = total +" HUF";
}


