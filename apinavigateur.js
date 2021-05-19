///latitude

let x = document.getElementById("lat");
let bouttonlatitude = document.getElementById("latitude");
bouttonlatitude.addEventListener('click', getLatitude);
function getLatitude() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            x.innerHTML = "Latitude : " + position.coords.latitude;
        });
    } else {
        lat.innerHTML = "Geolocation is not supported by this browser";
    }
}

///longitude

let y = document.getElementById("long");
let bouttonlongitude = document.getElementById("longitude");
bouttonlongitude.addEventListener('click', getLongitude);
function getLongitude() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            y.innerHTML = "Longitude : " + position.coords.longitude;
        });
    } else {
        long.innerHTML = "Geolocation is not supported by this browser";
    }
}


///retour historique

let bouttonreculer = document.getElementById("reculer");
bouttonreculer.addEventListener('click', goback);
function goback(){
    var nbpages = document.getElementById("nbpages").value;
    window.history.go(nbpages*-1);
}

document.getElementById("copier").addEventListener('click',copier);

function copier(){
    var texte = document.getElementById("textecopie").value;
    navigator.clipboard.writeText(texte);
    alert("Copié !");
}

document.getElementById("coller").addEventListener('click',coller);

function coller(){
    navigator.clipboard.readText().then(clipText => document.getElementById("textecolle").value = clipText);
}