import express from 'express'
import './database.js'
const app = express()
app.get('/',(req,res,next)=>res.sendStatus(200))
app.use((err,req,res,next)=>err?res.send(err.message):res.sendStatus(404))
app.listen(process.env.PORT,()=>console.log(`Listening on http://localhost:80  -:${process.env.PORT}`))

