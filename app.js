const express = require('express');
const app=express();
app.get('/user',(req,res,rej)=>{
    res.send('hell world')
})
app.listen('3000',()=>{
    console.log('server is listing on pot 3000')  
})