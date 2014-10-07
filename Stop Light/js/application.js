function go(light) {

	var yellowLight = document.getElementById('yellow-light');
	var greenLight = document.getElementById('green-light');
	var redLight = document.getElementById('red-light');

	yellowLight.style.backgroundColor = "black";
	redLight.style.backgroundColor = "black";
	greenLight.style.backgroundColor = "black";

	var lightId = light + '-light';
	var chosenLight = document.getElementById(lightId);
	chosenLight.style.backgroundColor = light; 

}