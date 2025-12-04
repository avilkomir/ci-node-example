const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD World in CSCI 3030!');
});

app.get('/health', (req, res) => {
    res.send('I am healthy!');
}
);

app.get('/3030', (req, res) => {
    res.send('Hello, CSCI 3030!');
}   
);

module.exports = app;