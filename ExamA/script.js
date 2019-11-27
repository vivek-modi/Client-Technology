var $ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {

    var list = $("list");

    var clickhref = list.getElementsByTagName("a");

    for (var i = 0; i < clickhref.length; i++) {

        clickhref[i].onclick = function () {
            parseXML(this.href);
            return false;
        }
    }
}

function parseXML(aherf) {

    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }

    if (request) {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                RefineData(request)
            }
        };
    }

    request.open("GET", aherf, true);
    request.send();
}

function RefineData(xml) {
    console.log(xml.responseXML);

    var xmlDoc = xml.responseXML;
    var Book = xmlDoc.getElementsByTagName("Book");

    var img = Book[0].getElementsByTagName("Img")[0].getAttribute("value");
    var name = Book[0].getElementsByTagName("Name")[0].childNodes[0].nodeValue;
    var author = Book[0].getElementsByTagName("Author")[0].childNodes[0].nodeValue;
    var year = Book[0].getElementsByTagName("Year")[0].childNodes[0].nodeValue;
    var page = Book[0].getElementsByTagName("Pages")[0].childNodes[0].nodeValue;

    var line0 = "<img id='fetchimage' src=" +img +">" ;
    var line1 = "<p>name: " + name + " <br> author: " + author + "<br> year: " + year + "<br> page: " + page + "</p>";
    section.innerHTML = line0 + line1;

}