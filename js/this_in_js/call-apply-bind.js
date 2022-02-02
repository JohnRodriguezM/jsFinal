// metodos para conservar el this de algo

this.nombre = "con.global"

function saludar(edad,peso) {
    console.log(`${edad} ${this.nombre} ${peso}`);
}


saludar()// se ejecuta solo con el this.nombre, hasta que le pase los argumentos de los parametros

// no crea su propio contexto
const saludito = () => {
    console.log(`${this.nombre}`);
}

let objeto = {
    nombre: "con.local",
}

saludar.call(objeto,20,75)

// uso del metodo call "llamar un una funcion y meterla a un this"//
console.clear()


// uso del metodo bind

const personita = {
    nombre: "john",
    saludar(){
        console.log(`hola ${this.nombre}`);// apunta al this local
    }
};
personita.saludar()


const otraPersona = {
   /*  nombre: "pedro", *///  si dejara este pedro podria hacerlo sin bind. agarra este nombre
    // si ejecuto solo personita.saludar(), me sale hola undefined, pero con el bind, le "ligo ese this a este objeto ---- .bind(objeto)"
    saludar: personita.saludar.bind(personita) // me trae el this.name que se ejecuta en ese contexto y en esa funcion
}

otraPersona.saludar(); 

