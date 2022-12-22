const entradas = [23, 44, 100, 65, 12, 78, 02, 82, 05, 88, 11, 89];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};