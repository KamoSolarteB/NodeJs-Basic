const EventEmmiter = require("events");

const customEmmiter = new EventEmmiter();
customEmmiter.on("response", (data) => {
  console.log(data);
});

customEmmiter.emit('response', 'Hello world')