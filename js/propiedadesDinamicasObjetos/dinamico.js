const objUsuarios = {};
const usuarios = [
    "john",
    "pedro",
    "camila",
    "juan",
    "felipe",
];

let dinamismo = usuarios.forEach((el,index)=> {
    objUsuarios[`_${el}`] = index;
})
/*  console.log(objUsuarios);  */

class Usuarios{
    constructor({name}){
        this.name = name;
    }
}


let equipoAjedrez = new Usuarios({
    name: usuarios,
})

/* console.log(equipoAjedrez.name); */

 let dinamismo2 =  equipoAjedrez.name.forEach((el,index)=>{
     equipoAjedrez[`_${el}`] = index;
 })

 /* console.log(equipoAjedrez) */
 console.log(equipoAjedrez);

 console.clear()