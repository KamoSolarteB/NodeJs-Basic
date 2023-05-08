const { readFile } = require("fs/promises");
// const { promisify } = require('util')

/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}; */

// const readFilePromise = promisify(readFile)

/* getText("./data/first.md")
  .then((res) => console.log(res))
  .then(() => getText("./data/first.md"))
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */


const read = async () => {
  try {
    // throw new Error('Esto es la creacion de un error')
    const result = await readFile('./data/first.md', 'utf-8')
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
read()