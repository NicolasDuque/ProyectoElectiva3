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
app.controller('controladorReunion', function ($scope, $window, reunionesService) {


    /*info*/
    $scope.reunion = "";
   


    $scope.listadoReunion;



    /*Se define una funcion en el controlador*/
   $scope.crearReunion = function (form) {
        console.log("entro al metodo crear reunion");
        console.log($scope.reunion);
        if (form.$valid) {
            reunionesService.guardarReunion($scope.reunion).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.codigo === 1) {
                    alert("REUNION REGISTRADA!");
//me sale error en este codigo
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
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
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


            });
        } else {
            alert("debe ingresar un nombre a buscar");
        }
    };
   $scope.listarReunion = function () {

        reunionesService.listarReunion().then(function (response) {



        
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

            });
        } else {
            alert("debe ingresar un nombre a buscar!");
        }
    };
   $scope.getSelectedRow = function () {
        $scope.selected = this.obj;
        $scope.reunion = $scope.selected;
    };
   $scope.listarForaneaProyectos = function () {


        /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
         * el cual esta asociado a los input*/
        cargoService.listarProyectos().then(function (response) {
            $scope.listadoProyectos = response;

        });

    };





});
