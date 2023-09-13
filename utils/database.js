import mongoose from "mongoose";

let isConnected = false; //help us track the connection

export const connecToDB = async() =>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected')
        return
    }
    try{
        await mongoose.connect(process.env.MONGOFB_URI,{
            dbName : "share_prompt",
            useNewUrlParser :true,
            useUnifiedTopology : true,
        })

        isConnected = true;

    }catch(error){
        console.log(error);


    }
}