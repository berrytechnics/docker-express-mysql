import {sequelize} from './database.js'
const UserModel = sequelize.define('User',{
    username:{
        type: DataTypes.STRING,
        allowNull:false
    }
})
sequelize.sync().then(()=>{
    console.log('Database Synced..')
}).catch(e=>{
    console.error(e.stack)
})
export {UserModel}