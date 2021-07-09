// typescript puede especificar el tipo de dato en la funcion y especificar el dato de retorno
function getNum(numero) {
    if (numero === void 0) { numero = 12; }
    return "el numero es: " + numero;
}
console.log(getNum(55));
