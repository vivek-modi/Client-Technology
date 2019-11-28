function $(id) {return document.getElementById(id)};

function loadJson(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseJSON(this.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function parseJSON(json){
    let jsonValue = JSON.parse(json);

    $('details').innerHTML = '<div style="margin: 1em auto">'+
        '<img style="float:left" src="'+jsonValue["image"]+'" alt="Home Alone">'+
        '<div style="margin-left: 13em">'+
        '<h3>'+jsonValue["title"]+'</h3>'+
        '<p>Genre: '+jsonValue["genre"]+'</p>'+
        '<p>Running Time: '+jsonValue["running_time"]+'</p>'+
        '<p>Rating: '+jsonValue["rating"]+'</p>'+
        '</div>'+
        '</div>';
}

window.onload = () => {
    let allMovies = $('movies').getElementsByTagName('a');
    Array.from(allMovies).forEach(item => {
        item.onclick = () =>{
            loadJson(item.href);
            return false;
        }
    });
}