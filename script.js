const sobre = document.getElementById("sobre");
const divCartas = document.getElementById("divCartas");

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

console.log(cartas[1].precio)

function abrirSobre() {
    // implementar que elija una carta aleatoria del array y la muestre en pantalla
    let random = math.floor(math.random()*2);
    divCartas.innerHTML = cartas[random].precio;
    
}

sobre.addEventListener("click", abrirSobre)