import { UserModel } from "./models.js"

async function test(){
    // const [user,created] = await UserModel.findOrCreate({where:{username:'Kyle'}})
    // if(created) console.log('User created!')
    // await user.destroy()
    // console.log(user)
    const list = UserModel.findAll()
    console.log(`${list.length?list.length:0} users in database`)
}

export { test }