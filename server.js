const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample product database
const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99 },
    { id: 2, name: 'Mechanical Keyboard', price: 149.99 },
    { id: 3, name: 'Gaming Mouse', price: 59.99 }
];

// API endpoint to return products
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`E-commerce app running at http://localhost:${PORT}`);
});