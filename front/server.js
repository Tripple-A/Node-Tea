import express from 'express';
import apiRouter from './api';
import config from './config';
const server = express();

server.get('/', (req,res) => {
  res.send('Biodun is the greatest');
});


server.use(express.static('public'));
server.use('/api',apiRouter);

server.listen(config.port,() => {
    console.info(`listening on porte ${config.port}`);
})
