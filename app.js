const express=require('express');
const app=express()
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.get('/:name',(req,res)=>{
    const meraname=req.params.name;
    console.log(meraname)
    app.render('index',{meraname});
})

app.listen(6060,()=>{
    console.log(`app is runnig Sucessfully at port 3000....`);
})