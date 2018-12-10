var app = angular.module("myApp", []);
app.controller("homepageController", function($scope,$window,$http) {

$scope.products = JSON.parse($window.sessionStorage.getItem("products")); 
var pagArray = [1,2,3];
$scope.paginationArray = pagArray;
$scope.searchedProduct = $window.sessionStorage.getItem("searchedProduct");

$scope.increaseFunction = function increasePageIndex(){
    for(i=0;i<3;i++){
        pagArray[i]++;
        console.log(pagArray);
    }
}

$scope.decreaseFunction = function decreasePageIndex(){
    for(i=0;i<3;i++){
        if(pagArray[i] > 1){
        pagArray[i]--;
        console.log(pagArray);
        }
    }
}

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

    function move() {
        var elem = document.getElementById("myBar");   
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = width + '%'; 
          }
        }
      }

    $scope.searchFunction = function (product,pageIndex) {
        setTimeout(move(),5000);
		$http({
			method: 'GET',
			url: 'http://localhost:8091/webcrawler/search/' + product + '/' + pageIndex,
        })
			.then(function (response) {
                $window.sessionStorage.setItem("products",JSON.stringify(response.data));
                $window.sessionStorage.setItem("searchedProduct",product);
                window.location.href = "D:\MyWorkspace/WebCrawler-Frontend/WebContent/products.html";
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
