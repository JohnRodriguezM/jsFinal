// this en js: contexto actual de ejecucion

// el this en todo scope de bloque cambia al mismo objeto, ya no es el objeto global en esos casos


//las funciones normales crean scope interno
// las arrow functions no //IMPORTANTISIMO


console.log(window);


// en inicio, this hace referencia al objeto global, que es justamente el objeto window
console.log(this);


// dentro de este tipo de funciones, this sigue haciendo referencia al objeto global web( window )
function suma(nombre){
    console.log(nombre);
    console.log(this)// sigue "absorbiendo el this directo del objeto global"
}

suma("john");


// por el contrario en las arrow functions
const miFuncion = (nombre)=>{
    console.log(nombre);
    console.log(this)// sigue "absorbiendo el this directo del objeto global, se vuelve inejecutable por ejemplo (this.nombre)"
}


miFuncion("john")


const Mi_objeto ={
    nombre: "contexto objeto",
    imprimir(){
        console.log(this); // aqui cambia el valor de this, ya que el contexto de ejecucion es el mismo objeto, imprime el objeto mismo
        console.log(this.nombre);// aqui imprime el valor definido en la propuedad nombre;
    },
}

Mi_objeto.imprimir()



// this en clases

class Prueba {
    constructor({nombre,edad}){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(this.nombre,this.edad); // se ejecuta la linea 48 cuando la llamo abajoo.
    }
}

let prueba1 = new Prueba({
    nombre: "john",
    edad: 20,
})

prueba1.imprimir()


// tema curioso con las funciones (normales vs arrow Functions)

this.nombre = "contexto global"


function imprimir() {
    console.log(this.nombre);
}


const obj = {
    nombre: "contexto local",
    imprimir,
}

obj.imprimir() // que ejecuta esto ? algo (global o local?)
// pues bien, las fucntions normales absorben el contexto local, por ende arroja (contexto local)

/*
arrow function
*/

const impresion = () =>{
    console.log(this.nombre); 
}


const obj2 = {
    nombre: "contexto local",
    impresion,
}

obj2.impresion() // que ejecuta esto ? algo (local o global?)
// pues bien a diferencia de las funciones normales, las arrow function siguen vinculadas al contexto donde fueron creadas, en este caso, el contexto global, incluso si fuera declara internamente


const obj3 = {
    nombre: "contexto local",
    impresion: () => {
        console.log(this.nombre);
    }
}

obj3.impresion()// tambien se iria de una al contexto global

// es ventaja y desventaja a la vez, saberla usar

console.clear()