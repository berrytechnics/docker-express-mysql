import { Sequelize } from "sequelize"
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
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
async function init(){
   await sequelize.authenticate()
   console.log(`Database listening at 3306`)
}init().catch(e=>{
    console.error(e.stack)
    process.exit(1)
})
export { sequelize }