'use strict' // Modo estricto de JS, no te deja inicializar variables sin declarar

///////////////////////////////////////

// undefined
// boolean
// number (int, float)
// object
// string

///////////////////////////////////////

// Saca de mi mente todas esas preocupaciones que no me están dejando pensar


// ES6


// let saludo // declarar variable => tipo undefined.
// saludo = 'hola' // inicializar la variable saludo. Adquiere el tipo string.
// let user = 'Pepe' // declarar + inicializar (le doy nombre y valor) Es lo mas recomendable.

// MALA PRÁCTICA:

// curso = 'JavaScript' // Inicializar la variable sin declarar.

// CARÁCTER VACÍO O NULO es MEJOR PRÁCTICA (se define mas tarde):

// let saludo = ''

// LO IDEAL

// let saludo = 'Hola' // declarar + inicializar (le doy nombre y valor)




// DECLARACIÓN DE LA FUNCIÓN: (QUIZÁS NO LA USE, LA TENGO DECLARADA POR SI LUEGO ME HACE FALTA INVOCARLA O EJECUTARLA O USARLA)

function saludar() {
    let saludo = 'Hola'
    console.log(saludo)
}

// INVOCACIÓN:

saludar()

// SI QUIERO QUE SALUDE A ALGUIEN:

// function saludar(nombre = amigo) {
//     let saludo = 'Hola '
//     console.log(saludo + nombre)
// }

// O BIEN:

// function saludar(nombre) {
//     let saludo = 'Hola '
//     console.log(saludo + nombre)
// }

// saludar('Pepe')
// saludar('Elena')
// saludar()

//////////////////////////////////////////////////

// SEPARACIÓN DE RESPONSABILIDADES o INTERESES:

// @param {number}
// @param {number}
// @returns {number}


function sumar(a = 0,b = 0) {
    // let c = a + b
    // return c
    return a + b
}


function restar(a = 0,b = 0) {
    return a - b
}

function multiplicar(a = 0,b = 1) {
    return a * b
}


function dividir(a = 0,b = 1) {
    return a / b
}



function probar() {
    let x = 12
    let y = 12
    mostrar(sumar(2,2))
    mostrar(sumar(x,y))
    mostrar(restar(8,2))
    mostrar(multiplicar(8,2))
    mostrar(dividir(8,2))
}



// La función mostrar recibe un texto y lo saca por la pantalla:

// @param {string}
// @returns {void}


// function mostrar(neuronas) {
//     console.log(neuronas)
// } 







