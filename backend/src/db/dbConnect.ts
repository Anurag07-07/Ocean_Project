import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const dbConnect = async()=>{
  try {
      await mongoose.connect(process.env.MONGO_URI as string) 
      console.log(`Database Connected`);
  } catch (error) {
    console.log(`Database Not Connected`);
    console.error(error);
  }
}

export default dbConnect