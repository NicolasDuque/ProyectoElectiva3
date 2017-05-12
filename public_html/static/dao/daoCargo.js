
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');


function listarCargo(entrada, respuesta) {
    var sql = "select id,nombre, nombre, descripcion, horario, salario from cargo";
    db.query(sql, function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }

        var arreglo = [];
        for (var i = 0; i < filas.length; i++) {
            arreglo.push({id: filas[i].id, nombre: filas[i].nombre});
        }
        arreglo = JSON.stringify(arreglo);
        respuesta.writeHead(200, {'Content-Type': 'application/json'});
        respuesta.end(arreglo);

    });


}
function eliminarCargo(pedido,respuesta){
        var nombre = pedido.body.nombre;
        var sql = 'delete from cargo where nombre=?';
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
function modificarCargo(entrada, respuesta) {
    var registro = {
        nombre: entrada.body.nombre,
        descripcion: entrada.body.descripcion,
        horario: entrada.body.horario,
        salario: entrada.body.salario

    };

    var codigo = 1;
    var condicion = {nombre: entrada.body.nombre};
    var sql = "update cargo set ? where ?";
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
function crearCargo(entrada, respuesta) {
    var registro = {
        nombre: entrada.body.nombre,
        descripcion: entrada.body.descripcion,
        horario: entrada.body.horario,
        salario: entrada.body.salario
    };
    db.query(sql, registro, function (error, resp) {
        if (error) {
            console.log("error dao");
            console.log(error);
            console.log('error en la consulta');
            return;
        } else {
            var object = {codigo: 1};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        }
    });
}


exports.listarCargo = listarCargo;
exports.crearCargo = crearCargo;
exports.modificarCargo = modificarCargo;
exports.eliminarCargo = eliminarCargo;
