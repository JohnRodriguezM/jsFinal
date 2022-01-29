/* console.log(pause);
console.log(Object.keys(persona)) //  propiedad-metodo(name)
console.log(Object.values(persona)) // valor (propiedad-metodo)
console.log(Object.entries(persona))// proíedad - valor
console.log(Object.assign(persona)) // "copia el objeto"



*/


  // los Symbol nos permiten crear identificadores únicos, con una referencia unica
  let id = Symbol("hola")
  let id2 = Symbol("hola")
  console.log(id === id2); //?



console.log(typeof id,typeof id2);

// como agregar un simbolo a un objeto
// EL SYMBOL SE VUELVE TOTALMENTO PRIVADO

const NAME_ID = Symbol()

const persona = {
    [NAME_ID]: "juan ramirez perez"
}
persona.hobbie = "futbol"

// solo se puede llamar de esta manera, no con la notación del punto
console.log(persona[NAME_ID]);

/* for(let valores of persona){
    console.log(valores);
} 

este ciclo no se puede realizar en objeto
*/

for(let propiedades in persona){
    console.log(propiedades);
}
// en este for solo me muestra los atributos o metodos "publicos" del objeto, mas no los privados como los Symbols

/*para obtener esos simbolos privados, se debe usar el siguiente metodo*/
console.log(keys);
console.log(Object.getOwnPropertySymbols(persona));
