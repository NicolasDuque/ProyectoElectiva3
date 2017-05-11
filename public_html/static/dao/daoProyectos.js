var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');

function crearProyecto(entrada,respuesta){
    
    var registro = {
        nombre:entrada.body.nombre,
        inicio:entrada.body.inicio,
        fin:entrada.body.fin,
        etapa:entrada.body.etapa
        
        
    };
    
    var sql = "insert into proyecto set ?";
    var codigo = 1;
    
    db.query(sql,registro,function(error,resp){
       
        if(error){
            codigo=-1;
        }
        var object = {codigo:codigo};
        object = JSON.stringify(object);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(object);
        
    });
    
    
    
}









exports.crearProyecto=crearProyecto;

