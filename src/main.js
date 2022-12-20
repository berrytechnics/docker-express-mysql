import express from 'express'
import chalk from 'chalk'
import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        dialect:'mysql',
        define:{
            freezeTableName:true
        },
    }
)
const app = express()

app.get('/',(req,res)=>res.sendStatus(200))

async function init(){
    try{
        await sequelize.authenticate()
        app.listen(process.env.PORT)
        console.info(chalk.green('App started on localhost...'))
    }
    catch(e){
        console.error(chalk.red(e.stack))
        process.exit(1)
    }
}init()
