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



app.listen( port, () => { console.log(`Server listening on port ${port}`); })