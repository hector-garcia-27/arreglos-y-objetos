const propiedades_alquiler = [
    {
        clase: "card",
        nombre: "AlmaMar: casa frente a la playa en el centro de Matanzas",
        src: "./assets/img/alquiler/casa_matanzas.png",
        descripcion: "se encuentra en la primera línea del océano, justo encima de la playa, con acceso privado, en una comunidad de siete casas en la meca del windsurf / kitesurf en Matanzas.",
        ubicacion: "Navidad, Matanzas. O'higgins",
        habitaciones: "2 habs",
        baños: "2 baños",
        costo: "$250.000",
        smoke: false,
        pets: false
    },
    {
        clase: "card",
        nombre: "Cabaña de madera con excelente vista en el Cajon del Maipo",
        src: "./assets/img/alquiler/casa_cajonDelMaipo.png",
        descripcion: "Contamos con tres Glampings de madera triangulares, construidos en cerro, en altura, con hermosa vista a las montañas.",
        ubicacion: "Camilno al Alfalfal 1340, San José del Maipo. RM",
        habitaciones: "1 hab",
        baños: "1 baño",
        costo: "$66.000",
        smoke: true,
        pets: true
    },
    {
        clase: "card",
        nombre: "Cabaña entero en Algarrobo",
        src: "./assets/img/alquiler/casa_algarrobo.png",
        descripcion: "Disfruta de la sencillez de este alojamiento tranquilo y céntrico. Totalmente equipada para una noche romántica, descansa en un entorno maravilloso.",
        ubicacion: "El mlagro, Algarobo. Valparaiso",
        habitaciones: "1 hab",
        baños: "1 baño",
        costo: "$57.000",
        smoke: true,
        pets: false
    },
    {
        clase: "card",
        nombre: "Arquitectura subterránea en Casablanca",
        src: "./assets/img/alquiler/casa_casablanca.png",
        descripcion: "Podrás disfrutar del sonido del mar y las aves; de bellas noches estrelladas que te recargarán de energía y paz. En una casa autosustentable y en un entorno ecológico.",
        ubicacion: "Fundo la boca de Tunquén, Casablanca. Valparaiso",
        habitaciones: "2 habs",
        baños: "2 baños",
        costo: "$155.000",
        smoke: false,
        pets: true
    },
    {
        clase: "card",
        nombre: "Todo el lugar en Melipeuco",
        src: "./assets/img/alquiler/casa_melieuco.png",
        descripcion: "Conecta con la naturaleza en esta escapada inolvidable. Lodge Nevados de Sollipulli ofrece cómodas cabañas, mas un Refugio de Montaña. Parque Natural sin costo para huéspedes del Lodge",
        ubicacion: "Melipeuco. Araucania",
        habitaciones: "1 hab",
        baños: "1 baño",
        costo: "$180.000",
        smoke: true,
        pets: true
    }
];

let contador = 0;
let variable = ""
for (let propiedades of propiedades_alquiler) {
    if (contador < 3) {
        let fumar = "";
        let mascota = "";
        if (propiedades.smoke) {
            fumar = `
                    <div class="siFumar">
                        <img class="icon" src="./assets/img/icon_fumarSi.svg" alt="icono permitido fumar" style="filter: invert(27%) sepia(79%) saturate(1674%) hue-rotate(95deg) brightness(96%) contrast(105%);">
                        <p class="m-0 ps-2" style="color: green;">Permitido fumar</p>
                    </div>
                `
        } else {
            fumar = `
                    <div class="noFumar">
                        <img class="icon" src="./assets/img/icon_fumarSi.svg" alt="icono permitido fumar" style="filter: invert(14%) sepia(86%) saturate(7452%) hue-rotate(360deg) brightness(115%) contrast(110%);">
                        <p class="m-0 ps-2" style="color: red;">No se permite fumar</p>
                    </div>
                `
        }
        if (propiedades.pets) {
            mascota = `
                    <div class="siPets">
                        <img class="icon" src="./assets/img/icon_petsSi.svg" alt="icono permitidas las mascotas" style="filter: invert(27%) sepia(79%) saturate(1674%) hue-rotate(95deg) brightness(96%) contrast(105%);">
                        <p class="m-0 ps-2" style="color: green;">Mascotas permitidas</p>
                    </div>
                `
        } else {
            mascota = `
                    <div class="noPets">
                        <img class="icon" src="./assets/img/icon_petsNo.svg" alt="icono no permitidas las mascotas" style="filter: invert(14%) sepia(86%) saturate(7452%) hue-rotate(360deg) brightness(115%) contrast(110%);">
                        <p class="m-0 ps-2" style="color: red;">No se permiten mascotas</p>
                    </div>
                `
        }

        variable += `
        <div class=${propiedades.clase}>
            <div class="arriba">
                <img src=${propiedades.src} alt="">
                <h4>${propiedades.nombre}</h4>
                <p>${propiedades.descripcion}</p>
                <div class = "location">
                    <img class="icon" src="./assets/img/icon_ubicacion.svg" alt="icono punto de localización">
                    <p class="m-0">${propiedades.ubicacion}</p>
                </div>
                <div class = "capacidad">
                    <div class = "habitacion">
                        <img class="icon" src="./assets/img/icon_habs.svg" alt="icono habitaciones">
                        <p class="m-0 p-2">${propiedades.habitaciones}</p>
                    </div>
                    <div class = "baños">
                        <img class="icon" src="./assets/img/icon_baño.svg" alt="icono baño">
                        <p class="m-0 p-2">${propiedades.baños}</p>
                    </div>
                </div>                    
            </div>
            <div class="abajo">
                <h5 class="precio">${propiedades.costo}</h5>
                ${fumar}
                ${mascota}
            </div>
        </div>
    `
    }
    contador++
}

let inicio = document.querySelector("#prop-alquiler")
inicio.innerHTML = variable

const propiedades_venta = [
    {
        clase: "card",
        nombre: "Nueva Ñuñoa",
        src: "./assets/img/venta/nuevaÑuñoa.png",
        descripcion: "Nueva Ñuñoa es un edificio con excelente ubicación, conectado a 2 estaciones de Metro.",
        ubicacion: "Gaspar Villarroel 1840, Estadio Nacional, Ñuñoa, RM",
        habitaciones: "1 hab",
        baños: "1 baño",
        costo: "2.432 UF",
        smoke: true,
        pets: false
    },
    {
        clase: "card",
        nombre: "Alto Los Dominicos",
        src: "./assets/img/venta/altoLosDominicos.png",
        descripcion: "Alto Domínicos es un barrio privado desarrollado con altos estándares de calidad, donde destacan un elegante paisajismo, privacidad y seguridad 24/7.",
        ubicacion: "Francisco Bulnes Correa 3420, Los Dominicos, Las Condes, RM",
        habitaciones: "4 habs",
        baños: "4 baños",
        costo: "14.360 UF",
        smoke: false,
        pets: false
    },
    {
        clase: "card",
        nombre: "Aguapiedra",
        src: "./assets/img/venta/aguapiedra.png",
        descripcion: "El proyecto Aguapiedra es un exclusivo barrio privado de casas chilenas y mediterráneas ubicadas en el sector de Piedra Roja.",
        ubicacion: "Av. José Rabat 9380, Piedra Roja, Chicureo, Chicureo, Colina, RM ",
        habitaciones: "4 habs",
        baños: "3 baños",
        costo: "14.968 UF",
        smoke: true,
        pets: true
    },
    {
        clase: "card",
        nombre: "Proyecto Jofre",
        src: "./assets/img/venta/jofre.png",
        descripcion: "El proyecto Sento Jofré es un edificio de 12 pisos que cuenta con una excelente ubicación en una de las zonas más cotizadas de la ciudad.",
        ubicacion: "General Jofré 135, Santiago, Chile, Santa Isabel, Santiago, RM",
        habitaciones: "2 habs",
        baños: "2 baños",
        costo: "3.714 UF",
        smoke: false,
        pets: true
    },
    {
        clase: "card",
        nombre: "Barrio Viña Carmen",
        src: "./assets/img/venta/viñaCarmen.png",
        descripcion: "Descubre el hogar que soñabas en Barrio Viña Carmen en Buin, un lugar donde tienes campo para disfrutar a lo grande.",
        ubicacion: "Av. Villaseca 1758, Buin, RM",
        habitaciones: "3 habs",
        baños: "2 baños",
        costo: "3.297 UF",
        smoke: true,
        pets: false
    }]

    let contador2 = 0;
    let variable2 = ""
    for (let propiedad of propiedades_venta) {
        if (contador2 < 3) {
            let fumar2 = "";
            let mascota2 = "";
            if (propiedad.smoke) {
                fumar2 = `
                        <div class="siFumar">
                            <img class="icon" src="./assets/img/icon_fumarSi.svg" alt="icono permitido fumar" style="filter: invert(27%) sepia(79%) saturate(1674%) hue-rotate(95deg) brightness(96%) contrast(105%);">
                            <p class="m-0 ps-2" style="color: green;">Permitido fumar</p>
                        </div>
                    `
            } else {
                fumar2 = `
                        <div class="noFumar">
                            <img class="icon" src="./assets/img/icon_fumarSi.svg" alt="icono permitido fumar" style="filter: invert(14%) sepia(86%) saturate(7452%) hue-rotate(360deg) brightness(115%) contrast(110%);">
                            <p class="m-0 ps-2" style="color: red;">No se permite fumar</p>
                        </div>
                    `
            }
            if (propiedad.pets) {
                mascota2 = `
                        <div class="siPets">
                            <img class="icon" src="./assets/img/icon_petsSi.svg" alt="icono permitidas las mascotas" style="filter: invert(27%) sepia(79%) saturate(1674%) hue-rotate(95deg) brightness(96%) contrast(105%);">
                            <p class="m-0 ps-2" style="color: green;">Mascotas permitidas</p>
                        </div>
                    `
            } else {
                mascota2 = `
                        <div class="noPets">
                            <img class="icon" src="./assets/img/icon_petsNo.svg" alt="icono no permitidas las mascotas" style="filter: invert(14%) sepia(86%) saturate(7452%) hue-rotate(360deg) brightness(115%) contrast(110%);">
                            <p class="m-0 ps-2" style="color: red;">No se permiten mascotas</p>
                        </div>
                    `
            }
    
            variable2 += `
            <div class=${propiedad.clase}>
                <div class="arriba">
                    <img src=${propiedad.src} alt="">
                    <h4>${propiedad.nombre}</h4>
                    <p>${propiedad.descripcion}</p>
                    <div class = "location">
                        <img class="icon" src="./assets/img/icon_ubicacion.svg" alt="icono punto de localización">
                        <p class="m-0">${propiedad.ubicacion}</p>
                    </div>
                    <div class = "capacidad">
                        <div class = "habitacion">
                            <img class="icon" src="./assets/img/icon_habs.svg" alt="icono habitaciones">
                            <p class="m-0 p-2">${propiedad.habitaciones}</p>
                        </div>
                        <div class = "baños">
                            <img class="icon" src="./assets/img/icon_baño.svg" alt="icono baño">
                            <p class="m-0 p-2">${propiedad.baños}</p>
                        </div>
                    </div>                    
                </div>
                <div class="abajo">
                    <h5 class="precio">${propiedad.costo}</h5>
                    ${fumar2}
                    ${mascota2}
                </div>
            </div>
        `
        }
        contador2++
    }
    
    let inicio2 = document.querySelector("#prop-venta")
    inicio.innerHTML = variable2