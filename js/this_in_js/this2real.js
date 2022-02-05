// 2da explicacion de thisInJs

this.nombre = "desde el contexto"


const harry = {
    nombre : "potter",
    saludo: function saludoNombre(){
        console.log(`holaaa ${this.nombre}`);
    }
}

harry.saludo()// potter

const funcionSaludoHarry = harry.saludo

funcionSaludoHarry();// undefined, no he enlazado el objeto this

const funcionSaludoHarry2 = harry.saludo.bind(harry) // le enlazo el obj harry

funcionSaludoHarry2() // me arrohja hola potter porque ligue el contexto del objeto harry



/////////////////////
let boton = document.getElementById('saludar')
console.log(boton);
boton.addEventListener('click',()=>{
    harry.saludo() // devuele hola potter
    // PORQUE LAS ARROW FUNCTIONS TIENEN UN BIND IMPLICITO
})

let boton2 = document.getElementById("saludar2")
/*
aqui no enlazo, arroja hola undefined
boton2.addEventListener('click',harry.saludo)
*/
// aqui se le enlazo
boton2.addEventListener('click',harry.saludo.bind(harry))

console.clear()


const john = {
    nombre: "john",
    saludo(grito,suave){
        const saludoSuave = `hola que gusto verte ${this.nombre}`
        const despedidaSuace = `chaito ${this.nombre}`

        const saludo = grito ? saludoSuave.toUpperCase():
        saludoSuave;
        const despedida = suave ? despedidaSuace.toUpperCase() : despedidaSuace

        if(grito && suave){
            console.log(saludo);
            console.log(despedida);
        }else if(grito && !suave){
            console.log(saludo)
            console.log(despedidaSuace)
        }else if(suave && !grito){
            console.log(despedida)
            console.log(saludoSuave)
        }else{
            console.logs(saludoSuave,despedidaSuace)
        }
    }
}

john.saludo(true,false)

const pepe = {
    nombre: "pepe"
}

// call recibe un valor para this()
// call invoca la funcion de una(metodo)
john.saludo.call(pepe,true,false)

// bind() solo enlaza el contexto de this