// AND, OR , NOT

//AND &&
let mayor = false;
let suscrito = true;

console.log("Operador AND: " ,mayor && suscrito); //Las dos condiciones deben ser ciertas para que pase ( devuelva true).
//console.log(true && true);
//console.log(false && true);

//OR ||
console.log("Operador OR: " ,mayor || suscrito); //Almenos una de las condiciones debe ser cierta para que pase (devuelva true).

//NOT !
console.log("Operador NOT: " ,!mayor); //Invierte el valor de mi condición

let soloCatalogoInfantil = !mayor;