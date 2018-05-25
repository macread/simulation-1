const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());


const port = 4000;

massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection);
  })

  app.get('/api/inventory',controller.inventory);
  app.get('/api/product/:id',controller.getProduct);
  app.post('/api/product',controller.product);
  app.delete(`/api/product/:id`,controller.delete);


app.listen( port, () => { console.log(`Server listening on port ${port}`); })