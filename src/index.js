const express = require('express');
const React = require('react');
const app = express();

const Home = require('./client/Home');
const renderToString = require('react-dom/server').renderToString;


const port = process.env.port || 3000;
console.log(port, process.env.port);
app.get('/', (req, res) => {
    const content = renderToString( < Home / > );
    res.send(content);
});

app.listen(3000, () => {
    console.log('Listening on prot 3000');
});