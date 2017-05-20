
/*Se definen las depenciencias que seran utilizadas por el sistema*/
var app = angular.module("appMasterPage", ['ngRoute']);


/*Controlador global, que cada vez que se cargue la pagina masterPage 
 * valida si ya inicio sesion para saber si se deja o se redirecciona 
 * al index*/
app.controller('CtlValidate', function ($scope, $window) {
    /*Se almacena en el modelo sesion, este es utilizado por el ng-show 
     * para saber si muestra o no la interfaz grafica*/

    $scope.sesion = sessionStorage.getItem("session");
    
    /*Luego se valida para saber si se redirecciona o no*/
    if (!$scope.sesion) {
        $window.location.href = 'http://localhost:8888';
    }
});
app.config(function ($routeProvider) {
    $routeProvider

            .when('/Proyectos', {
                //controller: 'controladorProyectos',
                controller: 'controladorProyectos',
                templateUrl: 'Director/proyectos.html'
            })
            
            .when('/Cargos', {
                controller: 'controladorCargos',
                templateUrl: 'Director/cargos.html'
            })
<<<<<<< HEAD
              .when('/Recursos', {
                controller: 'controladorRecursos',
                templateUrl: 'Director/recursos.html'
            })
             .when('/Tareas', {
                controller: 'controladorTareas',
                templateUrl: 'Director/tareas.html'
            })
             .when('/Reunion', {
                controller: 'controladorReunion',
                templateUrl: 'Director/reunion.html'
            })
=======
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            .when('/Integrantes',{
                controller:'controladorIntegrante',
                templateUrl:'Director/integrante.html'
            })
            .when('/Actividades',{
                controller:'controladorActividades',
                templateUrl:'Director/actividades.html'
<<<<<<< HEAD
            })
=======
            }
                
            )
    
    
>>>>>>> 5e4c33e0c7b2e39354da1b25ef6997151ff359ad
            .otherwise({
                redirectTo: '/'
            });
});







