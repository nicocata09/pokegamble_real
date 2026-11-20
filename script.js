let sobre = document.getElementById("sobre");
let divCartas = document.getElementById("divCartas");
let guardarbutton = document.getElementById("guardar");
let GuardoCarta;
let random;
let precioSobre = 7;
let balanceuser;
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
        for (let i=0; i<=7; i++){
    
            document.getElementById("contadorSobres").innerHTML = "Todavia te quedan sobres gratis";
    }
    if (i > 7){
        sobre = 7;
    }

    random = Math.floor(Math.random() * (cartas.length - 1));

    document.getElementById("cartarandom").innerHTML = `
    <img src="${cartas[random].img}" class="cartarand" >
    <p> $${cartas[random].precio} </p>
    <p> ${cartas[random].rareza} </p>
    `;
    balanceuser = balanceuser + cartas[random].precio;
}

sobre.addEventListener("click", abrirSobre);

function guardarCarta() {
    document.getElementById("CartaGuardada").innerHTML = `
    <img src="${cartas[random].img}" class="cartaguar">
    <p> $${cartas[random].precio} </p>
    <p> ${cartas[random].rareza} </p>
    `;
}

guardarbutton.addEventListener("click", guardarCarta);



