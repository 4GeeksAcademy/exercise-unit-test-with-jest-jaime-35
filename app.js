// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInyen = valueInEuro * 156.5;
    // Retornamos el valor en dólares
    return valueInyen;
}
const fromEuroToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromEuroToYen,fromEuroToPound };