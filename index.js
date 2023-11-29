var express = require('express');
const connection = require('./database');
var app = express();

app.get('/',function(req,res){
    let sql = "SELECT * FROM cliente";
    connection.query(sql,function(err,results){
        if(err) throw err;
        res.send(results);
    })
});

app.get('/index.html',(req,res) =>{
    res.send('index.html');
});

app.post('/',function(req,res) {
    //res.render("reserva");l
    //const id = req.body.id;
    //const nombre = req.body.nombre;
    //const apellido = req.body.apellido;
    //const correo = req.body.correo;
    //const telefono = req.body.telefono;

    //con.query('INSERT INTO cliente VALUES (?, ?, ?, ?, ?)',[rut,nombre,apellido,correo,telefono],(err,result));
});

app.listen(3000,function(){
    console.log('Escuchando puerto 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Conexion exitosa a la BD');
    });
});

//connection.end();