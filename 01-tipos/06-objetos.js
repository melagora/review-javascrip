//Personaje de tv

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",        //Propiedad: atributo
    anime: "Demon Slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 24;
personaje["edad"] = 25;

delete personaje.anime;

console.log(personaje);