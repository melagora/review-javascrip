/**
 * Indice validar que no sea menor a cero y el elemneto exista
 * en el array
 */

function getbyIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return "Este elemento no existe";
    }

    // if(arr.length <= idx){
    //     return "Este elemento no existe"
    // }
    return arr[idx];
}

let resultado = getbyIdx([1, 2], 0);
console.log(resultado);