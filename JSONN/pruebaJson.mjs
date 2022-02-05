// json es un sistema sencillo para "intercambio de informacion"
// previo a json se usaba en gran mayoria xml para el intercambio de informacion, aunque aun sigue persistente a caido en gran desuso

// json no es exclusivo de javaScript, de hecho, la gran mayoria de los lenguajes de programacion tienen el soporte necesario para recibir el formato JSON

/*
el formato JSON acepta la gran mayoria de tipos de datos, la estructura de un formato json es una especie de objeto en
*/

 const urlJson = '../datos.json'

fetch(urlJson)
.then((response) => {
    return response.json()
})
.then((dataJson) => {
let array = dataJson.personas
return array})
.then((nombres) => {
    console.log(nombres.map((el)=>{
        console.log(el.nombre);
    }))
})

// no sirve en este momento porque el array esta siendo usado para hacer el map
/*
.then((nombres2) => {
    nombres2.forEach((el,index)=> {
        console.log(el,index)
    })
}) */



// metodos de JSON que se pueden usar dentro de js
/*

metodo1 = JSON.stringify()

me pasa cualquier tipo de dato a una cadena de texto


metodo2 = JSON.parse()


me pasa un tipo de dato string a un tipo de dato como un array, un objeto, un valor booleano u otro tipo de dato dentro de js



*/

console.log(JSON);



console.log(
    JSON.stringify({}) // lo que deberia ser un objeto me lo deja como un valo string
)

console.log(
    JSON.parse("{}")// a pesar de recibir como string me lo deja como un obejto, totalmente contrario al metodo stringify
);