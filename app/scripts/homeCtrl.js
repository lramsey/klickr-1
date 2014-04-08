angular.module('Klickr')
  .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    var server = 'http://jy1.cloudapp.net:3000/klicks';
    $scope.links = [];

    $scope.getData = function (){
      $http.get(server)
      .then(function(data){
        $scope.links = data.data;
      });
    };

    $scope.getData();
  }]);