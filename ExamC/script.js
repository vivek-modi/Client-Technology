var $ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {

    var value = $("movies");

    var clickhref = value.getElementsByTagName("a");

    for (var i = 0; i < clickhref.length; i++) {

        clickhref[i].onclick = function () {
            parseJSON(this.href);
            return false;
        }
    }
}


function parseJSON(ClickHref) {

    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest()
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var JSONPARSE = JSON.parse(xhttp.responseText);

            var Title = JSONPARSE.Movies.Title;

            var Genre = JSONPARSE.Movies.Genre;

            var Time = JSONPARSE.Movies.TimeR;

            var Rating = JSONPARSE.Movies.Rating;

            var Image = JSONPARSE.Movies.Img;

            var DivImage = document.getElementById("details");
            var line0 = "<img id='ParseIMG' src='" + Image + "'/>";
            var line1 = "<div id='PARSELINE'><h3>" + Title + "</h3><p>Genre: " + Genre + "</p><p>Running Time: " + Time + "</p><p>" + Rating + "</p></div>"
            DivImage.innerHTML = line0 + line1;
        }
    };
    xhttp.open("GET", ClickHref, true);
    xhttp.send();
}