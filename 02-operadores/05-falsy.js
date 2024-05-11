//short-circuit

// /* Falso */
// false
// 0
// ""
// null
// undefined
// NaN

let nombre = "";
let username = nombre || "Anonimo";

console.log(username);

function fn1(){
    console.log("Soy función 1");
    return true;
}

function fn2(){
    console.log("Soy función 2");
    return true;
}

let x = fn1() && fn2();