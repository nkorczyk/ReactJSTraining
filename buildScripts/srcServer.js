import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
