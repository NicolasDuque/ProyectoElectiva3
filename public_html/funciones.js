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
var integrante = require('./static/dao/daoIntegrantes');
var actividad = require('./static/dao/daoActividad');
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

app.post('/listadoProyectos',function(entrada,respuesta){
    proyecto.listadoProyectos(entrada,respuesta);
});





app.post('/crearCargo',function(entrada,respuesta){
    cargo.crearCargo(entrada,respuesta);
});

app.post('/buscarCargo',function(entrada,respuesta){
    cargo.buscarCargo(entrada,respuesta);
});

app.post('/listarCargo',function(entrada,respuesta){
   cargo.listarCargo(entrada,respuesta);
});


app.post('/modificarCargo',function(entrada,respuesta){
    cargo.modificarCargo(entrada,respuesta);
});


app.post('/eliminarCargo',function(entrada,respuesta){
    cargo.eliminarCargo(entrada,respuesta);
});

app.post('/buscarCargo',function(entrada,respuesta){
    cargo.buscarCargo(entrada,respuesta);
});


app.post('/listarForaneaCargos',function(entrada,respuesta){
   cargo.listadoProyectos(entrada,respuesta); 
});



/*Integrantes*/

app.post('/listarForaneaProyectos',function(entrada,respuesta){
    integrante.listadoProyectos(entrada,respuesta);
});

app.get('/listarIntegrantes',function(entrada,respuesta){
   integrante.listadoIntegrantes(respuesta);
    
    
});

app.post('/buscarIntegrante',function(entrada,respuesta){
   integrante.buscarIntegrante(entrada,respuesta); 
});

app.post('/crearIntegrante',function(entrada,respuesta){
   integrante.crearIntegrante(entrada,respuesta);
});

app.post('/eliminarIntegrante',function(entrada,respuesta){
   integrante.eliminarIntegrante(entrada,respuesta); 
});

app.post('/modificarIntegrante',function(entrada,respuesta){
   integrante.modificarIntegrante(entrada,respuesta); 
});



/*Actividades*/

app.post('/crearActividad',function(entrada,respuesta){
    actividad.crearActividad(entrada,respuesta);
});

app.post('/modificarActividad',function(entrada,respuesta){
    actividad.modificarActividad(entrada,respuesta);
    
});

app.post('/listarActividad',function(entrada,respuesta){
   actividad.listarActividad(entrada,respuesta); 
});

app.post('/eliminarActividad',function(entrada,respuesta){
   actividad.eliminarActividad(entrada,respuesta); 
});

app.post('/listarForaneaIntegrantes',function(entrada,respuesta){
   actividad.listadoIntegrantes(entrada,respuesta);
    
});


app.get('/listarForaneaProyectos',function(entrada,respuesta){
   actividad.listadoProyectos(entrada,respuesta); 
});







exports.configurarServidor = configurarServidor;

