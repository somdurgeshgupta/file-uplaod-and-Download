var cors = require('cors');
const express = require('express');
const path = require('path');
const fileRoute = require('./routes/file');
require('./db/db');


const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(3030, () => {
  console.log('server started on port 3030');
});

