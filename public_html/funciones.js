/*global __dirname*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
var formidable = require('formidable');
var db = require('./static/dao/db');
var login = require('./static/dao/daoLogin');
var proyecto = require('./static/dao/daoProyectos');
var cargo = require('./static/dao/daoCargo');
var server;



function configurarServidor() {
    
    app.use(express.static(__dirname+'/static'));
    server=app.listen(8888,function(){
       console.log("servidor web iniciado!"); 
    });
    
}

app.post('/login',function(entrada,respuesta){
    login.validar(entrada,respuesta);
});
app.post('/registrousuario',function(entrada,respuesta){
    login.registrarUsuario(entrada,respuesta);
});

app.post('/crearProyecto',function(entrada,respuesta){
    proyecto.crearProyecto(entrada,respuesta);
});

app.get('/listadoForaneaProyectos',function(entrada,respuesta){
   cargo.listadoProyectos(entrada,respuesta);
});


app.post('/modificarProyecto',function(entrada,respuesta){
    proyecto.modificarProyecto(entrada,respuesta);
});


app.post('/eliminarProyecto',function(entrada,respuesta){
    proyecto.eliminarProyecto(entrada,respuesta);
});

app.post('/buscarProyecto',function(entrada,respuesta){
    proyecto.buscarProyecto(entrada,respuesta);
});

app.get('/listadoProyectos',function(entrada,respuesta){
    proyecto.listadoProyectos(respuesta);
});






exports.configurarServidor = configurarServidor;

