//Escribe una función que combine dos matrices ordenadas en una sola. Las matrices sólo contienen números enteros. Además, el resultado final debe estar ordenado y no tener duplicados.

const order = (a, b) => {
    return [...new Set(a.concat(b).sort((a,b)=> a-b))] 
}

console.log( order([1, 3, 5], [2, 4, 6]));