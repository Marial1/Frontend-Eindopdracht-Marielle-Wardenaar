/* Het definieer je de variabelen. Een querySelector is voor class elementen omdat er een punt voor staat en de getElementById is voor id elementen*/

var knop = document.querySelector(".close");
var aside = document.querySelector(".aside");
var open = document.getElementById("open");

/* Als de functie gesloten is, is de aside op none omdat je de mededelingen dan niet ziet en open is block omdat deze dan wel in beeld is. */

function close() {
    aside.style.display = "none";
    open.style.display = "block";
}

function openAside() {
    aside.style.display = "inline-block";
    open.style.display = "none";
}

/* Als de functie open is, dan is de aside te zien en het plusje is dan niet zichtbaar*/

knop.onclick = close;

open.onclick = openAside;
