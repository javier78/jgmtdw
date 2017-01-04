/**
 * Created by Javier on 1/2/2017.
 */
window.onload = function(){
    var mb = document.getElementById("submitButton");
    mb.addEventListener("click", handler);
}

function handler(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getWeather');
    xhr.send(null);

    xhr.onreadystatechange = function() {
        var DONE = 4;
        var OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText);
            }
            else {
                console.log('Error: ' + xhr.status);
            }
        }
    }
}