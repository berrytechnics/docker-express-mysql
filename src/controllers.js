import bCrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserModel } from "./models.js"

const _postRegister = async(user)=>UserModel.findOrCreate({
    where:{email:user.email},
    defaults:user
})

const UserController = {
    auth:token=>jwt.verify(token,process.env.JWT_SECRET),
    register:async(user)=>{
        user.password = await bCrypt.hash(user.password,10)
        return await _postRegister(user)
    },
    login:async(user)=>{
        const foundUser = await UserModel.findOne({
            where:{email:user.email}
        })
        const auth = await bCrypt.compare(user.password,foundUser.password)
        if(auth) return {token:jwt.sign({id:foundUser.id},process.env.JWT_SECRET,{expiresIn:'6h'})}
        else throw 'Invalid credentials'
    },
    deregister:async(user)=>{}
}

export { UserController }