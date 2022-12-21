import { sequelize,UserModel } from "./models.js"


async function test(){
    const [user,created] = await UserModel.findOrCreate({where:{username:'Kyle'}})
    if(created) console.log('User created!')
    await user.destroy()
    console.log(user)
    const list = UserModel.findAll()
    console.log(`${list.length} users in database`)
}test()

export {sequelize}