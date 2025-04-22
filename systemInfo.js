const osModule = require('./osModule.js');
const networkModule = require('./networkModule.js');

console.log('systemInfo.js', osModule.getData());
console.log('systemInfo.js', networkModule.getData());