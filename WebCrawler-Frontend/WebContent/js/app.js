var app = angular.module("myApp", []);
app.controller("registerController", function($scope,$http) {

	 $scope.registerFunction = function (name,email,password,adress){
	        var obj = {
	        	name : name,
	            email : email,
	            password : password,
	            adress : adress
	        };

	        console.log(JSON.stringify(obj));
	        $http({ method:'POST',
	            url:'http://localhost:8090/register',
	            data:JSON.stringify(obj),
	            headers:{'Content-type':'application/json'}})
	            .then(function (response){
	                window.alert("Contul a fost creat cu succes!Va rugam sa va logati.")
	                window.location.href = "/homepage.html"
	            }).catch(function (error){
	            window.alert("A aparut o eroare : " + error);
	            console.log(error);
	        });
	};
});

app.controller("loginController", function($scope,$http) {

	 $scope.loginFunction = function (email,password){
	        var obj = {
	            email : email,
	            password : password
	        };

	        console.log(JSON.stringify(obj));
	        $http({ method:'POST',
	            url:'http://localhost:8090/login',
	            data:JSON.stringify(obj),
	            headers:{'Content-type':'application/json'}})
	            .then(function (response){
//	                window.alert("Contul a fost creat cu succes!Va rugam sa va logati.")
//	                window.location.href = "/homepage.html"
	            }).catch(function (error){
	            window.alert("A aparut o eroare : " + error);
	            console.log(error);
	        });
	};
});
