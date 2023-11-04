// Cree una función que tome un número entero como argumento y devuelva números "Even"pares o "Odd"impares.

const entero = (number) => {
    return number % 2 == 0 ? "Even" : 'Odd'
}

console.log( entero(2));