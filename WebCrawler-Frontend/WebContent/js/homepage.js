var app = angular.module("myApp", []);
app.controller("homepageController", function($scope,$window,$http) {

	 $scope.getActiveUser = function (){
	        if($window.sessionStorage.getItem("userLoged")!=null){
                return JSON.parse($window.sessionStorage.getItem("userLoged"));
            }else{
                return null;
            }
    };
    
    $scope.logoutFunction = function () {
		$window.sessionStorage.clear();
    };

    $scope.searchFunction = function (product) {
		
		$http({
			method: 'GET',
			url: 'http://localhost:8090/webcrawler/search/' + product,
		})
			.then(function (response) {
				window.alert("Ati cautat " +  response.data)
			}).catch(function (error) {
				window.alert("A aparut o eroare : " + error);
				console.log(error);
			});
	};
    
});

app.controller("homepage-adminController", function($scope,$window) {

    var verifyIfLoginAsAdmin = function(){
        if((JSON.parse($window.sessionStorage.getItem("userLoged")).roles[0].name)!="ADMIN"){
            window.location.href = "D:\MyWorkspace/WebCrawler-Frontend/WebContent/401.html"
		}
	};
	verifyIfLoginAsAdmin();

    $scope.getActiveUser = function (){
           if($window.sessionStorage.getItem("userLoged")!=null){
               return JSON.parse($window.sessionStorage.getItem("userLoged"));
           }else{
               return null;
           }
   };
   
   $scope.logoutFunction = function () {
       $window.sessionStorage.clear();
   };
   
});
