const express = require ('express');

const app = express();

app.get('/',(req,res)=>{
    console.log(req,query);
    res.json({mensaje: 'Server Express resopndiente a get'})


})

app.post('/',(req,res)=>{
    res.json({mensaje: 'Server Express resopndiendo a post'})


})

app.delete('/clientes',(req,res)=>{
    res.json({mensaje: 'Server Express resopndiente a delte'})


})


app.lsiten('8882',(req,res)=>{
    res.json({mensaje: 'Server Express corriendo en puerto 8882'})

    
})