let sobre = document.getElementById("sobre");
let divCartas = document.getElementById("divCartas");
let abrir = document.getElementById("abrir");
let cartas = [
    {
        nombre: "Bulbasur ",
        rareza: "Basic",
        precio: 0.50,
        img: "imagenes/bulbasaurbase.webp"
    },
    {
        nombre: "Charmander ",
        rareza: "Basic",
        precio: 0.50,
        img: "imagenes/charmanderbase.webp"
    },
    {
        nombre: "Eeve",
        rareza: "Basic",
        precio: 0.50,
        img: "imagenes/eevebase.webp"
    },
    {
        nombre: "energia",
        rareza: "Basic",
        precio: 0.30,
        img: "imagenes/energia.webp"
    },
    {
        nombre: "entrenador",
        rareza: "Basic",
        precio: 0.30,
        img: "imagenes/entrenador.webp"
    },
    {
        nombre: "froakie",
        rareza: "Basic",
        precio: 0.50,
        img: "imagenes/froakiebase.jpg"
    },
    {
        nombre: "objeto",
        rareza: "Basic",
        precio: 0.30,
        img: "imagenes/objeto.webp"
    },
    {
        nombre: "pikachu base",
        rareza: "Basic",
        precio: 0.50,
        img: "imagenes/pikachubase.webp"
    },
    {
        nombre: "squirtle",
        rareza: "Basic",
        precio: 0.50,
        img: "imagenes/squirtlebase.webp"
    },
    {
        nombre: "blastoise",
        rareza: "Epic",
        precio: 1.50,
        img: "imagenes/blastoiseex.webp"
    },
    {
        nombre: "lucario",
        rareza: "Epic",
        precio: 1.50,
        img: "imagenes/lucariov.webp"
    },
    {
        nombre: "mew",
        rareza: "Legendary",
        precio: 2.30,
        img: "imagenes/mewex.webp"
    },
    {
        nombre: "pikachu god",
        rareza: "Legendary",
        precio: 2.30,
        img: "imagenes/pikachugod.webp"
    },
    {
        nombre: "mega greninja",
        rareza: "Mythic",
        precio: 5,
        img: "imagenes/mgreninjaex.jpg"
    }, {
        nombre: "reshiram & charizard",
        rareza: "Mythic",
        precio: 6,
        img: "imagenes/reshychargx.webp"
    }
]

function abrirSobre() {
    // implementar que elija una carta aleatoria del array y la muestre en pantalla
    let random = Math.floor(Math.random() * (cartas.length - 1));

    document.getElementById("divCartas").innerHTML = `
    <img src="${cartas[random].img}" class="carta">
    <p> ${cartas[random].precio} </p>
    <p> ${cartas[random].rareza} </p>
    `;
}

sobre.addEventListener("click", abrirSobre)