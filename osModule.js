const os = require('node:os');
function getData() {
    let osData = {
        name: os.hostname(),
        type: os.type(), 
        version: os.version(), 
        arch: os.arch(), 
        cpus: os.cpus().length, 
        totalmem:  toMB(os.totalmem()),
        freemen: toMB(os.freemem()),
    };
    return osData;
};
function toMB(value) {
    return `${(value / 1024 /1024).toFixed()} MB`
};
module.exports = getData;