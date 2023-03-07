const EventEmitter = require("events");

const celebrity = new EventEmitter();


celebrity.on('race win', function() {
  console.log('Congrats')
})

celebrity.on('race win', function() {
  console.log('Boo')
})



celebrity.emit('race win')