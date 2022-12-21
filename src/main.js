import express from 'express'
import './database.js'
const app = express()
app.get('/',(req,res,next)=>res.sendStatus(200))
app.use((err,req,res,next)=>{
    if(!err) next()
    console.error(err.stack)
    res.send(err.stack)
})
app.use((req,res)=>{
    const err = new Error(`An unknown error occurred!`)
    console.error(err)
    res.status(500).send(err.stack)
})
app.listen(process.env.PORT,()=>console.log(`Listening on http://localhost:80  -:${process.env.PORT}`))

