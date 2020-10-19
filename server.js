const express = require('express');
const fs = require('fs');
const path = require('path')
const { notes } = require('./db/db');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Set Port
const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Uses public folders files
app.use(express.static('public'));

// PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}. Press CTRL C to exit.`)
});