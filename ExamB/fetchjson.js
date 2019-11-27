var $ = function (id) {
	return document.getElementById(id);
};

function grabFile(file) {
	var request = new XMLHttpRequest();
	if (request) {
		request.onreadystatechange = function () {
			parseResponse(request);
		};

		request.open("GET", file, true);
		request.send(null);
	}
}

function parseResponse(request) {
	if (request.readyState == 4) {
		if (request.status == 200 || request.status == 304) {
			var data = JSON.parse(request.responseText);
			var name = data.Car.Name;
			var color = data.Car.Color;
			var style = data.Car.Style;
			var price = data.Car.Price;
			
			document.getElementById("placeholder").style.width="300px";
			switch (name) {
				case "Fiesta":
					document.getElementById("placeholder").src = "./images/fiesta.webp";
					break;
				case "Focus":
					document.getElementById("placeholder").src = "./images/focus.webp";
					break;
				case "Mondeo":
					document.getElementById("placeholder").src = "./images/mondeo.webp";
					break;
				case "Mustang":
					document.getElementById("placeholder").src = "./images/mustang.webp";
					break;

			}

			var line = "<p>name:" + name + "</p>";
			var line2 = "<p>color:" + color + "</p>";
			var line3 = "<p>style:" + style + "</p>";
			var line4 = "<p>price:" + price + "</p>";
			d.innerHTML = line + line2 + line3 + line4;
		}
	}
}

window.onload = function () {

	var ul = $("list");
	//Get a reference to all the <a> tags:
	var aElements = ul.getElementsByTagName("a");

	for (var i = 0; i < aElements.length; i++) {

		//Assign event handler to each link (<a> tag)
		aElements[i].onclick = function () {
			grabFile(this.href);
			return false;
		}
	}
}