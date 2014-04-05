angular.module('klickr')
  .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    var server = 'http://localhost:4568/klicks';
    $scope.links = [];

    $scope.getData = function (){
      $http.get(server)
      .then(function(data){
        $scope.links = data.data;
      });
    };

    $scope.getData();
  }]);