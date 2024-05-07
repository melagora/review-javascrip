function suma(a, b){        //parametros
    console.log(arguments);
    return a + b + 2;
}

let resultado = suma(5, 6, 1, 2, 3); //argumentos
console.log(resultado);
console.log(typeof suma);