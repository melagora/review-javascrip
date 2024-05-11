//decimales: 0, 1, 2, 3, 4, 5, ,6, 7, ,8 ,9
//bit: 0, 1
//byte: 8 bits
//byte: 00000000

//byte: 00000000 -> 0
//byte: 00000001 -> 1
//byte: 00000010 -> 2
//byte: 00000011 -> 3
//byte: 00000100 -> 4
//byte: 00000101 -> 5
//byte: 00000110 -> 6

//Toma la cadena de bytes y crea un nuevo byte si alguno de esos 2 digitos tiene un 1 en esa cadena y marca 1
console.log (1 | 3); //00000011 -> 3
console.log (1 | 4); //00000101 -> 5
console.log (3 | 5); //00000111 -> 7

//Toma la cadena de bytes y crea un nuevo byte siempre y cuando ambos bits sean 1 para marcar 1
console.log (1 & 3); //00000001 -> 1
console.log (1 & 4); //00000000 -> 0
console.log (3 & 5); //00000001 -> 1