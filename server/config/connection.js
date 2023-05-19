const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tallyDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: true,
})
.then(() => console.log('DB connected!'));

module.exports = mongoose.connection;