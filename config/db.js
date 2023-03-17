const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: false,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     })
//     .then(() => console.log('MongoDB Connected'))
//     .catch((err) => {
//       console.log(err.message);
//       process.exit(1);
//     });
// };

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
