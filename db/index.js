const mongoose = require('mongoose');
require('dotenv').config();



const connectDB = () => {
    const DB_URL = process.env.MONGODB_URL
    mongoose.set('strictQuery', false);
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('****** MONGODB CONNECTED ******');
        }
        else {
            console.log('****** MONGODB NOT CONNECTED ******');
        }
    });
}



module.exports = { connectDB }