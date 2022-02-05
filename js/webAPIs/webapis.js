// hay un monton de web apis
//https://developer.mozilla.org/es/docs/Web/API

// analisis del BOM (browser object model)

/*
manipular propiedades y eventos de la ventana del navegador*/



console.log(document);
const $section = document.getElementById('rooot')
console.log($section);

const div = document.createElement('div')

$section.appendChild(div)
div.textContent = "holas soy una super etiqueta div"

div.addEventListener('click',()=>{
    div.style.color = "red";
})


const $sectionBom = document.getElementById('sectionBom')

console.log($sectionBom);

let botonesArray = []

for(let i = 0; i < 3; i++){
    let botones = document.createElement('button')
    $sectionBom.append(botones)
    botonesArray.push(botones)
    botones.textContent = `boton ${i}`

}

let ventana = 'https://jonmircha.com'


console.log(botonesArray);

botonesArray[0].addEventListener('click',(e)=>{
    /*window.*/open(ventana)
})


// el bom no es un estanda, este no sirve
botonesArray[1].addEventListener('click',()=>{
    close(ventana)
})
// metodo para imprimir
botonesArray[2].addEventListener('click',()=>{
    window.print()
})

