const express = require("express");
const router = express.Router();


//Routing: /userとすることで、'localhost:3000/user'にアクセスすることができる。

//index - landing page
router.get("/",(req,res)=>{
    res.render('index');
});

//user
router.get("/user",(req,res)=>{
    res.render('user');
});
//info
router.get("/info",(req,res)=>{
    res.render('info');   
});

//モジュール化して、外部で利用できるようにする
module.exports=router;