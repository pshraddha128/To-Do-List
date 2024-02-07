import express from 'express';

import Connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';

import bodyParser from 'body-parser';
const app = express();
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded( {extended:true} ));

app.use('/',Routes);
const PORT = 3000;
Connection();
app.listen(8000, () => {
    console.log('Server is running on port 3000');
  });