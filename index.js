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


app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(cors({ credentials:true, origin:'https://whimsical-selkie-d52dc2.netlify.app/' }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://whimsical-selkie-d52dc2.netlify.app/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Accept-Version,Set-Cookie, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Credentials", true);

  if (req.method === 'OPTIONS')
    res.status(200).send();
  else
    next();
});

const port = process.env.PORT || PORT;
app.listen(port, ()=> console.log('Server running at port 5000'));


//app.listen(process.env.PORT || 5000,() => {
  // console.log(`Server running on port ${PORT}`);
//});