import express from 'express';
import apiRouter from './api';
import config from './config';
const server = express();
server.set('view engine', 'ejs');

server.get('/', (req,res) => {
  res.render('index', {
      content: 'Hey there and <b> you </b>'
  });
});


server.use(express.static('public'));
server.use('/api',apiRouter);

server.listen(config.port,() => {
    console.info(`listening on porte ${config.port}`);
})
