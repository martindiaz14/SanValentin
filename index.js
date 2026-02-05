const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const btnMostrar = document.querySelector("#btnMostrar");
const imagenDinamica = document.querySelector("#imagenDinamica");
const textoFrase = document.querySelector("#frase");
const cartaA4 = document.querySelector("#cartaA4");
const contenedorGatitos = document.querySelector("#contenedorGatitos");

// 1. Especifica aquí tus fotos (asegúrate de que los nombres sean exactos)
const fotosNo = [
    "imgs/Sad/descarga.jfif",
    "imgs/Sad/gatinho tristinho.jfif",
    "imgs/Sad/gatito triste _(.jfif",
    "imgs/Sad/gatito triste (1).jfif",
    "imgs/Sad/descarga (1).jfif",
    "imgs/Sad/descarga (2).jfif",
    "imgs/Sad/descarga (3).jfif",
    "imgs/Sad/gatito triste 💔.jfif",
    "imgs/Sad/Gatito triste.jfif",
    "imgs/Sad/gatito_.jfif",
    "imgs/Sad/gato triste.jfif",
    "imgs/Sad/Hamburguesa_.jfif",
    "imgs/Sad/Jajajaja.jfif",
    "imgs/Sad/nico.jfif",
    "imgs/Sad/POU SAD😔.jfif",
    "imgs/Sad/sea puppy 🦭.jfif",
    "imgs/Sad/trosteee.jfif"
];


const fotosSi = [
    "imgs/Feli/♥️.jfif",
    "imgs/Feli/Awww 🥰.jfif",
    "imgs/Feli/descarga (2).jfif",
    "imgs/Feli/descarga (3).jfif",
    "imgs/Feli/descarga (4).jfif",
    "imgs/Feli/descarga.jfif",
    "imgs/Feli/Un mishi.jfif",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 19.41.09.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 19.44.01 (1).jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 19.44.01.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 19.44.02 (1).jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 19.44.02 (2).jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 19.44.02.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 19.55.41.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.40.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.41.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.42.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.43 (1).jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.43.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.44.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.45 (1).jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.45.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.46.jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.47 (1).jpeg",
    "imgs/Feli/WhatsApp Image 2026-02-02 at 20.15.47.jpeg",
    "imgs/Feli/descarga (5).jfif",
    "imgs/Feli/descarga (6).jfif",
    "imgs/Feli/i lop you.jfif",
    "imgs/Feli/cute cat.jfif"
];

// 2. Especifica aquí tus frases
const frases = [
    "Enserio?",
    "Pero, Porqueeeeee🥺",
    "Vieja Meada",
    "Ese botón no vale",
    "Pipipipipi😭",
    "Y si te compro shein?",
    "entonces quiero la tenencia de la galemi!🐈",
    "Pero",
    "Pero Pero",
    "Pero Pero Pero",
    "Noooooooo😫",
    "So re mala so",
    "Pendeja >:V",
    "Te equivocaste mor, tontis",
    "Distraida",
    "Se te resfalo el dedo, no?"

];

const cambiarContenidoAleatorio = () => {
    // Elegimos un índice al azar para fotos y frases
    const indiceFoto = Math.floor(Math.random() * fotosNo.length);
    const indiceFrase = Math.floor(Math.random() * frases.length);

    // Actualizamos el DOM
    imagenDinamica.src = fotosNo[indiceFoto];
    textoFrase.innerText = frases[indiceFrase];
};

const moverBoton = () => {
    btnNo.style.position = "fixed";

    // Cambiamos imagen y frase cada vez que el botón escapa
    cambiarContenidoAleatorio();

    const margen = 30;
    const rectSi = btnSi.getBoundingClientRect();

    let x, y;
    let esPosicionValida = false;

    while (!esPosicionValida) {
        x = Math.random() * (window.innerWidth - btnNo.offsetWidth - margen);
        y = Math.random() * (window.innerHeight - btnNo.offsetHeight - margen);

        const zonaProhibida = {
            inicioX: rectSi.left - 60,
            finX: rectSi.right + 60,
            inicioY: rectSi.top - 60,
            finY: rectSi.bottom + 60
        };

        const coincideX = x > zonaProhibida.inicioX && x < zonaProhibida.finX;
        const coincideY = y > zonaProhibida.inicioY && y < zonaProhibida.finY;

        if (!(coincideX && coincideY)) {
            esPosicionValida = true;
        }
    }

    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
};

// Eventos
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBoton();
});
btnNo.addEventListener("mouseenter", moverBoton);


const crearGatitosEsparcidos = () => {
    for (let i = 0; i < 29; i++) { // Crea 15 gatitos
        const gato = document.createElement("img");
        gato.src = fotosSi[Math.floor(Math.random() * fotosSi.length)];
        gato.className = "absolute w-16 h-16 object-cover rounded-full shadow-sm";

        // Posiciones aleatorias
        const x = Math.random() * 90; // en porcentaje
        const y = Math.random() * 90;

        gato.style.left = `${x}%`;
        gato.style.top = `${y}%`;
        gato.style.transform = `rotate(${Math.random() * 40 - 20}deg)`; // Rotación aleatoria

        contenedorGatitos.appendChild(gato);
    }
};

btnSi.addEventListener("click", () => {
    imagenDinamica.classList.add("hidden");
    textoFrase.classList.add("hidden");
    btnNo.classList.add("hidden");
    btnSi.classList.add("hidden");
    btnMostrar.classList.remove("hidden");

    crearGatitosEsparcidos();
});

btnMostrar.addEventListener("click", () => {
    cartaA4.classList.remove("hidden");
});
