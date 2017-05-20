
"use strict";

<<<<<<< HEAD
app.service('reunionesService', function ($http, $httpParamSerializerJQLike) {
    var usuarioId = sessionStorage.getItem("usuarioId");

    this.guardarReunion = function (reunion) {
=======

/*El use strict hace que se deba codificar de manera correcta, siendo estricto
 * a la hora de compilar el codigo ejemplo: 
 * x = 3.14; // This will cause an error (x is not defined)*/



/* global app */


/*************servicio vs factory vs provider***************/
/*Todas son SINGLETON (Unicamente puede ser instanciada una vez en el contexto
 * en el cual se encuentre)*/


/*Se define el servicio (app.service(nombre servicio, funcionalidad))*/
/*El $http es un servicio por defecto para consumir GET,POST,ETC. El 
 * $httpParamSerializerJQLike es necesario, debido a que angular empaqueta los
 * datos diferente a como se hacia en jquery  y muchos webservices no encuentran
 * los datos que les llega, por lo que se hace necesario serializarlos como 
 * jquery para que lleguen al servidor*/
app.service('reunionesService', function ($http, $httpParamSerializerJQLike) {
    /*Se define una funcion interna llamada logIn, que recibe 2 parametros*/
    var usuarioId = sessionStorage.getItem("usuarioId");

    this.guardarReunion = function (reunion) {
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/




>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
        var promise = $http({
            method: "post",
            url: "/crearReunion",
            data: $httpParamSerializerJQLike({
                nombre: reunion.nombre,
                ubicacion: reunion.ubicacion,
<<<<<<< HEAD
                tematica: reunion.tematica,
                usuarioId: usuarioId
=======
                tematica: reunion.tematica
                
                
                
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    this.modificarReunion = function (reunion) {
<<<<<<< HEAD
=======


>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
        var promise = $http({
            method: "post",
            url: "/modificarReunion",
            data: $httpParamSerializerJQLike({
                nombre: reunion.nombre,
                ubicacion: reunion.ubicacion,
<<<<<<< HEAD
                tematica: reunion.tematica,
                usuarioId: usuarioId

=======
                tematica: reunion.tematica
                
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };

    this.listarReunion = function () {
        var promise = $http({
            method: "post",
            url: "/listarReunion",
            data: $httpParamSerializerJQLike({
<<<<<<< HEAD
                usuarioId: usuarioId
=======
                
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    this.eliminarReunion = function (reunion) {
<<<<<<< HEAD
=======
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/



>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
        var promise = $http({
            method: "post",
            url: "/eliminarReunion",
            data: $httpParamSerializerJQLike({
                nombre: reunion.nombre}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
<<<<<<< HEAD
    this.buscarReunion = function (reunion) {
=======
       this.buscarReunion = function (reunion) {
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/
        
        
        
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
        var promise = $http({
            method: "post",
            url: "/buscarReunion",
            data: $httpParamSerializerJQLike({
<<<<<<< HEAD
                nombre: reunion.nombre,
                usuarioId: usuarioId

            }),
=======
                
                nombre: reunion.nombre
               }),
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });
<<<<<<< HEAD
        return promise;
    };

=======

        /*Luego se retorna la promesa*/
        return promise;
    };
    
    
    this.listarProyectos = function () {
        /*El resultado del $http es almacenado en la promesa*/
        /*Ademas se debe definir el tipo de cabecera para enviar los datos*/
        
        
        
        var promise = $http({
            method: "post",
            url: "/listarForaneaCargos",
            data: $httpParamSerializerJQLike({
                usuarioId:usuarioId
       
               }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            /*Todos los datos se almacenan en .data*/
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    };
    
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
});
