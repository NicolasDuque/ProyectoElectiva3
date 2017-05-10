var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var db = require('./db');

function validar(entrada,respuesta){
    
    var usuario = entrada.body.usuario;
    var password = entrada.body.password;
    
    var sql = "select usuario,password from usuario where usuario=? AND password=?";
    
    db.query(sql,[usuario,password],function(error,filas){
        if(error){
            console.log(error);
            return;
        }
        if(filas.length>0){
            var token = Math.random().toString(36).slice(2);
            
            var object = {codigo:1,token:token};
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

exports.validar=validar;
