import {Sequelize} from "sequelize";

// const db = new Sequelize('screw_db','screw_db','123456789',{
//     host: "localhost",
//     dialect: "mysql"
// });



//const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DB_SCHEMA || 'screw_db',
                                process.env.DB_USER || 'screw_db',
                                process.env.DB_PASSWORD || '123456789',
                                {
                                    host: process.env.DB_HOST || 'db4free.net',
                                   // port: process.env.DB_PORT || 5000,
                                    dialect: 'mysql',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });
                                export default db;