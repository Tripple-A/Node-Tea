import express from 'express';
import apiRouter from './api';
import config from './config';
import serverRender from './api/serverRender'

import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req,res) => {
  serverRender().then(ans => {
    const {data, markUp} = ans
    res.render('index', {
        data,
        markUp
      });
    res.end()
  })
});


server.use(express.static('public'));
server.use('/api',apiRouter);

server.listen(config.port,config.host,() => {
  console.info(`listening on porte ${config.port}`);
});
