/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global app */



app.service('logInService', function ($http, $httpParamSerializerJQLike) {
    this.logIn = function (identificacion) {
        console.log("entro al servicio");
        var promise = $http({
            method: "get",
            url: "/Login",
            data: $httpParamSerializerJQLike({
                usuario: identificacion.usuario,
                password: identificacion.password
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
            
            return response.data;
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });
        return promise;
    };
        
    this.buscar = function (identificacion) {               
        var promise = $http({
            method: "post",
            url: "/Login",
            data: $httpParamSerializerJQLike({usuario: identificacion.usuario}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {              
            return response.data; 
            
        }, function myError(response) {
            alert("Error");
            alert(response.statusText);
        });

        /*Luego se retorna la promesa*/
        return promise;
    }; 
        
});


