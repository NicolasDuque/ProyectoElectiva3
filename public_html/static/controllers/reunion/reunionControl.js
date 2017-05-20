"use strict";

<<<<<<< HEAD
app.controller('controladorReunion', function ($scope, $window, reunionesService) {

    $scope.reunion = ""; 

    $scope.listadoReunion;
=======
/*El use strict hace que se deba codificar de manera correcta, siendo estricto
 * a la hora de compilar el codigo ejemplo: 
 * x = 3.14; // This will cause an error (x is not defined)*/


/* global app */

/*Toda funcion de controlador debe tener un $scope, que es la referencia a todos
 * los elementos que pertenecen al constrolador*/
/*app.controller(nombre de la funcion)  ($scope, nombre de los servicios a utilizar)*/
/*$windows servicio por defecto para poder utilizar refresco de pagina y redireccionamiento*/
/*logInService, nombre del servicio que contiene la promesa. */
app.controller('controladorReunion', function ($scope, $window, reunionesService) {


    /*info*/
    $scope.reunion = "";
   


    $scope.listadoReunion;



    /*Se define una funcion en el controlador*/
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
   $scope.crearReunion = function (form) {
        console.log("entro al metodo crear reunion");
        console.log($scope.reunion);
        if (form.$valid) {
            reunionesService.guardarReunion($scope.reunion).then(function (response) {
<<<<<<< HEAD
                if (response.codigo === 1) {
                    alert("REUNION REGISTRADA!");
=======
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("REUNION REGISTRADA!");
//me sale error en este codigo
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
                    $scope.reunion = "";
                    $scope.listarReunion();
                } else {
                    alert("LA REUNION YA SE ENCUENTRA REGISTRADO!");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion");
        }
    };
   $scope.modificarReunion = function (form) {
        if (form.$valid) {
<<<<<<< HEAD
=======
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            reunionesService.modificarReunion($scope.reunion).then(function (response) {
                if (response.codigo === 1) {
                    alert("DATOS MODIFICADOS CON EXITO!");
                    $scope.reunion = "";
                    $scope.listarReunion();

                } else {
                    alert("ERROR AL MODIFICAR LOS DATOS");
                }
            });
        } else {
            alert("debe diligenciar toda la informacion!");
        }
    };
   $scope.buscarReunion = function (form) {
<<<<<<< HEAD
       console.log("entro buscar");
        if (form.$valid) {
            reunionesService.buscarReunion($scope.reunion).then(function (response) {
                if (response.codigo === 1) {
                    $scope.reunion = response;
                    console.log($scope.reunion);
                } else {
                    alert("NO DATA FOUND!");
                }
=======

    console.log("entro a buscar");

        if (form.$valid) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion,
             * lo va haer usted que hotas  ? 
             * el cual esta asociado a los input*/
            reunionesService.buscarReunion($scope.reunion).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {

                    
                    /*corra nuevamente...deje guardar la proxima*/
                    $scope.reunion = response;
                    console.log($scope.reunion);

                } else {
                    alert("NO DATA FOUND!");
                }


>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            });
        } else {
            alert("debe ingresar un nombre a buscar");
        }
    };
   $scope.listarReunion = function () {

        reunionesService.listarReunion().then(function (response) {
<<<<<<< HEAD
            $scope.listadoReunion = response;
        });
    };
    
   $scope.eliminarReunion = function (form) {

        if (form.$valid) {
            reunionesService.eliminarReunion($scope.reunion).then(function (response) {
                if (response.codigo === 1) {
                    alert("EXITO");       
                    $scope.reunion="";
                   $scope.listarReunion();
                } else {
                    alert("ERROR!");
                }
=======



        
            $scope.listadoReunion = response;

        });

    };
   $scope.eliminarReunion = function (form) {

        if (form.$valid) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            reunionesService.eliminarReunion($scope.reunion).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("EXITO");
                    
                   $scope.listarReunion();

                } else {
                    alert("ERROR!");
                }

>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            });
        } else {
            alert("debe ingresar un nombre a buscar!");
        }
    };
   $scope.getSelectedRow = function () {
        $scope.selected = this.obj;
        $scope.reunion = $scope.selected;
    };
<<<<<<< HEAD
=======
   $scope.listarForaneaProyectos = function () {


        /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
         * el cual esta asociado a los input*/
        cargoService.listarProyectos().then(function (response) {
            $scope.listadoProyectos = response;

        });

    };





>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
});
