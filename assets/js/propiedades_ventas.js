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

let card = ""
for (let propiedad of propiedades_venta) {
    let fumar = "";
    let mascota = "";
    if (propiedad.smoke) {
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
    if (propiedad.pets) {
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

    card += `
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
                    ${fumar}
                    ${mascota}
                </div>
            </div>
        `
}

const cards = document.querySelector("#propiedades")
cards.innerHTML = card