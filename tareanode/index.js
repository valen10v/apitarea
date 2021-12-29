const express = require('express');
const req = require('express/lib/request');
const app = express()
const PORT = process.env.PORT || 4000;  

app.get('/api',(req,res)=>{
    res.json({
        msj:'holi lo vas a lograr'
    })
})

app.listen(PORT,()=>{
    console.log("holi",PORT)
})
