'use strict'

// valores primitivos
// (nombre, string, boolean)


let a = 2
let b = a  // asignación de valor // a no cambia en esta situación, solo b adquiere su valor.
console.log('al crear b', a, b)
b = b * b
a = a / 2      // 1

console.log('valor de b', b) // 4
console.log('valor de a', a) // 2

b = a

console.log('valor de b', b)


// valores referenciados

let p1 = {nombre: 'Pepe', edad: 34}
let p2 = p1  // asignación de referencia
p1.nombre = 'Juan'

console.log(p1)
console.log(p2)



