const mongoose = require ("mongoose");
const URL= process.env.MONGODB_URL;

const connectDB = async()=>{
    try{
        await mongoose.connect(URL);
        console.log('Database connected..');

    }catch(error){
        console.log("Database not connected ..");
        process.exit(0);
    }
};

module.exports = connectDB;