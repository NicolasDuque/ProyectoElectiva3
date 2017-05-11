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
app.controller('controladorCargos', function ($scope, $window, cargosService) {


    /*info*/
    $scope.cargo="";
    
    $scope.dias = [
        
        {opcion:"lunes"},
        {opcion:"martes"},
        {opcion:"miercoles"},
        {opcion:"jueves"},
        {opcion:"viernes"},
        {opcion:"sabado"},
        {opcion:"domingo"}
        
    ];
    

    $scope.listadoCargos;
    
            

    /*Se define una funcion en el controlador*/
    $scope.crearCargo = function (form) {
        
            if(form.$valid){
                
                cargosService.guardar($scope.cargo).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if(response.codigo===1){
                    alert("CARGO REGISTRADO!");
                    
                    $scope.cargo="";
                }else{
                    alert("EL CARGO YA SE ENCUENTRA REGISTRADO!");
                }
                
                
            });
            }else{
                alert("debe diligenciar toda la informacion");
            }
              
            
            
    };
    
    
    
    $scope.listarProyectos=function(){
      
      cargosService.listarProyectos().then(function(response){
          
          $scope.listadoProyectos=response;
          
      });
        
    };
    
    
    
    
    

});









