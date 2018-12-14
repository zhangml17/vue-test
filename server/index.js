const routerApi =require('./router');
const bodyParser = require('body-parser'); // post数据需要
const express = require('express');
const app = express();


app.use(bodyParser.json());
app.use('/api',routerApi);


app.listen(3000);
console.log('success listen at port:3000 .....');
