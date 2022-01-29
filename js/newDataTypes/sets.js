// los sts en javaScript
// el set permite eliminar datos duplicados dentro del un arreglo

// este es el metodo original
// no permite valores repetidos
const set = new Set()

set.add(2)
set.add(2)
set.add(4)
console.log(set)
// para convertir ese metodo en un arraglo uso lo que definí abajo

const arreglo = [...new Set(set)]
console.log(arreglo)
arreglo.push(4) // despues de modificarlo a un arreglo puedo añadir elementos repetidos de manera normal, me tocaria usar otro set
console.log(arreglo);

const arregloNoRepeat = [...new Set(arreglo)]
console.log(arregloNoRepeat);





const arreglo = [1,1,2,2,3,6,1,4,4,7,7,8,8,6]
console.log(arreglo,arreglo.length);

const arregloSinDuplicados = [new Set(arreglo)]
arregloSinDuplicados.add(2)
console.log(arregloSinDuplicados)
// si lo dejo asi no mas me crea un objeto set de 7 posiciones, pero si lo que yo quiero hacer es una "copia" del arreglo uso el spread operator before el new
console.log(arregloSinDuplicados);


// ahora si, me crea un arreglo con un "identificador unico" por cada valor, por ende no deja que existan valores repetidos
const ARREGLO_SIN_DUPLICADOS = [...new Set(arreglo)]
console.log(ARREGLO_SIN_DUPLICADOS);
console.log(ARREGLO_SIN_DUPLICADOS[0]);
ARREGLO_SIN_DUPLICADOS.push(2) // se puede agregar el 2, y quedarian ambos 2
console.log(ARREGLO_SIN_DUPLICADOS);

