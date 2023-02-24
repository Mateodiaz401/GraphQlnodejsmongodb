const mongoose = require('mongoose');


const connectDB = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://usuariosprueba:sametsis2023@localhost:27018/blogs?');
    console.log('MongoDB Connected');
}



module.exports = { connectDB }