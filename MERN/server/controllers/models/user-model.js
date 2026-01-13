const { default: mongoose } = require("mongoose");

const userschema = new mongoose.Schema(
    username : {
         type :String,
         require : true,

    },
    email : {
        type : String,
        require : true,
    },
    phone:{
        type : String,
        require : true,
    },
    password : {
        type: String;
        require: String,
    },
   
)

const user = new mongoose.model("user")