const express = require("express");
const router = express.Router();


//Routing: /userとすることで、'localhost:3000/user'にアクセスすることができる。

//index - landing page
router.get("/",(req,res)=>{
    res.render('index');
});

//user
router.get("/portfolio",(req,res)=>{
    res.render('portfolio');
});
//info
router.get("/resume",(req,res)=>{
    res.render('resume');   
});

//モジュール化して、外部で利用できるようにする
module.exports=router;