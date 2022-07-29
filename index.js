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

app.use(cors({ credentials:true, origin:'http://updatenutechnodemysql.herokuapp.com' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

const port = process.env.PORT || PORT;
app.listen(port, ()=> console.log('Server running at port 5000'));


//app.listen(process.env.PORT || 5000,() => {
  // console.log(`Server running on port ${PORT}`);
//});