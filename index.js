import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
//import Users from "./models/UserModel.js" //menggenerate table
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
    //await Users.sync();// menggenerate
} catch (error) {
    console.error(error);
}

var cors = require('cors');
//app.use(cors()); // Use this after the variable
app.use(cors({ credentials:true, origin:'https://whimsical-selkie-d52dc2.netlify.app/' }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://whimsical-selkie-d52dc2.netlify.app/");
  res.setHeader(
    "Access-Control-Allow-Headers", "application/x-www-form-urlencoded",
    "Origin, Accept, Accept-Version,Set-Cookie, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  )
  next();
});

app.use(cookieParser());
app.use(express.json());
app.use(router);


const port = process.env.PORT || PORT;
app.listen(port, ()=> console.log('Server running at port 5000'));


//app.listen(process.env.PORT || 5000,() => {
  // console.log(`Server running on port ${PORT}`);
//});