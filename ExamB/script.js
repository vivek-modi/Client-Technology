window.onload = function () {

    var list = document.getElementById("list");

    var clickhref = list.getElementsByTagName("a");

    for (var i = 0; i < clickhref.length; i++) {

        clickhref[i].onclick = function () {
            console.log(this.href);
            grabFile(this.href);
            return false;
        }
    }
}


function grabFile(FileName) {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }

    if (request) {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                DataRefine(request);
            }
        };

    }

    request.open("GET", FileName, true);
    request.send();
}

function DataRefine(request) {
    var data = JSON.parse(request.responseText);

    var name = data.Car.Name;
    var color = data.Car.Color;
    var style = data.Car.Style;
    var price = data.Car.Price;

    document.getElementById("placeholder").style.width = "300px";
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