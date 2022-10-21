//start server
const express = require("express");
const router = require("../router/user");
const app = express();
const path = require('path');
const PORT = 3000;

//app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//console.log(__dirname);  //server
//console.log(__filename); //server.js

//We need to write this code to use bootstrap
//app.use(express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
  
//requireでuser.jsを読み込む
const userRouter = require("../router/user");


//useメソッドでユーザー関連のルーティングを設定
app.use("/",userRouter);




app.listen(PORT,()=>{
    console.log("Start server at " + PORT);
});

