// Your code here
let content = document.querySelector("#myDiv");
let cabecera1 = document.createElement("p");
cabecera1.textContent = "Hello World";
cabecera1.style.backgroundColor = "yellow";

content.appendChild(cabecera1);

//Usando la función createElement, crea un elemento Párrafo (p) con fondo (background) amarillo (yellow), establece el innerHTML en 'Hello World' y agrégalo al final del documento.
