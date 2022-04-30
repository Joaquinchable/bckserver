const express = require('express');
const { json } = require('express/lib/response');
const app = express();

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));


app.listen(3001, () => {
    console.log(`Express on port 3001`);
  });


 
// Productos 
// Review
// Users 
// Order 

// crear la relacion entre Productos Users y Order

// Como instalar mariadb 
// Fundamentos de mariadb Video 