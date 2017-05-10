/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global app */
app.controller('CtlLogIn', function ($scope, $window, logInService) {

    /*Se inicializa el modelo*/
    $scope.identificacion = "";
    $scope.acceder = function (form) {
        if ($scope.identificacion.usuario !== "") {
            logInService.buscar($scope.identificacion).then(function (response) {                
                alert("Se establecio la conexion");
                if(response.codigo===1){
                    console.log(response);
                    sessionStorage.setItem("usersession", response.user);
                    sessionStorage.setItem("sesion", response.status);
                    
                    window.location = '/PaginaPrincipalAdministrador.html'; 
                    
                }else{
                    console.log("error al loguear");
                }
                           });
        } else {
            alert("Verifique los datos ingresados");
        }
    };
    
    
    
    
    $scope.logOut = function () {
        sessionStorage.clear();
        $window.location.href = 'index.html';
    };
});
