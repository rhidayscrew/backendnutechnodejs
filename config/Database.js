import {Sequelize} from "sequelize";

// const db = new Sequelize('upload_ddata','root','',{
//     host: "localhost",
//     dialect: "mysql"
// });



//const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DB_SCHEMA || 'screw_db',
                                process.env.DB_USER || 'root',
                                process.env.DB_PASSWORD || '',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                   // port: process.env.DB_PORT || 5000,
                                    dialect: 'mysql',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });
                                export default db;