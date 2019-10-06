const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const port=3005
const router=require('./router')
app.use(cors())
app.use(express.json())
app.use('/',router)
app.use(bodyParser.urlencoded())
app.listen(port,()=>
{
    console.log('Ouvindo na porta',port)
})