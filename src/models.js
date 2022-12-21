import { DataTypes } from 'sequelize'
import {sequelize} from './database.js'
const UserModel = sequelize.define('User',{
    username:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

async function sync(){
    await sequelize.sync()
    console.info('Database Synced.')
}sync().catch(e=>console.error(e.stack))

export {UserModel}