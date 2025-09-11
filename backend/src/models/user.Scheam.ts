import mongoose,{Document, Schema} from 'mongoose'

export interface IUser extends Document{
  user_name:string,
  password:string,
  user_image:string,
  email:string,
  phone_number:string
}

const UserSchema:Schema = new Schema({
  user_name:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    select:false
  },
  user_image:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  phone:{
    type:String,
    required:true,
    unique:true
  }
})

export default mongoose.model<IUser>('users',UserSchema)