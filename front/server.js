import https from 'https';
import http from 'http';
import config, { logStars } from './config';

https.get('https://www.lynda.com',res => {
  //console.log('response status:', res.statusCode);

  res.on('data',chunk => {
    // console.log(chunk.toString());
  });
});

const server = http.createServer((req, res) => {
    res.write('Hello HTTP!\n');
    setTimeout(() => {
      res.write('I can stream!\n');
      res.end();
    }, 3000);
  });

server.listen(config.port);

//logStars('Biodun the great');


