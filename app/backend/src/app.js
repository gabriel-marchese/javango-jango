const express = require('express');
const morgan = require('morgan');
const { userRoutes } = require('./routes/index');
const path = require('path');
var cors = require('cors')

const app = express();

app.get('/', (_request, response) => {
    response.send("Working");
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(userRoutes);
app.use(require('./routes/music.route'));
app.use('/files', express.static(path.resolve(__dirname,"./", "tmp", "uploads")))

module.exports = app;