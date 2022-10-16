//start server
const express = require("express");
const router = require("../router/user");
const app = express();
const path = require('path');
const PORT = 3000;

//app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');


//requireでuser.jsを読み込む
const userRouter = require("../router/user");


//useメソッドでユーザー関連のルーティングを設定
app.use("/",userRouter);


app.listen(PORT,()=>{
    console.log("Start server at " + PORT);
});

