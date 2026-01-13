require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router"); 
const connectDB = require("./utils/db");
const app = express();

app.use(express.json());

app.use("/api/auth",router)

const PORT = process.env.PORT;

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
});

});

