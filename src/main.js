import express from 'express'
import { UserController } from './controllers.js'
const app = express()

app.use(express.json())

app.get('/',(req,res,next)=>res.sendStatus(200))
app.post('/register',async(req,res,next)=>{
    let user = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
    }
    user = await UserController.register(user)
    res.send(JSON.stringify(user))
})
app.post('/login',async(req,res,next)=>{
    let user = {
        email:req.body.email,
        password:req.body.password,
    }
    const foundUser = await UserController.login(user)
    res.json(foundUser)
})
app.post('/auth',async(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    const auth = await UserController.auth(token)
    auth ? res.json({status:'Authorized'}):res.json({status:"Not authorized"})
})
app.use((err,req,res,next)=>err?res.send(err.message):res.sendStatus(404))
app.listen(process.env.PORT,()=>console.log(`Listening on http://localhost:80  :${process.env.PORT}`))