
const express = require('express');
const fs = require('fs');
const cartRout = require('./cartRout');
const app = express();
const path = require('path')

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname,'../wascomp_vue')));
app.use('/api/cart', cartRout);

const catalogJSONPath = path.resolve(__dirname, './json/products.json');

app.get('/api/products', (req, res) => {
    fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
            // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

const port = process.env.PORT || 5555;

app.listen(port, () => {
    console.log(`Server started at port ${port} `);
});

// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE
