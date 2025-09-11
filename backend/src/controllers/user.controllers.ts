import mongoose from 'mongoose'
import {Response,Request} from 'express'

export const Signup = async(Request,Response)=>{
	const UserDataValidation z.object({
	user_name:z.string().min(4).max(20),
	password:z.string().min(6).max(30),
	phone:z.number().min(10).max(12)
	})

}
