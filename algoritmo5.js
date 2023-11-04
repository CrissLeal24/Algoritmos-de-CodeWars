//Un héroe se dirige al castillo para completar su misión. Sin embargo, ¡le han dicho que el castillo está rodeado por un par de dragones poderosos! cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe llevar. Suponiendo que agarrará una cantidad específica de balas y avanzará para luchar contra otra cantidad específica de dragones, ¿sobrevivirá?
//Devuelve verdadero si es así, falso en caso contrario :)


const heroe = (bullets, dragons)=> {
    return bullets >=  dragons * 2 ? true : false
}
console.log( heroe(0, 1) );