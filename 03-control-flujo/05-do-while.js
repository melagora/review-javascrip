//Cuales son los numeros pares

let numero = 0;

while (numero < 10) {
    if (numero % 2 == 10) {
        console.log("Número par", numero)
    }
    numero++;
}

//////////

do {
    if (numero % 2 == 10) {
        console.log("Número par", numero)
    }
    numero++;
} while (numero < 10);
