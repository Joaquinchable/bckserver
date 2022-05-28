Pasos para pruebas y Complementos Api REST con Nodejs Express Sequelize y MariaDB


1. Correr npm run dev en la terminal 


En Caso de Errores revisar este repositorio y comparar el codigo de aqui con el de ustedes
revisar posibles errores de typo, revisar declaraciones, modulos de terceros etc..

2. Abrir Postman (pueden descargarlo o pueden acceder por la extencion de Google Chrome)
aqui les dejo la url a la extencion

https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en

Les abrira una Venta como esta  les dara la posibilidad igual de descarga que pueden omitir Postman funciona muy bien con la extencion.


3. Abrir terminal de MariaDB tendremo dos terminales Arriba 

4. Configurar nuestro Usuario contraseña y base de datos en MariaDB

despues de configurar nuestro Usuario y contraseña en  MariaDB 

pasamos la informacion en nuestra carpeta config y agregamos nuestro user el nombre de nuesta base de datos y nuestra contraseña , lo mismo haremos en el db.js 




comando para crear nuestras migrations 

./node_modules/.bin/sequelize migration:create --name CreateTableReviews

Comando de migraciones Generales 

./node_modules/.bin/sequelize db:migrate