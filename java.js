document.oncontextmenu = function() {
    window.alert("No puede hacer click derecho");
    return false;
}

var link1 = document.getElementById("informacion");
var link2 = document.getElementById("habilidad");
var link3 = document.getElementById("exp");
var link4 = document.getElementById("contact");

var link5 = document.getElementById("gibhub");


var contador = 0;

link1.addEventListener('click', function(event) {
  contador++;
  console.log("Se ha hecho click: " + contador + " veces");
});

link2.addEventListener('click', function(event) {
    contador++;
    console.log("Se ha hecho click: " + contador + " veces");
  });

link3.addEventListener('click', function(event) {
    contador++;
    console.log("Se ha hecho click: " + contador + " veces");
});

link4.addEventListener('click', function(event) {
    contador++;
    console.log("Se ha hecho click: " + contador + " veces");
});

link5.addEventListener('click', function(event) {
    window.alert("Sera redirigido a mi portafolio en GibHub");
});