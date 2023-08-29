const express=require("express");
const app=express();
const path=require('path');
app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'views'));


const todo=["Go To GYM"," buy Grocries", " vegetables and fruits","worship in temple", "watch Web series","Go To GYM"," buy Grocries", " vegetables and fruits","worship in temple", "watch Web series","Go To GYM"," buy Grocries", " vegetables and fruits","worship in temple", "watch Web series","Go To GYM"," buy Grocries", " vegetables and fruits","worship in temple", "watch Web series"];

app.get('/:name',(req,res)=>{
    const meraname=req.params.name
    res.render("index",{todo,meraname});
})

app.listen(3000,()=>{
    console.log("app is running at port 3000 Successfully...");
})
