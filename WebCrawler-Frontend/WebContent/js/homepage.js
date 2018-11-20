var app = angular.module("myApp", []);
app.controller("homepageController", function($scope,$window) {

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