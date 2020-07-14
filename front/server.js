import express from 'express';
import config from './config';
import fs from 'fs';
const server = express();

server.get('/', (req,res) => {
  res.send('Biodun is the greatest')
});

server.get('/about', (req,res) => {
    fs.readFile('./about.html',(err,data) => {
        console.log(data)
        res.send(data.toString());
    })
  });

  server.use(express.static('public'));
server.listen(config.port,() => {
    console.info(`listening on porte ${config.port}`);
})
