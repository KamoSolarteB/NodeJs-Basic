>> npm
>> dependencies
npm genera un atributo llamado dependencies, como su nombre lo indica aqui se encontrara lo que necesita el proyecto para funcionar bien, ejemplo:
{
  "dependencies": {
    "nodemon": "^2.0.19",
    ...
    ...
  }
}
>> scripts
Tambien hay algo llamado scripts, los cuales como su nombre lo indica es para ejecutar, ejemplo:
{
  "dependencies": {},
  "scripts": {
    "start": "node index.js"
  }
}
>> instalacion: npm i <dependencias>
Una vez tenemos todas nuestras dependencias instaladas si borramos el archivo por accidente no tendremos que volver a instalar todo, sino que ejecutaremos el comando npm i y el buscara el archivo donde estan las dependencias alojadas y las instalara todas automaticamente

>> Tags
Cuando instalamos dependencias tenemos 2 tipos de tags, tenemos -D y -g:
-D: esto generara un atributo devDependencies a lo que se refiere es que son dependencias que sirven para facilitar y que sea mas comodo el desarrollo de una aplicacion y estas no son necesarias para el funcionamiento correcto de la aplicacion.

-g: esto descargara la dependencia a nivel global en la computadora y no en el proyecto como suele ser.

>> npx
npx sirve como un ejecutador de paquetes, es decir este no lo instala en el proyecto si no que lo ejecuta directamente, sirve cuando no queremos instalarlo en nuestro proyecto solo queremos usarlo