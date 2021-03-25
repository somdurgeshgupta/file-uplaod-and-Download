const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://atharva:539712684@cluster0.y6gze.mongodb.net/file_upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
