import { Sequelize, DataTypes } from "sequelize"
import chalk from 'chalk'
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:'mysql',
        define:{
            freezeTableName:true
        },
    }
)
const UserModel = sequelize.define('User',{
    username:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

async function init(){
    try{
        await sequelize.sync()
        console.log(chalk.cyan('Database tables synced...'))
    }catch(e){
        console.error(chalk.red(e.stack))
        process.exit(1)
    }
}init()

export {sequelize,UserModel}