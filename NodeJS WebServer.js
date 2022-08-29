const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {

res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/products', (req, res) => {
res.sendFile(path.join(__dirname, '/public/products.html'));
});

app.listen(3000, () => {
console.log('Server is up on port 3000');
});
