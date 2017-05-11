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

function modificarProyecto(entrada,respuesta){
    var registro = {
      inicio:entrada.body.inicio,
      fin:entrada.body.fin,
      etapa:entrada.body.etapa
        
    };
    
    var codigo = 1;
    var condicion = {nombre:entrada.body.nombre};
    var sql = "update proyecto set ? where ?";
    db.query(sql,[registro,condicion],function(error,resp){
        if(error){
            codigo=-1;
        }
        var object = {codigo:codigo};
        object = JSON.stringify(object);
        respuesta.writeHead(200,{'Content-Type':'application/json'});
        respuesta.end(object);
        
        
    });
    
    
   
    
    
}


 function listadoProyectos(respuesta) {

    var sql = 'select nombre,inicio,fin,etapa from proyecto';

    //Se realiza la consulta, recibiendo por parametro filas los registros de la base de datos.         
    db.query(sql, function (error, filas) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        var arreglo=[];
        
        //Se recorren los registros obtenidos
        
        for (var f = 0; f < filas.length; f++) {
           arreglo.push({nombre:filas[f].nombre,inicio:filas[f].inicio,fin:filas[f].fin,etapa:filas[f].etapa});
        }
        arreglo = JSON.stringify(arreglo);
        
        
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
       
        respuesta.end(arreglo);
        
    });
}


function buscarProyecto(entrada, respuesta) {

    

    

        var nombreBuscar = [entrada.body.nombreBuscar];
        console.log(nombreBuscar);
        //Se manda el codigo en la busqueda

        var sql = 'select nombre,inicio,fin,etapa from proyecto where nombre=?';

        db.query(sql, nombreBuscar, function (error, filas) {
            if (error) {
                console.log(error);
                return;
                
            }
            if(filas.length>0){
            var object = {codigo:1,nombre:filas[0].nombre,inicio:filas[0].inicio,fin:filas[0].fin,etapa:filas[0].etapa};
            object = JSON.stringify(object);
            respuesta.writeHead(200,{'Content-Type':'application/json'});
            respuesta.end(object);
            }else{
            var object = {codigo:-1};
            object = JSON.stringify(object);
            respuesta.writeHead(200,{'Content-Type':'application/json'});
            respuesta.end(object);
            }
            
            
            
        });
    
}

function eliminarProyecto(pedido,respuesta){
        var nombre = pedido.body.nombreBuscar;
        var sql = 'delete from proyecto where nombre=?';
        var codigo = 1;
        db.query(sql, nombre, function (error,response) {
           if(error){
               codigo=-1;
           }
           var object = {codigo:codigo};
            object = JSON.stringify(object);
            respuesta.writeHead(200,{'Content-Type':'application/json'});
            respuesta.end(object);      
        });

}


exports.crearProyecto=crearProyecto;
exports.modificarProyecto=modificarProyecto;
exports.listadoProyectos=listadoProyectos;
exports.buscarProyecto=buscarProyecto;
exports.eliminarProyecto=eliminarProyecto;