// En el archivo osModule.js deberás sacar los siguientes datos:
    const os = require('node:os');
    console.log(`${os}`);
    //Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
    console.log(`osModule.js  
        Nombre: ${os.hostname()}, 
        Tipo: ${os.type()}, 
        Versión: ${os.version()}, 
        Arquitectura: ${os.arch()}, 
        CPUs: ${os.cpus()[0].speed} MHz, 
        Memoria Total: ${(Math.floor((os.totalmem()/ 1024) /1024))%1024} MB, 
        Memoria Libre: ${(Math.floor((os.freemem()/ 1024) /1024))%1024} MB
    `);
    // Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer
    function getData() {
        let osData = {
            name: os.hostname(),
            type: os.type(), 
            version: os.version(), 
            arch: os.arch(), 
            cpus: os.cpus()[0].speed, 
            totalmem: (Math.floor((os.totalmem()/ 1024) /1024))%1024, 
            freemen: (Math.floor((os.freemem()/ 1024) /1024))%1024
        };
        return osData;
    };
    module.exports = {getData};