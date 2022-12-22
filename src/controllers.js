import bCrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserModel } from "./models.js"

const _postRegister = async(user)=>UserModel.findOrCreate({
    where:{email:user.email},
    defaults:user
})

const UserController = {
    register:async(user)=>{
        user.password = await bCrypt.hash(user.password,10)
        return await _postRegister(user)
    },
    login:async(user)=>{
        const foundUser = await UserModel.findOne({
            where:{email:user.email}
        })
        const auth = await bCrypt.compare(user.password,foundUser.password)
        if(auth) return {token:jwt.sign({id:foundUser.id},process.env.JWT_SECRET)}
        else throw 'Invalid credentials'

    },
    auth:async(token)=>{
        return token
    },
    deregister:async(user)=>{}
}

async function test(){
    // const [user,created] = await UserModel.findOrCreate({where:{username:'Kyle'}})
    // if(created) console.log('User created!')
    // await user.destroy()
    // console.log(user)
    const list = UserModel.findAll()
    console.log(`${list.length?list.length:0} users in database`)
}

export {UserController}