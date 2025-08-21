const mongoose = require('mongoose');




const connectToMongo = ()=>{
    mongoose.connect("mongodb+srv://admin:admin@cluster0.eauf8yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    mongoose.connection.on('connected', () => console.log('Connected'));
    mongoose.connection.on('error', () => console.log('Connection failed with - ',""));
}


module.exports = connectToMongo;
