import express from 'express'
require('dotenv').config()
import cors from "cors"
import initRoutes from './src/routes'
import connectDB from './src/config/connectDB'

const app = express()

app.use(cors({
    //Nói cho server biết client này được phép truy cập lấy data
    origin:process.env.CLIENT_URL,
    methods:["POST","GET","PUT","DELETE"]
}))

//Đọc dữ liệu gởi lên dưới dạng JSON từ clien
app.use(express.json());
//Đọc dữ liệu gởi lên dưới dạng FORM DATA từ client
app.use(express.urlencoded({extended:true}))

initRoutes(app)
connectDB()

const port = process.env.PORT || 8888
const listener = app.listen(port,()=>{
    console.log(`Server is running on ${listener.address().port}`)
})