var mqtt = require('mqtt')

const fs = require('fs');


var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
client.subscribe('broj')
});
console.log('Subsciber #1 is online!');
console.log('Receiving message...');
client.on('message', function(topic, message) {
context = message.toString();
console.log(context)
fs.appendFile('brojevi.txt', context + "\n", function(error) {
    if(error) throw error;
});
});