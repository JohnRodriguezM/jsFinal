
console.clear()

console.log("url location");
console.log(location);
// el location.assign() me permite cambiar el lugar de location valga la redundancia de mi pagina web
// en este caso se le asigna la location a la pag main de google

/* console.log(location.assign('https://www.google.com')); */
console.log(location.ancestorOrigins);
console.log(location.hash = "hola");

// me da mi hostname, en este caso seria mi localhost ya que estoy trabajando con el liveServer del vsCode
console.log(location.hostname);
console.log(location.pathname);


console.log("objeto history, cuelga de window");
console.log(history);



// metodos para navegar entre paginas

console.log("objeto navigator");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.onLine = false);

console.log(navigator.serviceWorker);// para hacer pwa

console.log(navigator.userAgent);