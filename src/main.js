import express from 'express'
import { UserController as User }  from './controllers.js'
const app = express()

app.use(express.json())

app.get('/',(req,res,next)=>res.sendStatus(200))
app.post('/login',async(req,res,next)=>{
    let user = {
        email:req.body.email,
        password:req.body.password,
    }
    const foundUser = await User.login(user)
    res.json(foundUser)
})
app.post('/register',async(req,res,next)=>{
    if(req.body.password!==req.body.password2) res.json({error:'Passwords do not match'})
    let user = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    }
    const recordedUser = await User.register(user)
    if(!recordedUser) res.json({error:"Unable to record user"})
    res.json({user:recordedUser})
})
app.get('/test',User.auth,(req,res,next)=>{
    res.json({message:"Authorized"})
})
app.use((err,req,res,next)=>err?res.json({error:err.stack}):res.sendStatus(404))
app.listen(process.env.PORT,()=>console.log(`Listening on http://localhost:80  :${process.env.PORT}`))