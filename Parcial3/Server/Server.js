const http = require ('hhtp');

const servidor = http.createServer((req,res)=>{
    res.setHeader("Access")
    res.wite("Servidor http Node contestado a peditoin get")
    res.end();
});

 servidor.listen(8882,()=>{
    console.log("Servidor Node Http corriendo en puerto 8882")

 })

