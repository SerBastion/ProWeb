const express = require('express');
//const cors = require('cors');
const app = express();
//app.use(cors());
 
app.get('/',(req,res)=>{
    console.log(req.query)
    res.json({mensaje: " Server Express respondiendo a get"});
});
 
app.post('/',(req,res)=>{  
    res.json({mensaje: " Server Express respondiendo post "})
});
 
app.delete('/',(req,res)=>{
    res.json({mensaje: " Server Express respondiendo a delete "})
})
 
app.listen(8082,(req,res)=>{
    console.log("Servidor express corriendo en puerto 8082")
})
 