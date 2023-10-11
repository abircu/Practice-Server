const express = require('express');
const app=express()
const port=3000;
app.get('/',(req,res)=>{
  res.send('hello this is my first server');
})

app.listen(port,()=>{
    console.log(`my first server is running on port:${port}`)
})