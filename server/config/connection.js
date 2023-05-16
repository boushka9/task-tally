const mongoose = require('mongoose');

mongoose.connnect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tallyDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;