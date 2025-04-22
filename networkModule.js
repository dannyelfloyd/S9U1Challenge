//En el archivo networkModule.js deberás sacar los siguientes datos de red:
    const net = require('node:net');
    console.log(`${net}`);
    //Interfaz
    // Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.
    console.log(`networkModule.js  
        Familia: ${new net.SocketAddress().family}, 
        Dirección: ${new net.SocketAddress().address}, 
        Interno: ${net}
    `);
    function getData() {
            let netData = {
                family: new net.SocketAddress().family,
                address:new net.SocketAddress().address, 
                internal: 'true'
            };
            return netData;
        };
        module.exports = {getData};