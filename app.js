'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello world from submodule');
});

app.listen(3001);
