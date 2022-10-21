//start server
const express = require("express");
const router = require("../router/user");
const app = express();
const path = require('path');
const PORT = 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
app.set('view engine','ejs');

//console.log(__dirname);  //server
//console.log(__filename); //server.js
console.log(publicDirectoryPath);

app.use(express.static(publicDirectoryPath));
  
//requireでuser.jsを読み込む
const userRouter = require("../router/user");


//useメソッドでユーザー関連のルーティングを設定
app.use("/",userRouter);




app.listen(PORT,()=>{
    console.log("Start server at " + PORT);
});

