/*
Tipo de dato map

es muy parecido a un objeto primitivo

*/

console.log("uso map");
console.log("uso map");
console.log("uso map");
// el metodo map usa get and set, set para agregar elementos
let mapa = new Map();
mapa.set("nombre","john")
mapa.set("apellido","rodriguez")

console.log(mapa); /*?*/
console.log(mapa.size);

// para obtener el valor pues se usa el metodo set, (este map, crea como un objeto un poco mas privado)

console.log(mapa.get("nombre"))

//para eliminar
/* mapa.delete("pasoLaKey") */

// recorrer un mapa
console.log("iteracion de un map");
for(let [key,value] of mapa){
    console.log(`Llave : ${key}, valor: ${value}`);
}


// otra forma de crear el map
const MAPITA = new Map([
    ["nombre","john"],
    ["apellido","rodriguez"],
    [10,"diez"]
])

console.log(MAPITA);
console.log(MAPITA.get("nombre"));


for(let [llave,valor] of MAPITA){
    console.log(`llave: ${llave} , valor: ${valor}`);
}