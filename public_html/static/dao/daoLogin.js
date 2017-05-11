var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./db');

function validar(entrada, respuesta) {

    var usuario = entrada.body.usuario;
    var password = entrada.body.password;

    var sql = "select tipouser,email,password from registro where email=? AND password=?";
    
    db.query(sql, [usuario, password], function (error, filas) {
        if (error) {
            console.log(error);
            return;
        }
       
        if (filas.length > 0) {
                if(filas[0].tipouser==="Administrador"){
                    var object = {codigo: 1, type:"Administrador"};
                    object = JSON.stringify(object);
                    respuesta.writeHead(200, {'Content-Type': 'application/json'});
                    respuesta.end(object);
                }else if(filas[0].tipouser==="Integrante"){
                    var object = {codigo: 1, type:"Integrante"};
                    object = JSON.stringify(object);
                    respuesta.writeHead(200, {'Content-Type': 'application/json'});
                    respuesta.end(object);
                    
                    
                }
                
                
                
           

            
        } else {
            var object = {codigo: -1};
            object = JSON.stringify(object);
            respuesta.writeHead(200, {'Content-Type': 'application/json'});
            respuesta.end(object);
        }
    });



}

function registrarUsuario(entrada, respuesta) {

    //var tipodocumento = entrada.body.tipodocumento;
//    var tipodocumento = "CEDULA";
//    var numero = entrada.body.numero;
//    var nombre = entrada.body.nombre;
//    var apellido = entrada.body.apellido;
//    var tipouser = entrada.body.tipouser;
//    var email = entrada.body.email;
//    var password = entrada.body.password;
//    var repeatpassword = entrada.body.repeatpassword;
//    var fechanacimiento = entrada.body.fechanacimiento;



    var registro = {
        tipodocumento: entrada.body.tipodocumento,
        numero: entrada.body.numero,
        nombre: entrada.body.nombre,
        apellido: entrada.body.apellido,
        tipouser: entrada.body.tipouser,
        email: entrada.body.email,
        password: entrada.body.password,
        repeatpassword: entrada.body.repeatpassword,
        fechanacimiento: entrada.body.fechanacimiento
    };
    var sql = 'insert into registro set ?';
    db.query(sql, registro, function (error, resp) {
   // db.query(sql, [tipodocumento, numero, nombre, apellido, tipouser, email, password, repeatpassword, fechanacimiento], function (error, respuesta) {
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

exports.validar = validar;
exports.registrarUsuario = registrarUsuario;
