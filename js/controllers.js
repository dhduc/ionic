angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('blogCtrl', function($scope, $http) {
    //$scope.items = BlankFactory.all();
    console.log('controller');
    $http.get("http://project.wordpress.local/wp-json/wp/v2/posts/1")
            .success(function(data) {
                console.log(data);
                $scope.post = data;
            })
            .error(function(data) {
            });
})
   
.controller('aboutPageCtrl', function($scope) {

})
    