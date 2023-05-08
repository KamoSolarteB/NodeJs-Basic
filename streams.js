/* const {  writeFile } = require('fs/promises')

const createBigFile = async () => {
	await writeFile('./data/bigFile.md', 'Hello world')
}
createBigFile() */

const { createReadStream } = require("fs");
const stream = createReadStream("./data/bigFile.md", 'utf-8');
stream.on("data", (chunk) => {
  console.log(chunk);
});
stream.on('end', () => {
	console.log('Termino la ejecucion');
})