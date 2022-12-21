import express from 'express'
import chalk from 'chalk'
import { sequelize } from './controllers.js'
const app = express()

app.get('/',(req,res)=>res.sendStatus(200))

app.use((err,req,res,next)=>{
    if(err){
        console.error(chalk.red(err.stack))
        res.send(JSON.stringify(err.stack,null,2))
    }else{
        console.error(chalk.red('An unknown error occurred!'))
        res.status(500).send('An unknown error occurred!')
    }
})

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

export {app}
