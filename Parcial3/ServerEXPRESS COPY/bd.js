const express = require('express');
const cors = require('cors')
const mysql2 = require('mysql2')
const app = express();

app.use(cors());

//create connection database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SQL6245*',
    database: 'ejemplobd'
})

app.get('/ESTUDIANTE', (req, res) => {
    if (req.query.NUM_CONTROL) {
        let consulta = `SELECT * FROM ESTUDIANTE WHERE NUM_CONTROL = ${req.query.NUM_CONTROL}`;
        console.log(consulta)
        connection.query(
            consulta,
            function (err, results, fields) {
                if (err) {
                    res.json({ status: 0, mensaje: "Error al obtener alumno específico", datos: {} });
                } else {
                    if (results.length === 0) {
                        res.json({ status: 0, mensaje: "ID de alumno no encontrado", datos: {} });
                    } else {
                        res.json({ status: 1, mensaje: "Alumno encontrado", datos: results[0] });
                    }
                }
            }
        );
    } else {
        let consulta = 'SELECT * FROM ESTUDIANTE';
        console.log(consulta)
        connection.query(
            consulta,
            function (err, results, fields) {
                if (err) {
                    res.json({ status: 0, mensaje: "Error al obtener todos los alumnos", datos: [] });
                } else {
                    if (results.length === 0) {
                        res.json({ status: 0, mensaje: "No se encontraron alumnos", datos: [] });
                    } else {
                        res.json({ status: 1, mensaje: "Alumnos encontrados", datos: results });
                    }
                }
            }
        );
    }
});

app.post('/estudiante', (req, res) => {//alta
    console.log(req.query);
    let sentenciaSQL = '';
    if (typeof (req.query.NUM_CONTROL) == 'undefined' || typeof (req.query.APELLIDO_PATERNO) == 'undefined' || typeof (req.query.APELLIDO_MATERNO) == 'undefined' || typeof (req.query.NOMBRE) == 'undefined' || typeof (req.query.FECHA_NACIMIENTO) == 'undefined') {
        res.json({
            status: 0,
            mensaje: "COMPLETE TODOS LOS CAMPOS",
            datos: {}
        });
    }
    else {
        sentenciaSQL = `INSERT INTO ESTUDIANTE (NUM_CONTROL,APELLIDO_PATERNO,APELLIDO_MATERNO,NOMBRE,FECHA_NACIMIENTO)VALUES('${req.query.NUM_CONTROL}', '${req.query.APELLIDO_PATERNO}', '${req.query.APELLIDO_MATERNO}', '${req.query.NOMBRE}', '${req.query.FECHA_NACIMIENTO}')`;
        console.log(sentenciaSQL);
        connection.query(sentenciaSQL, function (err, results, fields) {
            console.log(results);
            if (results && results.affectedRows == 1) {
                res.json({
                    status: 1,
                    mensaje: "ESTUDIANTE AGREGADO",
                    datos: {}
                });
            } else {
                res.json({
                    status: 0,
                    mensaje: "HUBO UN ERROR AL AGREGAR AL ESTUDIANTE",
                    datos: {}
                });
            }
        }
        )
    }
});


app.delete('/ESTUDIANTE', (req, res) => {//delete
    console.log(req.query.ID);

    let sentenciasql = ''


    if (typeof (req.query.NUM_CONTROL) == 'undefined') {
        res.json({
            status: 0,
            mensaje: "NO ESCRIBIÓ EL NÚMERO DE CONTROL",
            datos: {}
        });
    }
    else {
        sentenciasql = `DELETE FROM ESTUDIANTE WHERE NUM_CONTROL = ${req.query.NUM_CONTROL}`;
    }

    connection.query(sentenciasql, function (err, results, fields) {

        console.log(err);
        console.log(results);
        console.log(fields);

        if (results.affectedRows == 1) {
            res.json({
                status: 1,
                mensaje: "ESTUDIANTE ELIMINADO",
                datos: {}
            });
        } else {
            res.json({
                status: 0,
                mensaje: "NO SE PUDO ELIMNAR EL EESTUDIANTE",
                datos: {}
            });
        }
    }
    )
});

app.put('/ESTUDIANTE', (req, res) => {
    console.log(req.query);
    let sentenciaSQL = '';
    if (typeof (req.query.NUM_CONTROL) == 'undefined' || typeof (req.query.APELLIDO_PATERNO) == 'undefined' || typeof (req.query.APELLIDO_MATERNO) == 'undefined' || typeof (req.query.NOMBRE) == 'undefined' || typeof (req.query.FECHA_NACIMIENTO) == 'undefined') {
        res.json({
            status: 0,
            mensaje: "COMPLETE TODOS LOS CAMPOS",
            datos: {}
        });
    }
    else {
        sentenciaSQL = `UPDATE ESTUDIANTE SET APELLIDO_PATERNO = '${req.query.APELLIDO_PATERNO}', APELLIDO_MATERNO = '${req.query.APELLIDO_MATERNO}', NOMBRE = '${req.query.NOMBRE}', FECHA_NACIMIENTO = '${req.query.FECHA_NACIMIENTO}' WHERE NUM_CONTROL = ${req.query.NUM_CONTROL}`;
        console.log(sentenciaSQL);
        connection.query(
            sentenciaSQL,
            function (err, results, fields) {
                console.log(results);
                if (results && results.affectedRows == 1) {
                    res.json({
                        status: 1,
                        mensaje: "ESTUDIANTE MODIFICADO CORRECTAMENTE",
                        datos: {}
                    });
                } else {
                    res.json({
                        status: 0,
                        mensaje: "HUBO UN ERROR AL ACTUALIZAR AL ESTUDIANTE",
                        datos: {}
                    });
                }
            }
        )
    }
});

app.get('/descargar-pdf/:NUM_CONTROL', (req, res) => {
    const numControl = req.params.NUM_CONTROL;

    // Realiza la consulta para obtener los datos del estudiante por número de control
    const consulta = `SELECT * FROM ESTUDIANTE WHERE NUM_CONTROL = ${numControl}`;

    connection.query(consulta, (err, results, fields) => {
        if (err) {
            console.error('Error al obtener datos del alumno:', err);
            res.status(500).json({ mensaje: 'ERROR AL OBTENER LOS DATOS DEL ESTUDIANTE' });
        } else {
            if (results.length === 0) {
                res.json({ mensaje: 'ESTUDIADNTE NO ENCONTRADO' });
            } else {
                // Genera el PDF
                const pdf = new jsPDF();
                pdf.text(`Número de control: ${results[0].NUM_CONTROL}`, 10, 10);
                pdf.text(`Apellido Paterno: ${results[0].APELLIDO_PATERNO}`, 10, 20);
                pdf.text(`Apellido Materno: ${results[0].APELLIDO_MATERNO}`, 10, 30);
                pdf.text(`Nombre: ${results[0].NOMBRE}`, 10, 40);
                pdf.text(`Fecha de Nacimiento: ${results[0].FECHA_NACIMIENTO}`, 10, 40);


                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', `attachment; filename=estudiante_${numControl}.pdf`);
                res.end(pdf.output());
            }
        }
    });
});

app.listen(8082, (req, res) => {
    console.log("Servidor express corriendo en  puerto 8082")
});