const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD World!');
});

app.get('/health', (req, res) => {
    res.send('I am healthy!');
}
);

module.exports = app;