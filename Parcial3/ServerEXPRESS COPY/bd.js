const express = require('express');
const cors = require('cors')
const mysql2 = require('mysql2')
const app = express();

app.use(cors());

//create connection database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password:'SQL6245*',
    database: 'ejemplobd'
})

app.get('/ESTUDIANTE',(req,res)=>{//consulta en el diagonal el nombre de la tabla
    
    console.log(req.query.NUM_CONTROL);

    let consulta=''

    if(typeof(req.query.NUM_CONTROL)=='undefined'){
        consulta = `SELECT * FROM ESTUDIANTE`;
    }
    else{
        consulta = `SELECT * FROM ESTUDIANTE WHERE NUM_CONTROL = ${req.query.NUM_CONTROL}`;
    }

    console.log(consulta)

    connection.query(
        consulta,
        function(err, results, fields) {
            if(results.length==0){
                res.json({ mensaje:"NUM_CONTROL no existe"});
            } 
            else {
                res.json(results);
            }
            
        }
    )
});

app.post('/',(req,res)=>{//alta
    res.json({ mensaje:"Servidor Express respondiendo a post"});
});

app.delete('/',(req,res)=>{//alta
    res.json({ mensaje:"Servidor Express respondiendo a delete"});
});

app.listen(8082,(req,res)=>{
    console.log("Servidor express corriendo en  puerto 8082")
});