
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function listarReunion(entrada,respuesta) {
<<<<<<< HEAD
    var sql = "select nombre,ubicacion,tematica from reunion where usuarioId=? ";
    db.query(sql,entrada.body.usuarioId,function (error, filas) {
=======
    var sql = "select nombre,ubicacion,tematica from reunion ";
    db.query(sql,function (error, filas) {
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
        if (error) {
            console.log(error);
            return;
        }
        
        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
            arreglo.push({nombre: filas[i].nombre, ubicacion: filas[i].ubicacion,tematica:filas[i].tematica});
        }
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });

}

function eliminarReunion(pedido, respuesta) {
    var nombre = pedido.body.nombre;
    var sql = 'delete from reunion where nombre=?';
    var codigo = 1;
    db.query(sql, nombre, function (error, response) {
        if (error) {
            codigo = -1;
        }

        var object = {codigo: codigo};
        object = JSON.stringify(object);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(object);
    });

}
function modificarReunion(entrada, respuesta) {
    var registro = {
        nombre: entrada.body.nombre,
        ubicacion: entrada.body.ubicacion,
<<<<<<< HEAD
        tematica: entrada.body.tematica,
        usuarioId:entrada.body.usuarioId
=======
        tematica: entrada.body.tematica

>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
    };

    var codigo = 1;
    var condicion = {nombre: entrada.body.nombre};
    var sql = "update reunion set ? where ?";
    db.query(sql, [registro, condicion], function (error, resp) {
        if (error) {
            codigo = -1;
        }
        var object = {codigo: codigo};
        object = JSON.stringify(object);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(object);


    });
}
function crearReunion(entrada, respuesta) {
    var registro = {
        nombre: entrada.body.nombre,
        ubicacion: entrada.body.ubicacion,
<<<<<<< HEAD
        tematica: entrada.body.tematica,
        usuarioId:entrada.body.usuarioId        
=======
        tematica: entrada.body.tematica
        
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
    };
    
    var sql = "insert into reunion set ?";
    var codigo = 1;
    db.query(sql, registro, function (error, resp) {
        if (error) {
           console.log(error);
           codigo=-1;
        } else {
            var object = {codigo: codigo};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        }
    });
}

<<<<<<< HEAD
function buscarReunion(entrada, respuesta) {
        var nombre = [entrada.body.nombre];
        console.log(nombre);
        //Se manda el codigo en la busqueda

        var sql = 'select nombre,ubicacion,tematica from reunion where nombre=? AND usuarioId=?';

        db.query(sql, [nombre,entrada.body.usuarioId], function (error, filas) {
            if (error) {
                console.log(error);
                return;
                
            }
            if(filas.length>0){
            var object = {codigo:1,nombre:filas[0].nombre,ubicacion:filas[0].ubicacion,
                tematica:filas[0].tematica};
            
            console.log(object);
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
    
=======


function listadoProyectos(respuesta) {

    var sql = 'select id,nombre from proyecto';

    //Se realiza la consulta, recibiendo por parametro filas los registros de la base de datos.         
    db.query(sql, function (error, filas) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        var arreglo = [];

        //Se recorren los registros obtenidos

        for (var f = 0; f < filas.length; f++) {
            arreglo.push({id: filas[f].id, nombre: filas[f].nombre});
        }
        arreglo = JSON.stringify(arreglo);


        respuesta.writeHead(200, {'Content-Type': 'application/json'});

        respuesta.end(arreglo);

    });
}

function buscarReunion(entrada, respuesta) {
    var nombre = [entrada.body.nombre];
    console.log(nombre);
    //Se manda el codigo en la busqueda



    var sql = 'select nombre,ubicacion,tematica from reunion where nombre=?';

    db.query(sql, nombre, function (error, filas) {
        if (error) {
            console.log(error);
            return;

        }
        if (filas.length > 0) {
            var object = {codigo: 1, nombre: filas[0].nombre, ubicacion: filas[0].ubicacion,
                tematica: filas[0].tematica};

            console.log(object);
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        } else {
            var object = {codigo: -1};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        }



    });

>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
}

exports.listarReunion = listarReunion;
exports.crearReunion = crearReunion;
exports.modificarReunion = modificarReunion;
<<<<<<< HEAD
=======
exports.listadoProyectos = listadoProyectos;
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
exports.eliminarReunion = eliminarReunion;
exports.buscarReunion = buscarReunion;
