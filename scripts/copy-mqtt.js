// Menyalin library MQTT ke folder www supaya aplikasi bisa jalan tanpa CDN
const fs = require('fs');
fs.copyFileSync('node_modules/mqtt/dist/mqtt.min.js', 'www/mqtt.min.js');
console.log('mqtt.min.js disalin ke www/');
