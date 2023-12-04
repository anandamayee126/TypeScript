import express from 'express';
const app= express();
import router from './backend_index';
import db from './db_user';
const sequelize = require('./db_connect');

app.use('/user',router);

sequelize.sync().then(()=>{
    app.listen(3000);
}).catch((err:any) => {
    console.error(err)
})