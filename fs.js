const fs = require('fs')

/* fs.writeFileSync('./data/first.md', 'Holla primer mundo')
const first = fs.readFileSync('./data/first.md')
console.log(first.toString());

fs.writeFileSync('./data/first.md', ' Este texto sera agregado gracias al objeto que sera pasado', {
  flag: 'a',
}) */

fs.readFile('./data/first.md', (err, data) => {
  err ? err : console.log(data.toString());

  fs.writeFile('./data/newFile.md', 'Archivo creado desde fs', (err, data) => {
    err ? err : console.log(data);
  })
})