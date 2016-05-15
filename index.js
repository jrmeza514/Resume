const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer( app );

app.use( express.static( `${__dirname}/dist/` ) );

app.get('/', ( req , res ) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

server.listen( 8000 );
