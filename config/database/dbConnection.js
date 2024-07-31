import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "HOSPITAL_SYSTEM_DEPLOYED"
    }).then(()=>{
        console.log("Connected to database")
    }).catch(err=>{
        console.log(`Some error occured in connecting databse: ${err}`);
    })
}