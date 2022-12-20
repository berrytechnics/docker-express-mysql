import express from 'express'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        dialect:'mysql',
    }
)
const app = express()

app.get('/',(req,res)=>res.sendStatus(200))

async function init(){
    try{
        await sequelize.authenticate()
        app.listen(process.env.PORT)
        console.info('App started on localhost...')
    }
    catch(e){
        console.error(e.stack)
        process.exit(1)
    }
}init()