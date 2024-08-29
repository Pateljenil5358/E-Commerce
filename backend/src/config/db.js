const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://hetchabhaiya2802:<db_password>@cluster0.2c2ivaa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}