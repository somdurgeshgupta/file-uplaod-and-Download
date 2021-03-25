const mongoose = require('mongoose');

mongoose.connect('localhost:27017/file_upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
