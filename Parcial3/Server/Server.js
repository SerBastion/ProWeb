const http = require('http');
 
const servidor = http.createServer((req, res) => {
    //Configuración de encabezados para permitir CORS
   
    //res.setHeader('Access-Control-Allow-Origin', '*');
   
    // Respuesta del servidorr
    res.write("Servidor http Node contestado a petición GET");
    res.end();
});
 
servidor.listen(8082, () => {
    console.log("Servidor Node HTTP corriendo en el puerto 8082");
});
 
