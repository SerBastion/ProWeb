const express = require ('express');

const app = express();

app.get('/',(req,res)=>{
    //console.log(req,query);
    res.json({mensaje: 'Server Express resopndiente a get'})


})

app.post('/',(req,res)=>{
    res.json({mensaje: 'Server Express resopndiendo a post'})


})

app.delete('/',(req,res)=>{
    res.json({mensaje: 'Server Express resopndiente a delite'})


})


app.listen('8082',(req,res)=>{
    console.log("Server Express corriendo en puerto 8082")

    
})