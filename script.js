let sobre = document.getElementById("sobre");
let divCartas = document.getElementById("divCartas");
let abrir = document.getElementById("abrir");
let cartas = [
    {
        nombre: "Bulbasur ",
        rareza: "Basic",
        precio: 0.50 ,
        img: "./imagenes/bulbasurbase.webp"
    },
    {
        nombre: "Charmander ",
        rareza: "Basic",
        precio: 0.50 ,
        img: "./imagenes/charmanderbase.webp"
    },
    {
        nombre: "Eeve" , 
        rareza: "Basic" ,
        precio: 0.50 ,
        img: "./imagenes/eevebase.webp"
    }    
]

function abrirSobre() {
    // implementar que elija una carta aleatoria del array y la muestre en pantalla
    let random = Math.floor(Math.random()*2);

    document.getElementById("divCartas").innerHTML = `
    <h1> ${cartas[random].nombre} </h1>
    <p> ${cartas[random].precio} </p>
    `;
}

sobre.addEventListener("click", abrirSobre)