import mongoose from "mongoose";

const connectDb = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully...");
    }
    catch(err){
        console.log("Error connecting to db ", err);
    }
};

export default connectDb;