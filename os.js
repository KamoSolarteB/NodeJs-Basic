const os = require('os')

console.log(os.hostname());
console.log(os.uptime());
console.log(os.platform());
console.log(os.freemem());

console.table({
  os: os.platform(),
  totalMemory: os.totalmem(),
})