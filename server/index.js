const express = require('express');
const bodyParser = require('body-parser');

const bc = require('./books_controller.js');

const port = 3005;

app = express();
app.use(bodyParser.json());




const baseUrl = "/api/books";
app.post( baseUrl, bc.create);
app.get( baseUrl, bc.read );
app.put( `${baseUrl}/:id`, bc.update );
app.delete( `${baseUrl}/:id`, bc.delete );


app.listen(port, ()=> console.log("Done Listening!"));
