import { DataTypes } from 'sequelize'
import {sequelize} from './database.js'
const UserModel = sequelize.define('User',{
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:DataTypes.STRING
})

async function sync(){
    await sequelize.sync({force:true})
    console.info('Database Synced.')
}sync().catch(e=>console.error(e.stack))

export {UserModel}