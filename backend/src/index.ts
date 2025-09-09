import cookieParser from 'cookie-parser'
import express from 'express'
import dbConnect from './db/dbConnect.js'
import { PrismaClient } from '@prisma/client'

const app = express()
export const prisma = new PrismaClient()
app.use(cookieParser())
const PORT = process.env.PORT || 3000

//Database Connection
dbConnect()


app.listen(PORT,()=>{
  console.log(`Seerver Started at PORT ${PORT}`);
  
})