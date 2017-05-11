
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function listadoProyectos(entrada,respuesta){
    var sql = "select id,nombre from proyecto";
    db.query(sql,function(error,filas){
        if(error){
            console.log(error);
            return;
        }
        
        var arreglo = [];
        for(var i=0;i<filas.length;i++){
            arreglo.push({id:filas[i].id,nombre:filas[i].nombre});
        }
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);
        
    });
    
    
}



exports.listadoProyectos=listadoProyectos




