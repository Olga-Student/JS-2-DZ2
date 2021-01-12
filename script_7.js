//const moment = require('moment');//подключение библиотек
//const os = require('os');//подключение встроенных возможностей node
//console.log(moment());
//console.log(os.type());
// const a = require('.script')//подключение файла, расширение js можно не указывать
// module.exports = a // экспорт самого файла
//const a = require('./папка/')//подключение файла html и он один в папке его можно не указывать
//const {a} = require('.script')- если нужно взять только один метод из файла подключения
// module.exports = { key: a ..} // экспорт самого файла
 //const fs = require('fs');
 //const users = [{name: 'Ann', age: 25}];
 //fs.writeFile('название файла', JSON.stringify(users)), запись обьекта в файл
//fs.readFile('название файла', 'utf-8', ())

//const fs = require('fs');      //Получение запроса и ответа на сервер
//const http = require('http');

//const  server = http.createServer((req, res) => {
    //if(req.url === '/') {
     //   res.write('HELLO WORLD');
       // res.end();
   // }
//});
//server.listen(5555);
//server.on('connection', (socket) => {
   // console.log('new connection');
//});

const express = require('express');
const fs = require('fs');
const cartRout = require('./cartRout');
const app = express();

app.use(express.json());
app.use('/', express.static('./wascomp_vue'));
app.use('/api/cart', cartRout);

app.get('/api/products', (req, res) => {
    fs.readFile('./json/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
            // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});

// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE
