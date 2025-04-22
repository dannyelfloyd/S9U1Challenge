const os = require('node:os');
function getData() {
    const interfaces = os.networkInterfaces();
    const nets = {};

    Object.keys(interfaces).forEach(interface => {
        nets[interface] = interfaces[interface].map(iface => {
            return {
                Familia: iface.family,
                Direccion: iface.address,
                Interno: iface.internal
            }
        })
    })
    return nets
};
module.exports = getData;