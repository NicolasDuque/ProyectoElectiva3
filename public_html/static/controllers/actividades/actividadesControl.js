"use strict";

/*El use strict hace que se deba codificar de manera correcta, siendo estricto
 * a la hora de compilar el codigo ejemplo: 
 * x = 3.14; // This will cause an error (x is not defined)*/


/* global app */

/*Toda funcion de controlador debe tener un $scope, que es la referencia a todos
 * los elementos que pertenecen al constrolador*/
/*app.controller(nombre de la funcion)  ($scope, nombre de los servicios a utilizar)*/
/*$windows servicio por defecto para poder utilizar refresco de pagina y redireccionamiento*/
/*logInService, nombre del servicio que contiene la promesa. */
app.controller('controladorActividades', function ($scope, $window, actividadService) {


    /*info*/
<<<<<<< HEAD
    $scope.actividad = "";   
=======
    $scope.actividad = "";

    
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad


    $scope.listadoActividad;



    /*Se define una funcion en el controlador*/
    $scope.crearActividad = function (form) {

        
        if (form.$valid) {
            
<<<<<<< HEAD
            
=======
            if($scope.actividad.inicio>$scope.actividad.fin){
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
                actividadService.guardarActividad($scope.actividad).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("ACTIVIDAD REGISTRADO!");

                    $scope.actividad = "";
                    $scope.listarActividad();
                } else {
                    alert("ACTIVIDAD YA SE ENCUENTRA REGISTRADO!");
                }
            });
<<<<<<< HEAD
            
=======
            }else{
                alert("error en las fechas");
            }
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            
            
            
            
        } else {
            alert("debe diligenciar toda la informacion");
        }
    };
    $scope.modificarActividad = function (form) {
        if (form.$valid) {
            
<<<<<<< HEAD
=======
            if($scope.actividad.inicio>$scope.actividad.fin){
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
                 
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            actividadService.modificarActividad($scope.actividad).then(function (response) {
                if (response.codigo === 1) {
                    alert("DATOS MODIFICADOS CON EXITO!");
                    $scope.actividad = "";
                    $scope.listarActividad();

                } else {
                    alert("ERROR AL MODIFICAR LOS DATOS");
                }
<<<<<<< HEAD
            });           
=======
            });
            }else{
                alert("error en las fechas");
            }
           
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
        } else {
            alert("debe diligenciar toda la informacion!");
        }
    };

<<<<<<< HEAD
   


   $scope.listarActividad = function () {
       
        
        
        actividadService.listaActividad().then(function (response) {        
            $scope.listadoActividad = response;
            
=======
    


   $scope.listarActividad = function () {

        actividadService.listarActividad().then(function (response) {



        
            $scope.listadoActividad = response;

>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
        });

    };
    
<<<<<<< HEAD
    
    
    
=======
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
    $scope.eliminarActividad = function () {

        
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            actividadService.eliminarActividad($scope.actividad).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("EXITO");
                    $scope.listarActividad();
                  

                } else {
                    alert("ERROR!");
                }

            });
        
    };

    $scope.getSelectedRow = function () {

        var salida = {};
        salida.nombre=this.obj.nombre;
        salida.descripcion=this.obj.descripcion;
        salida.idIntegrante=this.obj.idIntegrante;
        salida.idProyecto=this.obj.idProyecto;
        salida.inicio = new Date(this.obj.inicio);
        salida.fin = new Date(this.obj.fin);
<<<<<<< HEAD
        $scope.actividad = salida;
        
        $scope.listarProyectos();
        $scope.listarIntegrantes();
=======
        
        
        
        
        $scope.actividad = salida;
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
    };



    $scope.listarProyectos = function () {


        /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
         * el cual esta asociado a los input*/
        actividadService.listarProyectos().then(function (response) {
            $scope.listadoProyectos = response;
<<<<<<< HEAD
            
=======

>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
        });

    };


    $scope.listarIntegrantes = function () {
<<<<<<< HEAD
       var idProyecto = $scope.actividad.idProyecto;

        /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
         * el cual esta asociado a los input*/
        actividadService.listarIntegrantes(idProyecto).then(function (response) {
=======


        /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
         * el cual esta asociado a los input*/
        actividadService.listarIntegrantes().then(function (response) {
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            $scope.listadoIntegrantes = response;

        });

    };




});
