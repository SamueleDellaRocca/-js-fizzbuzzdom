let boxNumero = document.querySelector('.carte');

let container = document.querySelector('.container')

const elemento = document.createElement('a')

boxNumero.append("qualcosa da appendere", elemento)





for (let numero = 1; numero <= 100; numero++) {


    if (numero % 3 == 0 && numero % 5 == 0) {
        boxNumero.innerHTML = boxNumero.innerHTML + `<div class="box fizzbuzz">fizzbuzz<\div>`

    } else if (numero % 5 == 0) {
        boxNumero.innerHTML = boxNumero.innerHTML + `<div class="box buzz">buzz<\div>`

    } else if (numero % 3 == 0) {
        boxNumero.innerHTML = boxNumero.innerHTML + `<div class="box fizz">fizz<\div>`

    } else {
        boxNumero.innerHTML = boxNumero.innerHTML + `<div class="box">${numero}<\div>`

    }


}

