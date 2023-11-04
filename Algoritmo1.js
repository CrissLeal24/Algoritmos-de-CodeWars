//En esta sencilla tarea te dan un número y tienes que hacerlo negativo. ¿Pero tal vez el número ya sea negativo? 

const negative = (num) => {
    return  num > 0 ? num * -1 : num
}

console.log(negative(100));